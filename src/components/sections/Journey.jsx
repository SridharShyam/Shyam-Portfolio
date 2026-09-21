import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Award, Users, Lightbulb, TrendingUp, Globe, Rocket, Sparkles, 
    BookOpen, Code, Zap, Star, MapPin, ChevronRight, X, Calendar, 
    Layers, Filter, CheckCircle2, ShieldCheck, ExternalLink, Maximize2, 
    FileCheck, BarChart2, Building2, ArrowLeft, ArrowRight, RotateCw
} from 'lucide-react';
import notionData from '../../data/notion-data.json';

const iconMap = {
    Award, Users, Lightbulb, TrendingUp, Globe, Rocket, Sparkles, BookOpen, Code, Zap, Star
};

const categoryColorMap = {
    'Foundations': 'from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-300',
    'Experience': 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300',
    'Leadership': 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300',
    'Global': 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300',
};

const executiveStats = [
    { label: 'Growth Journey', value: '4+ Years', sub: 'Continuous AI & ML Exploration', icon: Calendar, color: 'text-secondary' },
    { label: 'Global Immersion', value: '1 Delegated', sub: 'SEC × UTP, Malaysia Exchange', icon: Globe, color: 'text-amber-400' },
    { label: 'Strategic Leadership', value: '2 Key Roles', sub: 'YUVA Chair & Chief Advisor', icon: Users, color: 'text-purple-400' },
    { label: 'Recognition', value: '1 Finalist', sub: 'TNStartify 3.0 Startup Innovation', icon: Award, color: 'text-emerald-400' },
];

const categories = ['All', 'Leadership', 'Experience', 'Global', 'Foundations'];

