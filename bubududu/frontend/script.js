/* ===================================================
   💕 PERSONALIZE YOUR LOVE WEBSITE (EDIT CONFIG HERE)
   =================================================== */
const CONFIG = {
    // 1. Boyfriend Default Details (Saved in localStorage on device)
    boyfriendName: "Dudu",
    boyfriendPhone: "+91 9651714545",

    // 2. Special Relationship Start Date (Format: YYYY-MM-DD)
    relationshipStartDate: "2023-01-12",

    // 3. Our Memories — Polaroid Memory Wall & Interactive Album (12 Photos)
    memories: [
        {
            id: "mem-1",
            image: "images/photo1.jpg",
            title: "Our First Memory ❤️",
            caption: "The moment my world became brighter because of you ✨",
            date: "Special Day",
            category: "romantic",
            rotation: "-2.5deg"
        },
        {
            id: "mem-3",
            image: "images/photo3.jpg",
            title: "Together Forever 💕",
            caption: "In your eyes, I found my safest home and endless love 💖",
            date: "Unforgettable",
            category: "romantic",
            rotation: "-1.8deg"
        },
        {
            id: "mem-4",
            image: "images/photo4.jpg",
            title: "Golden Hour Vibes 🌅",
            caption: "Sunsets are beautiful, but they look prettiest right beside you ✨",
            date: "Golden Days",
            category: "travel",
            rotation: "3.1deg"
        },
        {
            id: "mem-5",
            image: "images/photo5.jpg",
            title: "Crazy & Happy 🤪💖",
            caption: "Life is a million times sweeter when we laugh together!",
            date: "Happy Hours",
            category: "cute",
            rotation: "-3deg"
        },
        {
            id: "mem-6",
            image: "images/photo6.jpg",
            title: "Precious Laughs 🤭💖",
            caption: "Every single laugh with you is saved in my heart forever ✨",
            date: "Cute Days",
            category: "cute",
            rotation: "2.4deg"
        },
        {
            id: "mem-7",
            image: "images/photo7.jpg",
            title: "Holding Your Hand 🤝❤️",
            caption: "Walking hand in hand through every season of life 🌸",
            date: "Walks & Talks",
            category: "travel",
            rotation: "1.5deg"
        },
        {
            id: "mem-8",
            image: "images/photo8.jpg",
            title: "Warmest Hugs 🤗✨",
            caption: "A single hug from you melts away all my worries 💖",
            date: "Cozy Moments",
            category: "cute",
            rotation: "-2deg"
        },
        {
            id: "mem-9",
            image: "images/photo9.jpg",
            title: "Magical Evening 🌆",
            caption: "Starry nights and cozy conversations with my favorite Dudu 🌙",
            date: "Magical Hours",
            category: "romantic",
            rotation: "2.8deg"
        },
        {
            id: "mem-10",
            image: "images/photo10.jpg",
            title: "Unforgettable Joy 🌟",
            caption: "Making endless magical memories by your side 💕",
            date: "Golden Times",
            category: "travel",
            rotation: "-2.6deg"
        },
        {
            id: "mem-11",
            image: "images/photo11.jpg",
            title: "Pure Bliss ✨",
            caption: "Just being next to you makes everything feel complete 🥰",
            date: "Sweet Hours",
            category: "cute",
            rotation: "1.9deg"
        },
        {
            id: "mem-12",
            image: "images/photo12.jpg",
            title: "Heartbeat & Joy 💓",
            caption: "You make my heart skip a beat every single day 🥰",
            date: "Pure Bliss",
            category: "cute",
            rotation: "-1.2deg"
        },
        {
            id: "mem-13",
            image: "images/photo13.jpg",
            title: "Forever & Always 💍",
            caption: "You are my today and all of my tomorrows, Dudu ❤️",
            date: "Endless Love",
            category: "romantic",
            rotation: "2deg"
        }
    ],

    // 4. Little Things I Love About You 🤍
    reasonsILoveYou: [
        "The way you drive your car — somehow, I just love watching you drive. 🚗❤️",
        "Your smile — especially the one that instantly makes my mood better. 😊✨",
        "Your annoying nature — even when you drive me crazy, I secretly love it. 🤪💕",
        "Your lips — I don’t think I need to explain this one. ❤️💋",
        "Your hair — I could honestly keep playing with it forever. 💇‍♂️💖",
        "Your arms — especially when I hold them like this. There’s just something about being close to you that feels like home. 🏡🤗",
        "The little expressions you make without even realizing it. 🥰",
        "The way you laugh. 🤭✨",
        "The way you look at me. 👀❤️",
        "And all those tiny things you do that you probably don’t even notice, but I somehow always do. 💫💖"
    ],

    // 5. Our Special Dates Timeline (Edit or add new milestones)
    specialDates: [
        {
            date: "2017-07-13",
            title: "The Beginning ❤️",
            description: "Our beautiful journey started."
        },
        {
            date: "2023-01-12",
            title: "Our First Night 💕",
            description: "A Night I'll always remember."
        },
        {
            date: "2023-01-13",
            title: "Our Special Day 💕",
            description: "A day I'll always remember."
        }
    ],

    // 6. I Miss You Messages
    iMissYouMessages: [
        "I don't know what you're doing right now, but I hope you know that somewhere, someone is smiling just because you exist. ❤️",
        "I miss you a little more than usual today. ❤️",
        "Wish you were here right now. 🥺❤️",
        "Come back soon. Someone is waiting for you. 💕",
        "My day is never quite complete without talking to you, {NAME}. ❤️"
    ],

    // 7. A Little Surprise Message
    surpriseMessage: "If I could choose one person to annoy, love, laugh with and make memories with for the rest of my life...\n\nI'd still choose you. ❤️",

    // 8. Open When You Miss Me Message
    openWhenYouMissMeMessage: `If you're reading this because you miss me...

Just remember that no matter how far apart we are,
there's someone who loves you endlessly and is thinking about you right now. ❤️`,

    // 9. Our Song Configuration (Requested song: Chahunga Main Tujhe Hardam)
    ourSong: {
        title: "Chahunga Main Tujhe Hardam ❤️",
        artist: "Satyajeet Jena",
        url: "https://www.youtube.com/watch?v=mlWV7m2uH6o"
    }
};

/* ===================================================
   💌 MESSAGE PRESET LIBRARY
   =================================================== */
