'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Music, ChevronUp, ChevronDown } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolume: (val: number) => void;
  trackTitle?: string;
  trackArtist?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isPlaying,
  isMuted,
  volume,
  togglePlay,
  toggleMute,
  setVolume,
  trackTitle = 'Birthday Serenade',
  trackArtist = 'Melodic Music Box',
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 select-none">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-2.5 p-3.5 rounded-2xl glass-panel-gold shadow-card w-64 border border-gold-400/40"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-blush-700" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-blush-900">
                  Background Music
                </span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-charcoal-700/60 hover:text-charcoal-900 p-0.5"
                aria-label="Collapse player"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="mb-3">
              <p className="text-xs font-semibold text-charcoal-800 truncate">{trackTitle}</p>
              <p className="text-[11px] text-blush-700/80 truncate">{trackArtist}</p>
            </div>

            {/* Volume slider */}
            <div className="flex items-center gap-2 pt-1 border-t border-blush-200/50">
              <button
                onClick={toggleMute}
                className="text-blush-700 hover:text-blush-900 transition-colors p-1"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-3.5 h-3.5" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full h-1 bg-blush-200 rounded-lg appearance-none cursor-pointer accent-blush-700"
                aria-label="Volume level"
              />
              <span className="text-[10px] text-charcoal-700/60 w-7 text-right">
                {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill Compact Controller */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.03 }}
        className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-white/90 backdrop-blur-md border border-blush-300/80 shadow-card"
      >
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-blush-100 hover:bg-blush-200 flex items-center justify-center text-blush-800 transition-colors border border-gold-400/40 shadow-sm"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
        </button>

        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
          aria-label="Toggle expanded music controls"
        >
          {/* Animated sound bars when playing */}
          <div className="flex items-end gap-0.5 h-4 w-4">
            <span
              className={`w-1 bg-blush-700 rounded-full transition-all duration-300 ${
                isPlaying ? 'h-4 animate-pulse' : 'h-1.5'
              }`}
            />
            <span
              className={`w-1 bg-gold-400 rounded-full transition-all duration-300 ${
                isPlaying ? 'h-3 animate-pulse delay-75' : 'h-2'
              }`}
            />
            <span
              className={`w-1 bg-blush-500 rounded-full transition-all duration-300 ${
                isPlaying ? 'h-4 animate-pulse delay-150' : 'h-1'
              }`}
            />
          </div>

          <div className="hidden sm:block text-left">
            <p className="text-[11px] font-semibold text-charcoal-800 leading-tight">
              {isPlaying ? 'Now Playing' : 'Music Paused'}
            </p>
            <p className="text-[9px] text-blush-700/80 uppercase tracking-wider">
              {isPlaying ? 'Click to expand' : 'Click to listen'}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-blush-700/70 hover:text-blush-900 ml-1"
            aria-label="Expand player"
          >
            {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