const Journey = () => {
    const containerRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [flippingCardId, setFlippingCardId] = useState(null);
    const [activeMilestone, setActiveMilestone] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [activeShowcaseTab, setActiveShowcaseTab] = useState('all');

    // Map timeline items from Notion data
    const rawTimeline = notionData.journey.map((item, index) => ({
        ...item,
        stepNumber: String(index + 1).padStart(2, '0'),
        index,
        icon: iconMap[item.iconString] || Star
    }));

    // Filter items based on selected category
    const filteredTimeline = selectedCategory === 'All' 
        ? rawTimeline 
        : rawTimeline.filter(item => item.category === selectedCategory);

    // Chunk timeline into rows of 3 for desktop snake grid
    const chunkedTimeline = [];
    for (let i = 0; i < filteredTimeline.length; i += 3) {
        chunkedTimeline.push(filteredTimeline.slice(i, i + 3));
    }

    // Trigger 3D pop, spin & morph sequence before launching showcase page
    const handleCardClick = (item) => {
        if (flippingCardId) return; // prevent duplicate clicks
        setFlippingCardId(item.stepNumber);
        
        setTimeout(() => {
            setActiveMilestone(item);
            setFlippingCardId(null);
            setActiveShowcaseTab('all');
        }, 420); // match spin animation duration
    };

    const navigateMilestone = (direction) => {
        if (!activeMilestone) return;
        const currentIndex = rawTimeline.findIndex(m => m.stepNumber === activeMilestone.stepNumber);
        if (currentIndex === -1) return;

        let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex < 0) nextIndex = rawTimeline.length - 1;
        if (nextIndex >= rawTimeline.length) nextIndex = 0;

        setActiveMilestone(rawTimeline[nextIndex]);
    };

    return (
        <section id="journey" className="py-24 bg-background relative overflow-hidden">
            {/* Background Glow Orbs - GPU Optimized */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none gpu-accelerated" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none gpu-accelerated" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="mb-12 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs mb-4 backdrop-blur-md">
                        <Zap size={14} className="text-secondary" />
                        CAREER TIMELINE // 3D EXPLORER & VERIFIED PROOFS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                        Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-purple-400 to-pink-500">Leadership Timeline</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed mt-2">
                        Click any milestone card to trigger a 3D spin & pop animation, opening a dedicated showcase page with verified proof documents and hard metrics.
                    </p>
                </motion.div>

                {/* Executive Summary Stats Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
                >
                    {executiveStats.map((stat, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-start gap-3.5 group hover:border-white/20 transition-all duration-300 gpu-accelerated">
                            <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon size={20} />
                            </div>
                            <div>
                                <span className="text-2xl md:text-3xl font-extrabold text-white font-heading block leading-none mb-1">
                                    {stat.value}
                                </span>
                                <span className="text-xs font-semibold text-gray-300 block">{stat.label}</span>
                                <span className="text-[10px] text-gray-500 block truncate mt-0.5">{stat.sub}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Category Filter Pills */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-wrap items-center gap-2 mb-14 pb-2 border-b border-white/5"
                >
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mr-2">
                        <Filter size={14} className="text-secondary" />
                        <span>FILTER:</span>
                    </div>
                    {categories.map((cat) => {
                        const isActive = selectedCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                                    isActive 
                                        ? 'bg-secondary text-black font-bold shadow-[0_0_15px_rgba(236,72,153,0.4)] scale-105' 
                                        : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Snake Grid Timeline Container */}
                <div ref={containerRef} className="space-y-12 md:space-y-16 relative">
                    
                    {/* Mobile-only continuous vertical liquid line */}
                    <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-white/5 rounded-full z-0 overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-primary to-transparent opacity-80"
                            animate={{ top: ["-25%", "100%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    {chunkedTimeline.map((chunk, rowIndex) => {
                        const isReverseRow = rowIndex % 2 !== 0;
                        const isLastRow = rowIndex === chunkedTimeline.length - 1;
                        
                        let horizontalLeft = '16.66%';
                        let horizontalRight = '16.66%';
                        let showHorizontal = true;

                        if (isLastRow) {
                            if (chunk.length === 1) showHorizontal = false;
                            else if (chunk.length === 2) {
                                if (isReverseRow) horizontalLeft = '50%';
                                else horizontalRight = '50%';
                            }
                        }

                        const dropDownPosition = !isReverseRow ? { right: '16.66%' } : { left: '16.66%' };
                        const dropInPosition = isReverseRow ? { right: '16.66%' } : { left: '16.66%' };
                        
                        return (
                            <div key={rowIndex} className={`flex flex-col md:flex-row gap-8 relative ${isReverseRow ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Horizontal connecting line (Desktop only) */}
                                {showHorizontal && (
                                    <div 
                                        className="hidden md:block absolute top-1/2 h-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-pink-500/10 -translate-y-1/2 rounded-full overflow-hidden z-0"
                                        style={{ left: horizontalLeft, right: horizontalRight }}
                                    >
                                        <motion.div 
                                            className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent ${isReverseRow ? 'via-secondary' : 'via-primary'} to-transparent opacity-80`}
                                            animate={{ left: isReverseRow ? ["100%", "-50%"] : ["-50%", "100%"] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                )}
                                
                                {/* Vertical Drop-In from previous row (Desktop only) */}
                                {rowIndex > 0 && (
                                    <div 
                                        className="hidden md:block absolute top-[-2rem] w-1 h-[calc(50%+2rem)] overflow-hidden z-0"
                                        style={{ ...dropInPosition, backgroundColor: isReverseRow ? 'rgba(236,72,153,0.1)' : 'rgba(0,199,183,0.1)' }}
                                    >
                                        <motion.div 
                                            className="absolute left-0 right-0 h-full opacity-80"
                                            style={{ background: `linear-gradient(to bottom, transparent, ${isReverseRow ? '#ec4899' : '#00c7b7'}, transparent)` }}
                                            animate={{ top: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                )}

                                {/* Vertical Drop-Down to next row (Desktop only) */}
                                {!isLastRow && (
                                    <div 
                                        className="hidden md:block absolute top-1/2 w-1 h-[calc(50%+2rem)] overflow-hidden z-0"
                                        style={{ ...dropDownPosition, backgroundColor: !isReverseRow ? 'rgba(236,72,153,0.1)' : 'rgba(0,199,183,0.1)' }}
                                    >
                                        <motion.div 
                                            className="absolute left-0 right-0 h-full opacity-80"
                                            style={{ background: `linear-gradient(to bottom, transparent, ${!isReverseRow ? '#ec4899' : '#00c7b7'}, transparent)` }}
                                            animate={{ top: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                )}

                                {chunk.map((item, colIndex) => {
                                    const actualIndex = rowIndex * 3 + colIndex;
                                    const delay = actualIndex * 0.06;
                                    const isFlipping = flippingCardId === item.stepNumber;

                                    if (item.isFuture) {
                                        return (
                                            <motion.div
                                                key={actualIndex}
                                                className="w-full md:w-1/3 flex flex-col justify-center items-center text-center p-6 relative z-10 pl-16 md:pl-6 cursor-pointer gpu-accelerated"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true, margin: "-30px" }}
                                                transition={{ duration: 0.4, delay }}
                                                onClick={() => handleCardClick(item)}
                                            >
                                                <div className="w-16 h-16 rounded-full bg-background border-2 border-secondary animate-pulse shadow-[0_0_20px_rgba(236,72,153,0.5)] flex items-center justify-center text-secondary mb-4">
                                                    <item.icon size={28} />
                                                </div>
                                                <span className="text-[10px] font-mono font-bold text-secondary tracking-widest uppercase mb-1">
                                                    STEP {item.stepNumber} // NEXT FRONTIER
                                                </span>
                                                <h3 className="font-heading font-bold text-2xl tracking-wide uppercase italic text-secondary mb-2">{item.title}</h3>
                                                <p className="text-gray-500 text-xs md:text-sm">{item.description}</p>
                                            </motion.div>
                                        );
                                    }

                                    return (
                                        <motion.div
                                            key={actualIndex}
                                            className="w-full md:w-1/3 relative z-10 pl-16 md:pl-0"
                                            initial={{ opacity: 0, y: 16 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-30px" }}
                                            transition={{ duration: 0.4, delay }}
                                            style={{ perspective: '1200px' }}
                                        >
                                            {/* Glowing burst ring on flip click */}
                                            <AnimatePresence>
                                                {isFlipping && (
                                                    <motion.div 
                                                        className="absolute inset-0 rounded-2xl border-2 border-secondary shadow-[0_0_50px_rgba(0,199,183,0.9)] pointer-events-none z-30"
                                                        initial={{ scale: 0.95, opacity: 1 }}
                                                        animate={{ scale: 1.35, opacity: 0 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.42, ease: 'easeOut' }}
                                                    />
                                                )}
                                            </AnimatePresence>

                                            <motion.div 
                                                animate={
                                                    isFlipping
                                                        ? { 
                                                            scale: [1, 1.14, 0.94, 1.08],
                                                            rotateY: [0, 180, 360],
                                                            rotateZ: [0, -6, 6, 0],
                                                            y: [0, -22, -6, 0]
                                                          }
                                                        : { scale: 1, rotateY: 0, rotateZ: 0, y: 0 }
                                                }
                                                transition={
                                                    isFlipping
                                                        ? { duration: 0.42, ease: [0.34, 1.56, 0.64, 1] }
                                                        : { duration: 0.3, ease: 'easeOut' }
                                                }
                                                whileHover={!isFlipping ? { y: -6, scale: 1.02 } : {}}
                                                onClick={() => handleCardClick(item)}
                                                className="h-full flex flex-col p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-secondary/40 transition-colors duration-300 group shadow-lg relative z-10 overflow-hidden cursor-pointer gpu-accelerated"
                                                style={{ transformStyle: 'preserve-3d' }}
                                            >
                                                {/* FRONT FACE OF THE CARD */}
                                                <div className="flex flex-col h-full" style={{ backfaceVisibility: 'hidden' }}>
                                                    {/* Ambient Corner Glow */}
                                                    <div className="absolute top-0 right-0 w-28 h-28 bg-secondary/5 rounded-bl-full group-hover:bg-secondary/15 transition-colors pointer-events-none" />

                                                    {/* Top Meta Bar */}
                                                    <div className="flex items-center justify-between mb-3.5 relative z-10">
                                                        <div className="flex flex-wrap items-center gap-1.5">
                                                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-secondary border border-secondary/20">
                                                                #{item.stepNumber}
                                                            </span>
                                                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-gradient-to-r ${categoryColorMap[item.category] || 'text-gray-300'} border`}>
                                                                {item.category?.toUpperCase() || 'MILESTONE'}
                                                            </span>
                                                            {item.proof && (
                                                                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 shadow-sm">
                                                                    <ShieldCheck size={10} className="text-emerald-400" />
                                                                    VERIFIED
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
                                                            <item.icon size={16} />
                                                        </div>
                                                    </div>

                                                    {/* Year Pill & Location */}
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-secondary font-mono text-xs font-bold px-2.5 py-0.5 bg-secondary/10 rounded-full border border-secondary/20 shadow-sm backdrop-blur-md">
                                                            {item.year}
                                                        </span>
                                                        {item.location && (
                                                            <span className="text-[11px] text-gray-400 flex items-center gap-1 font-mono">
                                                                <MapPin size={10} className="text-gray-500" />
                                                                {item.location}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors leading-snug font-heading">
                                                        {item.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                                                        {item.description}
                                                    </p>

                                                    {/* Highlight Chips */}
                                                    {item.highlights && item.highlights.length > 0 && (
                                                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                                                            {item.highlights.map((h, hIdx) => (
                                                                <span key={hIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10 font-mono">
                                                                    {h}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Click to spin & open page indicator */}
                                                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-secondary/70 group-hover:text-secondary transition-colors pt-2 border-t border-white/5">
                                                        <span className="text-[10px] text-gray-500 font-sans flex items-center gap-1">
                                                            <RotateCw size={11} className="text-secondary/70 group-hover:rotate-180 transition-transform duration-500" />
                                                            Spin & Expand
                                                        </span>
                                                        <div className="flex items-center gap-0.5 font-bold text-secondary">
                                                            <span>Launch Showcase</span>
                                                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* BACK FACE OF THE CARD (Rotated 180 deg) */}
                                                <div 
                                                    className="absolute inset-0 p-6 rounded-2xl bg-[#090e17] border border-secondary/50 flex flex-col items-center justify-center text-center z-20"
                                                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                                                >
                                                    <div className="w-14 h-14 rounded-full bg-secondary/10 border border-secondary/40 flex items-center justify-center text-secondary mb-3 animate-spin">
                                                        <RotateCw size={24} />
                                                    </div>
                                                    <span className="text-xs font-mono font-bold text-secondary tracking-widest uppercase mb-1">
                                                        3D POP & SPIN PORTAL
                                                    </span>
                                                    <h4 className="text-base font-bold text-white font-heading">
                                                        Opening Full Showcase Page...
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* FULL-PAGE SHOWCASE DRAWER / PAGE OVERLAY */}
            <AnimatePresence>
                {activeMilestone && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 40 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-50 bg-[#07090e]/98 backdrop-blur-xl overflow-y-auto min-h-screen flex flex-col text-white custom-scrollbar gpu-accelerated"
                    >
                        {/* STICKY TOP NAVIGATION HEADER */}
                        <div className="sticky top-0 z-30 bg-[#07090e]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
                            <button
                                onClick={() => setActiveMilestone(null)}
                                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                <span>RETURN TO TIMELINE</span>
                            </button>

                            <div className="flex items-center gap-3">
                                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 hidden sm:inline-block">
                                    MILESTONE #{activeMilestone.stepNumber} // {activeMilestone.year}
                                </span>
                                {activeMilestone.proof && (
                                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                                        <ShieldCheck size={14} className="text-emerald-400" />
                                        VERIFIED PROOF ATTACHED
                                    </span>
                                )}
                            </div>

                            <button
                                onClick={() => setActiveMilestone(null)}
                                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* FULL PAGE HERO BANNER */}
                        <div className="max-w-5xl mx-auto px-6 pt-10 pb-8 w-full">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-8">
                                <div className="space-y-3 max-w-3xl">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full bg-gradient-to-r ${categoryColorMap[activeMilestone.category] || 'text-gray-300'} border`}>
                                            {activeMilestone.category?.toUpperCase() || 'MILESTONE'}
                                        </span>
                                        <span className="text-xs font-mono text-secondary px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                                            {activeMilestone.phase}
                                        </span>
                                        {activeMilestone.location && (
                                            <span className="text-xs font-mono text-gray-400 flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                                <MapPin size={12} className="text-secondary" />
                                                {activeMilestone.location}
                                            </span>
                                        )}
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-black font-heading tracking-tight leading-tight text-white">
                                        {activeMilestone.title}
                                    </h1>
                                    <p className="text-gray-300 text-base md:text-lg leading-relaxed pt-1">
                                        {activeMilestone.details || activeMilestone.description}
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-secondary/10 border border-secondary/30 text-secondary flex flex-col items-center justify-center shrink-0 w-32 h-32 self-start md:self-center shadow-lg">
                                    <activeMilestone.icon size={48} />
                                    <span className="text-[10px] font-mono font-bold mt-2 uppercase text-secondary/80">
                                        #{activeMilestone.stepNumber}
                                    </span>
                                </div>
                            </div>

                            {/* SHOWCASE SECTION TABS */}
                            <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5">
                                <button
                                    onClick={() => setActiveShowcaseTab('all')}
                                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                                        activeShowcaseTab === 'all'
                                            ? 'bg-secondary text-black shadow-[0_0_15px_rgba(0,199,183,0.4)]'
                                            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    SHOW ALL SECTIONS
                                </button>
                                {activeMilestone.hardMetrics && activeMilestone.hardMetrics.length > 0 && (
                                    <button
                                        onClick={() => setActiveShowcaseTab('metrics')}
                                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                                            activeShowcaseTab === 'metrics'
                                                ? 'bg-secondary text-black shadow-[0_0_15px_rgba(0,199,183,0.4)]'
                                                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                        }`}
                                    >
                                        VERIFIED METRICS
                                    </button>
                                )}
                                {activeMilestone.proof && (
                                    <button
                                        onClick={() => setActiveShowcaseTab('proof')}
                                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                                            activeShowcaseTab === 'proof'
                                                ? 'bg-emerald-400 text-black shadow-[0_0_15px_rgba(52,211,153,0.4)]'
                                                : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20'
                                        }`}
                                    >
                                        📜 PROOF & CERTIFICATE
                                    </button>
                                )}
                                <button
                                    onClick={() => setActiveShowcaseTab('overview')}
                                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                                        activeShowcaseTab === 'overview'
                                            ? 'bg-secondary text-black shadow-[0_0_15px_rgba(0,199,183,0.4)]'
                                            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    KEY DELIVERABLES
                                </button>
                            </div>

                            {/* MAIN PAGE SHOWCASE CONTENT GRID */}
                            <div className="space-y-12 pb-16">
                                
                                {/* SECTION 1: QUANTIFIABLE IMPACT METRICS */}
                                {(activeShowcaseTab === 'all' || activeShowcaseTab === 'metrics') && activeMilestone.hardMetrics && activeMilestone.hardMetrics.length > 0 && (
                                    <motion.section 
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center gap-2 text-sm font-mono font-bold text-secondary uppercase tracking-wider">
                                            <BarChart2 size={16} />
                                            <span>Quantifiable Impact & Verified Outcomes</span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {activeMilestone.hardMetrics.map((metric, mIdx) => (
                                                <div key={mIdx} className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-secondary/30 flex items-start gap-3.5 group hover:border-secondary transition-colors gpu-accelerated">
                                                    <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                                                        <CheckCircle2 size={20} />
                                                    </div>
                                                    <div>
                                                        <span className="text-base font-bold text-white block leading-snug">{metric}</span>
                                                        <span className="text-[11px] font-mono text-gray-400 mt-1 block">Verified Metric</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.section>
                                )}

                                {/* SECTION 2: VERIFIED PROOF GALLERY & CREDENTIAL METADATA */}
                                {(activeShowcaseTab === 'all' || activeShowcaseTab === 'proof') && activeMilestone.proof && (
                                    <motion.section 
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6 p-6 md:p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 relative overflow-hidden gpu-accelerated"
                                    >
                                        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                                            <div className="flex items-center gap-2.5 text-sm font-mono font-bold text-emerald-300 uppercase tracking-wider">
                                                <ShieldCheck size={18} className="text-emerald-400" />
                                                <span>Official Credential & Evidence Record</span>
                                            </div>
                                            <span className="text-xs font-mono font-bold text-emerald-300 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                                                VERIFIED AUTHENTIC
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                                                <span className="text-[10px] font-mono text-gray-400 uppercase block">CREDENTIAL TYPE</span>
                                                <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-1">
                                                    <Award size={16} className="text-emerald-400" />
                                                    {activeMilestone.proof.proofType}
                                                </span>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                                                <span className="text-[10px] font-mono text-gray-400 uppercase block">ISSUING AUTHORITY</span>
                                                <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-1">
                                                    <Building2 size={16} className="text-emerald-400" />
                                                    {activeMilestone.proof.issuer}
                                                </span>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                                                <span className="text-[10px] font-mono text-gray-400 uppercase block">CREDENTIAL RECORD ID</span>
                                                <span className="text-sm font-mono font-bold text-emerald-300 flex items-center gap-1.5 mt-1">
                                                    {activeMilestone.proof.credentialId || 'N/A'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Certificate Image Document Preview */}
                                        {activeMilestone.proof.proofImage && (
                                            <div className="space-y-3">
                                                <span className="text-xs font-mono text-gray-400 uppercase block">DOCUMENT PREVIEW / PROOF ARTIFACT</span>
                                                <div className="relative group rounded-2xl overflow-hidden border border-white/15 bg-black/60 aspect-[16/9] flex items-center justify-center max-h-[450px]">
                                                    <img 
                                                        src={activeMilestone.proof.proofImage} 
                                                        alt={activeMilestone.title} 
                                                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                                                        <button 
                                                            onClick={() => setLightboxImage(activeMilestone.proof.proofImage)}
                                                            className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                                                        >
                                                            <Maximize2 size={16} />
                                                            View Fullscreen High-Res Scan
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* External Direct Link */}
                                        {activeMilestone.proof.verificationUrl && (
                                            <div className="pt-2">
                                                <a 
                                                    href={activeMilestone.proof.verificationUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full py-3.5 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all group"
                                                >
                                                    <ExternalLink size={16} />
                                                    <span>OPEN ONLINE VERIFICATION PORTAL</span>
                                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </a>
                                            </div>
                                        )}
                                    </motion.section>
                                )}

                                {/* SECTION 3: KEY DELIVERABLES & HIGHLIGHTS */}
                                {(activeShowcaseTab === 'all' || activeShowcaseTab === 'overview') && (
                                    <motion.section 
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center gap-2 text-sm font-mono font-bold text-secondary uppercase tracking-wider">
                                            <FileCheck size={16} />
                                            <span>Key Deliverables & Milestones Achieved</span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {activeMilestone.highlights && activeMilestone.highlights.map((h, i) => (
                                                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-gray-200">
                                                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                                                    <span className="font-medium">{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.section>
                                )}

                                {/* SECTION 4: TECHNICAL SKILLS & COMPETENCIES */}
                                {(activeShowcaseTab === 'all' || activeShowcaseTab === 'overview') && activeMilestone.skills && (
                                    <motion.section 
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center gap-2 text-sm font-mono font-bold text-secondary uppercase tracking-wider">
                                            <Code size={16} />
                                            <span>Competencies & Technologies Applied</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2.5">
                                            {activeMilestone.skills.map((skill, sIdx) => (
                                                <span key={sIdx} className="text-xs px-4 py-2 rounded-xl bg-secondary/10 text-secondary border border-secondary/20 font-mono font-bold">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.section>
                                )}

                            </div>

                            {/* FOOTER PREV / NEXT NAVIGATION BAR */}
                            <div className="border-t border-white/10 pt-6 pb-4 flex items-center justify-between mt-auto">
                                <button
                                    onClick={() => navigateMilestone('prev')}
                                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-mono font-bold flex items-center gap-2 transition-all"
                                >
                                    <ArrowLeft size={14} />
                                    <span>PREVIOUS MILESTONE</span>
                                </button>

                                <button
                                    onClick={() => setActiveMilestone(null)}
                                    className="px-6 py-2.5 rounded-xl bg-secondary text-black text-xs font-bold font-mono hover:bg-secondary/90 transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                                >
                                    BACK TO TIMELINE
                                </button>

                                <button
                                    onClick={() => navigateMilestone('next')}
                                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-mono font-bold flex items-center gap-2 transition-all"
                                >
                                    <span>NEXT MILESTONE</span>
                                    <ArrowRight size={14} />
                                </button>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox Modal for Fullscreen Certificate/Photo View */}
            <AnimatePresence>
                {lightboxImage && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative max-w-5xl w-full"
                        >
                            <button
                                onClick={() => setLightboxImage(null)}
                                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <img 
                                src={lightboxImage} 
                                alt="Full Proof Certificate" 
                                className="w-full h-auto rounded-2xl border border-white/20 shadow-2xl max-h-[85vh] object-contain"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Journey;
