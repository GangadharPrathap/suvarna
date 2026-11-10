'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Heart, ChevronDown, Check } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { birthdayContent } from '@/data/birthdayContent';

interface BirthdayLetterProps {
  playSfx?: (type: 'chime' | 'candle' | 'confetti' | 'letter') => void;
}

export const BirthdayLetter: React.FC<BirthdayLetterProps> = ({ playSfx }) => {
  const [isOpen, setIsOpen] = useState(false);
  const letter = birthdayContent.letter;

  const handleToggle = () => {
    if (!isOpen && playSfx) {
      playSfx('letter');
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="letter" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative select-none">
      <SectionHeading
        badge={letter.badge}
        title={letter.title}
        subtitle={letter.subtitle}
      />

      <div className="relative mt-8 flex flex-col items-center">
        
        {/* Envelope Preview when Closed */}
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              onClick={handleToggle}
              className="w-full max-w-lg cursor-pointer group"
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-ivory-100 via-blush-50 to-blush-100 p-8 sm:p-12 shadow-2xl border-2 border-blush-300/80 group-hover:border-gold-400/80 transition-all duration-300 text-center">
                
                {/* Envelope Flap Simulation */}
                <div className="absolute top-0 left-0 right-0 h-28 overflow-hidden rounded-t-3xl pointer-events-none">
                  <div className="w-0 h-0 border-l-[240px] border-l-transparent border-r-[240px] border-r-transparent border-t-[80px] border-t-blush-200/50 mx-auto" />
                </div>

                {/* Wax Seal Badge in Center */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="mx-auto w-20 h-20 rounded-full wax-seal flex flex-col items-center justify-center text-ivory-100 shadow-xl border-2 border-gold-300 relative z-10"
                >
                  <Mail className="w-7 h-7 stroke-[1.8]" />
                  <span className="text-[9px] font-serif font-bold tracking-widest mt-0.5">OPEN</span>
                </motion.div>

                {/* Addressed To */}
                <div className="mt-8 space-y-1 relative z-10">
                  <p className="text-xs uppercase tracking-widest text-blush-800 font-semibold">
                    Privately Written For
                  </p>
                  <p className="font-script text-3xl sm:text-4xl text-charcoal-800">
                    Suvarna
                  </p>
                  <p className="text-xs text-charcoal-700/60 pt-1">
                    Tap the wax seal to break the letter open ✨
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Opened Letter on Cream Luxury Stationery Paper */
            <motion.div
              key="letter-content"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-full max-w-2xl relative"
            >
              {/* Luxury Letter Paper Card */}
              <div className="relative rounded-3xl bg-[#FFFDF9] p-8 sm:p-14 shadow-2xl border border-gold-400/50">
                
                {/* Fine Ornamental Header Line */}
                <div className="flex items-center justify-between pb-6 mb-8 border-b border-blush-200/70">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span className="font-serif text-xs font-semibold uppercase tracking-widest text-blush-800">
                      Personal Birthday Note
                    </span>
                  </div>
                  <button
                    onClick={handleToggle}
                    className="text-xs font-medium text-blush-700 hover:text-blush-900 px-3 py-1 rounded-full bg-blush-100/70 border border-blush-200 transition-colors"
                  >
                    Fold Letter
                  </button>
                </div>

                {/* Salutation */}
                <p className="font-script text-3xl sm:text-4xl text-blush-800 mb-6">
                  {letter.salutation}
                </p>

                {/* Letter Body Paragraphs */}
                <div className="space-y-4 text-charcoal-800 font-serif text-base sm:text-lg leading-relaxed sm:leading-loose">
                  {letter.paragraphs.map((para, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.08 }}
                      className={index === 0 ? 'font-bold text-blush-800 text-xl sm:text-2xl mb-4' : ''}
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>

                {/* Closing and Signature */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-10 pt-6 border-t border-blush-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-serif italic text-charcoal-700">
                      {letter.closing}
                    </p>
                    <p className="font-script text-2xl sm:text-3xl text-blush-700 mt-1">
                      {letter.signature}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush-100/60 border border-blush-200 text-xs text-blush-800">
                    <Heart className="w-3.5 h-3.5 fill-current text-blush-600" />
                    <span>Always & Forever</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
