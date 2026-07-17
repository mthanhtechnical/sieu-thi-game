ALTER TABLE events ADD COLUMN visitor_id TEXT;
ALTER TABLE events ADD COLUMN game_slug TEXT;

CREATE INDEX IF NOT EXISTS idx_events_visitor ON events(visitor_id);
CREATE INDEX IF NOT EXISTS idx_events_game_created ON events(game_slug, created_at);
