'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { birthdayContent } from '@/data/birthdayContent';
import { triggerBirthdayConfetti } from '@/components/shared/Confetti';

interface BirthdayRevealProps {
  onCelebrateClick: () => void;
  playSfx?: (type: 'chime' | 'candle' | 'confetti' | 'letter') => void;
}

export const BirthdayReveal: React.FC<BirthdayRevealProps> = ({ onCelebrateClick, playSfx }) => {
  const handleCelebrate = () => {
    triggerBirthdayConfetti();
    if (playSfx) playSfx('confetti');
    onCelebrateClick();
  };

  return (
    <section
      id="reveal"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blush-200/50 via-gold-200/30 to-blush-100/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Storytelling & Staggered Typography */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Elegant Birthday Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-gold-400/40 text-blush-800 text-xs font-medium tracking-widest uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-500 fill-gold-400/30 animate-pulse" />
              <span>{birthdayContent.reveal.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-2"
            >
              <p className="font-script text-3xl sm:text-4xl text-blush-600 tracking-wide">
                Celebrating
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-charcoal-800 tracking-tight leading-[1.1]">
                HAPPY BIRTHDAY,{' '}
                <span className="text-rose-gradient block mt-1">
                  SUVARNA!
                </span>
              </h1>
            </motion.div>

            {/* Supporting Headline & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3"
            >
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-blush-800 font-medium italic">
                &ldquo;{birthdayContent.reveal.subtitle}&rdquo;
              </p>
              <p className="text-charcoal-700/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                {birthdayContent.reveal.description}
              </p>
            </motion.div>

            {/* Gold Divider Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[1px] w-32 bg-gradient-to-r from-gold-400 to-transparent mx-auto lg:mx-0"
            />

            {/* Interactive Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 10px 25px rgba(214, 183, 122, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCelebrate}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blush-800 via-blush-700 to-blush-800 hover:from-blush-900 hover:to-blush-900 text-white font-medium text-sm tracking-wide shadow-card flex items-center justify-center gap-3 border border-gold-400/50 group"
              >
                <span>{birthdayContent.reveal.ctaButton}</span>
                <Heart className="w-4 h-4 fill-current text-blush-300 group-hover:scale-125 transition-transform" />
              </motion.button>

              <button
                onClick={onCelebrateClick}
                className="text-xs text-charcoal-700/70 hover:text-blush-800 flex items-center gap-1.5 transition-colors py-2"
              >
                <span>Scroll down to explore</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Hero Real Photograph in Luxury Editorial Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Gold Ornamental Background Frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-gold-400/40 -rotate-2 pointer-events-none" />
              <div className="absolute -inset-1 rounded-3xl bg-blush-200/40 rotate-1 pointer-events-none" />

              {/* Polaroid/Editorial Image Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white p-3 sm:p-4 shadow-card border border-blush-200/70">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-blush-50">
                  <Image
                    src={birthdayContent.reveal.heroImage}
                    alt="Suvarna - Birthday Girl"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle warm rose gradient overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white drop-shadow-md">
                    <span className="font-serif text-sm font-semibold tracking-wide">
                      Suvarna
                    </span>
                    <span className="text-[11px] bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 font-light">
                      The Birthday Star ✨
                    </span>
                  </div>
                </div>

                {/* Editorial Caption under image */}
                <div className="pt-3 pb-1 text-center">
                  <p className="font-script text-xl text-blush-700">
                    Pure Grace & Kindness
                  </p>
                </div>
              </div>

              {/* Floating Decorative Stamp */}
              <motion.div
                animate={{ rotate: [0, 6, 0, -6, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gold-400 text-white flex flex-col items-center justify-center shadow-lg border-2 border-white text-[9px] font-bold uppercase tracking-wider text-center"
              >
                <span>B&apos;DAY</span>
                <span>GIRL</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