const MESSAGE_LIBRARY = {
    morning: [
        "Good morning, my favorite person ❤️ I hope today brings you lots of reasons to smile. Don't forget that someone is thinking about you. 🥰",
        "Wake up sleepyhead 🌅❤️ Just wanted to remind you that you are loved more than you know.",
        "Good morning jaan ❤️ May your day be as beautiful as your smile.",
        "Morning love! ☀️ Sending you a big virtual hug to start your day with warmth and joy. 💕",
        "Good morning {NAME} ❤️ You are the very first thing on my mind when I wake up every single day!"
    ],
    afternoon: [
        "Good afternoon, love ☀️ Just checking in to remind you that you're on my mind. ❤️",
        "Half the day is gone, but my thoughts of you are still here. 🥰 Have a beautiful afternoon!",
        "Hope your day is treating you nicely, {NAME} ☀️ Take a quick pause and remember how special you are to me ❤️",
        "Sending a little afternoon sweetness your way! 🌸 Don't stress too much today, jaan.",
        "Good afternoon my favorite person ☀️ Stay hydrated and remember I'm cheering for you!"
    ],
    evening: [
        "Good evening, jaan 🌆❤️ How was your day? I hope you're taking care of yourself.",
        "The day is almost over, but you're still my favorite thought. ❤️",
        "Good evening {NAME}! 🌆 Rest your mind and relax, you've worked hard today 💕",
        "Sunsets remind me of how warm and beautiful you make my life feel. Good evening, love! 🌆❤️",
        "Evening jaan! 🌆 Take off the stress of the day and relax. Sending you all my love ❤️"
    ],
    night: [
        "Good night, my love 🌙❤️ Sleep peacefully and remember that someone loves you endlessly.",
        "Close your eyes and sleep well, jaan. Tomorrow is another day to make beautiful memories together. ❤️",
        "Sweet dreams {NAME} 🌙 May your night be calm and peaceful. Can't wait to talk to you tomorrow ❤️",
        "Good night jaan 🌙 You're the sweetest part of my day and the peaceful end to my night.",
        "Sleep well my love 🌙 Sending you soft kisses and warm hugs in your dreams ❤️"
    ]
};

// --- 💌 FRESH DYNAMIC INTERNET LOVE QUOTES & CUSTOM MESSAGE DEDUPLICATION ENGINE ---
const STORAGE_KEYS_SEEN_QUOTES = "love_app_seen_quote_history";

function getSeenQuoteHistory() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS_SEEN_QUOTES);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveSeenQuote(quoteText) {
    if (!quoteText) return;
    let history = getSeenQuoteHistory();
    const clean = quoteText.trim().toLowerCase();
    if (!history.includes(clean)) {
        history.push(clean);
        if (history.length > 500) history.shift();
        try {
            localStorage.setItem(STORAGE_KEYS_SEEN_QUOTES, JSON.stringify(history));
        } catch (e) {}
    }
}

function isQuoteSeen(quoteText) {
    if (!quoteText) return false;
    const history = getSeenQuoteHistory();
    return history.includes(quoteText.trim().toLowerCase());
}

const FRESH_ONLINE_LOVE_QUOTES = {
    morning: [
        "Good morning, Dudu! Every morning with you is a fresh page in our love story ❤️",
        "Wake up my love 🌅 You are the sunshine that makes my day bright and beautiful ✨",
        "Morning Dudu! Just wanted to send you a warm hug to start your day with joy 💕",
        "Good morning Dudu ❤️ Your smile is the first thing I want to see every single morning 🥰",
        "Sunrise reminds me of how blessed I am to have you in my life. Good morning, Dudu! ☀️",
        "Good morning my favorite person ❤️ May today bring you as much happiness as you give me!",
        "A peaceful morning to you, Dudu 🌅 Thinking of you right now with all my heart 💕",
        "Good morning Dudu! You are the sweet thought that starts my day with a smile 🥰"
    ],
    afternoon: [
        "Good afternoon Dudu ☀️ Just a quick pause to remind you how deeply loved you are ❤️",
        "Half of the day is done, but my love for you keeps growing every second 💕",
        "Hope your afternoon is going smoothly, Dudu! Take a deep breath and stay happy 🥰",
        "Sending a warm breeze of hugs your way this afternoon ☀️ Stay hydrated and keep smiling!",
        "No matter how busy the day gets, Dudu, you're always on my mind ❤️",
        "Good afternoon my love ☀️ You make every moment of the day worthwhile ✨"
    ],
    evening: [
        "Good evening Dudu 🌆 The sun sets, but my thoughts of you shine brighter than ever ❤️",
        "Evening love! Take off the day's fatigue and relax, someone is missing you endlessly 💕",
        "Sunsets remind me of the warmth of your hugs. Good evening my favorite Dudu 🌆❤️",
        "Hope your evening is calm and sweet, Dudu. Sending you endless love 🥰",
        "Good evening Dudu 🌆 Rest your heart and mind, you mean the world to me!"
    ],
    night: [
        "Good night my sweet Dudu 🌙 May your dreams be filled with peace and love ❤️",
        "Sleep well, Dudu 🌙 Tomorrow is another day to love you even more than today 💕",
        "Good night my favorite person 🌙 Close your eyes and feel my love surrounding you 🥰",
        "May the stars watch over you tonight, Dudu. Sweet dreams my love 💫❤️",
        "Night night Dudu 🌙 Sending you soft kisses and warm hugs in your sleep 💕"
    ],
    miss_you: [
        "Wish you were right here with me, Dudu 🥺❤️ Missing you a little extra today!",
        "Every second away from you makes me appreciate you even more, Dudu 💕",
        "My day feels incomplete without talking to you. Come back soon, Dudu 💖",
        "You are my favorite thought every single minute of the day ❤️ Miss you so much!"
    ],
    random: [
        "If I had a flower for every time I thought of you, Dudu, I could walk through my garden forever 🌸❤️",
        "You are my today and all of my tomorrows, Dudu ✨",
        "Holding your hand is my favorite thing to do in the entire world 🤝❤️",
        "Life is infinitely sweeter because I get to share it with you, Dudu 💕",
        "You make my heart smile without even trying 🥰",
        "In a room full of art, I would still stare at you, Dudu ❤️"
    ]
};

