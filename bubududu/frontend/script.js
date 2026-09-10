/* ===================================================
   💕 PERSONALIZE YOUR LOVE WEBSITE (EDIT CONFIG HERE)
   =================================================== */
const CONFIG = {
    // 1. Boyfriend Default Details (Saved in localStorage on device)
    boyfriendName: "Rahul",
    boyfriendPhone: "+91 98765 43210",

    // 2. Special Relationship Start Date (Format: YYYY-MM-DD)
    relationshipStartDate: "2025-01-01",

    // 3. Our Memories — Polaroid Memory Wall (Add your photos inside images/ folder)
    memories: [
        {
            image: "images/photo1.jpg",
            title: "Our First Memory ❤️",
            caption: "The day we laughed too much ❤️",
            date: "2025",
            rotation: "-2.5deg"
        },
        {
            image: "images/photo2.jpg",
            title: "That Beautiful Day 🥰",
            caption: "When time stood still with you ✨",
            date: "2025",
            rotation: "2deg"
        },
        {
            image: "images/photo3.jpg",
            title: "Sunset Together 🌅",
            caption: "Sunsets are better by your side 🌇",
            date: "2025",
            rotation: "-1.8deg"
        }
    ],

    // 4. Little Things I Love About You (Edit or add new reasons easily)
    reasonsILoveYou: [
        "Your smile ❤️",
        "The way you make me laugh 😂",
        "The way you care about little things.",
        "Your voice when you call me.",
        "Just... you. 🥰",
        "How safe and warm I feel around you."
    ],

    // 5. Our Special Dates Timeline (Edit or add new milestones)
    specialDates: [
        {
            date: "2025-01-01",
            title: "The Beginning ❤️",
            description: "Our beautiful journey started."
        },
        {
            date: "2025-02-14",
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

// Global State
let activeIndices = { morning: 0, afternoon: 0, evening: 0, night: 0 };
let todayMessage = "";
let currentMissYouIndex = 0;
let currentLightboxIndex = 0;

const STORAGE_KEYS = {
    NAME: "love_app_bf_name",
    PHONE: "love_app_bf_phone",
    CUSTOM: "love_app_custom_msg",
    SCHEDULE: "love_app_schedule"
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
    const savedName = localStorage.getItem(STORAGE_KEYS.NAME) || CONFIG.boyfriendName || "";
    const trimmedName = savedName.trim();
    const replacement = trimmedName !== "" ? trimmedName : "my love";
    return text.replace(/\{NAME\}/g, replacement);
}

// --- 2. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initLandingScreen();
    loadSavedDetails();
    initFloatingHearts();
    initMessages();
    initTodayMessage();
    initLoveCounter();
    renderMemories();
    renderReasons();
    renderTimeline();
    initMissYouSection();
    initSurpriseSection();
    initOpenWhenSection();
    initSongSection();
    loadScheduleSettings();
    startCountdownTimer();
    initLightboxListeners();
});

// --- 3. Landing Screen Experience ---
function initLandingScreen() {
    const nextBtn = document.getElementById("landing-next-btn");
    const enterBtn = document.getElementById("landing-enter-btn");
    const phase1 = document.getElementById("landing-phase-1");
    const phase2 = document.getElementById("landing-phase-2");
    const landingOverlay = document.getElementById("landing-screen");
    const mainDashboard = document.getElementById("main-dashboard");

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            phase1.classList.add("hidden");
            phase2.classList.remove("hidden");
        });
    }

    if (enterBtn) {
        enterBtn.addEventListener("click", () => {
            landingOverlay.style.opacity = "0";
            setTimeout(() => {
                landingOverlay.classList.add("hidden");
                mainDashboard.classList.remove("hidden");
            }, 500);
        });
    }
}

