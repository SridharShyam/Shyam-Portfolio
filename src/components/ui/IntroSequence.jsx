import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sequenceSteps = [
  { prefix: '01', label: 'CORE', value: 'Machine Learning & Predictive Systems' },
  { prefix: '02', label: 'DOMAINS', value: 'FashionTech · HealthTech · GovTech' },
  { prefix: '03', label: 'STATUS', value: 'Production Systems Online' },
];

const IntroSequence = ({ onComplete }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Generous, dignified editorial pacing (~3.6s total)
    const t1 = setTimeout(() => setActiveStep(1), 800);
    const t2 = setTimeout(() => setActiveStep(2), 1700);
    const t3 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3600);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (onComplete) onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-16 bg-background select-none overflow-hidden will-change-[opacity]"
    >
          {/* Top Row: Monospace Header + Skip Action */}
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto border-b border-border/80 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-mono font-semibold tracking-wider text-heading uppercase">
                SHYAM SRIDHAR
              </span>
              <span className="text-muted/40 font-mono text-xs">/</span>
              <span className="text-xs font-mono text-muted hidden sm:inline-block">
                PORTFOLIO ARCHITECTURE
              </span>
            </div>

            <button
              onClick={handleSkip}
              className="text-xs font-mono text-muted hover:text-heading transition-colors cursor-pointer px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-elevated shadow-xs"
              aria-label="Skip Introduction"
            >
              Skip Intro [ESC]
            </button>
          </div>

          {/* Central Editorial Hero Focal Point */}
          <div className="w-full max-w-6xl mx-auto my-auto py-12">
            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-3">
                  Applied AI & Decision Support
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-heading tracking-tight leading-[1.08]">
                  Engineering Data Into Action.
                </h1>
              </motion.div>
            </div>

            {/* Stepped Architectural Telemetry Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {sequenceSteps.map((step, idx) => {
                const isReached = activeStep >= idx;
                return (
                  <div
                    key={step.prefix}
                    className="flex flex-col gap-1.5 transition-all duration-500 ease-out"
                    style={{
                      opacity: isReached ? 1 : 0.25,
                      transform: isReached ? 'translateY(0px)' : 'translateY(6px)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-primary font-bold">
                        {step.prefix}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-muted uppercase">
                        {step.label}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-heading font-sans">
                      {step.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Minimal Baseline Status & Progress Indicator */}
          <div className="w-full max-w-6xl mx-auto border-t border-border/80 pt-4 space-y-3">
            <div className="w-full h-[2px] bg-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.2, ease: 'linear' }}
                className="h-full bg-primary"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-muted">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                SYSTEM ACTIVE · CHENNAI, IN
              </span>
              <span>2026 EDITION</span>
            </div>
          </div>
        </motion.div>
  );
};

export default IntroSequence;
