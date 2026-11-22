import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import MovingBorder from '../ui/MovingBorder';
import HeroVisual from '../ui/HeroVisual';

const HeroData = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-transparent px-6 pt-24 pb-16">
            <div className="max-w-7xl mx-auto w-full z-20 relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                
                {/* Left Text Column */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-left lg:col-span-6 xl:col-span-6"
                >
                    <div className="inline-flex items-center gap-2.5 py-1.5 px-3.5 rounded-full bg-surface border border-border text-muted font-mono text-xs mb-6 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-medium text-heading">Data Scientist & AI Systems Engineer</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-[1.12] tracking-tight text-heading">
                        Engineering intelligent systems that turn raw data into{' '}
                        <span className="text-primary font-extrabold">
                            decisive action.
                        </span>
                    </h1>
                        
                    <p className="mt-5 text-text text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                        Designing robust machine learning architectures, probabilistic models, and decision-support logic to solve complex, real-world problems at scale.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center mt-8">
                        <a 
                            href="#projects" 
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-xs cursor-pointer"
                        >
                            <span>Explore Technical Projects</span>
                            <ArrowRight size={16} />
                        </a>
                        <a 
                            href="#journey" 
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border text-heading hover:bg-elevated text-sm font-semibold transition-all shadow-xs cursor-pointer"
                        >
                            <span>Career Timeline</span>
                        </a>
                    </div>

                    {/* Quick Metric Summary */}
                    <div className="grid grid-cols-3 gap-3 mt-10 pt-6 border-t border-border max-w-xl">
                        <div className="p-3.5 rounded-xl bg-surface border border-border shadow-xs">
                            <span className="block text-2xl font-bold font-heading text-primary leading-none mb-1">15+</span>
                            <span className="text-xs font-mono text-muted block leading-tight">AI & ML Repos</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-surface border border-border shadow-xs">
                            <span className="block text-2xl font-bold font-heading text-secondary leading-none mb-1">4+ Yrs</span>
                            <span className="text-xs font-mono text-muted block leading-tight">Continuous Growth</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-surface border border-border shadow-xs">
                            <span className="block text-2xl font-bold font-heading text-emerald-600 dark:text-emerald-400 leading-none mb-1">100%</span>
                            <span className="text-xs font-mono text-muted block leading-tight">Authentic Vault</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Visual Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative"
                >
                    <HeroVisual />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroData;

