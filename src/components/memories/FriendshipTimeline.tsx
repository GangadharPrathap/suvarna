'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { birthdayContent } from '@/data/birthdayContent';

export const FriendshipTimeline: React.FC = () => {
  const milestones = birthdayContent.timeline.milestones;

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <SectionHeading
        badge={birthdayContent.timeline.badge}
        title={birthdayContent.timeline.title}
        subtitle={birthdayContent.timeline.description}
      />

      {/* Central Timeline Spine */}
      <div className="relative mt-12 sm:mt-16">
        {/* Continuous vertical glowing line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blush-300 via-gold-400 to-blush-400 -translate-x-1/2 shadow-sm" />

        <div className="space-y-12 md:space-y-16">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node / Sparkle Marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-gold-400 shadow-glow flex items-center justify-center text-gold-500"
                >
                  <Sparkles className="w-4 h-4 fill-gold-400/40" />
                </motion.div>

                {/* Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                    isEven ? 'md:pl-10 text-left' : 'md:pr-10 text-left'
                  }`}
                >
                  <div className="p-5 sm:p-6 rounded-2xl glass-panel shadow-card border border-blush-200/80 hover:border-gold-400/50 hover:shadow-xl transition-all duration-300 group">
                    
                    {/* Header info / Era badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-blush-100 text-blush-800 border border-blush-200">
                        <Calendar className="w-3 h-3 text-gold-500" />
                        {item.yearOrEra}
                      </span>
                      <span className="text-xs text-gold-500/90 font-medium">
                        {item.tag}
                      </span>
                    </div>

                    {/* Image with nice framing */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-blush-50 mb-4 shadow-sm border border-blush-100">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-800 group-hover:text-blush-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-blush-700 mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal-700/80 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-blush-100 flex items-center justify-between text-[11px] text-charcoal-700/60">
                      <span>Unforgettable best friend memory</span>
                      <Heart className="w-3.5 h-3.5 text-blush-300 group-hover:text-blush-600 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
