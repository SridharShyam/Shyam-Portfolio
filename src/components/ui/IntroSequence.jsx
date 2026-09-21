// Pure pre-configured particle telemetry layout
const PARTICLE_METRICS = Array.from({ length: 10 }, (_, i) => ({
  angle: (i / 10) * 360,
  distance: 140 + ((i * 29) % 75),
  size: 3.5 + ((i * 17) % 3),
}));

const IntroSequence = ({ onComplete, onPortalOpen }) => {
  const [phase, setPhase] = useState('entering');
  const [isVisible, setIsVisible] = useState(true);
  
  // Randomly decide if the coin lands on 'S' (Heads - Shyam) or 'D' (Tails - Data)
  const [coinResult] = useState(() => (typeof window !== 'undefined' && Math.random() > 0.5) ? 'S' : 'D');

  useEffect(() => {
    // Crisp 3s total timing sequence (zero main-thread lag)
    const t1 = setTimeout(() => setPhase('flipping'), 400);
    const t2 = setTimeout(() => setPhase('landing'), 2000); 
    const t3 = setTimeout(() => {
        setPhase('portal');
        if (onPortalOpen) onPortalOpen(coinResult); 
    }, 2800); 
    const t4 = setTimeout(() => setIsVisible(false), 3400);
    const t5 = setTimeout(() => { if (onComplete) onComplete(); }, 3800);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
    };
  }, [onComplete, onPortalOpen, coinResult]);

  // Rotation parameters: 5 spins for S, 5.5 spins for D (360 * 5 = 1800 vs 1800 + 180 = 1980)
  const finalRotateY = coinResult === 'S' ? 1800 : 1980;
  const finalRotateX = 720; // 2 clean tumbles

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden select-none will-change-transform transform-gpu"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Cyber HUD Grid Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

          {/* Top/Bottom HUD Corner Telemetry */}
          <div className="absolute top-6 left-6 font-mono text-[10px] text-white/40 tracking-widest pointer-events-none flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <TextScramble text="SYS // DATA_AI_CORE_ONLINE" speed={30} />
          </div>
          <div className="absolute bottom-6 right-6 font-mono text-[10px] text-white/40 tracking-widest pointer-events-none">
            <TextScramble text="LATENCY: 0.0ms // 60FPS" speed={30} />
          </div>

          {/* Shockwave effect on landing */}
          <AnimatePresence>
            {phase === 'landing' && (
              <motion.div
                className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-[2px] border-white/60 pointer-events-none z-0 transform-gpu"
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 12, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            )}
          </AnimatePresence>

          {/* Particle Burst on Landing */}
          <AnimatePresence>
            {phase === 'landing' && PARTICLE_METRICS.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full pointer-events-none z-10 transform-gpu"
                style={{
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: coinResult === 'S' ? '#00C7B7' : '#EC4899',
                  boxShadow: coinResult === 'S' ? '0 0 10px #00C7B7' : '0 0 10px #EC4899'
                }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ 
                  x: Math.cos(particle.angle * (Math.PI / 180)) * particle.distance, 
                  y: Math.sin(particle.angle * (Math.PI / 180)) * particle.distance,
                  opacity: 0,
                  scale: 0
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
            ))}
          </AnimatePresence>

          {/* Ambient Radial Flare (Hardware Accelerated) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none transform-gpu opacity-40"
            style={{ 
              background: coinResult === 'S' 
                ? 'radial-gradient(circle, rgba(0,199,183,0.3) 0%, rgba(0,0,0,0) 70%)' 
                : 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(0,0,0,0) 70%)'
            }}
            animate={
              phase === 'flipping' 
                ? { scale: [1, 1.4, 1.1], opacity: [0.3, 0.7, 0.4] } 
                : phase === 'landing'
                ? { scale: 1.8, opacity: 0.8 }
                : phase === 'portal'
                ? { scale: 5, opacity: 0 }
                : { scale: 1, opacity: 0.3 }
            }
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Aceternity Style Orbital Laser Ring during Spin */}
          <motion.div
            className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-white/10 pointer-events-none z-10 flex items-center justify-center transform-gpu"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full rounded-full border-t-2 border-r-2 border-primary/80" />
          </motion.div>

          {/* The 3D Coin Core */}
          <motion.div
            className="relative w-28 h-28 md:w-36 md:h-36 z-20 will-change-transform transform-gpu"
            initial={{ scale: 0, opacity: 0, rotateY: 0, rotateX: 0, y: 0 }}
            animate={
              phase === 'entering'
                ? { scale: 1, opacity: 1, rotateY: 0, rotateX: 0, y: 0 }
                : phase === 'flipping'
                ? { 
                    y: -220,
                    rotateY: finalRotateY,
                    rotateX: finalRotateX,
                    opacity: 1,
                    scale: 1.1
                  }
                : phase === 'landing'
                ? { y: 0, rotateY: finalRotateY, rotateX: finalRotateX, opacity: 1, scale: 1 }
                : phase === 'portal'
                ? { y: 0, rotateY: finalRotateY, rotateX: finalRotateX, scale: 3.5, opacity: 0 }
                : {}
            }
            transition={{
              scale: phase === 'entering' ? { duration: 0.4, ease: 'backOut' } : phase === 'portal' ? { duration: 0.6, ease: 'easeInOut' } : { duration: 0.4 },
              y: phase === 'flipping' ? { duration: 1.6, ease: [0.25, 1, 0.5, 1] } : { duration: 0.4, ease: 'bounceOut' },
              rotateY: phase === 'flipping' ? { duration: 1.6, ease: [0.25, 1, 0.5, 1] } : { duration: 0 },
              rotateX: phase === 'flipping' ? { duration: 1.6, ease: [0.25, 1, 0.5, 1] } : { duration: 0 },
              opacity: phase === 'portal' ? { duration: 0.5, ease: 'easeIn' } : { duration: 0.3 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front of the coin (S - Shyam) */}
            <div 
              className="absolute inset-0 rounded-full border-[3px] border-secondary bg-surface flex items-center justify-center overflow-hidden shadow-[0_0_25px_rgba(0,199,183,0.5)]" 
              style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden', 
                transform: 'translateZ(2px)', 
              }}
            >
              <div className="absolute inset-2 rounded-full border border-secondary/40 border-dashed animate-[spin_8s_linear_infinite]" />
              <span className="text-secondary font-heading text-5xl md:text-6xl font-black tracking-tighter drop-shadow-[0_0_10px_rgba(0,199,183,0.8)]">S</span>
            </div>

            {/* Back of the coin (D - Data) */}
            <div 
              className="absolute inset-0 rounded-full border-[3px] border-primary bg-surface flex items-center justify-center overflow-hidden shadow-[0_0_25px_rgba(236,72,153,0.5)]" 
              style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden', 
                transform: 'rotateY(180deg) translateZ(2px)', 
              }}
            >
              <div className="absolute inset-2 rounded-full border border-primary/40 border-dashed animate-[spin_8s_linear_infinite_reverse]" />
              <span className="text-primary font-heading text-5xl md:text-6xl font-black tracking-tighter drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">D</span>
            </div>
          </motion.div>
          
          {/* ReactBits TextScramble Matrix Reveal on Landing */}
          <AnimatePresence>
            {(phase === 'landing' || phase === 'portal') && (
              <motion.div
                className="absolute top-[68%] text-center font-mono text-sm md:text-base font-bold text-white z-20 flex flex-col items-center gap-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="tracking-[0.3em] font-extrabold text-lg md:text-xl">
                  {coinResult === 'S' ? (
                     <TextScramble text="SHYAM // SYSTEMS ONLINE" className="text-secondary drop-shadow-[0_0_12px_rgba(0,199,183,0.6)]" speed={25} />
                  ) : (
                     <TextScramble text="DATA INTELLIGENCE // INITIALIZED" className="text-primary drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]" speed={25} />
                  )}
                </div>
                <div className="text-[11px] text-white/50 tracking-widest uppercase">
                  <TextScramble text="[AI MATRIX & ML MODELS READY]" speed={35} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;