async function getFreshHybridLoveMessage(category = "morning") {
    // 1. Interleave Saved Custom Messages (35% probability if user has saved custom messages)
    if (customSavedMessagesList && customSavedMessagesList.length > 0 && Math.random() < 0.35) {
        const matchingCustom = customSavedMessagesList.filter(m => m.category === category || category === "random");
        const pool = matchingCustom.length > 0 ? matchingCustom : customSavedMessagesList;
        const picked = pool[Math.floor(Math.random() * pool.length)];
        if (picked && picked.text) {
            saveSeenQuote(picked.text);
            return personalizeText(picked.text);
        }
    }

    // 2. Fetch Fresh Online Quote from Public Internet APIs
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const apiRes = await fetch("https://api.quotable.io/quotes/random?tags=love", { signal: controller.signal });
        clearTimeout(timeoutId);
        if (apiRes.ok) {
            const data = await apiRes.json();
            const q = Array.isArray(data) ? data[0] : data;
            if (q && q.content && !isQuoteSeen(q.content)) {
                saveSeenQuote(q.content);
                return `${q.content} ❤️`;
            }
        }
    } catch (e) {
        console.log("Internet quote API fetch fallback:", e);
    }

    // 3. Fallback to Fresh Online Romantic Quotes Engine (guaranteed zero repeat!)
    const poolKey = (category in FRESH_ONLINE_LOVE_QUOTES) ? category : "random";
    const availableQuotes = FRESH_ONLINE_LOVE_QUOTES[poolKey].filter(q => !isQuoteSeen(q));
    
    let selectedQuote = "";
    if (availableQuotes.length > 0) {
        selectedQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
    } else {
        const allFlat = Object.values(FRESH_ONLINE_LOVE_QUOTES).flat();
        const unseenFlat = allFlat.filter(q => !isQuoteSeen(q));
        if (unseenFlat.length > 0) {
            selectedQuote = unseenFlat[Math.floor(Math.random() * unseenFlat.length)];
        } else {
            localStorage.removeItem(STORAGE_KEYS_SEEN_QUOTES);
            selectedQuote = FRESH_ONLINE_LOVE_QUOTES[poolKey][0];
        }
    }

    saveSeenQuote(selectedQuote);
    return personalizeText(selectedQuote);
}

// Global State
let activeIndices = { morning: 0, afternoon: 0, evening: 0, night: 0 };
let todayMessage = "";
let currentMissYouIndex = 0;
let currentLightboxIndex = 0;

const STORAGE_KEYS = {
    NAME: "love_app_bf_name",
    PHONE: "love_app_bf_phone",
    CUSTOM: "love_app_custom_msg",
    SCHEDULE: "love_app_schedule",
    SAVED_MESSAGES: "love_app_saved_messages",
    WORKER_URL: "love_app_worker_url",
    WORKER_KEY: "love_app_worker_key"
};

// --- 1. Phone Sanitization & Validation ---
function sanitizePhoneNumber(phoneStr) {
    if (!phoneStr) return "";
    let cleaned = phoneStr.trim().replace(/[\s\-\(\)]/g, "");
    if (cleaned.startsWith("+")) cleaned = cleaned.substring(1);
    
    // Indian phone format logic
    if (/^[6-9]\d{9}$/.test(cleaned)) return "91" + cleaned;
    if (/^0[6-9]\d{9}$/.test(cleaned)) return "91" + cleaned.substring(1);
    if (/^91[6-9]\d{9}$/.test(cleaned)) return cleaned;
    
    return cleaned.replace(/\D/g, "");
}

function validatePhoneNumber(phoneStr) {
    const sanitized = sanitizePhoneNumber(phoneStr);
    return sanitized.length >= 10 && sanitized.length <= 15;
}

function personalizeText(text) {
    if (!text) return "";
    const savedName = localStorage.getItem(STORAGE_KEYS.NAME) || CONFIG.boyfriendName || "Dudu";
    const trimmedName = savedName.trim();
    const replacement = trimmedName !== "" ? trimmedName : "Dudu";
    return text.replace(/\{NAME\}/g, replacement);
}

// --- Full-Page Background Slideshow ---
let bgSlideshowIndex = 0;
let bgSlideshowTimer = null;

function initBackgroundSlideshow() {
    if (!CONFIG.memories || CONFIG.memories.length === 0) return;
    
    const slide1 = document.getElementById("bg-slide-1");
    const slide2 = document.getElementById("bg-slide-2");
    if (!slide1 || !slide2) return;

    const bgPhotos = CONFIG.memories.map(m => m.image);
    if (bgPhotos.length === 0) return;

    slide1.style.backgroundImage = `url('${bgPhotos[0]}')`;
    slide1.classList.add("active");

    let currentActiveLayer = 1;

    if (bgSlideshowTimer) clearInterval(bgSlideshowTimer);

    bgSlideshowTimer = setInterval(() => {
        bgSlideshowIndex = (bgSlideshowIndex + 1) % bgPhotos.length;
        const nextImg = bgPhotos[bgSlideshowIndex];

        if (currentActiveLayer === 1) {
            slide2.style.backgroundImage = `url('${nextImg}')`;
            slide2.classList.add("active");
            slide1.classList.remove("active");
            currentActiveLayer = 2;
        } else {
            slide1.style.backgroundImage = `url('${nextImg}')`;
            slide1.classList.add("active");
            slide2.classList.remove("active");
            currentActiveLayer = 1;
        }
    }, 5500);
}

// --- 2. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initLandingScreen();
    initBackgroundSlideshow();
    loadSavedDetails();
    loadSavedCustomMessages();
    loadWorkerApiSettings();
    initFloatingHearts();
    initMessages();
    initTodayMessage();
    initLoveCounter();
    renderMemories();
    renderReasons();
    renderTimeline();
    initSurpriseSection();
    initOpenWhenSection();
    initSongSection();
    loadScheduleSettings();
    startCountdownTimer();
    initLightboxListeners();
});

// --- 3. Landing Screen Experience ---
function initLandingScreen() {
    const yesBtn = document.getElementById("landing-yes-btn");
    const noBtn = document.getElementById("landing-no-btn");
    const landingOverlay = document.getElementById("landing-screen");
    const mainDashboard = document.getElementById("main-dashboard");

    let yesScale = 1;
    const playfulToasts = [
        "No way! 😜",
        "Think again... 🥺",
        "Are you really sure? 💔",
        "You have to say Yes now! 💕",
        "Don't play hard to get, Dudu! 😄",
        "Just say Yes already! ❤️",
        "Pretty please click Yes! ✨"
    ];
    let msgIndex = 0;

    const moveNoButton = () => {
        if (landingOverlay && noBtn.parentNode !== landingOverlay) {
            landingOverlay.appendChild(noBtn);
        }

        const btnWidth = noBtn.offsetWidth || 110;
        const btnHeight = noBtn.offsetHeight || 45;
        
        const minX = 20;
        const maxX = Math.max(minX, window.innerWidth - btnWidth - 20);
        const minY = 20;
        const maxY = Math.max(minY, window.innerHeight - btnHeight - 20);

        const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        noBtn.style.zIndex = "10000";
        noBtn.style.opacity = "1";
        noBtn.style.visibility = "visible";
    };

    const handleNoAction = (e) => {
        if (e) {
            if (e.type === "touchstart") e.preventDefault();
        }
        yesScale += 0.45;
        yesBtn.style.transform = `scale(${yesScale})`;
        yesBtn.style.zIndex = "100";

        moveNoButton();

        showToast(playfulToasts[msgIndex % playfulToasts.length]);
        msgIndex++;
    };

    if (noBtn && yesBtn) {
        noBtn.addEventListener("click", handleNoAction);
        noBtn.addEventListener("touchstart", handleNoAction);
    }

    if (yesBtn) {
        yesBtn.addEventListener("click", () => {
            if (landingOverlay) {
                landingOverlay.style.opacity = "0";
                setTimeout(() => {
                    landingOverlay.classList.add("hidden");
                    if (mainDashboard) mainDashboard.classList.remove("hidden");
                }, 500);
            }
        });
    }
}

