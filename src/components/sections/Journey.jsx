import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Award, Users, Lightbulb, TrendingUp, Globe, Rocket, Sparkles, 
    BookOpen, Code, Zap, Star, MapPin, ChevronRight, X, Calendar, 
    Layers, Filter, CheckCircle2, ShieldCheck, ExternalLink, RotateCw
} from 'lucide-react';
import notionData from '../../data/notion-data.json';

const iconMap = {
    Award, Users, Lightbulb, TrendingUp, Globe, Rocket, Sparkles, BookOpen, Code, Zap, Star
};

const categoryColorMap = {
    'Foundations': 'from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-800 dark:text-cyan-300',
    'Experience': 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-800 dark:text-emerald-300',
    'Leadership': 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-800 dark:text-purple-300',
    'Global': 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-800 dark:text-amber-300',
};

const executiveStats = [
    { label: 'Growth Journey', value: '4+ Years', sub: 'Continuous AI & ML Exploration', icon: Calendar, color: 'text-secondary' },
    { label: 'Global Immersion', value: '1 Delegated', sub: 'SEC × UTP, Malaysia Exchange', icon: Globe, color: 'text-amber-400' },
    { label: 'Strategic Leadership', value: '2 Key Roles', sub: 'YUVA Chair & Chief Advisor', icon: Users, color: 'text-purple-400' },
    { label: 'Shyamarks Vault', value: '100% Authentic', sub: 'All credentials verified on sister app', icon: ShieldCheck, color: 'text-emerald-400', link: 'https://shyamarks.vercel.app' },
];

const categories = ['All', 'Leadership', 'Experience', 'Global', 'Foundations'];

