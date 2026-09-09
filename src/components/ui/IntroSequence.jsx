import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroSequence = ({ onComplete, onPortalOpen }) => {
  const [phase, setPhase] = useState('entering');
  const [isVisible, setIsVisible] = useState(true);
  
  // Randomly decide if the coin lands on 'S' (Heads) or 'D' (Tails)
  const [coinResult] = useState(() => Math.random() > 0.5 ? 'S' : 'D');

  useEffect(() => {
    // Timing Sequence:
    const t1 = setTimeout(() => setPhase('flipping'), 800);
    const t2 = setTimeout(() => setPhase('landing'), 3200); 
    const t3 = setTimeout(() => {
        setPhase('portal');
        if (onPortalOpen) onPortalOpen(coinResult); 
    }, 4200); 
    const t4 = setTimeout(() => setIsVisible(false), 5000);
    const t5 = setTimeout(() => { if (onComplete) onComplete(); }, 6000);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
    };
  }, [onComplete, onPortalOpen, coinResult]);

  // Determine final rotation based on the random result
  const finalRotateY = coinResult === 'S' ? 1800 : 1980; // 5 spins for S, 5.5 spins for D
  // Tumbling effect on X axis (must land on a multiple of 360 to stay flat)
  const finalRotateX = 720; // 2 full tumbles (reduced from 1440 for smoother rendering)

  // Particle generation for the impact burst - reduced to 8 for performance
  const particles = Array.from({ length: 8 });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }} // Removed heavy blur filter here
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          animate={
              phase === 'landing' 
              ? { x: [0, -5, 5, -5, 5, 0], y: [0, 5, -5, 5, -5, 0] } // Lighter Camera Shake
              : { x: 0, y: 0 }
          }
        >
          {/* Shockwave effect on landing */}
          <AnimatePresence>
            {phase === 'landing' && (
              <motion.div
                className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full border-[2px] border-white/50 pointer-events-none z-0"
                style={{ boxShadow: '0 0 20px rgba(255,255,255,0.5)' }} // Lighter shadow
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 20, opacity: 0, borderWidth: '0px' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            )}
          </AnimatePresence>

          {/* Particle Burst on Landing */}
          <AnimatePresence>
            {phase === 'landing' && particles.map((_, i) => {
                const angle = (i / particles.length) * 360;
                const distance = 200 + Math.random() * 150;
                const size = 3 + Math.random() * 4;
                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white pointer-events-none z-10"
                        style={{ width: size, height: size, boxShadow: '0 0 10px rgba(255,255,255,0.8)' }}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        animate={{ 
                            x: Math.cos(angle * (Math.PI / 180)) * distance, 
                            y: Math.sin(angle * (Math.PI / 180)) * distance,
                            opacity: 0,
                            scale: 0
                        }}
                        transition={{ duration: 1.0, ease: 'easeOut' }}
                    />
                );
            })}
          </AnimatePresence>

          {/* The Coin */}
          <motion.div
            className="relative w-28 h-28 md:w-36 md:h-36 z-20"
            initial={{ scale: 0, opacity: 0, rotateY: 0, rotateX: 0, y: 0 }}
            animate={
              phase === 'entering'
                ? { scale: 1, opacity: 1, rotateY: 0, rotateX: 0, y: 0 }
                : phase === 'flipping'
                ? { 
                    y: [0, -350, 0], // Reduced toss height slightly
                    rotateY: [0, finalRotateY],
                    rotateX: [0, finalRotateX],
                    opacity: 1,
                    scale: 1
                  }
                : phase === 'landing'
                ? { y: 0, rotateY: finalRotateY, rotateX: finalRotateX, opacity: 1, scale: 1 }
                : phase === 'portal'
                ? { y: 0, rotateY: finalRotateY, rotateX: finalRotateX, scale: 60, opacity: 0 } // Reduced portal scale
                : {}
            }
            transition={{
              scale: phase === 'entering' ? { duration: 0.8, ease: 'backOut' } : phase === 'portal' ? { duration: 1.2, ease: 'easeInOut' } : { duration: 0 },
              y: phase === 'flipping' ? { duration: 2.4, ease: 'easeInOut' } : { duration: 0 },
              rotateY: phase === 'flipping' ? { duration: 2.4, ease: 'easeInOut' } : { duration: 0 },
              rotateX: phase === 'flipping' ? { duration: 2.4, ease: 'easeInOut' } : { duration: 0 },
              opacity: phase === 'portal' ? { duration: 1.0, ease: 'easeIn', delay: 0.1 } : { duration: 0.5 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front of the coin (S - Shyam) */}
            <div 
              className="absolute inset-0 rounded-full border-[3px] border-secondary bg-surface flex items-center justify-center overflow-hidden" 
              style={{ backfaceVisibility: 'hidden', boxShadow: '0 0 30px rgba(0,199,183,0.4)' }} // Removed backdrop blur and replaced with solid color + lighter shadow
            >
              <div className="absolute inset-2 rounded-full border border-secondary/40 border-dashed animate-[spin_6s_linear_infinite]" />
              <span className="text-secondary font-heading text-5xl md:text-6xl font-black tracking-tighter" style={{ textShadow: '0 0 10px rgba(0,199,183,0.5)' }}>S</span>
            </div>

            {/* Back of the coin (D - Data) */}
            <div 
              className="absolute inset-0 rounded-full border-[3px] border-primary bg-surface flex items-center justify-center overflow-hidden" 
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', boxShadow: '0 0 30px rgba(236,72,153,0.4)' }} // Removed backdrop blur
            >
               <div className="absolute inset-2 rounded-full border border-primary/40 border-dashed animate-[spin_6s_linear_infinite_reverse]" />
              <span className="text-primary font-heading text-5xl md:text-6xl font-black tracking-tighter" style={{ textShadow: '0 0 10px rgba(236,72,153,0.5)' }}>D</span>
            </div>
          </motion.div>
          
          {/* Cinematic Text Reveal on Landing */}
          <AnimatePresence>
            {phase === 'landing' && (
              <motion.div
                className="absolute top-[65%] text-center tracking-[0.4em] font-mono text-sm md:text-base font-bold text-white z-20"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }} // Removed heavy blur and drop shadow
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {coinResult === 'S' ? (
                   <span className="text-secondary">SHYAM // SYSTEMS ONLINE</span>
                ) : (
                   <span className="text-primary">DATA INTELLIGENCE // INITIALIZED</span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Intense cinematic ambient glow tracking the coin (Optimized: Using radial-gradient instead of blur) */}
          <motion.div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] pointer-events-none"
             style={{ 
                background: coinResult === 'S' 
                    ? 'radial-gradient(circle, rgba(0,199,183,0.15) 0%, rgba(0,0,0,0) 70%)' 
                    : 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(0,0,0,0) 70%)'
             }}
             animate={
                 phase === 'flipping' 
                 ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], y: [0, -350, 0] } 
                 : phase === 'landing'
                 ? { scale: 2.0, opacity: 1, y: 0 }
                 : phase === 'portal'
                 ? { scale: 10, opacity: 0 }
                 : { scale: 1, opacity: 0.5, y: 0 }
             }
             transition={{ duration: phase === 'portal' ? 1.5 : 2.4, ease: 'easeInOut' }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;
