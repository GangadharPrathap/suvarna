# PROJECT SUVARNA ✨
## Premium Interactive Birthday Website for Suvarna

An extraordinary, award-winning luxury feminine birthday gift website designed and built specifically for **Suvarna**. Crafted with an editorial aesthetic combining blush pink, warm ivory, soft rose, and champagne gold accents, rich storytelling, interactive milestones, personal photographs, and joyful micro-interactions.

---

## 🌟 Features Overview

1. **Section 01 — The Secret Entry Experience**
   - Elegant gate with wax-seal lock badge and ambient floating petals.
   - Configurable passcode protection (default: `suvarna`, case-insensitive).
   - Dynamic error feedback with shaking animation and gentle hint reveal.
   - Unlocking triggers smooth cinematic entrance sequence and initiates background audio.

2. **Section 02 — Cinematic Birthday Reveal**
   - High-impact celebratory reveal: *"HAPPY BIRTHDAY, SUVARNA!"*
   - Featured editorial portrait framed in champagne gold with decorative badge.
   - Staggered typography animations and gold separator accents.
   - *"Let's Celebrate!"* button with interactive multi-stage confetti explosion.

3. **Section 03 — The Memory Gallery**
   - Uses **all 15 real photographs** provided in the project.
   - Category filters: *All Memories*, *Portraits*, *College & Laughs*, *Squad Bonds*, and *Dream IAS*.
   - Responsive asymmetric grid with hover lift effects, category tags, and heart micro-reactions.
   - Fullscreen **Photo Lightbox**: previous/next navigation, keyboard navigation (ArrowLeft, ArrowRight, Escape), responsive image optimization, and captions.

4. **Section 04 — The Friendship Timeline**
   - Alternating story cards with central glowing gold spine.
   - Six curated milestones documenting the journey:
     - *Campus Days & Purple Uniforms*
     - *Classroom Shenanigans & Podium Poses*
     - *Canteen Tales & Snack Breaks*
     - *Squad Bond on the Campus Lawns*
     - *Lab Sessions, Finger Hearts & Deadlines*
     - *The Big Dream: Destination IAS Suvarna*

5. **Section 05 — The Personal Letter**
   - Cream-colored stationery housed in an animated envelope with a wax seal.
   - Interactive opening animation with sound effects.
   - Authentic, heartfelt friendship letter formatted with Playfair Display and Great Vibes calligraphy.

6. **Section 06 — The Birthday Cake Interaction**
   - Custom pastel pink tiered cake with decorative pearls, ribbon, and gold platter.
   - 3 candles with realistic flickering flame animations.
   - *"Blow Out the Candles 🕯️"* interaction: flames extinguish with a puff of smoke, chime sound effects, and explosive dual-cannon confetti.
   - Unveils the secret birthday wish celebrating her bright future and IAS officer dream!
   - Option to re-light candles anytime.

7. **Section 07 — Background Music Experience**
   - Custom melodic music-box birthday soundtrack (`birthday-music.mp3`).
   - Floating pill widget on bottom left: Play/Pause, Mute/Unmute, volume slider, track metadata, and real-time equalizer animation.
   - Built-in Web Audio API synthesizer fallback for sound effects and chime melodies.

8. **Section 08 — The Final Surprise**
   - Full-screen cinematic backdrop with real portrait and dark blush luxury overlay.
   - Emotional closing message: *"Keep Smiling. Keep Shining. Keep Being YOU."*
   - Interactive celebration trigger and restart option.

9. **Navigation & Accessibility**
   - Floating glassmorphism pill navigation bar with active section indicator.
   - Mobile-responsive navigation drawer.
   - Top scroll progress bar in gold-blush gradient.
   - Back-to-top quick scroll button.
   - Full keyboard navigation and reduced-motion support.

---

## 📁 Project Directory Structure