const Journey = () => {
    const containerRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [flippingCardId, setFlippingCardId] = useState(null);
    const [activeMilestone, setActiveMilestone] = useState(null);

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

    // Trigger 3D pop, spin & morph sequence before launching details modal
    const handleCardClick = (item) => {
        if (flippingCardId) return; // prevent duplicate clicks
        setFlippingCardId(item.stepNumber);
        
        setTimeout(() => {
            setActiveMilestone(item);
            setFlippingCardId(null);
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
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-surface border border-border text-text font-mono text-xs shadow-xs">
                            <Zap size={14} className="text-primary" />
                            CAREER TIMELINE // VERIFIED MILESTONES & PROOFS
                        </div>
                        <a 
                            href="https://shyamarks.vercel.app" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-mono text-xs hover:bg-emerald-500/20 transition-all group font-medium"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>Explore Full Vault on Shyamarks ↗</span>
                        </a>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-heading">
                        Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-teal-700 dark:from-secondary dark:via-purple-400 dark:to-pink-500">Leadership Timeline</span>
                    </h2>
                    <p className="text-muted max-w-2xl text-base md:text-lg leading-relaxed mt-2">
                        Click any milestone card to open its dedicated showcase view with verified proof documents and key metrics. Full credential repository is hosted on <a href="https://shyamarks.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald-700 dark:text-emerald-400 hover:underline font-semibold">Shyamarks ↗</a>.
                    </p>
                </motion.div>

                {/* Executive Summary Stats Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
                >
                    {executiveStats.map((stat, idx) => {
                        const CardContent = (
                            <div className="p-4 rounded-2xl bg-card border border-border shadow-xs hover:shadow-md flex items-start gap-3.5 group hover:border-primary/40 transition-all duration-300 gpu-accelerated min-w-0 h-full">
                                <div className={`p-2.5 rounded-xl bg-surface border border-border ${stat.color} group-hover:scale-110 transition-transform duration-300 shrink-0 shadow-xs`}>
                                    <stat.icon size={20} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <span className="text-2xl md:text-3xl font-extrabold text-heading font-heading block leading-none mb-1 truncate">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold text-text block leading-snug">{stat.label}</span>
                                    <span className="text-[11px] text-muted block truncate mt-1">{stat.sub}</span>
                                </div>
                            </div>
                        );

                        return stat.link ? (
                            <a 
                                key={idx} 
                                href={stat.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block h-full transition-transform hover:-translate-y-1 group"
                                title="Open Shyamarks Vault"
                            >
                                {CardContent}
                            </a>
                        ) : (
                            <div key={idx} className="h-full">
                                {CardContent}
                            </div>
                        );
                    })}
                </motion.div>

                {/* Category Filter Pills */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-wrap items-center gap-2 mb-14 pb-2 border-b border-border/60"
                >
                    <div className="flex items-center gap-1.5 text-xs text-muted font-mono mr-2">
                        <Filter size={14} className="text-secondary" />
                        <span>FILTER:</span>
                    </div>
                    {categories.map((cat) => {
                        const isActive = selectedCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                                    isActive 
                                        ? 'bg-primary text-white font-bold shadow-md scale-105' 
                                        : 'bg-surface border border-border text-muted hover:text-heading hover:bg-elevated'
                                }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Snake Grid Timeline Container */}
                <div ref={containerRef} className="space-y-12 md:space-y-16 relative">
                    
                    {/* Mobile-only continuous vertical timeline line */}
                    <div className="md:hidden absolute left-3.5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-pink-500 rounded-full z-0 opacity-40 overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-1/3 bg-white opacity-80"
                            animate={{ top: ["-33%", "100%"] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
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
                                                className="w-full md:w-1/3 flex flex-col justify-center items-center text-center p-6 relative z-10 pl-8 md:pl-6 cursor-pointer gpu-accelerated"
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
                                                <p className="text-muted text-xs md:text-sm">{item.description}</p>
                                            </motion.div>
                                        );
                                    }

                                    return (
                                        <motion.div
                                            key={actualIndex}
                                            className="w-full md:w-1/3 relative z-10 pl-8 md:pl-0"
                                            initial={{ opacity: 0, y: 16 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-30px" }}
                                            transition={{ duration: 0.4, delay }}
                                            style={{ perspective: '1200px' }}
                                        >
                                            {/* Mobile Timeline Node Dot */}
                                            <div className="md:hidden absolute -left-[1.85rem] top-7 w-3.5 h-3.5 rounded-full bg-secondary border-2 border-background shadow-[0_0_12px_#00C7B7] z-20" />

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
                                                className="h-full flex flex-col p-5 sm:p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-colors duration-300 group shadow-xs hover:shadow-md relative z-10 overflow-hidden cursor-pointer gpu-accelerated"
                                                style={{ transformStyle: 'preserve-3d' }}
                                            >
                                                {/* FRONT FACE OF THE CARD */}
                                                <div className="flex flex-col h-full" style={{ backfaceVisibility: 'hidden' }}>
                                                    {/* Ambient Corner Glow */}
                                                    <div className="absolute top-0 right-0 w-28 h-28 bg-secondary/5 rounded-bl-full group-hover:bg-secondary/15 transition-colors pointer-events-none" />

                                                    {/* Top Meta Bar */}
                                                    <div className="flex items-center justify-between mb-3.5 relative z-10 gap-2">
                                                        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                                                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-surface text-secondary border border-secondary/20 shrink-0">
                                                                #{item.stepNumber}
                                                            </span>
                                                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-surface ${categoryColorMap[item.category] || 'text-muted'} border shrink-0`}>
                                                                {item.category?.toUpperCase() || 'MILESTONE'}
                                                            </span>
                                                            {item.proof && (
                                                                <a 
                                                                    href={item.proof.verificationUrl || "https://shyamarks.vercel.app"} 
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                    className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors flex items-center gap-1 shadow-xs shrink-0 group/badge"
                                                                    title={`Verified credential record: ${item.proof.credentialId || 'Authentic'} on Shyamarks`}
                                                                >
                                                                    <ShieldCheck size={11} className="text-emerald-500" />
                                                                    <span>Verified on Shyamarks</span>
                                                                    {item.proof.credentialId && (
                                                                        <span className="text-emerald-600/80 dark:text-emerald-400/80 font-normal">#{item.proof.credentialId.split('-')[0] || item.proof.credentialId}</span>
                                                                    )}
                                                                </a>
                                                            )}
                                                        </div>

                                                        <div className="p-2 rounded-xl bg-surface border border-border text-muted group-hover:text-secondary group-hover:scale-110 transition-all duration-300 shrink-0 shadow-xs">
                                                            <item.icon size={16} />
                                                        </div>
                                                    </div>

                                                    {/* Year Pill & Location */}
                                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                                        <span className="text-secondary font-mono text-xs font-bold px-2.5 py-0.5 bg-secondary/10 rounded-full border border-secondary/20 shadow-xs backdrop-blur-md shrink-0">
                                                            {item.year}
                                                        </span>
                                                        {item.location && (
                                                            <span className="text-[11px] text-muted flex items-center gap-1 font-mono shrink-0">
                                                                <MapPin size={10} className="text-muted" />
                                                                {item.location}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-lg font-bold text-heading mb-2 group-hover:text-secondary transition-colors leading-snug font-heading">
                                                        {item.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="text-muted text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                                                        {item.description}
                                                    </p>

                                                    {/* Highlight Chips */}
                                                    {item.highlights && item.highlights.length > 0 && (
                                                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                                                            {item.highlights.map((h, hIdx) => (
                                                                <span key={hIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-surface text-muted border border-border font-mono">
                                                                    {h}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Click to open details indicator */}
                                                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-secondary/80 group-hover:text-secondary transition-colors pt-2 border-t border-border">
                                                        <span className="text-[10px] text-muted font-sans flex items-center gap-1">
                                                            <CheckCircle2 size={11} className="text-secondary/80" />
                                                            Journey Record
                                                        </span>
                                                        <div className="flex items-center gap-0.5 font-bold text-secondary">
                                                            <span>View Details</span>
                                                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* BACK FACE OF THE CARD (Rotated 180 deg) */}
                                                <div 
                                                    className="absolute inset-0 p-6 rounded-2xl bg-surface border border-secondary/50 flex flex-col items-center justify-center text-center z-20 shadow-xl"
                                                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                                                >
                                                    <div className="w-14 h-14 rounded-full bg-secondary/10 border border-secondary/40 flex items-center justify-center text-secondary mb-3 animate-spin">
                                                        <RotateCw size={24} />
                                                    </div>
                                                    <span className="text-xs font-mono font-bold text-secondary tracking-widest uppercase mb-1">
                                                        OPENING RECORD...
                                                    </span>
                                                    <h4 className="text-base font-bold text-heading font-heading">
                                                        Journey & Accomplishments
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

            {/* FOCUSED MILESTONE SHOWCASE MODAL */}
            <AnimatePresence>
                {activeMilestone && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md overflow-y-auto flex items-center justify-center p-4 sm:p-6 text-text custom-scrollbar"
                        onClick={() => setActiveMilestone(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.94, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.94, y: 20, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden my-auto"
                        >
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

                            {/* Top Bar with category & close */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border relative z-10">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-surface text-secondary border border-secondary/20">
                                        #{activeMilestone.stepNumber}
                                    </span>
                                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-surface ${categoryColorMap[activeMilestone.category] || 'text-muted'} border`}>
                                        {activeMilestone.category?.toUpperCase() || 'MILESTONE'}
                                    </span>
                                    <span className="text-xs font-mono text-muted">
                                        {activeMilestone.year}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setActiveMilestone(null)}
                                    className="p-2 rounded-full bg-surface hover:bg-elevated text-muted hover:text-heading transition-colors border border-border"
                                    aria-label="Close modal"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Milestone Title & Location */}
                            <div className="space-y-2 mb-5 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary shrink-0">
                                        <activeMilestone.icon size={22} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold font-heading text-heading leading-snug">
                                            {activeMilestone.title}
                                        </h2>
                                        {activeMilestone.location && (
                                            <p className="text-xs font-mono text-muted flex items-center gap-1 mt-0.5">
                                                <MapPin size={11} className="text-secondary" />
                                                {activeMilestone.location}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Small Description / Journey Narrative */}
                            <div className="mb-6 relative z-10 p-4 rounded-2xl bg-surface border border-border">
                                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary mb-2 flex items-center gap-1.5">
                                    <Sparkles size={14} />
                                    About The Journey
                                </h3>
                                <p className="text-text text-sm leading-relaxed">
                                    {activeMilestone.details || activeMilestone.description}
                                </p>
                            </div>

                            {/* Key Accomplishments & Metrics */}
                            {((activeMilestone.hardMetrics && activeMilestone.hardMetrics.length > 0) || (activeMilestone.highlights && activeMilestone.highlights.length > 0)) && (
                                <div className="mb-6 relative z-10">
                                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-heading mb-3 flex items-center gap-1.5">
                                        <Award size={14} className="text-secondary" />
                                        Accomplishments & Impact
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {(activeMilestone.hardMetrics || activeMilestone.highlights).map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-surface border border-border text-xs text-text">
                                                <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" />
                                                <span className="leading-snug">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Skills / Tech */}
                            {activeMilestone.skills && activeMilestone.skills.length > 0 && (
                                <div className="mb-6 relative z-10 flex flex-wrap gap-1.5">
                                    {activeMilestone.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-secondary/10 text-secondary border border-secondary/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* View More on Shyamarks CTA & Prev/Next Navigation */}
                            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
                                <a
                                    href={activeMilestone.proof?.verificationUrl || "https://shyamarks.vercel.app"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-500/15 to-secondary/15 border border-emerald-500/35 hover:border-emerald-400 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs group"
                                >
                                    <ShieldCheck size={16} className="text-emerald-500" />
                                    <span>View more on Shyamarks</span>
                                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>

                                <div className="flex items-center gap-2 w-full sm:w-auto">
                                    <button
                                        onClick={() => navigateMilestone('prev')}
                                        className="flex-1 sm:flex-none py-3 px-4 rounded-xl bg-surface hover:bg-elevated border border-border text-text text-xs font-mono transition-colors cursor-pointer"
                                        title="Previous milestone"
                                    >
                                        ← Prev
                                    </button>
                                    <button
                                        onClick={() => navigateMilestone('next')}
                                        className="flex-1 sm:flex-none py-3 px-4 rounded-xl bg-surface hover:bg-elevated border border-border text-text text-xs font-mono transition-colors cursor-pointer"
                                        title="Next milestone"
                                    >
                                        Next →
                                    </button>
                                    <button
                                        onClick={() => setActiveMilestone(null)}
                                        className="flex-1 sm:flex-none py-3 px-4 rounded-xl bg-surface hover:bg-elevated border border-border text-muted hover:text-heading text-xs font-mono font-medium transition-colors cursor-pointer"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Journey;