// --- 4. Saved Details Management ---
function loadSavedDetails() {
    const name = localStorage.getItem(STORAGE_KEYS.NAME) || CONFIG.boyfriendName || "";
    const phone = localStorage.getItem(STORAGE_KEYS.PHONE) || CONFIG.boyfriendPhone || "";
    const custom = localStorage.getItem(STORAGE_KEYS.CUSTOM) || "";

    const nameEl = document.getElementById("bf-name");
    const phoneEl = document.getElementById("bf-phone");
    const customEl = document.getElementById("custom-message-input");
    const saveBtn = document.getElementById("save-details-btn");

    if (nameEl && name) nameEl.value = name;
    if (phoneEl && phone) phoneEl.value = phone;
    if (customEl && custom) customEl.value = custom;

    if (saveBtn) saveBtn.addEventListener("click", saveBoyfriendDetails);
    if (customEl) {
        customEl.addEventListener("input", (e) => {
            localStorage.setItem(STORAGE_KEYS.CUSTOM, e.target.value);
        });
    }
}

function saveBoyfriendDetails() {
    const nameInput = document.getElementById("bf-name").value.trim();
    const phoneInput = document.getElementById("bf-phone").value.trim();
    const errorSpan = document.getElementById("phone-validation-error");

    if (phoneInput && !validatePhoneNumber(phoneInput)) {
        errorSpan.classList.remove("hidden");
        showToast("Please enter a valid phone number 💕");
        return;
    } else {
        errorSpan.classList.add("hidden");
    }

    localStorage.setItem(STORAGE_KEYS.NAME, nameInput);
    localStorage.setItem(STORAGE_KEYS.PHONE, phoneInput);

    updateAllCategoryPreviews();
    refreshTodayMessageDisplay();
    generateMissYouMessage();

    showToast("Details saved with love! ❤️");
}

// --- 5. Love Counter Timer ---
function initLoveCounter() {
    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);
}

