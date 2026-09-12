/**
 * Cloudflare Worker API & Scheduled Cron Router - Our Little Universe ❤️
 */

// --- 1. CORS & Response Helpers ---
function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type, X-Admin-Key",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
    });
}

function handleOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type, X-Admin-Key",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
    });
}

function verifyAdminKey(request, env) {
    // If ADMIN_SETUP_KEY is not set on environment, allow requests in dev mode or alert
    if (!env.ADMIN_SETUP_KEY) return true;
    const clientKey = request.headers.get("X-Admin-Key");
    return clientKey === env.ADMIN_SETUP_KEY;
}

// --- 2. Timezone & Formatting Helpers ---
function getIndiaTimeComponents() {
    const now = new Date();
    // Format to Asia/Kolkata timezone
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
    
    const parts = formatter.formatToParts(now);
    let year, month, day, hour, minute;
    parts.forEach(p => {
        if (p.type === "year") year = p.value;
        if (p.type === "month") month = p.value;
        if (p.type === "day") day = p.value;
        if (p.type === "hour") hour = p.value;
        if (p.type === "minute") minute = p.value;
    });

    const dateStr = `${year}-${month}-${day}`;
    const timeStr = `${hour}:${minute}`;

    // Get day of week in Asia/Kolkata
    const dateInIndia = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const dayOfWeek = dateInIndia.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat

    return { dateStr, timeStr, hour: parseInt(hour, 10), minute: parseInt(minute, 10), dayOfWeek };
}

// --- 3. Telegram API Wrapper ---
async function sendTelegramMessage(env, chatId, text) {
    if (!env.TELEGRAM_BOT_TOKEN) {
        throw new Error("TELEGRAM_BOT_TOKEN Worker secret is missing.");
    }

    const url = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: "HTML"
        })
    });

    const result = await response.json();
    if (!response.ok || !result.ok) {
        throw new Error(result.description || "Failed to send Telegram message");
    }
    return result;
}

