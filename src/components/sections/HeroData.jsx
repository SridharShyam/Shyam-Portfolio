import { motion } from 'framer-motion';
import { ArrowRight, Activity, Database, Network, Cpu, Code2, Layers } from 'lucide-react';

const HeroData = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background px-6 pt-20">
            {/* Rigid Cybernetic Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <motion.div 
                    animate={{ x: [-1000, 1000] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" 
                />
                <motion.div 
                    animate={{ y: [-1000, 1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute top-0 left-2/3 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-secondary to-transparent" 
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
                        className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-primary/20 text-gray-300 font-mono text-xs md:text-sm mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.1)] cursor-default"
                    >
                        <span className="font-bold text-primary drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">SHYAMETRICS // SYSTEMS ONLINE</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-white/95"
                    >
                        I engineer intelligent systems that turn raw data into <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
                            decisive action.
                        </span>
                    </motion.h1>
                        
                    <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="mt-6 text-gray-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
                    >
                        Designing robust machine learning architectures, probabilistic models, and decision-support logic to solve complex, real-world problems at scale.
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
                            className="group px-8 py-4 text-background bg-primary hover:bg-white rounded-full font-medium transition-all duration-500 flex items-center gap-2 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                        >
                            Explore Technical Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Visual Column (Layered Floating Cards Theme) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-6 xl:col-span-6 relative min-h-[460px] md:min-h-[500px] flex items-center justify-center"
                >
                    {/* Background Radial Glow */}
                    <div className="absolute w-72 h-72 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

                    <div className="relative w-full max-w-[480px] h-[400px] flex items-center justify-center">
                        
                        {/* 1. Main Background Window Card */}
                        <motion.div 
                            animate={{ y: [-6, 6, -6], rotate: [-1, 1, -1] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-4 left-0 right-8 bottom-12 bg-[#0c1020]/80 border border-cyan-500/20 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col justify-between"
                        >
                            {/* Window Top Bar / Controls */}
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                </div>

                                {/* Code / UI Skeleton Lines */}
                                <div className="space-y-3.5">
                                    <div className="h-3.5 w-4/5 bg-white/10 rounded-full" />
                                    <div className="h-3.5 w-2/5 bg-white/10 rounded-full" />
                                    <div className="h-3.5 w-11/12 bg-white/10 rounded-full" />
                                    <div className="h-3.5 w-3/5 bg-white/10 rounded-full" />
                                </div>
                            </div>

                            {/* Action Buttons at bottom of background card */}
                            <div className="flex gap-4 pt-6">
                                <div className="h-11 w-32 bg-[#211e40]/90 border border-purple-500/30 rounded-xl shadow-inner flex items-center justify-center">
                                    <div className="w-12 h-2.5 bg-purple-400/30 rounded-full" />
                                </div>
                                <div className="h-11 w-32 bg-[#122e42]/90 border border-cyan-500/30 rounded-xl shadow-inner flex items-center justify-center">
                                    <div className="w-12 h-2.5 bg-cyan-400/30 rounded-full" />
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Foreground Floating Overlay Card */}
                        <motion.div 
                            animate={{ y: [8, -8, 8], rotate: [1, -1, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute right-0 bottom-2 w-[58%] h-[68%] bg-[#080a14]/95 border border-white/15 rounded-2xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col justify-between z-10"
                        >
                            {/* Dashed Layer Container */}
                            <div className="flex-1 border border-dashed border-white/20 rounded-xl flex items-center justify-center bg-white/[0.02]">
                                <motion.div
                                    animate={{ scale: [0.95, 1.05, 0.95] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400"
                                >
                                    <Layers size={28} className="text-cyan-400" />
                                </motion.div>
                            </div>

                            {/* Bottom Skeleton Lines */}
                            <div className="space-y-2 mt-4">
                                <div className="h-2.5 w-4/5 bg-white/15 rounded-full" />
                                <div className="h-2.5 w-1/2 bg-white/15 rounded-full" />
                            </div>
                        </motion.div>

                        {/* 3. Floating Badge - Figma (Top Right) */}
                        <motion.div
                            animate={{ y: [-10, 10, -10], x: [3, -3, 3] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                            className="absolute top-2 right-2 z-20 w-13 h-13 p-3 rounded-full bg-[#1b1535]/90 border border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.35)] backdrop-blur-md flex items-center justify-center"
                        >
                            <svg className="w-6 h-6 text-purple-400 fill-current" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" />
                                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
                            </svg>
                        </motion.div>

                        {/* 4. Floating Badge - Code Brackets (Bottom Left) */}
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
            <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-primary/20 bg-background/90 py-3 flex z-30">
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: -1500 }} 
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-12 pl-12"
                >
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="flex gap-12">
                            <span className="text-xs md:text-sm font-mono text-primary flex items-center gap-4"><span className="w-1.5 h-1.5 bg-primary shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span>⟳ Continuous Model Evaluation</span>
                            <span className="text-xs md:text-sm font-mono text-primary flex items-center gap-4"><span className="w-1.5 h-1.5 bg-primary shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span>⚙️ Scalable Decision Architecture</span>
                            <span className="text-xs md:text-sm font-mono text-primary flex items-center gap-4"><span className="w-1.5 h-1.5 bg-primary shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span>⚡ Low-Latency Inference</span>
                            <span className="text-xs md:text-sm font-mono text-primary flex items-center gap-4"><span className="w-1.5 h-1.5 bg-primary shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span>🧠 Probabilistic Reasoning</span>
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroData;
