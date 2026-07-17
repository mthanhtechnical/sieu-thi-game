const allowedEvents = new Set(["visit", "game_start", "game_complete", "game_exit", "share"]);
const idPattern = /^[a-zA-Z0-9][a-zA-Z0-9._:-]{7,79}$/;
const slugPattern = /^[a-z0-9][a-z0-9-]{0,79}$/;
const botPattern = /bot|crawler|spider|headless|lighthouse|pagespeed|preview/i;

function json(data, status = 200, cache = "no-store") {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": cache,
      "x-content-type-options": "nosniff",
    },
  });
}

function cleanText(value, maxLength = 120) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function safeNumber(value, max = 1000000) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.min(max, Math.round(number))) : null;
}

function isSameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

async function sessionIsPlausible(db, eventType, sessionId, gameSlug) {
  if (eventType === "visit" || eventType === "share") return true;
  const row = await db.prepare(`
    SELECT
      COUNT(CASE WHEN event_type = 'game_start' THEN 1 END) AS starts,
      COUNT(CASE WHEN event_type IN ('game_complete', 'game_exit') THEN 1 END) AS finishes
    FROM events
    WHERE session_id = ? AND game_slug = ? AND event_id IS NOT NULL
  `).bind(sessionId, gameSlug).first();

  const starts = Number(row?.starts || 0);
  const finishes = Number(row?.finishes || 0);
  if (eventType === "game_start") return starts - finishes < 2;
  return starts > finishes;
}