function updateLoveCounter() {
    const startDateStr = CONFIG.relationshipStartDate || "2025-01-01";
    const start = new Date(startDateStr);
    const now = new Date();
    
    if (isNaN(start.getTime())) return;

    const diffMs = Math.max(0, now - start);
    const totalSecs = Math.floor(diffMs / 1000);

    const days = Math.floor(totalSecs / (3600 * 24));
    const hours = Math.floor((totalSecs % (3600 * 24)) / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;

    const dEl = document.getElementById("timer-days");
    const hEl = document.getElementById("timer-hours");
    const mEl = document.getElementById("timer-minutes");
    const sEl = document.getElementById("timer-seconds");

    if (dEl) dEl.textContent = days;
    if (hEl) hEl.textContent = String(hours).padStart(2, "0");
    if (mEl) mEl.textContent = String(mins).padStart(2, "0");
    if (sEl) sEl.textContent = String(secs).padStart(2, "0");
}

// --- 6. Memories & Photo Lightbox & Album ---
let currentAlbumFilter = "all";
let slideshowInterval = null;
let touchStartX = 0;
let touchEndX = 0;

function getFavoriteMemories() {
    try {
        const stored = localStorage.getItem("love_fav_memories");
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveFavoriteMemories(favs) {
    try {
        localStorage.setItem("love_fav_memories", JSON.stringify(favs));
    } catch (e) {}
}

function updateFavCount() {
    const favs = getFavoriteMemories();
    const countEl = document.getElementById("fav-count");
    if (countEl) countEl.textContent = favs.length;
}

function filterMemories(category, btnEl) {
    currentAlbumFilter = category;
    const pills = document.querySelectorAll(".filter-pill");
    pills.forEach(p => p.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    renderMemories();
}

function toggleFavoriteMemory(memId, event) {
    if (event) event.stopPropagation();
    let favs = getFavoriteMemories();
    const isFav = favs.includes(memId);

    if (isFav) {
        favs = favs.filter(id => id !== memId);
        showToast("Removed from Favorites 💔");
    } else {
        favs.push(memId);
        showToast("Saved to Favorites! 💖");
        createHeartBurst(event ? event.clientX : window.innerWidth / 2, event ? event.clientY : window.innerHeight / 2);
    }
    saveFavoriteMemories(favs);
    updateFavCount();
    renderMemories();

    if (currentLightboxIndex !== null && currentLightboxIndex !== undefined) {
        const currentMem = getFilteredMemories()[currentLightboxIndex];
        if (currentMem && currentMem.id === memId) {
            updateLightboxFavButton(currentMem.id);
        }
    }
}

function createHeartBurst(x, y) {
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement("div");
        heart.className = "floating-burst-heart";
        heart.innerHTML = "💖";
        heart.style.left = `${x + (Math.random() * 40 - 20)}px`;
        heart.style.top = `${y + (Math.random() * 40 - 20)}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
}

function getFilteredMemories() {
    if (!CONFIG.memories) return [];
    if (currentAlbumFilter === "all") return CONFIG.memories;
    if (currentAlbumFilter === "favorites") {
        const favs = getFavoriteMemories();
        return CONFIG.memories.filter(m => favs.includes(m.id));
    }
    return CONFIG.memories.filter(m => m.category === currentAlbumFilter);
}

function renderMemories() {
    const grid = document.getElementById("memories-grid");
    if (!grid) return;

    // Dynamically update total memory badge & filter count
    const badgeEl = document.querySelector(".memory-count-badge");
    if (badgeEl && CONFIG.memories) {
        badgeEl.textContent = `📸 ${CONFIG.memories.length} Precious Memories`;
    }
    const allFilterPill = document.querySelector(".album-filter-container .filter-pill");
    if (allFilterPill && CONFIG.memories && (allFilterPill.textContent.includes("All") || allFilterPill.textContent.includes("✨"))) {
        allFilterPill.innerHTML = `✨ All (${CONFIG.memories.length})`;
    }

    updateFavCount();
    grid.innerHTML = "";

    const filtered = getFilteredMemories();

    if (!filtered || filtered.length === 0) {
        if (currentAlbumFilter === "favorites") {
            grid.innerHTML = "<p class='empty-memories-msg'>No favorite memories pinned yet 💕<br><small>Tap the ❤️ on any polaroid to save your favorites!</small></p>";
        } else {
            grid.innerHTML = "<p class='empty-memories-msg'>No memories in this category yet 💕</p>";
        }
        return;
    }

    const defaultRotations = ["-2.2deg", "2.5deg", "-1.5deg", "3deg", "-2.8deg", "1.8deg"];
    const favs = getFavoriteMemories();

    filtered.forEach((mem, index) => {
        const card = document.createElement("div");
        card.className = "polaroid-card";
        const rot = mem.rotation || defaultRotations[index % defaultRotations.length];
        card.style.transform = `rotate(${rot})`;
        card.onclick = () => openLightbox(index);

        const isFav = favs.includes(mem.id);
        const captionText = mem.caption || mem.title || "A special memory ❤️";
        const categoryLabel = mem.category ? (mem.category === 'romantic' ? '❤️ Romantic' : mem.category === 'cute' ? '🥰 Cute' : '🌅 Trip') : '✨ Special';

        card.innerHTML = `
            <div class="polaroid-tape" aria-hidden="true"></div>
            <button type="button" class="polaroid-heart-btn ${isFav ? 'active' : ''}" onclick="toggleFavoriteMemory('${mem.id}', event)" title="${isFav ? 'Remove Favorite' : 'Save to Favorites'}">
                ${isFav ? '💖' : '🤍'}
            </button>
            <span class="polaroid-badge">${categoryLabel}</span>
            <div class="polaroid-img-wrapper">
                <img src="${mem.image}" alt="${mem.title || 'Memory photo'}" loading="lazy" onerror="if(this.dataset.tried==='2'){this.closest('.polaroid-card')?.remove();return;} if(this.dataset.tried==='1'){this.dataset.tried='2'; if(this.src.endsWith('.png')) this.src=this.src.replace('.png','.jpeg'); else this.closest('.polaroid-card')?.remove();} else {this.dataset.tried='1'; if(this.src.endsWith('.jpg')) this.src=this.src.replace('.jpg','.png'); else if(this.src.endsWith('.jpeg')) this.src=this.src.replace('.jpeg','.jpg');}">
            </div>
            <div class="polaroid-caption-box">
                <p class="polaroid-caption">${personalizeText(captionText)}</p>
                <span class="polaroid-date">${mem.date || ""}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateLightboxFavButton(memId) {
    const favBtn = document.getElementById("lightbox-fav-btn");
    if (!favBtn) return;
    const favs = getFavoriteMemories();
    const isFav = favs.includes(memId);
    favBtn.innerHTML = isFav ? "💖" : "🤍";
    favBtn.classList.toggle("active", isFav);
}

function toggleFavoriteFromLightbox() {
    const filtered = getFilteredMemories();
    if (currentLightboxIndex === null || !filtered[currentLightboxIndex]) return;
    const currentMem = filtered[currentLightboxIndex];
    toggleFavoriteMemory(currentMem.id);
}

function openLightbox(index) {
    const filtered = getFilteredMemories();
    if (!filtered || !filtered[index]) return;
    currentLightboxIndex = index;
    
    const mem = filtered[index];
    const imgEl = document.getElementById("lightbox-img");
    const titleEl = document.getElementById("lightbox-title");
    const descEl = document.getElementById("lightbox-desc");
    const dateEl = document.getElementById("lightbox-date");
    const counterEl = document.getElementById("lightbox-counter");

    if (imgEl) imgEl.src = mem.image;
    if (titleEl) titleEl.textContent = mem.title || "Our Memory";
    if (descEl) descEl.textContent = personalizeText(mem.caption || "");
    if (dateEl) dateEl.textContent = mem.date || "";
    if (counterEl) counterEl.textContent = `Photo ${index + 1} of ${filtered.length}`;

    updateLightboxFavButton(mem.id);

    const modal = document.getElementById("lightbox-modal");
    if (modal) modal.classList.remove("hidden");
}

function closeLightbox() {
    stopSlideshow();
    const modal = document.getElementById("lightbox-modal");
    if (modal) modal.classList.add("hidden");
}

function navigateLightbox(direction) {
    const filtered = getFilteredMemories();
    if (!filtered || filtered.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + direction + filtered.length) % filtered.length;
    openLightbox(currentLightboxIndex);
}

function toggleSlideshow() {
    if (slideshowInterval) {
        stopSlideshow();
        showToast("Slideshow paused ⏸️");
    } else {
        startSlideshow();
        showToast("Slideshow playing! ▶️");
    }
}

function startSlideshow() {
    stopSlideshow();
    const btn = document.getElementById("slideshow-toggle-btn");
    if (btn) {
        btn.innerHTML = "⏸️ Pause";
        btn.classList.add("playing");
    }
    slideshowInterval = setInterval(() => {
        navigateLightbox(1);
    }, 3200);
}

function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
    const btn = document.getElementById("slideshow-toggle-btn");
    if (btn) {
        btn.innerHTML = "▶️ Auto Play";
        btn.classList.remove("playing");
    }
}

function initLightboxListeners() {
    const modal = document.getElementById("lightbox-modal");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeLightbox();
        });

        // Touch Swipe Navigation for Mobile
        modal.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        modal.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipeGesture();
        }, { passive: true });
    }

    document.addEventListener("keydown", (e) => {
        if (modal && !modal.classList.contains("hidden")) {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") navigateLightbox(-1);
            if (e.key === "ArrowRight") navigateLightbox(1);
            if (e.key === " ") {
                e.preventDefault();
                toggleSlideshow();
            }
        }
    });
}

function handleSwipeGesture() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
        navigateLightbox(1); // Swipe Left -> Next
    } else if (touchEndX > touchStartX + swipeThreshold) {
        navigateLightbox(-1); // Swipe Right -> Prev
    }
}

// --- 7. Reasons I Love You ---
function renderReasons() {
    const grid = document.getElementById("reasons-grid");
    if (!grid) return;

    grid.innerHTML = "";
    if (!CONFIG.reasonsILoveYou || CONFIG.reasonsILoveYou.length === 0) return;

    CONFIG.reasonsILoveYou.forEach((reason, i) => {
        const card = document.createElement("div");
        card.className = "reason-card";
        card.id = `reason-card-${i}`;
        card.textContent = personalizeText(reason);
        grid.appendChild(card);
    });
}

