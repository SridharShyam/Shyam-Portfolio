import { motion } from 'framer-motion';
import { ArrowRight, Layers, Code2, Sparkles, Brain, Cpu, Activity, Database, Network } from 'lucide-react';
import { useState } from 'react';
import TerminalModal from '../ui/TerminalModal';
import TextScramble from '../ui/TextScramble';
import MovingBorder from '../ui/MovingBorder';

const HeroCreative = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background px-6 pt-20">
            {/* Fluid Organic Background - GPU Optimized */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[60%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none gpu-accelerated"
                />
                <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[40%] right-[60%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none gpu-accelerated"
                />
            </div>

            <div className="max-w-7xl mx-auto w-full z-20 relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Text Column */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-left lg:col-span-6 xl:col-span-6"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs md:text-sm mb-8 backdrop-blur-md shadow-sm cursor-default"
                    >
                        <span className="font-bold text-secondary">SHYAM // AI & DATA INNOVATION</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-white/95"
                    >
                        Architecting intelligent systems driven by <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                            <TextScramble text="neural insights." />
                        </span>
                    </motion.h1>
                        
                    <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="mt-6 text-gray-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
                    >
                        Data Scientist & AI Engineer. Bridging the gap between raw analytical power, deep learning architectures, and scalable intelligent decision systems.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 items-start mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <a href="#projects">
                            <MovingBorder duration={3200} className="font-sans font-semibold text-sm">
                                <span>Explore AI Projects</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                            </MovingBorder>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Visual Column (Data & AI Innovation Theme) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-6 xl:col-span-6 relative h-[500px] flex items-center justify-center"
                >
                    {/* Floating AI & Data Elements */}
                    <div className="relative w-full h-full max-w-[500px]">
                        
                        {/* Main Glass Card (AI Config / System Engine) */}
                        <motion.div 
                            animate={{ y: [-10, 10, -10], rotate: [-1, 1, -1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[15%] left-[10%] w-[80%] h-[60%] bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl gpu-accelerated"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            
                            <div className="space-y-4 font-mono text-xs text-gray-400">
                                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                                    <span className="text-secondary font-bold">// AI_INTELLIGENCE.config</span>
                                    <span className="text-[10px] text-gray-500">v3.0.0</span>
                                </div>
                                <div className="p-3 bg-black/40 rounded-lg border border-white/5 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Brain size={14} className="text-secondary" />
                                        <span className="text-gray-300">Neural Model: Fine-Tuned</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Cpu size={14} className="text-primary" />
                                        <span className="text-gray-300">Agentic Workflows: Active</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Sparkles size={14} className="text-amber-400" />
                                        <span className="text-gray-300">Real-Time Inference: Sub-50ms</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Tool Badge 1: Deep Learning & LLMs */}
                        <motion.div 
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-[5%] right-[5%] p-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl flex items-center gap-3 gpu-accelerated"
                        >
                            <div className="p-2 bg-pink-500/20 text-pink-400 rounded-lg">
                                <Brain size={20} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-white">Deep Learning & LLMs</span>
                                <span className="block text-[10px] text-gray-400">PyTorch & Transformers</span>
                            </div>
                        </motion.div>

                        {/* Floating Tool Badge 2: Predictive Analytics */}
                        <motion.div 
                            animate={{ y: [-15, 5, -15] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-[10%] left-[0%] p-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl flex items-center gap-3 z-30 gpu-accelerated"
                        >
                            <div className="p-2 bg-secondary/20 text-secondary rounded-lg">
                                <Activity size={20} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-white">Predictive Analytics</span>
                                <span className="block text-[10px] text-gray-400">Scikit-Learn & XGBoost</span>
                            </div>
                        </motion.div>

                        {/* Floating Tool Badge 3: Agentic AI Systems */}
                        <motion.div 
                            animate={{ y: [8, -8, 8] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-[20%] right-[10%] p-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl flex items-center gap-3 z-20 gpu-accelerated"
                        >
                            <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
                                <Network size={20} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-white">Agentic AI Systems</span>
                                <span className="block text-[10px] text-gray-400">Multi-Agent Networks</span>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

            </div>

            <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
        </section>
    );
};

export default HeroCreative;
