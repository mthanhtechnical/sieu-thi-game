-- Only events recorded by the hardened API have an event_id. The dashboard uses
-- this boundary to exclude legacy/manual test data without destroying it.
ALTER TABLE events ADD COLUMN event_id TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_events_event_id
  ON events(event_id)
  WHERE event_id IS NOT NULL;
