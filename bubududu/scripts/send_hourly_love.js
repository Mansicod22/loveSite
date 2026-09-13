const https = require('https');

const envToken = process.env.TELEGRAM_BOT_TOKEN ? process.env.TELEGRAM_BOT_TOKEN.trim() : '';
const envChatId = process.env.TELEGRAM_CHAT_ID ? process.env.TELEGRAM_CHAT_ID.trim() : '';

const token = envToken || '8600331379:AAHZR36Kj7VT8my1KFVMvT8FaKo9hZSvvfQ';
const chatId = envChatId || '5102703653'; // Dudu's Chat ID

const hourlyMessages = [
    "Thinking of you right now ❤️ Just wanted to remind you that you are loved more than you know. 🥰",
    "Hope your day is going amazingly well 💕 Don't stress too much, someone is cheering for you! ☀️",
    "Just a little hourly dose of love for my favorite person in the world ❤️✨",
    "Sending you a warm virtual hug and lots of kisses right now! 🌸🥰",
    "You're the sweetest part of my day ❤️ Can't wait to talk to you soon 💕",
    "Take a short pause, stay hydrated, and remember that you mean the world to me 💖",
    "No matter how busy the day gets, you're always the first thing on my mind 🌆❤️",
    "Close your eyes for 5 seconds and feel my love surrounding you right now! 💕✨",
    "You make my heart smile every single hour of the day ❤️🥰",
    "\"You are my today and all of my tomorrows.\" ❤️",
    "\"In all the world, there is no heart for me like yours.\" 💕",
    "\"To the world you may be one person, but to me you are the world.\" 💖"
];

async function main() {
    let selectedMsg = "";
    
    // Try fetching internet quote
    try {
        const quoteData = await new Promise((resolve, reject) => {
            const qReq = https.get('https://dummyjson.com/quotes/random', { timeout: 3000 }, res => {
                let body = '';
                res.on('data', chunk => body += chunk);
                res.on('end', () => resolve(body));
            });
            qReq.on('error', reject);
            qReq.on('timeout', () => { qReq.destroy(); reject(new Error('Timeout')); });
        });
        const parsed = JSON.parse(quoteData);
        if (parsed && parsed.quote) {
            selectedMsg = `"${parsed.quote}" ✨`;
        }
    } catch (e) {
        console.log('Internet quote API unreachable, using curated message pool:', e.message);
    }

    if (!selectedMsg) {
        const randomIndex = Math.floor(Math.random() * hourlyMessages.length);
        selectedMsg = hourlyMessages[randomIndex];
    }

    const fullMessageText = `⏰ Hourly Love Reminder ❤️\n\n${selectedMsg}`;

    const payload = JSON.stringify({
        chat_id: chatId,
        text: fullMessageText,
        parse_mode: 'HTML'
    });

const options = {
    hostname: 'api.telegram.org',
    path: `/bot${token}/sendMessage`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
    },
    rejectUnauthorized: false
};

console.log(`Sending hourly love message to Chat ID ${chatId}...`);

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log('--- Telegram Response ---');
        console.log(data);
        try {
            const parsed = JSON.parse(data);
            if (!parsed.ok) {
                console.error('Telegram API returned failure status:', parsed);
                process.exit(1);
            } else {
                console.log('Successfully delivered hourly love message!');
            }
        } catch (e) {
            console.error('Failed to parse Telegram API response:', e.message);
            process.exit(1);
        }
    });
});

req.on('error', err => {
    console.error('Error sending hourly message:', err);
    process.exit(1);
});

req.write(payload);
req.end();
}

main();
