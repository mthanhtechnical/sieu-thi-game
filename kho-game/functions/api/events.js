const allowedEvents = new Set(["visit", "game_start", "game_complete", "game_exit", "share"]);

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function cleanText(value, maxLength = 120) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function safeNumber(value, max = 10000000) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.min(max, Math.round(number))) : null;
}

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const eventType = cleanText(body.event, 30);
    const sessionId = cleanText(body.sessionId, 80);
    const visitorId = cleanText(body.visitorId, 80);
    const gameSlug = cleanText(body.gameSlug, 80);

    if (!allowedEvents.has(eventType) || !sessionId) {
      return json({ ok: false, error: "invalid_event" }, 400);
    }

    const country = cleanText(request.cf?.country || "unknown", 8);
    const statement = env.ANALYTICS_DB.prepare(`
      INSERT INTO events (
        event_type, session_id, visitor_id, game_slug, score, correct_count, duration_seconds,
        source, referrer_host, device_type, country
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      eventType,
      sessionId,
      visitorId || sessionId,
      gameSlug,
      safeNumber(body.score),
      safeNumber(body.correct, 10),
      safeNumber(body.duration, 86400),
      cleanText(body.source || "direct", 80),
      cleanText(body.referrerHost || "", 160),
      cleanText(body.device || "unknown", 20),
      country,
    );

    await statement.run();
    return json({ ok: true }, 201);
  } catch {
    return json({ ok: false, error: "unable_to_record" }, 500);
  }
}

export async function onRequestGet({ env }) {
  try {
    const [
      totals,
      daily,
      sources,
      devices,
      countries,
      scoreStats,
      gameStats,
    ] = await Promise.all([
      env.ANALYTICS_DB.prepare(`
        SELECT
          COUNT(CASE WHEN event_type = 'visit' THEN 1 END) AS visits,
          COUNT(DISTINCT CASE WHEN event_type = 'visit' THEN COALESCE(visitor_id, session_id) END) AS visitors,
          COUNT(CASE WHEN event_type = 'game_start' THEN 1 END) AS starts,
          COUNT(CASE WHEN event_type = 'game_complete' THEN 1 END) AS completions,
          COUNT(CASE WHEN event_type = 'share' THEN 1 END) AS shares,
          COALESCE(SUM(CASE WHEN event_type IN ('game_complete', 'game_exit') THEN duration_seconds ELSE 0 END), 0) AS total_play_seconds
        FROM events
      `).first(),
      env.ANALYTICS_DB.prepare(`
        SELECT
          date(created_at) AS day,
          COUNT(CASE WHEN event_type = 'visit' THEN 1 END) AS visits,
          COUNT(CASE WHEN event_type = 'game_start' THEN 1 END) AS starts,
          COUNT(CASE WHEN event_type = 'game_complete' THEN 1 END) AS completions,
          COUNT(CASE WHEN event_type = 'share' THEN 1 END) AS shares
        FROM events
        WHERE created_at >= datetime('now', '-29 days')
        GROUP BY date(created_at)
        ORDER BY day
      `).all(),
      env.ANALYTICS_DB.prepare(`
        SELECT source AS label, COUNT(*) AS value
        FROM events
        WHERE event_type = 'visit'
        GROUP BY source
        ORDER BY value DESC
        LIMIT 8
      `).all(),
      env.ANALYTICS_DB.prepare(`
        SELECT device_type AS label, COUNT(DISTINCT session_id) AS value
        FROM events
        WHERE event_type = 'visit'
        GROUP BY device_type
        ORDER BY value DESC
      `).all(),
      env.ANALYTICS_DB.prepare(`
        SELECT country AS label, COUNT(DISTINCT session_id) AS value
        FROM events
        WHERE event_type = 'visit'
        GROUP BY country
        ORDER BY value DESC
        LIMIT 8
      `).all(),
      env.ANALYTICS_DB.prepare(`
        SELECT
          ROUND(AVG(score)) AS average_score,
          MAX(score) AS highest_score,
          ROUND(AVG(correct_count), 1) AS average_correct,
          ROUND(AVG(duration_seconds)) AS average_duration
        FROM events
        WHERE event_type = 'game_complete'
      `).first(),
      env.ANALYTICS_DB.prepare(`
        SELECT
          COALESCE(NULLIF(game_slug, ''), 'unknown') AS label,
          COUNT(CASE WHEN event_type = 'game_start' THEN 1 END) AS starts,
          COUNT(CASE WHEN event_type = 'game_complete' THEN 1 END) AS completions,
          COALESCE(SUM(CASE WHEN event_type IN ('game_complete', 'game_exit') THEN duration_seconds ELSE 0 END), 0) AS duration_seconds
        FROM events
        WHERE event_type IN ('game_start', 'game_complete', 'game_exit')
        GROUP BY COALESCE(NULLIF(game_slug, ''), 'unknown')
        ORDER BY starts DESC, duration_seconds DESC
        LIMIT 24
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
      generatedAt: new Date().toISOString(),
    });
  } catch {
    return json({ ok: false, error: "unable_to_load_stats" }, 500);
  }
}
