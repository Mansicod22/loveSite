-- ===================================================
-- Cloudflare D1 Database Schema - Our Little Universe
-- ===================================================

-- 1. Global Settings Table
CREATE TABLE IF NOT EXISTS settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed initial settings
INSERT OR IGNORE INTO settings (key, value) VALUES 
('boyfriend_name', 'Rahul'),
('timezone', 'Asia/Kolkata'),
('is_paused', 'false'),
('paused_until', '');

-- 2. Telegram Connection Table
CREATE TABLE IF NOT EXISTS telegram_connection (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chat_id TEXT UNIQUE NOT NULL,
    username TEXT,
    first_name TEXT,
    connected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Messages Library Table
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL, -- GOOD_MORNING, GOOD_AFTERNOON, GOOD_EVENING, GOOD_NIGHT, I_MISS_YOU, RANDOM_LOVE
    message_text TEXT NOT NULL,
    enabled INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed initial messages
INSERT OR IGNORE INTO messages (id, category, message_text, enabled) VALUES
(1, 'GOOD_MORNING', 'Good morning {NAME} ❤️ I hope today gives you a hundred reasons to smile.', 1),
(2, 'GOOD_MORNING', 'Wake up sleepyhead 🌅❤️ Someone is already thinking about you.', 1),
(3, 'GOOD_MORNING', 'Good morning jaan ❤️ Have the most beautiful day.', 1),
(4, 'GOOD_AFTERNOON', 'Good afternoon, love ☀️ Just checking in to remind you that you are on my mind. ❤️', 1),
(5, 'GOOD_AFTERNOON', 'Half the day is gone, but my thoughts of you are still here, {NAME}. 🥰', 1),
(6, 'GOOD_EVENING', 'Good evening, jaan 🌆❤️ How was your day? I hope you are taking care of yourself.', 1),
(7, 'GOOD_EVENING', 'Sunsets remind me of how warm and beautiful you make my life feel. Good evening {NAME}! 🌆❤️', 1),
(8, 'GOOD_NIGHT', 'Good night, my love 🌙❤️ Sleep peacefully and remember that someone loves you endlessly.', 1),
(9, 'GOOD_NIGHT', 'Close your eyes and sleep well, jaan. Tomorrow is another day to make memories together. ❤️', 1),
(10, 'I_MISS_YOU', 'I don''t know what you''re doing right now, but I hope you know that somewhere, someone is smiling just because you exist. ❤️', 1),
(11, 'I_MISS_YOU', 'I miss you a little more than usual today, {NAME}. 🥺❤️', 1),
(12, 'RANDOM_LOVE', 'Just a random reminder that you are the best thing that ever happened to me 💕', 1);

-- 4. Schedules Table
CREATE TABLE IF NOT EXISTS schedules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    time TEXT NOT NULL, -- Format: HH:mm (e.g. 08:00)
    days_type TEXT DEFAULT 'every_day', -- every_day, weekdays, weekends, custom
    custom_days TEXT DEFAULT '', -- Comma-separated 0-6 (0=Sun, 1=Mon, etc.)
    enabled INTEGER DEFAULT 1,
    timezone TEXT DEFAULT 'Asia/Kolkata',
    last_sent_date TEXT DEFAULT '', -- Format: YYYY-MM-DD
    last_sent_message_id INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed initial schedules
INSERT OR IGNORE INTO schedules (id, category, time, days_type, enabled, timezone) VALUES
(1, 'GOOD_MORNING', '08:00', 'every_day', 1, 'Asia/Kolkata'),
(2, 'GOOD_AFTERNOON', '13:00', 'every_day', 1, 'Asia/Kolkata'),
(3, 'GOOD_EVENING', '18:30', 'every_day', 1, 'Asia/Kolkata'),
(4, 'GOOD_NIGHT', '23:00', 'every_day', 1, 'Asia/Kolkata');

-- 5. Message History Table
CREATE TABLE IF NOT EXISTS message_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category TEXT NOT NULL,
    message_text TEXT NOT NULL,
    status TEXT NOT NULL, -- SENT, FAILED
    error_message TEXT DEFAULT ''
);

-- Indexes for fast query execution
CREATE INDEX IF NOT EXISTS idx_messages_category ON messages(category);
CREATE INDEX IF NOT EXISTS idx_schedules_enabled ON schedules(enabled);
CREATE INDEX IF NOT EXISTS idx_history_sent_at ON message_history(sent_at);
