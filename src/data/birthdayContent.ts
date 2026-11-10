export interface TimelineMilestone {
  id: string;
  yearOrEra: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  tag: string;
}

export interface BirthdayContentConfig {
  recipient: {
    name: string;
    nickname: string;
    relationship: string;
  };
  security: {
    // Configurable gate password (case-insensitive)
    passcode: string;
    hint: string;
  };
  entry: {
    greeting: string;
    subheading: string;
    footerNote: string;
    buttonText: string;
  };
  reveal: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    ctaButton: string;
    heroImage: string;
  };
  gallery: {
    badge: string;
    title: string;
    description: string;
  };
  timeline: {
    badge: string;
    title: string;
    description: string;
    milestones: TimelineMilestone[];
  };
  letter: {
    badge: string;
    title: string;
    subtitle: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
  };
  cake: {
    badge: string;
    title: string;
    subtitle: string;
    buttonText: string;
    blownTitle: string;
    blownMessage: string;
    blownSubtext: string;
  };
  audio: {
    title: string;
    artist: string;
    src: string;
  };
  finalSurprise: {
    badge: string;
    title: string;
    quote: string;
    headline: string;
    closing: string;
    bgImage: string;
    restartButtonText: string;
  };
}

export const birthdayContent: BirthdayContentConfig = {
  recipient: {
    name: 'Suvarna',
    nickname: 'Bestie',
    relationship: 'Best Friend',
  },
  security: {
    passcode: 'suvarna',
    hint: 'Hint: Enter your first name in lowercase (suvarna)',
  },
  entry: {
    greeting: 'Hey Suvarna...',
    subheading: 'A little something special has been waiting for you.',
    footerNote: 'Made with lots of memories, laughter, and a little bit of effort.',
    buttonText: 'Unlock Your Gift',
  },
  reveal: {
    badge: 'Today Belongs to You',
    title: 'HAPPY BIRTHDAY, SUVARNA!',
    subtitle: 'To the girl who deserves all the happiness in the world.',
    description: 'Today, the spotlight belongs entirely to you. Thank you for filling every single day with warmth, joy, and unforgettable laughs.',
    ctaButton: "Let's Celebrate!",
    heroImage: '/assets/images/suvarna-garden-smile.jpg',
  },
  gallery: {
    badge: 'Treasured Moments',
    title: 'Some Memories Are Simply Too Special.',
    description: 'A little collection of moments, smiles, madness, and memories worth keeping forever.',
  },
  timeline: {
    badge: 'Our Journey',
    title: 'From Random Moments to Unforgettable Memories.',
    description: 'Looking back on the laughs, milestones, and inside jokes that made our friendship so extraordinary.',
    milestones: [
      {
        id: 'timeline-1',
        yearOrEra: 'Campus Days',
        title: 'Where It All Began',
        subtitle: 'Aditya College & The Purple Uniform Memories',
        description:
          'From rushing into early morning lectures to endless chatting in our signature purple uniforms — who knew that simple routine would become some of our dearest memories?',
        imageSrc: '/assets/images/snapchat-college-smiles.jpg',
        tag: 'First Chapters',
      },
      {
        id: 'timeline-2',
        yearOrEra: 'Classroom Shenanigans',
        title: 'The Podium & The Giggles',
        subtitle: 'Taking Over Every Stage Together',
        description:
          'No empty classroom was safe from our impromptu photo sessions and cheeky podium poses. Even the dullest lectures turned into laughing fits whenever we were seated together.',
        imageSrc: '/assets/images/college-podium-cheeky.jpg',
        tag: 'Pure Fun',
      },
      {
        id: 'timeline-3',
        yearOrEra: 'Canteen & Breaks',
        title: 'Snack Breaks & Deep Talks',
        subtitle: 'Cold Drinks and Priceless Stories',
        description:
          'Grabbing quick bites, talking about everything and nothing, sharing our dreams, and simply taking a breath away from the chaotic academic rush.',
        imageSrc: '/assets/images/canteen-besties-moment.jpg',
        tag: 'Canteen Tales',
      },
      {
        id: 'timeline-4',
        yearOrEra: 'Squad Bond',
        title: 'Our Golden Squad',
        subtitle: 'Friends Who Became Family',
        description:
          'Gathered on the campus lawns under the open sky, surrounded by friends who always have each other\'s backs no matter what. True friendship at its best.',
        imageSrc: '/assets/images/campus-squad-garden.jpg',
        tag: 'The Squad',
      },
      {
        id: 'timeline-5',
        yearOrEra: 'Lab Sessions',
        title: 'Code, Deadlines & Finger Hearts',
        subtitle: 'Turning Stress into Smiles',
        description:
          'Facing long lab hours, tests, and monitor screens — but always finding time to flash a finger heart, smile at the webcam, and keep the spirits bright.',
        imageSrc: '/assets/images/lab-selfie-fingerheart.jpg',
        tag: 'Lab Moments',
      },
      {
        id: 'timeline-6',
        yearOrEra: 'The Big Dream',
        title: 'Destination: IAS Suvarna',
        subtitle: 'Ambition, Dedication & Future Greatness',
        description:
          'Seeing your determination, hard work, and brilliant mind, there is not a single doubt that the name "IAS Suvarna" will soon be celebrated everywhere. Keep striving — the nation awaits you!',
        imageSrc: '/assets/images/ias-suvarna-dream.jpg',
        tag: 'Inspiring Dreams',
      },
    ],
  },
  letter: {
    badge: 'From the Heart',
    title: 'A Little Note For You.',
    subtitle: 'A personal letter of celebration and deepest gratitude.',
    salutation: 'Dear Suvarna,',
    paragraphs: [
      'Happy Birthday!',
      'Some people make ordinary days a little more special just by being part of them, and you are one of those people.',
      'Today is your day, and I hope it brings you countless reasons to smile, laugh, celebrate, and make even more beautiful memories.',
      'May you achieve everything you have been working towards, experience wonderful new adventures, and always find happiness in the little things.',
      'Never stop being the amazing person you are.',
      "Here's to more laughter, unforgettable memories, crazy moments, and countless reasons to celebrate.",
      'Have the most beautiful birthday!',
    ],
    closing: 'With lots of wishes and appreciation.',
    signature: 'Your Best Friend Forever 💖',
  },
  cake: {
    badge: 'Make a Wish',
    title: "Okay, birthday girl. It's time to make a wish!",
    subtitle: 'Close your eyes, think of your sweetest dream, and blow out the candles.',
    buttonText: 'Blow Out the Candles 🕯️',
    blownTitle: 'Wish Sent to the Stars! ✨',
    blownMessage: 'May every single dream you carry in your heart turn into reality.',
    blownSubtext: 'Especially your dream of becoming an IAS officer — you are going to make all of us so immensely proud, Suvarna!',
  },
  audio: {
    title: 'Acoustic Birthday Melody',
    artist: 'Celestial Music Box',
    src: '/assets/audio/birthday-music.mp3',
  },
  finalSurprise: {
    badge: 'One Last Chapter',
    title: 'One More Thing, Suvarna...',
    quote: 'I hope life gives you a million reasons to smile, endless opportunities to shine, and beautiful memories at every stage of your journey.',
    headline: 'Keep Smiling. Keep Shining. Keep Being YOU.',
    closing: 'HAPPY BIRTHDAY, SUVARNA! 🌸✨',
    bgImage: '/assets/images/suvarna-garden-smile.jpg',
    restartButtonText: 'Revisit the Experience',
  },
};
