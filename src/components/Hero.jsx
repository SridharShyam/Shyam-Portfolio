import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Download, ExternalLink, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import TerminalModal from './TerminalModal';

const taglines = [
    "Wardrobe intelligence. Health risk signals. Career decision support.",
    "Business question first. Model second. Always.",
    "AI/ML Student · FashionTech · HealthTech · CareerTech"
];

const Hero = () => {
    const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    // Parallax scroll effects
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);
    const textY = useTransform(scrollY, [0, 1000], ["0%", "15%"]);
    const widgetsY = useTransform(scrollY, [0, 1000], ["0%", "40%"]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentString = taglines[currentTaglineIndex];
            
            if (!isDeleting) {
                setDisplayText(currentString.substring(0, displayText.length + 1));
                if (displayText.length === currentString.length) {
                    setTimeout(() => setIsDeleting(true), 2500);
                }
            } else {
                setDisplayText(currentString.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
                }
            }
        }, isDeleting ? 30 : 60);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTaglineIndex]);

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background px-6 pt-20">
            
            {/* 1. Premium Glassmorphic / Data-Flow Background (Optimized for 60fps) */}
            <motion.div style={{ y: backgroundY }} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div 
                    animate={{ opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-[80%] bg-[radial-gradient(ellipse_60%_60%_at_20%_20%,rgba(0,199,183,0.15),transparent)]" 
                />
                <motion.div 
                    animate={{ opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 w-full h-[80%] bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(168,85,247,0.15),transparent)]" 
                />
            </motion.div>

            {/* 2. Floating Decision Widgets (Visible on large screens) */}
            <motion.div style={{ y: widgetsY }} className="absolute inset-0 z-10 pointer-events-none">
                {/* Widget 1 */}
                <motion.div 
                    animate={{ y: [-15, 15, -15], rotate: [-1, 1, -1] }} 
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-[8%] hidden xl:flex flex-col gap-3 p-5 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(16,185,129,0.1)] w-64"
                >
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Health Triage Engine
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Risk Score:</span>
                            <span className="text-white font-medium">89.4%</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-1.5">
                            <div className="bg-emerald-500 h-1.5 rounded-full w-[89%]"></div>
                        </div>
                    </div>
                    <div className="text-xs text-emerald-400 bg-emerald-500/10 py-1.5 px-3 rounded-lg border border-emerald-500/20 inline-block mt-1">
                        Action: Priority Review
                    </div>
                </motion.div>

                {/* Widget 2 */}
                <motion.div 
                    animate={{ y: [15, -15, 15], rotate: [1, -1, 1] }} 
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 right-[8%] hidden xl:flex flex-col gap-3 p-5 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.1)] w-64"
                >
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Career Trajectory
                    </div>
                    <div className="space-y-1">
                        <div className="text-xs text-gray-400">Optimal Path Found</div>
                        <div className="text-sm font-medium text-white">Data Architect</div>
                    </div>
                    <div className="text-xs text-blue-400 bg-blue-500/10 py-1.5 px-3 rounded-lg border border-blue-500/20 inline-block mt-1">
                        Confidence: High (94%)
                    </div>
                </motion.div>
            </motion.div>

            <motion.div style={{ y: textY }} className="max-w-5xl mx-auto text-center z-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs md:text-sm mb-8 backdrop-blur-md shadow-lg">
                        <span className="text-primary font-bold">SHYAMETRICS</span> // AI & Decision Support Systems
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight tracking-tight">
                        I build AI systems that drive decisions <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient-x">
                            not just predictions.
                        </span>
                    </h1>

                    <div className="h-16 md:h-12 mb-10 flex items-center justify-center">
                        <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            {displayText}
                            <motion.span 
                                animate={{ opacity: [1, 0] }} 
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-0.5 h-6 md:h-7 ml-1 bg-primary align-middle"
                            />
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <a
                        href="#projects"
                        className="group px-8 py-4 bg-primary text-background hover:bg-white border border-primary hover:border-white rounded-full font-medium transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,199,183,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                    >
                        View Architecture
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button
                        onClick={() => setIsTerminalOpen(true)}
                        className="group px-8 py-4 bg-[#111] hover:bg-[#1a1a1a] text-white border border-white/10 hover:border-white/30 rounded-full font-medium transition-all flex items-center gap-2"
                    >
                        <Terminal size={18} className="text-primary group-hover:animate-pulse" />
                        Synthesize Profile
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-20 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors cursor-pointer z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={28} />
            </motion.div>

            {/* 3. Live KPI Ticker */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-background/80 backdrop-blur-xl py-3 flex z-30">
                <motion.div 
                    animate={{ x: [0, -1035] }} // Adjust based on content width to loop seamlessly
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-12 pl-12"
                >
                    {[
                        "↓ Reduced Triage Latency by 40%",
                        "↑ Increased Recommendation Accuracy to 92%",
                        "⟳ Real-time Unstructured Data Processing",
                        "⚙️ Automated Decision Architecture",
                        "↓ Reduced Triage Latency by 40%",
                        "↑ Increased Recommendation Accuracy to 92%",
                        "⟳ Real-time Unstructured Data Processing",
                        "⚙️ Automated Decision Architecture"
                    ].map((metric, i) => (
                        <span key={i} className="text-xs md:text-sm font-mono text-gray-400 flex items-center gap-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_10px_rgba(0,199,183,0.5)]"></span>
                            {metric}
                        </span>
                    ))}
                </motion.div>
            </div>

        <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
        </section>
    );
};

export default Hero;