// --- 4. Saved Details Management ---
function loadSavedDetails() {
    const name = localStorage.getItem(STORAGE_KEYS.NAME) || CONFIG.boyfriendName || "";
    const phone = localStorage.getItem(STORAGE_KEYS.PHONE) || CONFIG.boyfriendPhone || "";
    const custom = localStorage.getItem(STORAGE_KEYS.CUSTOM) || "";

    if (name) document.getElementById("bf-name").value = name;
    if (phone) document.getElementById("bf-phone").value = phone;
    if (custom) document.getElementById("custom-message-input").value = custom;

    document.getElementById("save-details-btn").addEventListener("click", saveBoyfriendDetails);
    document.getElementById("custom-message-input").addEventListener("input", (e) => {
        localStorage.setItem(STORAGE_KEYS.CUSTOM, e.target.value);
    });
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

// --- 6. Memories & Photo Lightbox ---
function renderMemories() {
    const grid = document.getElementById("memories-grid");
    if (!grid) return;

    grid.innerHTML = "";
    if (!CONFIG.memories || CONFIG.memories.length === 0) {
        grid.innerHTML = "<p class='text-center'>No memories pinned yet 💕</p>";
        return;
    }

    const defaultRotations = ["-2deg", "2.5deg", "-1.5deg", "3deg", "-2.8deg", "1.8deg"];

    CONFIG.memories.forEach((mem, index) => {
        const card = document.createElement("div");
        card.className = "polaroid-card";
        const rot = mem.rotation || defaultRotations[index % defaultRotations.length];
        card.style.transform = `rotate(${rot})`;
        card.onclick = () => openLightbox(index);

        const captionText = mem.caption || mem.title || "A special memory ❤️";

        card.innerHTML = `
            <div class="polaroid-tape" aria-hidden="true"></div>
            <div class="polaroid-img-wrapper">
                <img src="${mem.image}" alt="${mem.title || 'Memory photo'}" loading="lazy" onerror="if(this.dataset.tried) return; this.dataset.tried='1'; if(this.src.endsWith('.jpg')) this.src=this.src.replace('.jpg','.png'); else if(this.src.endsWith('.png')) this.src=this.src.replace('.png','.jpg');">
            </div>
            <div class="polaroid-caption-box">
                <p class="polaroid-caption">${personalizeText(captionText)}</p>
                <span class="polaroid-date">${mem.date || ""}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openLightbox(index) {
    if (!CONFIG.memories || !CONFIG.memories[index]) return;
    currentLightboxIndex = index;
    
    const mem = CONFIG.memories[index];
    document.getElementById("lightbox-img").src = mem.image;
    document.getElementById("lightbox-title").textContent = personalizeText(mem.caption || mem.title || "Memory");
    document.getElementById("lightbox-date").textContent = mem.date || "";

    const modal = document.getElementById("lightbox-modal");
    modal.classList.remove("hidden");
}

function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    if (modal) modal.classList.add("hidden");
}

function navigateLightbox(direction) {
    if (!CONFIG.memories || CONFIG.memories.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + direction + CONFIG.memories.length) % CONFIG.memories.length;
    openLightbox(currentLightboxIndex);
}

function initLightboxListeners() {
    const modal = document.getElementById("lightbox-modal");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeLightbox();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (modal && !modal.classList.contains("hidden")) {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") navigateLightbox(-1);
            if (e.key === "ArrowRight") navigateLightbox(1);
        }
    });
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

function sendCategoryWhatsApp(category) {
    const rawMsg = MESSAGE_LIBRARY[category][activeIndices[category]];
    launchWhatsApp(personalizeText(rawMsg));
}

function sendCategorySMS(category) {
    const rawMsg = MESSAGE_LIBRARY[category][activeIndices[category]];
    launchSMS(personalizeText(rawMsg));
}

function sendTodayWhatsApp() {
    launchWhatsApp(personalizeText(todayMessage));
}

function sendTodaySMS() {
    launchSMS(personalizeText(todayMessage));
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

function clearCustomMessage() {
    document.getElementById("custom-message-input").value = "";
    localStorage.removeItem(STORAGE_KEYS.CUSTOM);
    showToast("Custom message cleared 🧹");
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
