import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-gray-900/50 px-6 pt-20">

            {/* Background Animated Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
            </div>

            <div className="max-w-5xl mx-auto text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary font-mono text-sm mb-6 backdrop-blur-sm">
                        Available for new opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight tracking-tight">
                        Building Intelligent <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient-x">
                            Systems for the Future
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Data Scientist | AI Enthusiast | Space Technology Explorer. <br />
                        Applying machine learning to solve real-world problems and explore the cosmos.
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
