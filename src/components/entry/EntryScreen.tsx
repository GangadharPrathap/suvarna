'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, KeyRound, Lock, ArrowRight, Heart } from 'lucide-react';
import { birthdayContent } from '@/data/birthdayContent';

interface EntryScreenProps {
  onUnlock: () => void;
  playSfx?: (type: 'chime' | 'candle' | 'confetti' | 'letter') => void;
}

export const EntryScreen: React.FC<EntryScreenProps> = ({ onUnlock, playSfx }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entered = password.trim().toLowerCase();
    const expected = birthdayContent.security.passcode.trim().toLowerCase();

    if (entered === expected) {
      setError(false);
      setIsSuccess(true);
      if (playSfx) playSfx('chime');
      setTimeout(() => {
        onUnlock();
      }, 900);
    } else {
      setError(true);
      setShowHint(true);
      setTimeout(() => setError(false), 800);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-paper-texture overflow-hidden select-none"
    >
      {/* Delicate floating background petals / sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-12 w-64 h-64 rounded-full bg-blush-200/40 blur-3xl" />
        <div className="absolute bottom-12 right-12 w-72 h-72 rounded-full bg-gold-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blush-100/50 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-3xl glass-panel-gold shadow-2xl text-center border-gold-shimmer"
      >
        {/* Luxury Wax Seal / Gift Ribbon Header Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2, stiffness: 260, damping: 20 }}
          className="mx-auto mb-6 w-16 h-16 rounded-full wax-seal flex items-center justify-center text-ivory-100 shadow-lg border border-gold-400/50"
        >
          <Lock className="w-7 h-7 stroke-[1.8]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-800 mb-2 tracking-tight"
        >
          {birthdayContent.entry.greeting}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-blush-800 font-medium text-sm sm:text-base mb-1"
        >
          {birthdayContent.entry.subheading}
        </motion.p>

        {/* Secondary note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-charcoal-700/70 text-xs sm:text-sm mb-8 italic"
        >
          &ldquo;{birthdayContent.entry.footerNote}&rdquo;
        </motion.p>

        {/* Passcode Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <motion.div
              animate={error ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blush-700">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter secret word..."
                disabled={isSuccess}
                autoFocus
                className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-white/80 border text-charcoal-800 placeholder:text-charcoal-700/40 focus:outline-none focus:ring-2 transition-all shadow-inner ${
                  error
                    ? 'border-red-400 focus:ring-red-300'
                    : isSuccess
                    ? 'border-emerald-400 focus:ring-emerald-300'
                    : 'border-blush-300 focus:border-gold-400 focus:ring-gold-300/40'
                }`}
              />
            </motion.div>
          </div>

          {/* Hint info */}
          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-blush-800/90 bg-blush-100/70 py-1.5 px-3 rounded-lg border border-blush-200"
              >
                {birthdayContent.security.hint}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSuccess}
            className={`w-full py-3.5 px-6 rounded-xl font-medium text-sm tracking-wide transition-all shadow-card flex items-center justify-center gap-2 ${
              isSuccess
                ? 'bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-blush-800 via-blush-700 to-blush-800 hover:from-blush-900 hover:to-blush-900 text-white border border-gold-400/40'
            }`}
          >
            {isSuccess ? (
              <>
                <span>Welcome, Birthday Girl! ✨</span>
                <Heart className="w-4 h-4 fill-current animate-bounce" />
              </>
            ) : (
              <>
                <span>{birthdayContent.entry.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>

        {/* Subtle helper note */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-charcoal-700/60">
          <Sparkles className="w-3 h-3 text-gold-400" />
          <span>A curated birthday experience designed exclusively for Suvarna</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
