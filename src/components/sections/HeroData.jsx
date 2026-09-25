import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TextScramble from '../ui/TextScramble';
import MovingBorder from '../ui/MovingBorder';
import HeroVisual from '../ui/HeroVisual';

const HeroData = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background px-6 pt-24 pb-16">
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

            <div className="max-w-7xl mx-auto w-full z-20 relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                
                {/* Left Text Column */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-left lg:col-span-6 xl:col-span-6"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-surface/80 border border-border text-muted font-mono text-xs md:text-sm mb-6 backdrop-blur-md shadow-sm cursor-default"
                    >
                        <span className="font-bold text-primary">SHYAMETRICS // SYSTEMS ONLINE</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-heading"
                    >
                        Engineering intelligent systems that turn raw data into <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">
                            <TextScramble text="decisive action." />
                        </span>
                    </motion.h1>
                        
                    <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="mt-6 text-muted text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl"
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

                {/* Right Visual Column (Personal Image + Orbiting Tech Cards) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative"
                >
                    <HeroVisual />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroData;

