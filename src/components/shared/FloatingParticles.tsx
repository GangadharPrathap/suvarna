'use client';

import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

export const FloatingParticles: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (reducedMotion) return;

    const colors = [
      'rgba(232, 184, 195, 0.45)', // Soft Rose
      'rgba(214, 183, 122, 0.4)',  // Champagne Gold
      'rgba(248, 232, 236, 0.6)',  // Blush
      'rgba(217, 154, 168, 0.35)', // Dusty Rose
    ];

    const items: Particle[] = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[i % colors.length],
    }));

    setParticles(items);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full blur-[0.5px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 12px ${p.color}`,
            animation: `float ${p.duration}s ease-in-out infinite alternate`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};