```text
suvarna/
├── public/
│   └── assets/
│       ├── audio/
│       │   ├── birthday-music.mp3       # Background instrumental
│       │   └── birthday-music.wav
│       ├── images/
│       │   ├── suvarna-garden-smile.jpg # Hero portrait
│       │   ├── ias-suvarna-dream.jpg    # Dream IAS milestone
│       │   ├── snapchat-college-smiles.jpg
│       │   ├── snapchat-vibes-filter.jpg
│       │   ├── campus-squad-garden.jpg
│       │   ├── suvarna-courtyard-walk.jpg
│       │   ├── suvarna-garden-candid.jpg
│       │   ├── suvarna-indoor-glasses.jpg
│       │   ├── college-podium-cheeky.jpg
│       │   ├── canteen-besties-moment.jpg
│       │   ├── squad-shoulder-buddies.jpg
│       │   ├── dining-hall-hearts.jpg
│       │   ├── lab-selfie-smiles.jpg
│       │   ├── lab-selfie-fingerheart.jpg
│       │   └── lab-selfie-cheekpose.jpg
│       └── videos/
├── src/
│   ├── app/
│   │   ├── globals.css                  # Design system, keyframes, scrollbar
│   │   ├── layout.tsx                   # Metadata, viewport, fonts
│   │   ├── loading.tsx                  # Luxury loader
│   │   ├── not-found.tsx                # Custom 404 page
│   │   └── page.tsx                     # Master orchestrator component
│   ├── components/
│   │   ├── birthday/
│   │   │   ├── BirthdayCake.tsx         # Interactive cake & candle blowing
│   │   │   ├── BirthdayReveal.tsx       # Hero reveal & confetti
│   │   │   └── FinalSurprise.tsx        # Grand finale
│   │   ├── entry/
│   │   │   └── EntryScreen.tsx          # Secret passcode gate
│   │   ├── letter/
│   │   │   └── BirthdayLetter.tsx       # Animated envelope & letter
│   │   ├── memories/
│   │   │   ├── FriendshipTimeline.tsx   # Alternating milestones
│   │   │   ├── MemoryGallery.tsx        # Filterable editorial grid
│   │   │   └── PhotoLightbox.tsx        # Fullscreen viewer
│   │   ├── music/
│   │   │   └── MusicPlayer.tsx          # Floating audio player
│   │   ├── navigation/
│   │   │   └── Navigation.tsx           # Floating desktop/mobile nav
│   │   └── shared/
│   │       ├── Confetti.tsx             # Confetti particle triggers
│   │       ├── FloatingParticles.tsx    # Ambient floating rose sparkles
│   │       ├── ScrollProgress.tsx       # Top scroll indicator
│   │       └── SectionHeading.tsx       # Editorial headings
│   ├── data/
│   │   ├── birthdayContent.ts           # Centralized text, letter & milestones
│   │   └── photoAssets.ts               # Image metadata, captions & categories
│   ├── hooks/
│   │   ├── useAudio.ts                  # Audio engine & Web Audio SFX
│   │   └── useReducedMotion.ts          # Accessibility media query
│   └── lib/
│       └── utils.ts                     # Tailwind class merging
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 🚀 How to Run Locally

1. **Install Dependencies** (already installed in workspace):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

3. **Or Run Production Build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🎨 How to Customize Content

### 1. Edit Passcode & Hint
Open `src/data/birthdayContent.ts` and update the `security` section:
```typescript
security: {
  passcode: 'suvarna', // Change to any secret word or date
  hint: 'Hint: Enter your first name in lowercase (suvarna)',
}
```

### 2. Customize the Birthday Letter
Open `src/data/birthdayContent.ts` and edit the `letter` block:
```typescript
letter: {
  salutation: 'Dear Suvarna,',
  paragraphs: [
    'Happy Birthday!',
    'Your custom heartfelt message here...',
  ],
  closing: 'With lots of wishes and appreciation.',
  signature: 'Your Best Friend Forever 💖',
}
```

### 3. Add or Modify Photographs
1. Place new image files into `public/assets/images/`.
2. Open `src/data/photoAssets.ts` and add an entry:
```typescript
{
  id: 'unique-id',
  src: '/assets/images/your-photo.jpg',
  title: 'Your Photo Title',
  caption: 'Your personal caption...',
  category: 'memories', // 'portraits' | 'memories' | 'squad' | 'aspirations'
  orientation: 'portrait', // 'portrait' | 'landscape' | 'square'
  width: 1200,
  height: 1600,
}
```

### 4. Replace Background Music
Drop your MP3 track into `public/assets/audio/birthday-music.mp3`.
To change the displayed track name, update `audio` in `src/data/birthdayContent.ts`:
```typescript
audio: {
  title: 'My Favorite Song',
  artist: 'Artist Name',
  src: '/assets/audio/birthday-music.mp3',
}
```

---

## 🌐 Deploy to Vercel

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Project Suvarna"
   git branch -M main
   git remote add origin https://github.com/your-username/suvarna-birthday.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**.
3. Import your GitHub repository.
4. Leave framework preset as **Next.js** and build command as default (`npm run build`).
5. Click **Deploy**. Your custom birthday website will be live worldwide in seconds!

---

*Project Suvarna — Designed and coded with love, laughter, and appreciation.*