function highlightRandomReason() {
    if (!CONFIG.reasonsILoveYou || CONFIG.reasonsILoveYou.length === 0) return;
    
    const cards = document.querySelectorAll(".reason-card");
    cards.forEach(c => c.classList.remove("highlighted"));

    const randomIndex = Math.floor(Math.random() * cards.length);
    const target = cards[randomIndex];
    if (target) {
        target.classList.add("highlighted");
        target.scrollIntoView({ behavior: "smooth", block: "nearest" });
        showToast("Here is why you are loved 💕");
    }
}

// --- 8. Timeline ---
function renderTimeline() {
    const list = document.getElementById("timeline-list");
    if (!list) return;

    list.innerHTML = "";
    if (!CONFIG.specialDates || CONFIG.specialDates.length === 0) return;

    CONFIG.specialDates.forEach(item => {
        const div = document.createElement("div");
        div.className = "timeline-item";
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${item.date}</span>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-desc">${item.description}</p>
            </div>
        `;
        list.appendChild(div);
    });
}

// --- 9. I Miss You Generator ---
function initMissYouSection() {
    generateMissYouMessage();
}

function generateMissYouMessage() {
    if (!CONFIG.iMissYouMessages || CONFIG.iMissYouMessages.length === 0) return;
    currentMissYouIndex = Math.floor(Math.random() * CONFIG.iMissYouMessages.length);
    const msg = personalizeText(CONFIG.iMissYouMessages[currentMissYouIndex]);
    const el = document.getElementById("miss-you-text");
    if (el) el.textContent = msg;
}

function sendMissYouWhatsApp() {
    const msg = personalizeText(CONFIG.iMissYouMessages[currentMissYouIndex]);
    launchWhatsApp(msg);
}

function sendMissYouSMS() {
    const msg = personalizeText(CONFIG.iMissYouMessages[currentMissYouIndex]);
    launchSMS(msg);
}

// --- 10. Surprise Section ---
function initSurpriseSection() {
    const textEl = document.getElementById("surprise-text");
    if (textEl) textEl.textContent = personalizeText(CONFIG.surpriseMessage);
}

function revealSurprise() {
    document.getElementById("surprise-initial-view").classList.add("hidden");
    document.getElementById("surprise-revealed-view").classList.remove("hidden");
    
    for (let i = 0; i < 15; i++) {
        setTimeout(spawnSingleHeart, i * 150);
    }
    showToast("A little surprise for you ❤️");
}

// --- 11. Open When You Miss Me Envelope ---
function initOpenWhenSection() {
    const textEl = document.getElementById("open-when-text");
    if (textEl) textEl.textContent = personalizeText(CONFIG.openWhenYouMissMeMessage);
}

function toggleEnvelope() {
    const env = document.getElementById("envelope-elem");
    if (env) env.classList.toggle("open");
}

// --- 12. Our Song Section ---
function initSongSection() {
    const song = CONFIG.ourSong;
    if (!song) return;

    const titleEl = document.getElementById("song-title");
    const artistEl = document.getElementById("song-artist");
    const btn = document.getElementById("song-url-btn");

    if (titleEl) titleEl.textContent = song.title || "Our Special Track";
    if (artistEl) artistEl.textContent = song.artist || "Artist Name";

    if (btn) {
        if (song.url && song.url.trim() !== "") {
            btn.href = song.url;
            btn.textContent = "Listen to Our Song 🎶";
            btn.removeAttribute("disabled");
        } else {
            btn.textContent = "Our song is waiting to be added 🎵";
            btn.removeAttribute("href");
            btn.classList.add("btn-secondary");
        }
    }
}

// --- 13. Messages & Today's Message ---
function initMessages() {
    updateAllCategoryPreviews();
}

function updateAllCategoryPreviews() {
    ["morning", "afternoon", "evening", "night"].forEach(cat => {
        const rawMsg = MESSAGE_LIBRARY[cat][activeIndices[cat]];
        const element = document.getElementById(`preview-${cat}`);
        if (element) element.textContent = personalizeText(rawMsg);
    });
}

function cycleCategoryMessage(category) {
    if (!MESSAGE_LIBRARY[category]) return;
    activeIndices[category] = (activeIndices[category] + 1) % MESSAGE_LIBRARY[category].length;
    
    const previewEl = document.getElementById(`preview-${category}`);
    if (previewEl) {
        previewEl.style.opacity = "0.3";
        setTimeout(() => {
            previewEl.textContent = personalizeText(MESSAGE_LIBRARY[category][activeIndices[category]]);
            previewEl.style.opacity = "1";
        }, 150);
    }
    showToast("Message changed ✨");
}

function getAllMessagesFlat() {
    const all = [];
    Object.keys(MESSAGE_LIBRARY).forEach(cat => {
        MESSAGE_LIBRARY[cat].forEach(msg => all.push(msg));
    });
    return all;
}

function initTodayMessage() {
    const all = getAllMessagesFlat();
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const index = dayOfYear % all.length;
    todayMessage = all[index];
    refreshTodayMessageDisplay();
}

function refreshTodayMessageDisplay() {
    const el = document.getElementById("today-message-text");
    if (el) el.textContent = personalizeText(todayMessage);
}

function shuffleTodayMessage() {
    const all = getAllMessagesFlat();
    const randomIndex = Math.floor(Math.random() * all.length);
    todayMessage = all[randomIndex];
    
    const el = document.getElementById("today-message-text");
    if (el) {
        el.style.opacity = "0.3";
        setTimeout(() => {
            el.textContent = personalizeText(todayMessage);
            el.style.opacity = "1";
        }, 150);
    }
    showToast("New daily reminder picked 💕");
}

// --- 14. WhatsApp & SMS Action Engine ---
function getValidatedPhoneOrAlert() {
    const savedPhone = localStorage.getItem(STORAGE_KEYS.PHONE) || document.getElementById("bf-phone").value.trim();
    if (!savedPhone || !validatePhoneNumber(savedPhone)) {
        showToast("Please enter and save his phone number first 💕");
        document.getElementById("details-section").scrollIntoView({ behavior: "smooth" });
        document.getElementById("phone-validation-error").classList.remove("hidden");
        document.getElementById("bf-phone").focus();
        return null;
    }
    return sanitizePhoneNumber(savedPhone);
}

function launchWhatsApp(messageText) {
    const phone = getValidatedPhoneOrAlert();
    if (!phone) return;
    const encoded = encodeURIComponent(messageText);
    const url = `https://wa.me/${phone}?text=${encoded}`;
    window.open(url, "_blank");
}

function launchSMS(messageText) {
    const phone = getValidatedPhoneOrAlert();
    if (!phone) return;
    const encoded = encodeURIComponent(messageText);
    const url = `sms:${phone}?body=${encoded}`;
    window.location.href = url;
}

const DEFAULT_TG_BOT_TOKEN = "8600331379:AAHZR36Kj7VT8my1KFVMvT8FaKo9hZSvvfQ";
const DEFAULT_TG_CHAT_ID = "5102703653";

async function launchTelegram(messageText) {
    showToast("Sending to @YourloveMansibot... ⏳");
    const botToken = localStorage.getItem("love_app_tg_bot_token") || DEFAULT_TG_BOT_TOKEN;
    const chatId = localStorage.getItem("love_app_tg_chat_id") || DEFAULT_TG_CHAT_ID;

    try {
        const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: messageText })
        });
        const data = await res.json();
        if (data.ok) {
            showToast("Sent to @YourloveMansibot Telegram Bot! 🚀❤️");
            return;
        } else {
            console.warn("Telegram bot error response:", data);
        }
    } catch (e) {
        console.warn("Direct Telegram API fetch failed:", e);
    }

    // Direct Telegram App Launch Fallback
    const encoded = encodeURIComponent(messageText);
    window.open(`https://t.me/share/url?url=&text=${encoded}`, "_blank");
}

