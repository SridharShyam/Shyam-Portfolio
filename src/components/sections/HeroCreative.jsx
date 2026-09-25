import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TextScramble from '../ui/TextScramble';
import MovingBorder from '../ui/MovingBorder';
import HeroVisual from '../ui/HeroVisual';

const HeroCreative = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background px-6 pt-24 pb-16">
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
                        <span className="font-bold text-secondary">SHYAM // AI & DATA INNOVATION</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-heading"
                    >
                        Architecting intelligent systems driven by <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-purple-500 to-primary">
                            <TextScramble text="neural insights." />
                        </span>
                    </motion.h1>
                        
                    <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="mt-6 text-muted text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl"
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

export default HeroCreative;
