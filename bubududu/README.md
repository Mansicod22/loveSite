# Our Little Universe ❤️

A beautiful, lightweight, mobile-first static web application created with pure HTML5, CSS3, and Vanilla JavaScript. Built as a personal romantic gift featuring landing screen entry, love timer counter, polaroid memory wall, reasons I love you cards, milestone timeline, "I miss you" card, surprise message reveal, open-when letter envelope, song shortcut, and direct WhatsApp / SMS messaging integration.

100% static frontend—no servers, no databases, no complex setup required!

---

## 📁 Project Structure

```text
bubududu/
├── index.html   # Main HTML5 structure with Landing Screen & Dashboard
├── style.css    # Romantic styling, Polaroid Masonry Wall, Envelope & animations
├── script.js   # Centralized CONFIG block, Love Counter, Lightbox & messaging
├── README.md    # Guide, customization instructions & deployment steps
└── images/
    ├── photo1.jpg # Sample polaroid photo 1
    ├── photo2.jpg # Sample polaroid photo 2
    └── photo3.jpg # Sample polaroid photo 3
```

---

## 💕 Easy Customization Guide

All personal settings are centralized at the very top of `script.js` inside the clearly marked `CONFIG` object:

```javascript
/* ===================================================
   💕 PERSONALIZE YOUR LOVE WEBSITE (EDIT CONFIG HERE)
   =================================================== */
const CONFIG = {
    boyfriendName: "Dudu",
    boyfriendPhone: "+91 98765 43210",
    relationshipStartDate: "2025-01-01",
    ...
```

---

### 1. How to Add Your Own Photos 📸

1. Copy your photos into the `images/` directory (e.g. `images/first_date.jpg`).
2. Open `script.js` and locate `CONFIG.memories`.
3. Add a new object entry to the array:
   ```javascript
   memories: [
       {
           image: "images/first_date.jpg",
           title: "Our First Date ❤️",
           caption: "The day we laughed too much ❤️",
           date: "14 Feb 2025",
           rotation: "-2deg"
       },
       // Add more photos here!
   ]
   ```

---

### 2. How to Change Messages 💌

- **Category Messages (Good Morning, Afternoon, Evening, Night)**:
  Edit the `MESSAGE_LIBRARY` object in `script.js`. Use `{NAME}` anywhere to dynamically insert his saved name!
- **I Miss You Messages**: Edit `CONFIG.iMissYouMessages` array.
- **Surprise Message**: Edit `CONFIG.surpriseMessage` string.
- **Open When You Miss Me Letter**: Edit `CONFIG.openWhenYouMissMeMessage` string.

---

### 3. How to Change Special Dates (Timeline) 📅

Locate `CONFIG.specialDates` in `script.js` and update or add new milestones:

```javascript
specialDates: [
    {
        date: "2025-01-01",
        title: "The Day We Met ❤️",
        description: "Our eyes met for the first time."
    },
    {
        date: "2025-02-14",
        title: "Our First Valentine 💕",
        description: "An unforgettable evening together."
    }
]
```

---

### 4. How to Set Your Relationship Start Date 💖

Set `CONFIG.relationshipStartDate` in `script.js` using `YYYY-MM-DD` format:
```javascript
relationshipStartDate: "2025-01-01"
```
The live counter automatically calculates and displays the exact Days, Hours, Minutes, and Seconds since that date!

---

### 5. How to Add Our Song 🎵

Locate `CONFIG.ourSong` in `script.js` and paste your YouTube or Spotify URL:

```javascript
ourSong: {
    title: "Chahunga Main Tujhe Hardam ❤️",
    artist: "Satyajeet Jena",
    url: "https://www.youtube.com/watch?v=mlWV7m2uH6o"
}
```
Clicking **"Listen to Our Song 🎶"** on the website will open the track in a new browser tab.

---

## 📱 How WhatsApp & SMS Integration Works

- **WhatsApp**: Standard `https://wa.me/PHONE_NUMBER?text=ENCODED_MESSAGE` deep links. Formats numbers to international standard (e.g. `+91 98765 43210` ➔ `919876543210`).
- **SMS**: Standard `sms:PHONE_NUMBER?body=ENCODED_MESSAGE` URI handlers.

---

## 🌐 Free Deployment Steps

### Option 1: GitHub Pages
1. Push the repository to GitHub.
2. In Repository **Settings** ➔ **Pages**, set source to `main` branch and `/ (root)` folder.
3. Click **Save**. Live in 1 minute!

### Option 2: Netlify
1. Log in to [Netlify](https://www.netlify.com).
2. Drag and drop the `bubududu` folder into Netlify.

### Option 3: Vercel
1. Run `npx vercel` in terminal and follow prompts.

---

Made with a little extra love ❤️ for your favorite person.
