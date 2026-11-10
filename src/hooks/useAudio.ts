'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface AudioControls {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  hasStarted: boolean;
  isLoaded: boolean;
  togglePlay: () => void;
  play: () => Promise<void>;
  pause: () => void;
  toggleMute: () => void;
  setVolume: (val: number) => void;
  playToneEffect: (type: 'chime' | 'candle' | 'confetti' | 'letter') => void;
}

export function useAudio(src: string): AudioControls {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.65);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize HTML5 Audio safely on client
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = volume;

    const handleCanPlay = () => setIsLoaded(true);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      // Audio failed to load (e.g. offline or custom file missing)
      setIsLoaded(false);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  // Handle play
  const play = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } catch {
      // Browser autoplay restriction or file error
      setIsPlaying(false);
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }, [isMuted]);

  const setVolume = useCallback((val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
  }, []);

  // Soft synthesized sound effects using Web Audio API for interactive micro-moments
  const playToneEffect = useCallback((type: 'chime' | 'candle' | 'confetti' | 'letter') => {
    if (typeof window === 'undefined' || isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      if (type === 'chime' || type === 'letter') {
        // Celestial harp/music-box arpeggio
        const frequencies = [523.25, 659.25, 783.99, 1046.5];
        frequencies.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.08);

          gain.gain.setValueAtTime(0, now + i * 0.08);
          gain.gain.linearRampToValueAtTime(0.12 * volume, now + i * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.6);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.65);
        });
      } else if (type === 'candle') {
        // Soft breath / whoosh followed by warm golden chords
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.4);

        gain.gain.setValueAtTime(0.15 * volume, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.8);
      } else if (type === 'confetti') {
        // Festive triple shimmer
        [659.25, 783.99, 987.77, 1318.51].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.05);

          gain.gain.setValueAtTime(0.09 * volume, now + i * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.5);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.05);
          osc.stop(now + i * 0.05 + 0.55);
        });
      }
    } catch {
      // Audio context error ignore safely
    }
  }, [isMuted, volume]);

  return {
    isPlaying,
    isMuted,
    volume,
    hasStarted,
    isLoaded,
    togglePlay,
    play,
    pause,
    toggleMute,
    setVolume,
    playToneEffect,
  };
}
