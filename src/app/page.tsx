'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EntryScreen } from '@/components/entry/EntryScreen';
import { BirthdayReveal } from '@/components/birthday/BirthdayReveal';
import { MemoryGallery } from '@/components/memories/MemoryGallery';
import { FriendshipTimeline } from '@/components/memories/FriendshipTimeline';
import { BirthdayLetter } from '@/components/letter/BirthdayLetter';
import { BirthdayCake } from '@/components/birthday/BirthdayCake';
import { FinalSurprise } from '@/components/birthday/FinalSurprise';
import { Navigation } from '@/components/navigation/Navigation';
import { MusicPlayer } from '@/components/music/MusicPlayer';
import { ScrollProgress } from '@/components/shared/ScrollProgress';
import { FloatingParticles } from '@/components/shared/FloatingParticles';
import { useAudio } from '@/hooks/useAudio';
import { birthdayContent } from '@/data/birthdayContent';

export default function HomePage() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);

  // Background Audio Controller
  const {
    isPlaying,
    isMuted,
    volume,
    play,
    pause,
    togglePlay,
    toggleMute,
    setVolume,
    playToneEffect,
  } = useAudio(birthdayContent.audio.src);

  const handleUnlock = async () => {
    setIsUnlocked(true);
    // User explicitly interacted, start music playback smoothly
    try {
      await play();
    } catch {
      // Audio playback can still be triggered via music player pill
    }
  };

  const handleRestart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsUnlocked(false);
      pause();
    }, 500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="relative min-h-screen bg-paper-texture overflow-x-hidden">
      {/* Secret Entry Screen Gate */}
      <AnimatePresence>
        {!isUnlocked && (
          <EntryScreen onUnlock={handleUnlock} playSfx={playToneEffect} />
        )}
      </AnimatePresence>

      {/* Main Experience Once Unlocked */}
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Top Scroll Indicator */}
          <ScrollProgress />

          {/* Ambient Floating Rose & Gold Sparkles */}
          <FloatingParticles />

          {/* Floating Navigation Bar */}
          <Navigation onBackToTop={() => scrollToSection('reveal')} />

          {/* SECTION 02: Cinematic Birthday Reveal */}
          <BirthdayReveal
            onCelebrateClick={() => scrollToSection('gallery')}
            playSfx={playToneEffect}
          />

          {/* SECTION 03: The Memory Gallery */}
          <MemoryGallery playSfx={playToneEffect} />

          {/* SECTION 04: The Friendship Timeline */}
          <FriendshipTimeline />

          {/* SECTION 05: The Personal Letter */}
          <BirthdayLetter playSfx={playToneEffect} />

          {/* SECTION 06: The Birthday Cake Interaction */}
          <BirthdayCake
            playSfx={playToneEffect}
            onProceedToFinal={() => scrollToSection('final')}
          />

          {/* SECTION 08: The Final Surprise */}
          <FinalSurprise onRestart={handleRestart} playSfx={playToneEffect} />

          {/* SECTION 07: Background Music Floating Player */}
          <MusicPlayer
            isPlaying={isPlaying}
            isMuted={isMuted}
            volume={volume}
            togglePlay={togglePlay}
            toggleMute={toggleMute}
            setVolume={setVolume}
            trackTitle={birthdayContent.audio.title}
            trackArtist={birthdayContent.audio.artist}
          />
        </motion.div>
      )}
    </main>
  );
}
