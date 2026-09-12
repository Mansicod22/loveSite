const https = require('https');

const token = process.env.TELEGRAM_BOT_TOKEN || '8600331379:AAHZR36Kj7VT8my1KFVMvT8FaKo9hZSvvfQ';
const chatId = process.env.TELEGRAM_CHAT_ID || '5102703653'; // Dudu's Chat ID

const hourlyMessages = [
    "Thinking of you right now ❤️ Just wanted to remind you that you are loved more than you know. 🥰",
    "Hope your day is going amazingly well 💕 Don't stress too much, someone is cheering for you! ☀️",
    "Just a little hourly dose of love for my favorite person in the world ❤️✨",
    "Sending you a warm virtual hug and lots of kisses right now! 🌸🥰",
    "You're the sweetest part of my day ❤️ Can't wait to talk to you soon 💕",
    "Take a short pause, stay hydrated, and remember that you mean the world to me 💖",
    "No matter how busy the day gets, you're always the first thing on my mind 🌆❤️",
    "Close your eyes for 5 seconds and feel my love surrounding you right now! 💕✨",
    "You make my heart smile every single hour of the day ❤️🥰"
];

// Pick random message
const randomIndex = Math.floor(Math.random() * hourlyMessages.length);
const selectedMsg = hourlyMessages[randomIndex];
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
    });
});

req.on('error', err => {
    console.error('Error sending hourly message:', err);
    process.exit(1);
});

req.write(payload);
req.end();
