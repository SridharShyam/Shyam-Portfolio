import { motion } from 'framer-motion';
import { ArrowRight, Layers, Figma, Code2, Sparkles, Brain, Users, Target } from 'lucide-react';
import { useState } from 'react';
import TerminalModal from '../ui/TerminalModal';

const HeroCreative = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background px-6 pt-20">
            {/* Fluid Organic Background */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[60%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
                />
                <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[40%] right-[60%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
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
                        className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs md:text-sm mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,199,183,0.1)] cursor-default"
                    >
                        <span className="font-bold text-secondary drop-shadow-[0_0_8px_rgba(0,199,183,0.8)]">SHYAM // CREATIVE</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-white/95"
                    >
                        Architecting digital experiences driven by <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary drop-shadow-sm">
                            human intuition.
                        </span>
                    </motion.h1>
                        
                    <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="mt-6 text-gray-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
                    >
                        Systems Architect & Creative Thinker. Bridging the gap between raw analytical power and elegant, human-centric design.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 items-start mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#projects"
                            className="group px-8 py-4 text-background bg-secondary hover:bg-white rounded-full font-medium transition-all duration-500 flex items-center gap-2 shadow-[0_0_20px_rgba(0,199,183,0.4)]"
                        >
                            Explore My Work
                            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Visual Column (Glassmorphism UI/UX Theme) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-6 xl:col-span-6 relative h-[500px] flex items-center justify-center"
                >
                    {/* Floating Design Elements */}
                    <div className="relative w-full h-full max-w-[500px]">
                        
                        {/* Main Glass Card (Mock Editor/UI) */}
                        <motion.div 
                            animate={{ y: [-10, 10, -10], rotate: [-1, 1, -1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[15%] left-[10%] w-[80%] h-[60%] bg-surface/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 w-3/4 bg-white/5 rounded" />
                                <div className="h-4 w-1/2 bg-white/5 rounded" />
                                <div className="h-4 w-5/6 bg-white/5 rounded" />
                                <div className="h-4 w-2/3 bg-white/5 rounded" />
                            </div>
                            <div className="mt-8 flex gap-4">
                                <div className="h-10 w-24 rounded-lg bg-secondary/20 border border-secondary/30" />
                                <div className="h-10 w-24 rounded-lg bg-primary/20 border border-primary/30" />
                            </div>
                        </motion.div>

                        {/* Floating Wireframe Card */}
                        <motion.div 
                            animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-[5%] right-[0%] w-[200px] h-[250px] bg-[#050508]/60 backdrop-blur-2xl border border-white/5 rounded-2xl p-5 shadow-2xl flex flex-col justify-between"
                        >
                            <div className="w-full h-24 rounded-xl border border-dashed border-white/20 flex items-center justify-center">
                                <Layers size={24} className="text-gray-500" />
                            </div>
                            <div className="space-y-2 mt-4">
                                <div className="h-2 w-full bg-white/10 rounded-full" />
                                <div className="h-2 w-4/5 bg-white/10 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Floating Interaction Node */}
                        <motion.div
                            animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-[5%] right-[5%] p-4 bg-white/5 backdrop-blur-md rounded-full border border-secondary/20 shadow-[0_0_15px_rgba(0,199,183,0.2)]"
                        >
                            <Figma size={24} className="text-secondary" />
                        </motion.div>

                        {/* Floating Logic Node */}
                        <motion.div
                            animate={{ y: [10, -10, 10], x: [-3, 3, -3] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                            className="absolute -bottom-2 left-0 z-20 w-13 h-13 p-3 rounded-full bg-[#0a2033]/90 border border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.35)] backdrop-blur-md flex items-center justify-center"
                        >
                            <Code2 size={24} className="text-cyan-400" />
                        </motion.div>

                    </div>
                </motion.div>

            </div>

            {/* Live KPI Ticker */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-background/80 backdrop-blur-xl py-3 flex z-30">
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: -1500 }} 
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-12 pl-12"
                >
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="flex gap-12">
                            <span className="text-xs md:text-sm font-mono text-gray-400 flex items-center gap-2">
                                <Sparkles size={14} className="text-secondary" /> Elegant Design Systems
                            </span>
                            <span className="text-xs md:text-sm font-mono text-gray-400 flex items-center gap-2">
                                <Brain size={14} className="text-purple-400" /> Creative Architecture
                            </span>
                            <span className="text-xs md:text-sm font-mono text-gray-400 flex items-center gap-2">
                                <Users size={14} className="text-pink-400" /> Human-Centric AI
                            </span>
                            <span className="text-xs md:text-sm font-mono text-gray-400 flex items-center gap-2">
                                <Target size={14} className="text-emerald-400" /> Strategic Vision
                            </span>
                        </span>
                    ))}
                </motion.div>
            </div>

            <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
        </section>
    );
};

export default HeroCreative;
