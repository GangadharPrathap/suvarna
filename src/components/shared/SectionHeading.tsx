'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full bg-blush-100/80 border border-gold-400/40 text-blush-800 text-xs font-medium tracking-widest uppercase shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-800 tracking-tight leading-[1.18]"
      >
        {title}
      </motion.h2>

      {/* Elegant ornamental gold separator */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex items-center gap-3 my-4 ${centered ? 'justify-center' : 'justify-start'}`}
      >
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400" />
        <span className="text-gold-400 text-sm">✦</span>
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400" />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-charcoal-700/80 font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
