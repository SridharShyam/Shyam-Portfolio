import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Terminal, Heart, Briefcase, Shirt, Activity } from 'lucide-react';
import { useState } from 'react';
import TerminalModal from '../ui/TerminalModal';

const MODES = {
    default: {
        id: 'default',
        color: '0,199,183', // Primary Cyan
        secondaryColor: '168,85,247', // Purple
        title: "I engineer intelligent systems that turn raw data into",
        gradientText: "decisive action.",
        description: "Designing robust machine learning architectures, probabilistic models, and decision-support logic to solve complex, real-world problems at scale.",
        ticker: [
            "⟳ Continuous Model Evaluation",
            "⚙️ Scalable Decision Architecture",
            "⚡ Low-Latency Inference",
            "🧠 Probabilistic Reasoning"
        ]
    },
    health: {
        id: 'health',
        color: '16,185,129', // Emerald Green
        secondaryColor: '5,150,105', 
        title: "AI that flags clinical risk before",
        gradientText: "symptoms appear.",
        description: "Building predictive diagnostic pipelines and clinical decision support engines that process physiological signals in real-time.",
        ticker: [
            "⚕️ 13 Chronic Conditions Tracked",
            "↓ Reduced Diagnostic Latency",
            "↑ 89% Triage Accuracy",
            "⚙️ Clinical Decision Support"
        ]
    },
    career: {
        id: 'career',
        color: '59,130,246', // Blue
        secondaryColor: '37,99,235',
        title: "Modeling career trajectories based on",
        gradientText: "real potential.",
        description: "Developing dynamic path generation models that match talent to opportunity using high-dimensional skill taxonomies.",
        ticker: [
            "🎓 94% Skill Matching Confidence",
            "↑ Improved Upskilling Rates",
            "⟳ Dynamic Path Generation",
            "⚙️ Talent Optimization Engine"
        ]
    },
    fashion: {
        id: 'fashion',
        color: '236,72,153', // Pink
        secondaryColor: '219,39,119',
        title: "Converting wardrobe images into",
        gradientText: "structured intelligence.",
        description: "Applying computer vision and trend forecasting models to digitize wardrobes and generate hyper-personalized curation.",
        ticker: [
            "👗 Automated Wardrobe Digitization",
            "⟳ Trend Forecasting Models",
            "↑ Increased Retention by 25%",
            "⚙️ Hyper-Personalized Curation"
        ]
    }
};

