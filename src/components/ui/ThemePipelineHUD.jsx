import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Brain, CheckCircle2, Sparkles, X, Terminal } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemePipelineHUD = () => {
    const { pipelineState, easterEggActive, dismissEasterEgg, switchCount } = useTheme();

    // Auto dismiss easter egg after 5s
    useEffect(() => {
        if (easterEggActive) {
            const timer = setTimeout(() => {
                dismissEasterEgg();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [easterEggActive, dismissEasterEgg]);

    return (
        <>
            {/* Fast 500ms Data -> ML -> AI Theme Switch Pipeline Banner */}
            <AnimatePresence>
                {pipelineState.active && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-1/2 -translate-x-1/2 z-[90] w-[90%] max-w-md p-3 px-4 rounded-2xl bg-surface/95 backdrop-blur-xl border border-primary/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] select-none pointer-events-none"
                    >
                        <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-heading">
                                <Terminal size={14} className="text-primary animate-pulse" />
                                <span>PIPELINE MODE SWITCH</span>
                            </div>
                            <div className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                                {pipelineState.targetTheme === 'light' ? 'TARGET: SOLAR' : 'TARGET: OBSIDIAN'}
                            </div>
                        </div>

                        {/* Animated Pipeline Stage Indicators */}
                        <div className="grid grid-cols-4 gap-1.5 text-[10px] font-mono">
                            {/* Step 1: DATA */}
                            <div className={`p-1.5 rounded-lg border text-center transition-all ${
                                pipelineState.step === 'DATA'
                                    ? 'bg-primary/20 border-primary text-primary font-bold shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                                    : 'bg-background/60 border-border text-muted'
                            }`}>
                                <div className="flex items-center justify-center gap-1 mb-0.5">
                                    <Database size={10} />
                                    <span>DATA</span>
                                </div>
                                <div className="text-[8px] opacity-75">STREAM</div>
                            </div>

                            {/* Step 2: ML MODEL */}
                            <div className={`p-1.5 rounded-lg border text-center transition-all ${
                                pipelineState.step === 'ML'
                                    ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                                    : 'bg-background/60 border-border text-muted'
                            }`}>
                                <div className="flex items-center justify-center gap-1 mb-0.5">
                                    <Cpu size={10} />
                                    <span>MODEL</span>
                                </div>
                                <div className="text-[8px] opacity-75">FEATURE</div>
                            </div>

                            {/* Step 3: AI INFERENCE */}
                            <div className={`p-1.5 rounded-lg border text-center transition-all ${
                                pipelineState.step === 'AI'
                                    ? 'bg-secondary/20 border-secondary text-secondary font-bold shadow-[0_0_10px_rgba(236,72,153,0.3)]'
                                    : 'bg-background/60 border-border text-muted'
                            }`}>
                                <div className="flex items-center justify-center gap-1 mb-0.5">
                                    <Brain size={10} />
                                    <span>AI INFER</span>
                                </div>
                                <div className="text-[8px] opacity-75">PREDICT</div>
                            </div>

                            {/* Step 4: THEME ACTION */}
                            <div className={`p-1.5 rounded-lg border text-center transition-all ${
                                pipelineState.step === 'DONE'
                                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                                    : 'bg-background/60 border-border text-muted'
                            }`}>
                                <div className="flex items-center justify-center gap-1 mb-0.5">
                                    <CheckCircle2 size={10} />
                                    <span>ACTION</span>
                                </div>
                                <div className="text-[8px] opacity-75">100% DONE</div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-background/80 h-1 rounded-full mt-2 overflow-hidden border border-border">
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{
                                    width: pipelineState.step === 'DATA' ? '30%' : pipelineState.step === 'ML' ? '65%' : pipelineState.step === 'AI' ? '90%' : '100%'
                                }}
                                transition={{ duration: 0.15 }}
                                className="h-full bg-gradient-to-r from-primary via-purple-500 to-emerald-400"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Iterative Curiosity Easter Egg Toast (Triggers on 4th, 8th, etc. switch) */}
            <AnimatePresence>
                {easterEggActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-6 right-6 z-[100] max-w-sm p-4 rounded-2xl bg-surface/95 backdrop-blur-2xl border border-amber-500/40 shadow-2xl overflow-hidden"
                    >
                        {/* Glow Ambient Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-purple-500 to-cyan-400" />

                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                                <Sparkles size={18} />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1 mb-1">
                                    <span className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider">
                                        MODEL ADAPTATION DETECTED
                                    </span>
                                    <button
                                        onClick={dismissEasterEgg}
                                        className="text-muted hover:text-heading transition-colors p-0.5 rounded hover:bg-background/50"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>

                                <p className="text-xs font-mono text-muted mb-1">
                                    You've switched environments <strong className="text-heading">{switchCount} times</strong>.
                                </p>

                                <div className="p-2 rounded-lg bg-background/80 border border-border text-xs text-heading font-sans italic">
                                    "Your curiosity has a high iteration rate."
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ThemePipelineHUD;