async function sendCategoryWhatsApp(category) {
    const freshMsg = await getFreshHybridLoveMessage(category);
    launchWhatsApp(freshMsg);
}

async function sendCategorySMS(category) {
    const freshMsg = await getFreshHybridLoveMessage(category);
    launchSMS(freshMsg);
}

async function sendCategoryTelegram(category) {
    const freshMsg = await getFreshHybridLoveMessage(category);
    await launchTelegram(freshMsg);
}

async function sendTodayWhatsApp() {
    const freshMsg = await getFreshHybridLoveMessage("random");
    launchWhatsApp(freshMsg);
}

async function sendTodaySMS() {
    const freshMsg = await getFreshHybridLoveMessage("random");
    launchSMS(freshMsg);
}

async function sendTodayTelegram() {
    const freshMsg = await getFreshHybridLoveMessage("random");
    await launchTelegram(freshMsg);
}

// --- Custom Messages Management & Cloud Worker Sync ---
let customSavedMessagesList = [];

function loadSavedCustomMessages() {
    const raw = localStorage.getItem(STORAGE_KEYS.SAVED_MESSAGES);
    if (raw) {
        try {
            customSavedMessagesList = JSON.parse(raw);
            customSavedMessagesList.forEach(item => {
                injectMessageIntoLibrary(item.category, item.text);
            });
        } catch (e) {
            console.error("Error loading custom saved messages:", e);
            customSavedMessagesList = [];
        }
    }
    renderSavedCustomMessages();
}

function injectMessageIntoLibrary(category, text) {
    if (!text) return;
    if (category === "miss_you") {
        if (!CONFIG.iMissYouMessages.includes(text)) {
            CONFIG.iMissYouMessages.push(text);
        }
    } else if (category === "random") {
        ["morning", "afternoon", "evening", "night"].forEach(cat => {
            if (!MESSAGE_LIBRARY[cat].includes(text)) MESSAGE_LIBRARY[cat].push(text);
        });
    } else if (MESSAGE_LIBRARY[category]) {
        if (!MESSAGE_LIBRARY[category].includes(text)) {
            MESSAGE_LIBRARY[category].push(text);
        }
    }
}

function saveNewCustomMessage() {
    const textInput = document.getElementById("custom-message-input");
    const categorySelect = document.getElementById("custom-msg-category");
    
    const text = textInput ? textInput.value.trim() : "";
    const category = categorySelect ? categorySelect.value : "morning";

    if (!text) {
        showToast("Please type a message first 💌");
        if (textInput) textInput.focus();
        return;
    }

    // Save locally
    const newItem = { id: Date.now(), category, text, date: new Date().toLocaleDateString() };
    customSavedMessagesList.push(newItem);
    localStorage.setItem(STORAGE_KEYS.SAVED_MESSAGES, JSON.stringify(customSavedMessagesList));

    // Inject into current active runtime library
    injectMessageIntoLibrary(category, text);
    updateAllCategoryPreviews();
    refreshTodayMessageDisplay();

    // Clear input
    if (textInput) {
        textInput.value = "";
        localStorage.removeItem(STORAGE_KEYS.CUSTOM);
    }

    renderSavedCustomMessages();
    showToast("Message saved to your love library! 💾❤️");

    // Optional Cloud Sync to Cloudflare Worker D1 Database
    syncMessageToWorker(category, text);
}

function deleteSavedCustomMessage(id) {
    customSavedMessagesList = customSavedMessagesList.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.SAVED_MESSAGES, JSON.stringify(customSavedMessagesList));
    renderSavedCustomMessages();
    showToast("Message deleted 🧹");
}

