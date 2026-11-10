'use client';

import confetti from 'canvas-confetti';

const luxuryColors = ['#E8B8C3', '#D6B77A', '#F8E8EC', '#D99AA8', '#FFFFFF', '#B98598'];

export const triggerBirthdayConfetti = () => {
  if (typeof window === 'undefined') return;

  // Center blast
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.65 },
    colors: luxuryColors,
    disableForReducedMotion: true,
  });

  // Left & right cannons
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: luxuryColors,
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: luxuryColors,
      disableForReducedMotion: true,
    });
  }, 250);
};

export const triggerStarConfetti = () => {
  if (typeof window === 'undefined') return;

  confetti({
    particleCount: 60,
    spread: 100,
    origin: { y: 0.5 },
    shapes: ['star', 'circle'],
    colors: ['#D6B77A', '#F4E7C4', '#FFFFFF', '#E8B8C3'],
    scalar: 1.2,
    disableForReducedMotion: true,
  });
};
