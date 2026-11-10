'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Image, Clock, Mail, Cake, Heart, ArrowUp, Menu, X } from 'lucide-react';

interface NavigationProps {
  onBackToTop?: () => void;
}

const navItems = [
  { id: 'reveal', label: 'Celebrate', icon: Sparkles },
  { id: 'gallery', label: 'Memories', icon: Image },
  { id: 'timeline', label: 'Journey', icon: Clock },
  { id: 'letter', label: 'Letter', icon: Mail },
  { id: 'cake', label: 'Wish', icon: Cake },
  { id: 'final', label: 'Surprise', icon: Heart },
];

export const Navigation: React.FC<NavigationProps> = ({ onBackToTop }) => {
  const [activeSection, setActiveSection] = useState<string>('reveal');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);

      const sectionElements = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const top = item.el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    if (onBackToTop) {
      onBackToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation Floating Pill */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border shadow-card transition-all duration-300 ${
          scrolled
            ? 'bg-ivory-100/90 backdrop-blur-md border-blush-300/60 shadow-lg'
            : 'bg-white/80 backdrop-blur-sm border-blush-200/50'
        }`}
      >
        <span className="font-serif font-bold text-blush-800 tracking-wider text-xs px-2.5 py-1">
          SUVARNA ✨
        </span>

        <span className="h-4 w-[1px] bg-blush-200 mx-1" />

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                isActive
                  ? 'text-blush-900 font-semibold'
                  : 'text-charcoal-700/70 hover:text-blush-800 hover:bg-blush-50/60'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeNavBackground"
                  className="absolute inset-0 rounded-full bg-blush-200/60 border border-gold-400/40"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </motion.nav>

      {/* Mobile Top Bar */}
      <div className="fixed top-3 left-4 right-4 z-40 flex items-center justify-between md:hidden">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blush-300/60 shadow-sm">
          <span className="font-serif font-bold text-blush-800 text-xs tracking-wider">
            SUVARNA
          </span>
          <span className="text-[10px] text-gold-500 font-medium">B&apos;DAY</span>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full bg-white/90 backdrop-blur-md border border-blush-300/60 text-blush-800 shadow-sm"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-blush-300/70 shadow-2xl md:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-colors ${
                      isActive
                        ? 'bg-blush-100 text-blush-900 font-semibold border border-gold-400/40'
                        : 'text-charcoal-700 hover:bg-blush-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-blush-600" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/90 backdrop-blur-md border border-blush-300/80 text-blush-800 shadow-card hover:bg-blush-50 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-blush-700" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