function renderSavedCustomMessages() {
    const container = document.getElementById("saved-messages-list");
    if (!container) return;

    if (customSavedMessagesList.length === 0) {
        container.innerHTML = `<p class="text-muted">No custom messages saved yet. Add one above! 💕</p>`;
        return;
    }

    const catLabels = {
        morning: "🌅 Good Morning",
        afternoon: "☀️ Good Afternoon",
        evening: "🌆 Good Evening",
        night: "🌙 Good Night",
        miss_you: "💭 Miss You",
        random: "💖 Random Love"
    };

    container.innerHTML = "";
    customSavedMessagesList.slice().reverse().forEach(item => {
        const card = document.createElement("div");
        card.className = "saved-msg-item";
        card.innerHTML = `
            <div class="saved-msg-header">
                <span class="saved-msg-badge">${catLabels[item.category] || "💌 Message"}</span>
                <button class="btn-delete-msg" onclick="deleteSavedCustomMessage(${item.id})" title="Delete message">&times;</button>
            </div>
            <p class="saved-msg-text">${personalizeText(item.text)}</p>
            <div class="saved-msg-actions">
                <button class="btn btn-xs btn-whatsapp" onclick="launchWhatsApp(personalizeText('${item.text.replace(/'/g, "\\'")}'))">WhatsApp 💚</button>
                <button class="btn btn-xs btn-sms" onclick="launchSMS(personalizeText('${item.text.replace(/'/g, "\\'")}'))">SMS 💌</button>
                <button class="btn btn-xs btn-outline" onclick="launchTelegram(personalizeText('${item.text.replace(/'/g, "\\'")}'))">Telegram 🚀</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function sendCustomWhatsApp() {
    const customInput = document.getElementById("custom-message-input").value.trim();
    if (!customInput) {
        showToast("Please type a message first 💌");
        document.getElementById("custom-message-input").focus();
        return;
    }
    launchWhatsApp(personalizeText(customInput));
}

function sendCustomSMS() {
    const customInput = document.getElementById("custom-message-input").value.trim();
    if (!customInput) {
        showToast("Please type a message first 💌");
        document.getElementById("custom-message-input").focus();
        return;
    }
    launchSMS(personalizeText(customInput));
}

async function sendCustomTelegram() {
    const text = document.getElementById("custom-message-input").value.trim();
    if (!text) {
        showToast("Please type a message first 💌");
        document.getElementById("custom-message-input").focus();
        return;
    }

    const personalized = personalizeText(text);
    await launchTelegram(personalized);
}

function loadWorkerApiSettings() {
    const url = localStorage.getItem(STORAGE_KEYS.WORKER_URL) || "";
    const key = localStorage.getItem(STORAGE_KEYS.WORKER_KEY) || "";
    const urlInput = document.getElementById("worker-api-url");
    const keyInput = document.getElementById("worker-admin-key");
    if (urlInput) urlInput.value = url;
    if (keyInput) keyInput.value = key;
}

function saveWorkerApiSettings() {
    const urlInput = document.getElementById("worker-api-url");
    const keyInput = document.getElementById("worker-admin-key");
    const url = urlInput ? urlInput.value.trim() : "";
    const key = keyInput ? keyInput.value.trim() : "";

    localStorage.setItem(STORAGE_KEYS.WORKER_URL, url);
    localStorage.setItem(STORAGE_KEYS.WORKER_KEY, key);

    showToast("Cloud Worker settings saved! ⚡❤️");
}

async function syncMessageToWorker(category, text) {
    const workerUrl = localStorage.getItem(STORAGE_KEYS.WORKER_URL);
    const workerKey = localStorage.getItem(STORAGE_KEYS.WORKER_KEY);
    if (!workerUrl) return;

    try {
        const cleanUrl = workerUrl.replace(/\/+$/, "");
        const catMap = {
            morning: "GOOD_MORNING",
            afternoon: "GOOD_AFTERNOON",
            evening: "GOOD_EVENING",
            night: "GOOD_NIGHT",
            miss_you: "I_MISS_YOU",
            random: "RANDOM_LOVE"
        };
        await fetch(`${cleanUrl}/api/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Admin-Key": workerKey || ""
            },
            body: JSON.stringify({
                category: catMap[category] || "GOOD_MORNING",
                message_text: text,
                enabled: 1
            })
        });
        console.log("Message synced to Cloudflare Worker D1 DB!");
    } catch (e) {
        console.warn("Could not sync message to worker:", e);
    }
}

// --- 15. Local Scheduler & Countdown ---
function loadScheduleSettings() {
    const saved = localStorage.getItem(STORAGE_KEYS.SCHEDULE);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed.morning) document.getElementById("time-morning").value = parsed.morning;
            if (parsed.afternoon) document.getElementById("time-afternoon").value = parsed.afternoon;
            if (parsed.evening) document.getElementById("time-evening").value = parsed.evening;
            if (parsed.night) document.getElementById("time-night").value = parsed.night;
        } catch (e) {
            console.error("Error parsing saved schedule:", e);
        }
    }
}

function saveScheduleSettings() {
    const schedule = {
        morning: document.getElementById("time-morning").value,
        afternoon: document.getElementById("time-afternoon").value,
        evening: document.getElementById("time-evening").value,
        night: document.getElementById("time-night").value
    };
    localStorage.setItem(STORAGE_KEYS.SCHEDULE, JSON.stringify(schedule));
    showToast("Daily reminder times saved ⏰❤️");
    updateCountdownTimer();
}

function startCountdownTimer() {
    updateCountdownTimer();
    setInterval(updateCountdownTimer, 1000);
}

function updateCountdownTimer() {
    const times = {
        "Good Morning 🌅": document.getElementById("time-morning").value,
        "Good Afternoon ☀️": document.getElementById("time-afternoon").value,
        "Good Evening 🌆": document.getElementById("time-evening").value,
        "Good Night 🌙": document.getElementById("time-night").value
    };

    const now = new Date();
    let nextScheduledDate = null;
    let nextScheduledLabel = "";

    Object.entries(times).forEach(([label, timeStr]) => {
        if (!timeStr) return;
        const [hours, minutes] = timeStr.split(":").map(Number);
        
        let target = new Date();
        target.setHours(hours, minutes, 0, 0);
        if (target <= now) target.setDate(target.getDate() + 1);
        
        if (!nextScheduledDate || target < nextScheduledDate) {
            nextScheduledDate = target;
            nextScheduledLabel = label;
        }
    });

    const labelEl = document.getElementById("countdown-label");
    const timerEl = document.getElementById("countdown-timer");

    if (!nextScheduledDate) {
        if (labelEl) labelEl.textContent = "Next Reminder:";
        if (timerEl) timerEl.textContent = "No schedule set";
        return;
    }

    const diffMs = nextScheduledDate - now;
    const totalSecs = Math.floor(diffMs / 1000);
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;

    if (labelEl) labelEl.textContent = `Next (${nextScheduledLabel}):`;
    if (timerEl) timerEl.textContent = `${String(hrs).padStart(2, "0")}h ${String(mins).padStart(2, "0")}m ${String(secs).padStart(2, "0")}s ❤️`;
}

// --- 16. Floating Hearts Particle System ---
function initFloatingHearts() {
    const container = document.getElementById("hearts-container");
    if (!container) return;
    
    for (let i = 0; i < 12; i++) {
        setTimeout(spawnSingleHeart, i * 400);
    }
    setInterval(spawnSingleHeart, 1200);
}

function spawnSingleHeart() {
    const container = document.getElementById("hearts-container");
    if (!container || document.hidden) return;
    
    const symbols = ["❤️", "💖", "💕", "💗", "🌸", "✨"];
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    
    const leftPos = Math.random() * 95;
    const duration = 6 + Math.random() * 8;
    const size = 16 + Math.random() * 16;
    
    heart.style.left = `${leftPos}vw`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.fontSize = `${size}px`;
    
    container.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, duration * 1000);
}

// --- 17. Toast System ---
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.remove("hidden");
    toast.style.opacity = "1";
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 300);
    }, 2800);
}
