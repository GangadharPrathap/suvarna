'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, Heart } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { photoAssets, PhotoItem } from '@/data/photoAssets';
import { birthdayContent } from '@/data/birthdayContent';
import { PhotoLightbox } from './PhotoLightbox';

interface MemoryGalleryProps {
  playSfx?: (type: 'chime' | 'candle' | 'confetti' | 'letter') => void;
}

type CategoryType = 'all' | 'portraits' | 'memories' | 'squad' | 'aspirations';

const categories = [
  { id: 'all', label: 'All Memories' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'memories', label: 'College & Laughs' },
  { id: 'squad', label: 'Squad Bonds' },
  { id: 'aspirations', label: 'Dream IAS' },
];

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({ playSfx }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return photoAssets;
    return photoAssets.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (index: number) => {
    if (playSfx) playSfx('chime');
    setLightboxIndex(index);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        badge={birthdayContent.gallery.badge}
        title={birthdayContent.gallery.title}
        subtitle={birthdayContent.gallery.description}
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryType)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-blush-800 text-white shadow-md border border-gold-400/50 scale-105'
                  : 'bg-white/80 text-charcoal-700/80 hover:bg-blush-100/70 border border-blush-200/60'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Editorial Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {filteredPhotos.map((photo, idx) => {
            const isFeatured = photo.featured && activeCategory === 'all';
            return (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className={`group relative cursor-pointer ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                onClick={() => handleOpenLightbox(idx)}
              >
                {/* Polaroid/Gallery Card styling */}
                <div className="relative overflow-hidden rounded-2xl bg-white p-3.5 shadow-card border border-blush-200/60 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1.5 group-hover:border-gold-400/50">
                  
                  {/* Photo Container with precise aspect ratio */}
                  <div className={`relative w-full overflow-hidden rounded-xl bg-blush-50 ${
                    photo.orientation === 'portrait' ? 'aspect-[3/4]' : photo.orientation === 'square' ? 'aspect-square' : 'aspect-[4/3]'
                  }`}>
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gold-300 uppercase tracking-wider mb-1">
                          <Maximize2 className="w-3 h-3" />
                          <span>Click to expand</span>
                        </span>
                      </div>
                    </div>

                    {/* Category badge */}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-white/85 backdrop-blur-md text-blush-900 shadow-sm border border-blush-200/50">
                      {photo.category}
                    </span>
                  </div>

                  {/* Card Caption Info */}
                  <div className="pt-3.5 pb-1 px-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-base font-semibold text-charcoal-800 group-hover:text-blush-800 transition-colors">
                        {photo.title}
                      </h3>
                      <Heart className="w-3.5 h-3.5 text-blush-400 group-hover:text-blush-700 group-hover:fill-current transition-colors shrink-0" />
                    </div>
                    <p className="text-xs text-charcoal-700/70 mt-1 line-clamp-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Integration */}
      <PhotoLightbox
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
