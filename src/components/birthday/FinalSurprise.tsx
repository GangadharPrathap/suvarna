'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart, RotateCcw } from 'lucide-react';
import { birthdayContent } from '@/data/birthdayContent';
import { triggerBirthdayConfetti, triggerStarConfetti } from '@/components/shared/Confetti';

interface FinalSurpriseProps {
  onRestart: () => void;
  playSfx?: (type: 'chime' | 'candle' | 'confetti' | 'letter') => void;
}

export const FinalSurprise: React.FC<FinalSurpriseProps> = ({ onRestart, playSfx }) => {
  const final = birthdayContent.finalSurprise;

  const handleSurpriseClick = () => {
    triggerBirthdayConfetti();
    triggerStarConfetti();
    if (playSfx) playSfx('confetti');
  };

  return (
    <section
      id="final"
      className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background with real photograph and luxury dark blush overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={final.bgImage}
          alt="Suvarna - Unforgettable Birthday"
          fill
          className="object-cover object-center filter blur-sm scale-105 opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-800/90 to-charcoal-900/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blush-800/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center text-white space-y-8">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/50 text-gold-300 text-xs font-semibold tracking-widest uppercase shadow-glow"
        >
          <Sparkles className="w-3.5 h-3.5 fill-current text-gold-400" />
          <span>{final.badge}</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
        >
          {final.title}
        </motion.h2>

        {/* Central Heartfelt Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-8 sm:p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl max-w-2xl mx-auto"
        >
          <p className="font-serif text-lg sm:text-2xl text-blush-100 font-normal italic leading-relaxed sm:leading-loose">
            &ldquo;{final.quote}&rdquo;
          </p>

          <div className="my-6 flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-400 text-sm">✦</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-gold-300 tracking-wide uppercase">
            {final.headline}
          </h3>
        </motion.div>

        {/* Closing Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="space-y-4"
        >
          <h1
            onClick={handleSurpriseClick}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blush-200 via-gold-300 to-blush-200 cursor-pointer hover:scale-105 transition-transform"
          >
            {final.closing}
          </h1>

          <p className="text-xs sm:text-sm text-gray-300/80 font-light tracking-wider">
            Thank you for being the most incredible best friend anyone could ever ask for.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSurpriseClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-900 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-glow flex items-center justify-center gap-2 border border-gold-300"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Celebrate Again! 🎊</span>
          </motion.button>

          <button
            onClick={onRestart}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wide transition-colors border border-white/20 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4 text-gold-300" />
            <span>{final.restartButtonText}</span>
          </button>
        </motion.div>

        {/* Footer Credit & Affection Note */}
        <div className="pt-12 text-[11px] text-gray-400/60 flex items-center justify-center gap-1.5">
          <span>Crafted with endless admiration & love for Suvarna</span>
          <Heart className="w-3 h-3 text-blush-400 fill-current" />
        </div>

      </div>
    </section>
  );
};
