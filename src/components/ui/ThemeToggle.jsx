import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [popping, setPopping] = useState(false);
  const isDark = theme === 'dark';

  // Crisp Web Audio pop sound effect
  const playPopSound = (toLight) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      const startFreq = toLight ? 450 : 800;
      const endFreq = toLight ? 900 : 250;

      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      // Audio fallback
    }
  };

  const handleToggle = () => {
    setPopping(true);
    playPopSound(isDark);
    toggleTheme();
    setTimeout(() => setPopping(false), 450);
  };

  return (
    <motion.button
      onClick={handleToggle}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.04 }}
      aria-label="Toggle Theme Mode"
      className="relative flex items-center gap-2 p-1.5 px-3.5 rounded-full bg-surface border border-border shadow-md backdrop-blur-md cursor-pointer hover:border-primary/50 transition-all duration-300 select-none"
    >
      {/* Subtle Expansion Ring */}
      <AnimatePresence>
        {popping && (
          <motion.span
            initial={{ scale: 0.6, opacity: 0.6 }}
            animate={{ scale: 1.8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`absolute inset-0 rounded-full border pointer-events-none ${
              isDark ? 'border-amber-400/60' : 'border-cyan-400/60'
            }`}
          />
        )}
      </AnimatePresence>

      {/* Sliding Active Pill */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className={`absolute inset-y-1 rounded-full ${
          isDark
            ? 'left-1 w-1/2 bg-primary/15 border border-primary/30'
            : 'right-1 w-1/2 bg-amber-500/15 border border-amber-500/30'
        }`}
      />

      {/* Obsidian (Dark) Option */}
      <div className={`relative z-10 flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono font-bold tracking-wider transition-colors duration-300 ${
        isDark ? 'text-primary' : 'text-muted'
      }`}>
        <Moon size={13} className={isDark ? 'text-cyan-400' : ''} />
        <span className="hidden sm:inline">OBSIDIAN</span>
      </div>

      {/* Solar (Light) Option */}
      <div className={`relative z-10 flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono font-bold tracking-wider transition-colors duration-300 ${
        !isDark ? 'text-amber-500' : 'text-muted'
      }`}>
        <Sun size={13} className={!isDark ? 'text-amber-500' : ''} />
        <span className="hidden sm:inline">SOLAR</span>
      </div>

      <Sparkles size={12} className={`relative z-10 ${isDark ? 'text-purple-400' : 'text-amber-400'} opacity-75`} />
    </motion.button>
  );
};

export default ThemeToggle;
