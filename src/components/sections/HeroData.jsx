import { motion } from 'framer-motion';
import { ArrowRight, Activity, Database, Network, Cpu, Code2, Layers, RefreshCw, Settings, Zap, Brain } from 'lucide-react';
import TextScramble from '../ui/TextScramble';
import MovingBorder from '../ui/MovingBorder';

const HeroData = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background px-6 pt-20">
            {/* Rigid Cybernetic Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <motion.div 
                    animate={{ x: [-1000, 1000] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent gpu-accelerated" 
                />
                <motion.div 
                    animate={{ y: [-1000, 1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute top-0 left-2/3 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-secondary to-transparent gpu-accelerated" 
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
                        className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-primary/20 text-gray-300 font-mono text-xs md:text-sm mb-8 backdrop-blur-md shadow-sm cursor-default"
                    >
                        <span className="font-bold text-primary">SHYAMETRICS // SYSTEMS ONLINE</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-white/95"
                    >
                        I engineer intelligent systems that turn raw data into <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            <TextScramble text="decisive action." />
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
                        <a href="#projects">
                            <MovingBorder duration={3000} className="font-sans font-semibold text-sm">
                                <span>Explore Technical Projects</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                            </MovingBorder>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Visual Column (Layered Floating Cards Theme) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-6 xl:col-span-6 relative h-[500px] flex items-center justify-center"
                >
                    <div className="relative w-full h-full max-w-[500px]">
                        
                        {/* Back Layer: Code Terminal Preview */}
                        <motion.div 
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[10%] left-[5%] w-[85%] h-[55%] bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl font-mono text-xs text-gray-300 z-10 gpu-accelerated"
                        >
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-[10px] text-gray-500">pipeline.py</span>
                            </div>
                            <div className="space-y-1.5 text-gray-400">
                                <p><span className="text-pink-400">from</span> sklearn.pipeline <span className="text-pink-400">import</span> Pipeline</p>
                                <p><span className="text-pink-400">from</span> xgboost <span className="text-pink-400">import</span> XGBClassifier</p>
                                <p className="pt-2 text-emerald-400"># Model evaluation & inference</p>
                                <p><span className="text-secondary">model</span> = XGBClassifier(learning_rate=<span className="text-amber-300">0.05</span>)</p>
                                <p><span className="text-secondary">model</span>.fit(X_train, y_train)</p>
                            </div>
                        </motion.div>

                        {/* Front Layer: Live Performance Telemetry Card */}
                        <motion.div 
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[10%] right-[5%] w-[80%] bg-surface/90 backdrop-blur-md border border-primary/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(236,72,153,0.15)] z-20 space-y-4 gpu-accelerated"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Activity size={16} className="text-primary animate-pulse" />
                                    <span className="font-mono text-xs font-bold text-white">MODEL_METRICS</span>
                                </div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    STATUS: OPTIMAL
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 pt-1">
                                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                                    <span className="text-[10px] font-mono text-gray-400 block">PRECISION SCORE</span>
                                    <span className="text-lg font-bold text-white font-mono">98.4%</span>
                                </div>
                                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                                    <span className="text-[10px] font-mono text-gray-400 block">LATENCY (p99)</span>
                                    <span className="text-lg font-bold text-primary font-mono">14ms</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Tech Pill 1 */}
                        <motion.div 
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-[5%] right-[10%] px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg flex items-center gap-2 z-30 gpu-accelerated"
                        >
                            <Brain size={14} className="text-purple-400" />
                            <span className="text-xs font-mono font-bold text-white">XGBoost & ML</span>
                        </motion.div>

                        {/* Floating Tech Pill 2 */}
                        <motion.div 
                            animate={{ y: [8, -8, 8] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-[5%] left-[10%] px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg flex items-center gap-2 z-30 gpu-accelerated"
                        >
                            <Cpu size={14} className="text-secondary" />
                            <span className="text-xs font-mono font-bold text-white">FastAPI Microservices</span>
                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroData;
