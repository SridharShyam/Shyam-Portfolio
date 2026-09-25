import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Brain, Sparkles, X, Check, Play, RefreshCw } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeSwitchGameModal = ({ isOpen, onClose }) => {
    const { theme, toggleTheme, switchCount } = useTheme();
    const isDark = theme === 'dark';
    const targetTheme = isDark ? 'SOLAR (Light Mode)' : 'OBSIDIAN (Dark Mode)';

    const [gameStep, setGameStep] = useState(1); // 1: Data, 2: ML Model, 3: AI Inference, 4: Victory
    const [accuracy, setAccuracy] = useState(85);

    const handleNodeClick = (step) => {
        if (step === gameStep && gameStep < 3) {
            setGameStep(prev => prev + 1);
            setAccuracy(prev => Math.min(100, prev + 7));
        } else if (step === 3 && gameStep === 3) {
            setGameStep(4);
            setAccuracy(99.4);
            
            // Trigger theme flip
            setTimeout(() => {
                toggleTheme();
            }, 300);

            setTimeout(() => {
                setGameStep(1);
                onClose();
            }, 1200);
        }
    };

    const handleInstantSwitch = () => {
        toggleTheme();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg p-6 rounded-3xl bg-surface border border-border shadow-2xl overflow-hidden"
                >
                    {/* Top Ambient Glow */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-500" />

                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                        <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-xl bg-primary/10 border border-primary/30 text-primary">
                                <Brain size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-heading text-heading leading-none">
                                    ML Pipeline Theme Game
                                </h3>
                                <p className="text-xs font-mono text-muted mt-1">
                                    Train model to predict target: <strong className="text-primary">{targetTheme}</strong>
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-2 rounded-xl bg-surface hover:bg-background border border-border text-muted hover:text-heading transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Game Status Board */}
                    <div className="mb-6 p-4 rounded-2xl bg-background/80 border border-border flex items-center justify-between font-mono text-xs">
                        <div>
                            <span className="text-muted block text-[10px] uppercase">Model Accuracy</span>
                            <span className="text-sm font-bold text-emerald-400">{accuracy.toFixed(1)}%</span>
                        </div>
                        <div>
                            <span className="text-muted block text-[10px] uppercase">Pipeline Stage</span>
                            <span className="text-sm font-bold text-primary">
                                {gameStep === 1 ? '1/3 :: DATAINGEST' : gameStep === 2 ? '2/3 :: MODEL TRAIN' : gameStep === 3 ? '3/3 :: AI INFER' : 'COMPLETE!'}
                            </span>
                        </div>
                        <div>
                            <span className="text-muted block text-[10px] uppercase">Iter Count</span>
                            <span className="text-sm font-bold text-heading">#{switchCount + 1}</span>
                        </div>
                    </div>

                    {/* Interactive 3-Node Game Board */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {/* Node 1: Ingest Data */}
                        <motion.button
                            onClick={() => handleNodeClick(1)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className={`p-4 rounded-2xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                                gameStep > 1
                                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                                    : gameStep === 1
                                    ? 'bg-primary/20 border-primary text-primary shadow-[0_0_20px_rgba(0,212,255,0.4)] animate-pulse'
                                    : 'bg-background/40 border-border text-muted opacity-60'
                            }`}
                        >
                            <div className="p-3 rounded-xl bg-background/80 border border-border mb-2">
                                {gameStep > 1 ? <Check size={20} /> : <Database size={20} />}
                            </div>
                            <span className="text-xs font-mono font-bold">1. DATA</span>
                            <span className="text-[10px] text-muted">Ingest Vectors</span>
                        </motion.button>

                        {/* Node 2: Train Model */}
                        <motion.button
                            onClick={() => handleNodeClick(2)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className={`p-4 rounded-2xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                                gameStep > 2
                                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                                    : gameStep === 2
                                    ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] animate-pulse'
                                    : 'bg-background/40 border-border text-muted opacity-60'
                            }`}
                        >
                            <div className="p-3 rounded-xl bg-background/80 border border-border mb-2">
                                {gameStep > 2 ? <Check size={20} /> : <Cpu size={20} />}
                            </div>
                            <span className="text-xs font-mono font-bold">2. MODEL</span>
                            <span className="text-[10px] text-muted">Optimize Weights</span>
                        </motion.button>

                        {/* Node 3: AI Inference / Theme Flip */}
                        <motion.button
                            onClick={() => handleNodeClick(3)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className={`p-4 rounded-2xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                                gameStep === 4
                                    ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                                    : gameStep === 3
                                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(0,212,255,0.4)] animate-pulse'
                                    : 'bg-background/40 border-border text-muted opacity-60'
                            }`}
                        >
                            <div className="p-3 rounded-xl bg-background/80 border border-border mb-2">
                                {gameStep === 4 ? <Sparkles size={20} /> : <Brain size={20} />}
                            </div>
                            <span className="text-xs font-mono font-bold">3. INFER</span>
                            <span className="text-[10px] text-muted">Deploy Theme</span>
                        </motion.button>
                    </div>

                    {/* Instruction Notice */}
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs font-mono text-primary flex items-center gap-2 mb-6">
                        <Play size={14} className="shrink-0 animate-bounce-x" />
                        <span>
                            {gameStep === 1
                                ? 'Click Node 1 (DATA) to ingest dataset...'
                                : gameStep === 2
                                ? 'Click Node 2 (MODEL) to train neural weights...'
                                : gameStep === 3
                                ? 'Click Node 3 (INFER) to execute theme prediction!'
                                : 'Theme Pipeline Execution Completed!'}
                        </span>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-border">
                        <button
                            onClick={handleInstantSwitch}
                            className="px-4 py-2.5 rounded-xl bg-background hover:bg-surface border border-border text-xs font-mono text-muted hover:text-heading transition-colors flex items-center gap-1.5"
                        >
                            <RefreshCw size={13} />
                            <span>Instant Bypass Switch</span>
                        </button>

                        <button
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-mono font-bold transition-all shadow-md"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ThemeSwitchGameModal;
