import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-gray-900/50 px-6 pt-20">

            {/* Background 3D Particles */}
            <ParticleBackground />

            <div className="max-w-5xl mx-auto text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary font-mono text-sm mb-6 backdrop-blur-sm">
                        Available for AI/ML & Data Science Opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight tracking-tight">
                        Building Intelligent Systems <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient-x">
                            for Real-World Impact
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed">
                        AI & ML/Data Science Student from Chennai. Focused on designing data-driven systems, machine learning models, and intelligent applications that solve real-world problems beyond notebooks.

                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <a
                        href="#projects"
                        className="group px-8 py-3.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 hover:border-primary rounded-full font-medium transition-all flex items-center gap-2"
                    >
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 rounded-full font-medium transition-all flex items-center gap-2"
                    >
                        Download Resume
                        <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-primary transition-colors cursor-pointer"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={32} />
            </motion.div>

        </section>
    );
};

export default Hero;