// --- 4. Scheduled Handler (Cron Trigger Execution) ---
async function handleScheduledCron(env) {
    const { dateStr, timeStr, hour, minute, dayOfWeek } = getIndiaTimeComponents();
    console.log(`[Cron Execution] India Date: ${dateStr}, Time: ${timeStr}, Day: ${dayOfWeek}`);

    // Check if messaging is paused globally
    const pauseSetting = await env.DB.prepare("SELECT value FROM settings WHERE key = 'is_paused'").first();
    const pausedUntilSetting = await env.DB.prepare("SELECT value FROM settings WHERE key = 'paused_until'").first();

    if (pauseSetting && pauseSetting.value === "true") {
        console.log("[Cron] Messages are globally paused. Skipping execution.");
        return;
    }
    if (pausedUntilSetting && pausedUntilSetting.value && pausedUntilSetting.value >= dateStr) {
        console.log(`[Cron] Messages paused until ${pausedUntilSetting.value}. Skipping execution.`);
        return;
    }

    // Get connected Telegram chat ID
    const connection = await env.DB.prepare("SELECT chat_id FROM telegram_connection ORDER BY id DESC LIMIT 1").first();
    if (!connection || !connection.chat_id) {
        console.log("[Cron] No Telegram chat ID connected yet. Skipping execution.");
        return;
    }

    // Get boyfriend name setting
    const nameSetting = await env.DB.prepare("SELECT value FROM settings WHERE key = 'boyfriend_name'").first();
    const boyfriendName = nameSetting ? nameSetting.value : "Dudu";

    // Get enabled schedules
    const { results: schedules } = await env.DB.prepare("SELECT * FROM schedules WHERE enabled = 1").all();
    if (!schedules || schedules.length === 0) return;

    const currentMinutes = hour * 60 + minute;

    for (const schedule of schedules) {
        // 1. Day of week filter
        const daysType = schedule.days_type || "every_day";
        if (daysType === "weekdays" && (dayOfWeek === 0 || dayOfWeek === 6)) continue;
        if (daysType === "weekends" && (dayOfWeek >= 1 && dayOfWeek <= 5)) continue;
        if (daysType === "custom" && schedule.custom_days) {
            const allowedDays = schedule.custom_days.split(",").map(d => parseInt(d.trim(), 10));
            if (!allowedDays.includes(dayOfWeek)) continue;
        }

        // 2. Time matching within ±4 minute window
        const [schedHour, schedMin] = schedule.time.split(":").map(Number);
        const schedMinutes = schedHour * 60 + schedMin;
        const timeDiff = Math.abs(currentMinutes - schedMinutes);

        if (timeDiff > 4) continue;

        // 3. Idempotency Check: Don't send twice on the same day!
        if (schedule.last_sent_date === dateStr) {
            console.log(`[Cron] Schedule ID ${schedule.id} (${schedule.category}) already sent today (${dateStr}). Skipping.`);
            continue;
        }

        // 4. Select fresh non-repeating message (Internet Quote + Custom Message Mix)
        let formattedBody = "";
        let selectedMsgId = 0;

        // 35% Chance to pick a Custom Saved Message from D1 DB
        const { results: customDbMessages } = await env.DB.prepare(
            "SELECT * FROM messages WHERE category = ? AND enabled = 1"
        ).bind(schedule.category).all();

        if (customDbMessages && customDbMessages.length > 0 && Math.random() < 0.35) {
            const picked = customDbMessages[Math.floor(Math.random() * customDbMessages.length)];
            formattedBody = picked.message_text.replace(/\{NAME\}/g, boyfriendName);
            selectedMsgId = picked.id;
        }

        // Otherwise fetch fresh quote from Internet API
        if (!formattedBody) {
            try {
                const apiRes = await fetch("https://api.quotable.io/quotes/random?tags=love");
                if (apiRes.ok) {
                    const data = await apiRes.json();
                    const q = Array.isArray(data) ? data[0] : data;
                    if (q && q.content) {
                        formattedBody = `${q.content} ❤️`;
                    }
                }
            } catch (e) {
                console.log("[Cron] Internet quote API fetch failed, falling back to DB pool:", e);
            }
        }

        // Fallback to D1 Database message pool if API is unavailable
        if (!formattedBody && customDbMessages && customDbMessages.length > 0) {
            const picked = customDbMessages[Math.floor(Math.random() * customDbMessages.length)];
            formattedBody = picked.message_text.replace(/\{NAME\}/g, boyfriendName);
            selectedMsgId = picked.id;
        }

        if (!formattedBody) {
            formattedBody = `Thinking of you right now, ${boyfriendName}! Wishing you a wonderful day filled with happiness and love 💕`;
        }

        let header = "❤️ A Little Love For You";
        if (schedule.category === "GOOD_MORNING") header = "🌅 Good Morning ❤️";
        if (schedule.category === "GOOD_AFTERNOON") header = "☀️ Good Afternoon ❤️";
        if (schedule.category === "GOOD_EVENING") header = "🌆 Good Evening ❤️";
        if (schedule.category === "GOOD_NIGHT") header = "🌙 Good Night ❤️";
        if (schedule.category === "I_MISS_YOU") header = "💭 Missing You ❤️";

        const fullMessageText = `${header}\n\n${formattedBody}`;

        // 5. Send message via Telegram Bot API
        try {
            await sendTelegramMessage(env, connection.chat_id, fullMessageText);
            console.log(`[Cron] Successfully sent ${schedule.category} message to Telegram!`);

            // Update schedule idempotency state
            await env.DB.prepare(
                "UPDATE schedules SET last_sent_date = ?, last_sent_message_id = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
            ).bind(dateStr, selectedMsg.id, schedule.id).run();

            // Insert into history
            await env.DB.prepare(
                "INSERT INTO message_history (category, message_text, status) VALUES (?, ?, ?)"
            ).bind(schedule.category, fullMessageText, "SENT").run();

        } catch (err) {
            console.error(`[Cron] Error sending Telegram message for schedule ${schedule.id}:`, err);
            // Log failure to history without updating last_sent_date
            await env.DB.prepare(
                "INSERT INTO message_history (category, message_text, status, error_message) VALUES (?, ?, ?, ?)"
            ).bind(schedule.category, fullMessageText, "FAILED", err.message || "Failed to send").run();
        }
    }
}