const IntelligenceNetworkUI = ({ activeMode, setActiveMode }) => {
    const isActive = (mode) => activeMode === mode || activeMode === 'default';
    const getActiveColor = () => activeMode === 'default' ? 'rgba(0,199,183' : `rgba(${MODES[activeMode].color}`;

    return (
        <div className="relative w-full aspect-square max-w-[550px] mx-auto">
            <svg width="100%" height="100%" viewBox="0 0 500 500" className="pointer-events-none drop-shadow-2xl">
                <defs>
                    <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={`${getActiveColor()}, 0.4)`} className="transition-all duration-700" />
                        <stop offset="100%" stopColor={`${getActiveColor()}, 0)`} className="transition-all duration-700" />
                    </radialGradient>

                    <radialGradient id="node-bg" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#1a1a24" />
                        <stop offset="100%" stopColor="#020203" />
                    </radialGradient>

                    <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    
                    <filter id="subtle-glow">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Subtle Background Grid/Radar */}
                <g opacity="0.4">
                    <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="2 6" />
                    <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <line x1="30" y1="250" x2="470" y2="250" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                    <line x1="250" y1="30" x2="250" y2="470" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                </g>

                {/* Connection Pathways */}
                <g stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" fill="none">
                    <path d="M 70 250 L 170 250" />
                    <path d="M 230 250 L 310 250" />
                    
                    {/* Branching from Decision Engine */}
                    <path d="M 340 250 C 370 250 370 110 410 110" />
                    <path d="M 340 250 L 410 250" />
                    <path d="M 340 250 C 370 250 370 390 410 390" />
                </g>

                {/* Animated Data Packets (Flowing Streams) */}
                <g filter="url(#neon-glow)">
                    {/* Data -> Core */}
                    <motion.path 
                        d="M 70 250 L 170 250" 
                        stroke="rgba(0,199,183,0.8)" strokeWidth="2" fill="none" 
                        strokeDasharray="4 20"
                        animate={{ strokeDashoffset: [24, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Core -> Decision */}
                    <motion.path 
                        d="M 230 250 L 310 250" 
                        stroke={`${getActiveColor()}, 0.8)`} strokeWidth="2" fill="none" 
                        strokeDasharray="4 20"
                        animate={{ strokeDashoffset: [24, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                        className="transition-all duration-700"
                    />

                    {/* Decision -> Fashion */}
                    <motion.path 
                        d="M 340 250 C 370 250 370 110 410 110" 
                        stroke="rgba(236,72,153,0.8)" strokeWidth="2" fill="none" 
                        strokeDasharray="4 24"
                        animate={{ strokeDashoffset: [28, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ opacity: isActive('fashion') ? 1 : 0.05 }}
                    />
                    {/* Decision -> Career */}
                    <motion.path 
                        d="M 340 250 L 410 250" 
                        stroke="rgba(59,130,246,0.8)" strokeWidth="2" fill="none" 
                        strokeDasharray="4 24"
                        animate={{ strokeDashoffset: [28, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ opacity: isActive('career') ? 1 : 0.05 }}
                    />
                    {/* Decision -> Health */}
                    <motion.path 
                        d="M 340 250 C 370 250 370 390 410 390" 
                        stroke="rgba(16,185,129,0.8)" strokeWidth="2" fill="none" 
                        strokeDasharray="4 24"
                        animate={{ strokeDashoffset: [28, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ opacity: isActive('health') ? 1 : 0.05 }}
                    />
                </g>

                {/* NODES */}
                
                {/* 1. Data Ingestion Node (Square) */}
                <g transform="translate(70, 250)">
                    <rect x="-14" y="-14" width="28" height="28" rx="4" fill="url(#node-bg)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <rect x="-8" y="-8" width="16" height="16" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />
                    <circle r="2" fill="#fff" className="animate-ping" />
                </g>

                {/* 2. Intelligence Core (Massive Center) */}
                <g transform="translate(200, 250)">
                    {/* Ambient Glow */}
                    <circle r="70" fill="url(#core-glow)" />
                    
                    {/* Outer Containment Ring */}
                    <circle r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    
                    {/* Rotating Tech Rings */}
                    <motion.circle 
                        r="35" fill="none" stroke={`${getActiveColor()}, 0.3)`} strokeWidth="2" strokeDasharray="10 20 40 10" 
                        animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
                        className="transition-all duration-700 origin-center" 
                    />
                    <motion.circle 
                        r="25" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" 
                        animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
                        className="origin-center"
                    />
                    
                    {/* Core Processor */}
                    <circle r="12" fill="url(#node-bg)" stroke={`${getActiveColor()}, 0.8)`} strokeWidth="2" filter="url(#subtle-glow)" className="transition-all duration-700" />
                </g>

                {/* 3. Decision Engine (Diamond/Hexagon) */}
                <g transform="translate(325, 250)">
                    <polygon points="0,-18 15.5,-9 15.5,9 0,18 -15.5,9 -15.5,-9" fill="url(#node-bg)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <polygon points="0,-8 7,-4 7,4 0,8 -7,4 -7,-4" fill="none" stroke="rgba(168,85,247,0.6)" strokeWidth="1.5" filter="url(#neon-glow)" />
                </g>

                {/* 4. Output Nodes (Interactive Destinations) */}
                {/* Fashion */}
                <g transform="translate(425, 110)" className="pointer-events-auto cursor-pointer group" onMouseEnter={() => setActiveMode('fashion')} onMouseLeave={() => setActiveMode('default')}>
                    <circle r="32" fill={activeMode === 'fashion' ? 'rgba(236,72,153,0.1)' : 'url(#node-bg)'} />
                    <circle r="32" fill="none" stroke={activeMode === 'fashion' ? 'rgba(236,72,153,0.8)' : 'rgba(255,255,255,0.1)'} strokeWidth={activeMode === 'fashion' ? 2 : 1} className="transition-all duration-500" />
                    <motion.circle r="38" fill="none" stroke="rgba(236,72,153,0.3)" strokeWidth="1" strokeDasharray="4 8" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ opacity: activeMode === 'fashion' ? 1 : 0 }} className="origin-center" />
                </g>
                
                {/* Career */}
                <g transform="translate(425, 250)" className="pointer-events-auto cursor-pointer group" onMouseEnter={() => setActiveMode('career')} onMouseLeave={() => setActiveMode('default')}>
                    <circle r="32" fill={activeMode === 'career' ? 'rgba(59,130,246,0.1)' : 'url(#node-bg)'} />
                    <circle r="32" fill="none" stroke={activeMode === 'career' ? 'rgba(59,130,246,0.8)' : 'rgba(255,255,255,0.1)'} strokeWidth={activeMode === 'career' ? 2 : 1} className="transition-all duration-500" />
                    <motion.circle r="38" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1" strokeDasharray="4 8" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ opacity: activeMode === 'career' ? 1 : 0 }} className="origin-center" />
                </g>
                
                {/* Health */}
                <g transform="translate(425, 390)" className="pointer-events-auto cursor-pointer group" onMouseEnter={() => setActiveMode('health')} onMouseLeave={() => setActiveMode('default')}>
                    <circle r="32" fill={activeMode === 'health' ? 'rgba(16,185,129,0.1)' : 'url(#node-bg)'} />
                    <circle r="32" fill="none" stroke={activeMode === 'health' ? 'rgba(16,185,129,0.8)' : 'rgba(255,255,255,0.1)'} strokeWidth={activeMode === 'health' ? 2 : 1} className="transition-all duration-500" />
                    <motion.circle r="38" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1" strokeDasharray="4 8" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ opacity: activeMode === 'health' ? 1 : 0 }} className="origin-center" />
                </g>
            </svg>

            {/* Labels and Icons Overlays */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Node Labels */}
                <div className="absolute left-[14%] top-[56%] -translate-x-1/2 text-center">
                    <span className="text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase">Data</span>
                </div>
                <div className="absolute left-[40%] top-[61%] -translate-x-1/2 text-center">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase transition-colors duration-700" style={{ color: `${getActiveColor()}, 0.7)`}}>Intelligence</span>
                </div>
                <div className="absolute left-[65%] top-[57%] -translate-x-1/2 text-center">
                    <span className="text-[9px] text-purple-400/70 font-bold tracking-[0.2em] uppercase">Decision</span>
                </div>

                {/* Output Icons */}
                <div className="absolute left-[85%] top-[22%]">
                    <div className="absolute -translate-x-1/2 -translate-y-1/2">
                        <Shirt className={activeMode === 'fashion' ? 'text-pink-300 drop-shadow-[0_0_10px_rgba(236,72,153,1)]' : 'text-gray-500'} size={22} strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-[28px] -translate-x-1/2 w-[120px] text-center">
                        <span className={`text-[8px] font-bold tracking-[0.2em] uppercase ${activeMode === 'fashion' ? 'text-pink-300' : 'text-gray-600'}`}>Fashion</span>
                    </div>
                </div>
                <div className="absolute left-[85%] top-[50%]">
                    <div className="absolute -translate-x-1/2 -translate-y-1/2">
                        <Briefcase className={activeMode === 'career' ? 'text-blue-300 drop-shadow-[0_0_10px_rgba(59,130,246,1)]' : 'text-gray-500'} size={22} strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-[28px] -translate-x-1/2 w-[120px] text-center">
                        <span className={`text-[8px] font-bold tracking-[0.2em] uppercase ${activeMode === 'career' ? 'text-blue-300' : 'text-gray-600'}`}>Career</span>
                    </div>
                </div>
                <div className="absolute left-[85%] top-[78%]">
                    <div className="absolute -translate-x-1/2 -translate-y-1/2">
                        <Heart className={activeMode === 'health' ? 'text-emerald-300 drop-shadow-[0_0_10px_rgba(16,185,129,1)]' : 'text-gray-500'} size={22} strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-[28px] -translate-x-1/2 w-[120px] text-center">
                        <span className={`text-[8px] font-bold tracking-[0.2em] uppercase ${activeMode === 'health' ? 'text-emerald-300' : 'text-gray-600'}`}>Health</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FloatingCards = ({ activeMode, config }) => {
    return (
        <AnimatePresence>
            <motion.div
                key={`card1-${activeMode}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute top-4 -left-4 md:-left-12 lg:-left-16 z-40 bg-[#050508]/60 backdrop-blur-xl border p-5 rounded-2xl flex flex-col gap-3 w-52 pointer-events-none"
                style={{ 
                    borderColor: `rgba(255, 255, 255, 0.05)`, 
                    boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)` 
                }}
            >
                <div className="flex items-center justify-between">
                    <span className="text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase">
                        {activeMode === 'health' ? 'Diagnostics' : activeMode === 'career' ? 'Trajectory' : activeMode === 'fashion' ? 'Trend Match' : 'System I/O'}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: `rgb(${config.color})`, boxShadow: `0 0 10px rgb(${config.color})` }} />
                </div>
                <div className="flex items-end gap-1.5 h-12 mt-2">
                    {[...Array(10)].map((_, i) => (
                        <motion.div 
                            key={i}
                            initial={{ height: "10%" }}
                            animate={{ height: `${[45, 82, 38, 90, 55, 75, 42, 88, 60, 70][i]}%` }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1, ease: "easeInOut" }}
                            className="w-full rounded-full"
                            style={{ backgroundColor: activeMode === 'default' ? '#333' : `rgba(${config.color}, ${0.3 + (i/20)})` }}
                        />
                    ))}
                </div>
            </motion.div>
            
            <motion.div
                key={`card2-${activeMode}`}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="absolute bottom-4 -left-4 md:-left-12 lg:-left-16 z-40 bg-[#050508]/60 backdrop-blur-xl border p-4 rounded-2xl flex flex-col gap-4 w-48 pointer-events-none"
                style={{ 
                    borderColor: `rgba(255, 255, 255, 0.05)`, 
                    boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)` 
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl border border-white/5 bg-black/50">
                        <Activity size={16} style={{ color: `rgb(${config.color})` }} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase">Confidence</span>
                        <span className="text-sm font-bold text-white tracking-tight">
                            {activeMode === 'health' ? '99.4%' : activeMode === 'career' ? 'Optimized' : activeMode === 'fashion' ? '96% Fit' : 'Standby'}
                        </span>
                    </div>
                </div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: activeMode === 'career' ? "85%" : activeMode === 'fashion' ? "92%" : "98%" }}
                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full relative"
                        style={{ backgroundColor: `rgb(${config.color})` }}
                    >
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/50 blur-[2px]"></div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

const Hero = () => {
    const [activeMode, setActiveMode] = useState('default');
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    
    const currentConfig = MODES[activeMode];

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background px-6 pt-20">
            
            <div className="max-w-7xl mx-auto w-full z-20 relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-left lg:col-span-7 xl:col-span-7"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs md:text-sm mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-default transition-shadow duration-500"
                        style={{ boxShadow: activeMode !== 'default' ? `0 0 25px rgba(${currentConfig.color},0.2)` : undefined }}
                    >
                        <span className="font-bold transition-colors duration-500" style={{ color: `rgb(${currentConfig.color})`, textShadow: `0 0 8px rgba(${currentConfig.color}, 0.8)`}}>SHYAMETRICS</span> // AI & Decision Support Systems
                    </motion.div>
                    
                        <AnimatePresence mode="wait">
                            <motion.h1 
                                key={`h1-${activeMode}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.1] tracking-tight text-white/95"
                            >
                                {currentConfig.title} <br className="hidden md:block" />
                                <span 
                                    className="text-transparent bg-clip-text drop-shadow-sm transition-all duration-500"
                                    style={{ 
                                        backgroundImage: `linear-gradient(to right, rgb(${currentConfig.color}), rgb(${currentConfig.secondaryColor}))`
                                    }}
                                >
                                    {currentConfig.gradientText}
                                </span>
                            </motion.h1>
                        </AnimatePresence>
                        
                        <AnimatePresence mode="wait">
                            <motion.p 
                                key={`desc-${activeMode}`}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="mt-6 text-gray-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
                            >
                                {currentConfig.description}
                            </motion.p>
                        </AnimatePresence>

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
                            className="group px-8 py-4 text-background hover:bg-white rounded-full font-medium transition-all duration-500 flex items-center gap-2"
                            style={{ 
                                backgroundColor: `rgb(${currentConfig.color})`, 
                                boxShadow: `0 0 20px rgba(${currentConfig.color},0.4)`,
                            }}
                        >
                            Explore My Systems
                            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setIsTerminalOpen(true)}
                            className="group px-8 py-4 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/10 rounded-full font-medium transition-all duration-500 flex items-center gap-2 shadow-lg"
                        >
                            <Terminal size={18} className="group-hover:animate-pulse transition-colors duration-500" style={{ color: `rgb(${currentConfig.color})`, filter: `drop-shadow(0 0 5px rgba(${currentConfig.color}, 0.8))`}} />
                            See How I Build
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl -z-10" />
                    <IntelligenceNetworkUI activeMode={activeMode} setActiveMode={setActiveMode} />
                    <FloatingCards activeMode={activeMode} config={currentConfig} />
                </motion.div>

            </div>

            <motion.div
                className="absolute bottom-20 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors cursor-pointer z-20 hidden md:block"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={28} />
            </motion.div>

            {/* Live KPI Ticker */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-background/80 backdrop-blur-xl py-3 flex z-30">
                <motion.div 
                    key={activeMode} 
                    initial={{ x: 0 }}
                    animate={{ x: -1500 }} 
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-12 pl-12"
                >
                    {[...currentConfig.ticker, ...currentConfig.ticker, ...currentConfig.ticker, ...currentConfig.ticker].map((metric, i) => (
                        <span key={i} className="text-xs md:text-sm font-mono text-gray-400 flex items-center gap-4 transition-colors duration-500">
                            <span className="w-1.5 h-1.5 rounded-full shadow-lg transition-colors duration-500" style={{ backgroundColor: `rgba(${currentConfig.color}, 0.8)`, boxShadow: `0 0 10px rgba(${currentConfig.color}, 0.5)`}}></span>
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
