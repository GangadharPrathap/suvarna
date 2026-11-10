import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-paper-texture">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-blush-200" />
        <div className="absolute inset-0 rounded-full border-2 border-gold-400 border-t-transparent animate-spin" />
      </div>
      <p className="mt-4 font-serif text-sm font-semibold tracking-widest text-blush-800 uppercase animate-pulse">
        Preparing Suvarna&apos;s Gift...
      </p>
    </div>
  );
}
