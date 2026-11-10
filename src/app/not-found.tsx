import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-paper-texture text-center">
      <div className="max-w-md p-8 rounded-3xl glass-panel-gold border-gold-shimmer shadow-card">
        <span className="font-serif text-6xl font-extrabold text-blush-700">404</span>
        <h1 className="font-serif text-2xl font-bold text-charcoal-800 mt-2 mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-charcoal-700/70 mb-6">
          The requested page could not be located. Let&apos;s take you back to Suvarna&apos;s birthday celebration!
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blush-800 hover:bg-blush-900 text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-md"
        >
          Return to Birthday Gift
        </Link>
      </div>
    </div>
  );
}