// --- 5. Main Fetch & API Router ---
export default {
    async fetch(request, env, ctx) {
        if (request.method === "OPTIONS") {
            return handleOptions();
        }

        const url = new URL(request.url);
        const path = url.pathname;

        try {
            // GET /api/health
            if (path === "/api/health" && request.method === "GET") {
                return jsonResponse({ status: "ok", time: new Date().toISOString() });
            }

            // GET /api/settings
            if (path === "/api/settings" && request.method === "GET") {
                const { results } = await env.DB.prepare("SELECT key, value FROM settings").all();
                const settings = {};
                results.forEach(r => settings[r.key] = r.value);
                return jsonResponse({ success: true, settings });
            }

            // POST /api/settings
            if (path === "/api/settings" && request.method === "POST") {
                if (!verifyAdminKey(request, env)) {
                    return jsonResponse({ error: "Unauthorized admin request" }, 401);
                }
                const body = await request.json();
                for (const [key, value] of Object.entries(body)) {
                    await env.DB.prepare(
                        "INSERT INTO settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP"
                    ).bind(key, String(value)).run();
                }
                return jsonResponse({ success: true, message: "Settings updated successfully" });
            }

            // GET /api/schedules
            if (path === "/api/schedules" && request.method === "GET") {
                const { results } = await env.DB.prepare("SELECT * FROM schedules ORDER BY time ASC").all();
                return jsonResponse({ success: true, schedules: results });
            }

            // POST /api/schedules
            if (path === "/api/schedules" && request.method === "POST") {
                if (!verifyAdminKey(request, env)) return jsonResponse({ error: "Unauthorized" }, 401);
                const body = await request.json();
                const { category, time, days_type, custom_days, enabled } = body;

                const result = await env.DB.prepare(
                    "INSERT INTO schedules (category, time, days_type, custom_days, enabled) VALUES (?, ?, ?, ?, ?)"
                ).bind(category, time, days_type || "every_day", custom_days || "", enabled ? 1 : 0).run();

                return jsonResponse({ success: true, id: result.meta.last_row_id });
            }

            // PUT /api/schedules/:id
            if (path.startsWith("/api/schedules/") && request.method === "PUT") {
                if (!verifyAdminKey(request, env)) return jsonResponse({ error: "Unauthorized" }, 401);
                const id = path.split("/")[3];
                const body = await request.json();
                
                await env.DB.prepare(
                    "UPDATE schedules SET category = COALESCE(?, category), time = COALESCE(?, time), days_type = COALESCE(?, days_type), custom_days = COALESCE(?, custom_days), enabled = COALESCE(?, enabled), updated_at = CURRENT_TIMESTAMP WHERE id = ?"
                ).bind(body.category, body.time, body.days_type, body.custom_days, body.enabled !== undefined ? (body.enabled ? 1 : 0) : null, id).run();

                return jsonResponse({ success: true, message: "Schedule updated" });
            }

            // DELETE /api/schedules/:id
            if (path.startsWith("/api/schedules/") && request.method === "DELETE") {
                if (!verifyAdminKey(request, env)) return jsonResponse({ error: "Unauthorized" }, 401);
                const id = path.split("/")[3];
                await env.DB.prepare("DELETE FROM schedules WHERE id = ?").bind(id).run();
                return jsonResponse({ success: true, message: "Schedule deleted" });
            }

            // GET /api/messages
            if (path === "/api/messages" && request.method === "GET") {
                const { results } = await env.DB.prepare("SELECT * FROM messages ORDER BY id DESC").all();
                return jsonResponse({ success: true, messages: results });
            }

            // POST /api/messages
            if (path === "/api/messages" && request.method === "POST") {
                if (!verifyAdminKey(request, env)) return jsonResponse({ error: "Unauthorized" }, 401);
                const body = await request.json();
                const { category, message_text, enabled } = body;

                const result = await env.DB.prepare(
                    "INSERT INTO messages (category, message_text, enabled) VALUES (?, ?, ?)"
                ).bind(category, message_text, enabled !== undefined ? (enabled ? 1 : 0) : 1).run();

                return jsonResponse({ success: true, id: result.meta.last_row_id });
            }

            // PUT /api/messages/:id
            if (path.startsWith("/api/messages/") && request.method === "PUT") {
                if (!verifyAdminKey(request, env)) return jsonResponse({ error: "Unauthorized" }, 401);
                const id = path.split("/")[3];
                const body = await request.json();

                await env.DB.prepare(
                    "UPDATE messages SET category = COALESCE(?, category), message_text = COALESCE(?, message_text), enabled = COALESCE(?, enabled) WHERE id = ?"
                ).bind(body.category, body.message_text, body.enabled !== undefined ? (body.enabled ? 1 : 0) : null, id).run();

                return jsonResponse({ success: true, message: "Message updated" });
            }

            // DELETE /api/messages/:id
            if (path.startsWith("/api/messages/") && request.method === "DELETE") {
                if (!verifyAdminKey(request, env)) return jsonResponse({ error: "Unauthorized" }, 401);
                const id = path.split("/")[3];
                await env.DB.prepare("DELETE FROM messages WHERE id = ?").bind(id).run();
                return jsonResponse({ success: true, message: "Message deleted" });
            }

            // GET /api/telegram/status
            if (path === "/api/telegram/status" && request.method === "GET") {
                const connection = await env.DB.prepare("SELECT * FROM telegram_connection ORDER BY id DESC LIMIT 1").first();
                return jsonResponse({
                    success: true,
                    connected: !!connection,
                    connection: connection || null
                });
            }

            // POST /api/telegram/connect (Uses getUpdates or accepts manual chat_id)
            if (path === "/api/telegram/connect" && request.method === "POST") {
                if (!verifyAdminKey(request, env)) return jsonResponse({ error: "Unauthorized" }, 401);
                if (!env.TELEGRAM_BOT_TOKEN) return jsonResponse({ error: "TELEGRAM_BOT_TOKEN secret missing" }, 500);

                const body = await request.json().catch(() => ({}));

                // Option A: Manual chat_id provided
                if (body && body.chat_id) {
                    const chatId = String(body.chat_id).trim();
                    const firstName = body.first_name || "Love";
                    const username = body.username || "";

                    await env.DB.prepare("DELETE FROM telegram_connection").run();
                    await env.DB.prepare(
                        "INSERT INTO telegram_connection (chat_id, username, first_name) VALUES (?, ?, ?)"
                    ).bind(chatId, username, firstName).run();

                    return jsonResponse({
                        success: true,
                        message: "Telegram connected successfully!",
                        connection: { chat_id: chatId, username, first_name: firstName }
                    });
                }

                // Option B: Automatic detection via getUpdates
                const getUpdatesUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/getUpdates`;
                const updatesRes = await fetch(getUpdatesUrl);
                const updatesData = await updatesRes.json();

                if (!updatesData.ok || !updatesData.result || updatesData.result.length === 0) {
                    return jsonResponse({
                        success: false,
                        error: "No recent messages detected. Ask him to send a message (e.g. 'Hi' or '/start') to @YourloveMansibot right now!"
                    });
                }

                const latestUpdate = updatesData.result[updatesData.result.length - 1];
                const msg = latestUpdate.message || latestUpdate.edited_message || latestUpdate.channel_post;
                
                if (!msg || !msg.chat) {
                    return jsonResponse({ success: false, error: "Could not find chat ID in latest update." });
                }

                const chatId = String(msg.chat.id);
                const username = msg.chat.username || "";
                const firstName = msg.chat.first_name || msg.from?.first_name || "Love";

                await env.DB.prepare("DELETE FROM telegram_connection").run();
                await env.DB.prepare(
                    "INSERT INTO telegram_connection (chat_id, username, first_name) VALUES (?, ?, ?)"
                ).bind(chatId, username, firstName).run();

                return jsonResponse({
                    success: true,
                    message: "Telegram connected successfully!",
                    connection: { chat_id: chatId, username, first_name: firstName }
                });
            }

            // POST /api/telegram/test (Sends a test message)
            if (path === "/api/telegram/test" && request.method === "POST") {
                if (!verifyAdminKey(request, env)) return jsonResponse({ error: "Unauthorized" }, 401);

                const connection = await env.DB.prepare("SELECT chat_id, first_name FROM telegram_connection ORDER BY id DESC LIMIT 1").first();
                if (!connection || !connection.chat_id) {
                    return jsonResponse({ error: "No Telegram recipient connected. Please connect Telegram first!" }, 400);
                }

                const nameSetting = await env.DB.prepare("SELECT value FROM settings WHERE key = 'boyfriend_name'").first();
                const name = nameSetting ? nameSetting.value : (connection.first_name || "Love");

                const testMessage = `Hey ${name} ❤️ This is just a little test message from your Love Universe. Everything is connected perfectly! 💕`;

                await sendTelegramMessage(env, connection.chat_id, testMessage);

                // Record history
                await env.DB.prepare(
                    "INSERT INTO message_history (category, message_text, status) VALUES (?, ?, ?)"
                ).bind("TEST", testMessage, "SENT").run();

                return jsonResponse({ success: true, message: "Test message sent to Telegram!" });
            }

            // GET /api/history
            if (path === "/api/history" && request.method === "GET") {
                const { results } = await env.DB.prepare(
                    "SELECT * FROM message_history ORDER BY id DESC LIMIT 50"
                ).all();
                return jsonResponse({ success: true, history: results });
            }

            // POST /api/admin/setup
            if (path === "/api/admin/setup" && request.method === "POST") {
                const body = await request.json();
                const clientKey = body.adminKey;
                if (!env.ADMIN_SETUP_KEY || clientKey === env.ADMIN_SETUP_KEY) {
                    return jsonResponse({ success: true, message: "Admin authenticated" });
                }
                return jsonResponse({ error: "Invalid Admin Setup Key" }, 401);
            }

            return jsonResponse({ error: "Endpoint not found" }, 404);

        } catch (err) {
            console.error("Worker API Exception:", err);
            return jsonResponse({ error: err.message || "Internal Worker Error" }, 500);
        }
    },

    // Scheduled Cron Trigger Entry Point
    async scheduled(event, env, ctx) {
        ctx.waitUntil(handleScheduledCron(env));
    }
};