export async function onRequestPost({ request, env }) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    const userAgent = request.headers.get("user-agent") || "";
    if (
      !isSameOrigin(request) ||
      request.headers.get("sec-fetch-site") === "cross-site" ||
      contentLength > 4096 ||
      botPattern.test(userAgent)
    ) {
      return json({ ok: false, error: "request_rejected" }, 403);
    }

    const body = await request.json();
    const eventType = cleanText(body.event, 30);
    const eventId = cleanText(body.eventId, 80);
    const sessionId = cleanText(body.sessionId, 80);
    const visitorId = cleanText(body.visitorId, 80);
    const gameSlug = cleanText(body.gameSlug, 80);

    if (
      !allowedEvents.has(eventType) ||
      !idPattern.test(eventId) ||
      !idPattern.test(sessionId) ||
      !idPattern.test(visitorId) ||
      !slugPattern.test(gameSlug)
    ) {
      return json({ ok: false, error: "invalid_event" }, 400);
    }

    const recent = await env.ANALYTICS_DB.prepare(`
      SELECT COUNT(*) AS total
      FROM events
      WHERE session_id = ? AND event_id IS NOT NULL
        AND created_at >= datetime('now', '-1 hour')
    `).bind(sessionId).first();
    if (Number(recent?.total || 0) >= 100) {
      return json({ ok: false, error: "rate_limited" }, 429);
    }

    if (!(await sessionIsPlausible(env.ANALYTICS_DB, eventType, sessionId, gameSlug))) {
      return json({ ok: false, error: "invalid_sequence" }, 409);
    }

    const duration = safeNumber(body.duration, 21600);
    if (["game_complete", "game_exit"].includes(eventType) && (!duration || duration < 2)) {
      return json({ ok: false, error: "invalid_duration" }, 400);
    }

    const country = cleanText(request.cf?.country || "unknown", 8);
    await env.ANALYTICS_DB.prepare(`
      INSERT OR IGNORE INTO events (
        event_type, event_id, session_id, visitor_id, game_slug, score, correct_count,
        duration_seconds, source, referrer_host, device_type, country
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      eventType,
      eventId,
      sessionId,
      visitorId,
      gameSlug,
      safeNumber(body.score),
      safeNumber(body.correct, 1000),
      duration,
      cleanText(body.source || "direct", 80),
      cleanText(body.referrerHost || "", 160),
      ["mobile", "tablet", "desktop"].includes(body.device) ? body.device : "unknown",
      country,
    ).run();

    return json({ ok: true }, 201);
  } catch {
    return json({ ok: false, error: "unable_to_record" }, 500);
  }
}

export async function onRequestGet({ env }) {
  try {
    const clean = "event_id IS NOT NULL";
    const [totals, daily, sources, devices, countries, scoreStats, gameStats] = await Promise.all([
      env.ANALYTICS_DB.prepare(`
        SELECT
          COUNT(CASE WHEN event_type = 'visit' THEN 1 END) AS visits,
          COUNT(DISTINCT CASE WHEN event_type = 'visit' THEN visitor_id END) AS visitors,
          COUNT(CASE WHEN event_type = 'game_start' THEN 1 END) AS starts,
          COUNT(CASE WHEN event_type = 'game_complete' THEN 1 END) AS completions,
          COUNT(CASE WHEN event_type = 'share' THEN 1 END) AS shares,
          COALESCE(SUM(CASE WHEN event_type IN ('game_complete', 'game_exit') THEN duration_seconds ELSE 0 END), 0) AS total_play_seconds
        FROM events WHERE ${clean}
      `).first(),
      env.ANALYTICS_DB.prepare(`
        SELECT date(created_at) AS day,
          COUNT(CASE WHEN event_type = 'visit' THEN 1 END) AS visits,
          COUNT(CASE WHEN event_type = 'game_start' THEN 1 END) AS starts,
          COUNT(CASE WHEN event_type = 'game_complete' THEN 1 END) AS completions,
          COUNT(CASE WHEN event_type = 'share' THEN 1 END) AS shares
        FROM events
        WHERE ${clean} AND created_at >= datetime('now', '-29 days')
        GROUP BY date(created_at) ORDER BY day
      `).all(),
      env.ANALYTICS_DB.prepare(`
        SELECT source AS label, COUNT(*) AS value FROM events
        WHERE ${clean} AND event_type = 'visit'
        GROUP BY source ORDER BY value DESC LIMIT 8
      `).all(),
      env.ANALYTICS_DB.prepare(`
        SELECT device_type AS label, COUNT(DISTINCT session_id) AS value FROM events
        WHERE ${clean} AND event_type = 'visit'
        GROUP BY device_type ORDER BY value DESC
      `).all(),
      env.ANALYTICS_DB.prepare(`
        SELECT country AS label, COUNT(DISTINCT session_id) AS value FROM events
        WHERE ${clean} AND event_type = 'visit'
        GROUP BY country ORDER BY value DESC LIMIT 8
      `).all(),
      env.ANALYTICS_DB.prepare(`
        SELECT ROUND(AVG(score)) AS average_score, MAX(score) AS highest_score,
          ROUND(AVG(correct_count), 1) AS average_correct,
          ROUND(AVG(duration_seconds)) AS average_duration
        FROM events WHERE ${clean} AND event_type = 'game_complete'
      `).first(),
      env.ANALYTICS_DB.prepare(`
        SELECT COALESCE(NULLIF(game_slug, ''), 'unknown') AS label,
          COUNT(CASE WHEN event_type = 'game_start' THEN 1 END) AS starts,
          COUNT(CASE WHEN event_type = 'game_complete' THEN 1 END) AS completions,
          COALESCE(SUM(CASE WHEN event_type IN ('game_complete', 'game_exit') THEN duration_seconds ELSE 0 END), 0) AS duration_seconds
        FROM events
        WHERE ${clean} AND event_type IN ('game_start', 'game_complete', 'game_exit')
        GROUP BY game_slug ORDER BY starts DESC, duration_seconds DESC LIMIT 24
      `).all(),
    ]);

    const starts = Number(totals?.starts || 0);
    const completions = Number(totals?.completions || 0);
    const visits = Number(totals?.visits || 0);
    return json({
      totals: {
        ...totals,
        playRate: visits ? Math.round((starts / visits) * 1000) / 10 : 0,
        completionRate: starts ? Math.round((completions / starts) * 1000) / 10 : 0,
      },
      daily: daily.results,
      sources: sources.results,
      devices: devices.results,
      countries: countries.results,
      scores: scoreStats,
      games: gameStats.results,
      dataQuality: { cleanOnly: true, legacyExcluded: true },
      generatedAt: new Date().toISOString(),
    }, 200, "public, max-age=30, s-maxage=60, stale-while-revalidate=300");
  } catch {
    return json({ ok: false, error: "unable_to_load_stats" }, 500);
  }
}
