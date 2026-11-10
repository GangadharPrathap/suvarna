'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wind, RefreshCw, Heart, ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { birthdayContent } from '@/data/birthdayContent';
import { triggerBirthdayConfetti, triggerStarConfetti } from '@/components/shared/Confetti';

interface BirthdayCakeProps {
  playSfx?: (type: 'chime' | 'candle' | 'confetti' | 'letter') => void;
  onProceedToFinal?: () => void;
}

export const BirthdayCake: React.FC<BirthdayCakeProps> = ({ playSfx, onProceedToFinal }) => {
  const [candlesBlown, setCandlesBlown] = useState<boolean>(false);
  const cake = birthdayContent.cake;

  const handleBlowCandles = () => {
    if (candlesBlown) return;

    if (playSfx) playSfx('candle');
    setCandlesBlown(true);

    // Multi-stage confetti celebration
    setTimeout(() => {
      triggerBirthdayConfetti();
      triggerStarConfetti();
      if (playSfx) playSfx('confetti');
    }, 400);
  };

  const handleRelight = () => {
    setCandlesBlown(false);
    if (playSfx) playSfx('chime');
  };

  return (
    <section id="cake" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative text-center select-none">
      <SectionHeading
        badge={cake.badge}
        title={cake.title}
        subtitle={candlesBlown ? 'Your wish has ascended into the universe!' : cake.subtitle}
      />

      <div className="relative mt-8 flex flex-col items-center">
        
        {/* The Illustrated Luxury Cake */}
        <div className="relative w-72 sm:w-84 h-72 flex flex-col items-center justify-end pb-4">
          
          {/* Ambient Glow behind cake */}
          <div className={`absolute inset-0 rounded-full transition-all duration-700 pointer-events-none ${
            candlesBlown
              ? 'bg-blush-200/20 blur-2xl'
              : 'bg-gold-300/30 blur-3xl animate-pulse-subtle'
          }`} />

          {/* 3 Candles */}
          <div className="flex items-end justify-center gap-7 z-20 mb-[-4px]">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Candle Flame */}
                <AnimatePresence>
                  {!candlesBlown ? (
                    <motion.div
                      key={`flame-${idx}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-6 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 animate-flame mb-1 shadow-glow"
                    />
                  ) : (
                    <motion.div
                      key={`smoke-${idx}`}
                      initial={{ opacity: 0.8, y: 0, scale: 0.8 }}
                      animate={{ opacity: 0, y: -24, scale: 1.4 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="w-2.5 h-6 rounded-full bg-gray-300/60 blur-[1px] mb-1"
                    />
                  )}
                </AnimatePresence>

                {/* Candle Wick */}
                <div className="w-0.5 h-2 bg-charcoal-800" />

                {/* Candle Body */}
                <div className="w-3.5 h-12 rounded-t-sm bg-gradient-to-r from-gold-200 via-ivory-100 to-gold-300 border border-gold-400/50 shadow-sm flex flex-col justify-around py-1">
                  <span className="w-full h-0.5 bg-blush-400/50 block" />
                  <span className="w-full h-0.5 bg-blush-400/50 block" />
                </div>
              </div>
            ))}
          </div>

          {/* Tier 1 (Top Tier) */}
          <div className="relative z-10 w-44 h-16 rounded-2xl bg-gradient-to-r from-blush-200 via-blush-100 to-blush-200 border-2 border-blush-300/80 shadow-md flex items-center justify-center">
            {/* Frosting drips and pearl decor */}
            <div className="absolute top-0 inset-x-0 flex justify-around px-2 -mt-1.5">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="w-3 h-3 rounded-full bg-white shadow-sm border border-blush-200" />
              ))}
            </div>
            <span className="font-serif text-xs font-bold text-blush-800 tracking-widest uppercase">
              SUVARNA
            </span>
          </div>

          {/* Tier 2 (Bottom Tier) */}
          <div className="relative z-0 w-64 h-24 rounded-2xl bg-gradient-to-r from-blush-300 via-blush-200 to-blush-300 border-2 border-blush-400/80 shadow-lg mt-[-8px] flex flex-col justify-between p-2">
            {/* Decorative Gold Garland Ribbon */}
            <div className="flex justify-around px-3 pt-1">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-gold-400 shadow-sm" />
              ))}
            </div>
            <div className="text-center pb-1">
              <span className="font-script text-2xl text-blush-900 drop-shadow-sm">
                Happy Birthday
              </span>
            </div>
          </div>

          {/* Cake Stand / Platter */}
          <div className="w-72 h-4 rounded-full bg-gradient-to-r from-gold-200 via-white to-gold-300 border border-gold-400 shadow-md mt-[-4px]" />
          <div className="w-24 h-4 rounded-b-lg bg-gold-300/80 border-b border-gold-400" />
        </div>

        {/* Interactive Controls & Wish Reveal */}
        <div className="mt-8 w-full max-w-md">
          <AnimatePresence mode="wait">
            {!candlesBlown ? (
              <motion.div
                key="blow-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 12px 30px rgba(214, 183, 122, 0.45)' }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleBlowCandles}
                  className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-blush-800 via-blush-700 to-blush-800 hover:from-blush-900 hover:to-blush-900 text-white font-medium text-base tracking-wide shadow-card flex items-center justify-center gap-3 border border-gold-400/50"
                >
                  <Wind className="w-5 h-5 text-blush-200 animate-pulse" />
                  <span>{cake.buttonText}</span>
                </motion.button>
                <p className="text-xs text-charcoal-700/60 italic">
                  Tap the button to extinguish the candles and make your secret wish!
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="wish-revealed"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="p-6 sm:p-8 rounded-3xl glass-panel-gold border-gold-shimmer shadow-2xl text-center space-y-4"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-gold-100 border border-gold-400/60 flex items-center justify-center text-gold-600 shadow-sm">
                  <Sparkles className="w-6 h-6 fill-gold-400" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-800">
                  {cake.blownTitle}
                </h3>

                <p className="font-serif text-base sm:text-lg text-blush-800 italic leading-relaxed">
                  &ldquo;{cake.blownMessage}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-charcoal-700/80 leading-relaxed font-medium bg-white/70 p-4 rounded-2xl border border-blush-200">
                  {cake.blownSubtext}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleRelight}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-charcoal-700 hover:text-charcoal-900 bg-white/80 hover:bg-white rounded-full border border-blush-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Relight Candles</span>
                  </button>

                  {onProceedToFinal && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={onProceedToFinal}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-blush-800 hover:bg-blush-900 text-white font-medium text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 border border-gold-400/40"
                    >
                      <span>Final Surprise</span>
                      <Heart className="w-3.5 h-3.5 fill-current text-blush-300" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
