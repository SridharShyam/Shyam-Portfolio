import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Award, Users, Lightbulb, TrendingUp, Globe, Rocket, Sparkles, 
    BookOpen, Code, Zap, Star, MapPin, ChevronRight, X, Calendar, 
    Layers, Filter, CheckCircle2, ShieldCheck, ExternalLink, Maximize2, 
    FileCheck, BarChart2, Building2
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
    const [activeMilestone, setActiveMilestone] = useState(null);
    const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'proof'
    const [lightboxImage, setLightboxImage] = useState(null);

    // Map timeline items from Notion data
    const rawTimeline = notionData.journey.map((item, index) => ({
        ...item,
        stepNumber: String(index + 1).padStart(2, '0'),
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

    const openMilestoneModal = (item) => {
        setActiveMilestone(item);
        setActiveTab('overview');
    };

    return (
        <section id="journey" className="py-24 bg-background relative overflow-hidden">
            {/* Background Glow Orbs */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="mb-12 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs mb-4 backdrop-blur-md">
                        <Zap size={14} className="text-secondary" />
                        CAREER TIMELINE // VERIFIABLE MILESTONES
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                        Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-purple-400 to-pink-500">Leadership Timeline</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed mt-2">
                        A chronological record of engineering milestones, hackathon achievements, international delegations, and strategic leadership roles with verifiable proof documents.
                    </p>
                </motion.div>

                {/* Executive Summary Stats Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
                >
                    {executiveStats.map((stat, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 flex items-start gap-3.5 group hover:border-white/20 transition-all duration-300">
                            <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${stat.color} group-hover:scale-110 transition-transform`}>
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
                                    const delay = actualIndex * 0.08;

                                    if (item.isFuture) {
                                        return (
                                            <motion.div
                                                key={actualIndex}
                                                className="w-full md:w-1/3 flex flex-col justify-center items-center text-center p-6 relative z-10 pl-16 md:pl-6 cursor-pointer"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.5, delay }}
                                                onClick={() => openMilestoneModal(item)}
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
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5, delay }}
                                        >
                                            <motion.div 
                                                whileHover={{ y: -6, scale: 1.02 }}
                                                onClick={() => openMilestoneModal(item)}
                                                className="h-full flex flex-col p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-secondary/40 transition-all duration-500 group shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative z-10 overflow-hidden cursor-pointer"
                                            >
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

                                                {/* Click to expand indicator */}
                                                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-secondary/70 group-hover:text-secondary transition-colors pt-2">
                                                    <span className="text-[10px] text-gray-500 font-sans">
                                                        {item.proof ? '📜 Evidence Attached' : 'Details Available'}
                                                    </span>
                                                    <div className="flex items-center gap-0.5">
                                                        <span>View detail</span>
                                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                    </div>
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

            {/* Interactive Milestone Detail & Proof Modal */}
            <AnimatePresence>
                {activeMilestone && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#0b0f17] border border-white/15 rounded-3xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            {/* Gradient Header Light */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-purple-500 to-pink-500" />
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveMilestone(null)}
                                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors z-20"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Header */}
                            <div className="flex items-start gap-4 mb-4 pr-10">
                                <div className="p-3.5 rounded-2xl bg-secondary/10 border border-secondary/30 text-secondary shrink-0">
                                    <activeMilestone.icon size={28} />
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <span className="text-xs font-mono font-bold text-secondary px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20">
                                            #{activeMilestone.stepNumber} // {activeMilestone.year}
                                        </span>
                                        <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                                            <MapPin size={12} />
                                            {activeMilestone.location}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white font-heading leading-tight">
                                        {activeMilestone.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Navigation Tabs (Overview vs Verified Evidence) */}
                            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                                        activeTab === 'overview'
                                            ? 'bg-secondary text-black shadow-[0_0_15px_rgba(0,199,183,0.3)]'
                                            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    <Layers size={14} />
                                    OVERVIEW & IMPACT
                                </button>
                                {activeMilestone.proof && (
                                    <button
                                        onClick={() => setActiveTab('proof')}
                                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                                            activeTab === 'proof'
                                                ? 'bg-emerald-400 text-black shadow-[0_0_15px_rgba(52,211,153,0.3)]'
                                                : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20'
                                        }`}
                                    >
                                        <ShieldCheck size={14} />
                                        VERIFIED PROOF & CREDENTIALS
                                    </button>
                                )}
                            </div>

                            {/* Scrollable Content Body */}
                            <div className="overflow-y-auto pr-1 space-y-6 flex-grow custom-scrollbar">
                                
                                {activeTab === 'overview' && (
                                    <>
                                        {/* Quantifiable Impact Metrics Grid */}
                                        {activeMilestone.hardMetrics && activeMilestone.hardMetrics.length > 0 && (
                                            <div>
                                                <h4 className="text-xs font-mono uppercase text-gray-400 mb-2.5 font-bold tracking-wider flex items-center gap-1.5">
                                                    <BarChart2 size={14} className="text-secondary" />
                                                    QUANTIFIABLE METRICS & OUTCOMES
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                                    {activeMilestone.hardMetrics.map((metric, mIdx) => (
                                                        <div key={mIdx} className="p-3 rounded-xl bg-white/[0.03] border border-secondary/20 flex items-center gap-2.5">
                                                            <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                                                            <span className="text-xs font-semibold text-gray-200">{metric}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Detailed Description */}
                                        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                            <h4 className="text-xs font-mono uppercase text-gray-400 mb-2 font-bold tracking-wider flex items-center gap-1.5">
                                                <FileCheck size={14} className="text-secondary" />
                                                CONTEXT & ENGINE DETAILS
                                            </h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {activeMilestone.details || activeMilestone.description}
                                            </p>
                                        </div>

                                        {/* Key Highlights */}
                                        {activeMilestone.highlights && (
                                            <div>
                                                <h4 className="text-xs font-mono uppercase text-gray-400 mb-3 font-bold tracking-wider flex items-center gap-1.5">
                                                    <CheckCircle2 size={14} className="text-emerald-400" />
                                                    KEY DELIVERABLES
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {activeMilestone.highlights.map((h, i) => (
                                                        <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                                            <span>{h}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Skills / Focus Area */}
                                        {activeMilestone.skills && (
                                            <div>
                                                <h4 className="text-xs font-mono uppercase text-gray-400 mb-2.5 font-bold tracking-wider">
                                                    COMPETENCIES & DOMAINS
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {activeMilestone.skills.map((skill, sIdx) => (
                                                        <span key={sIdx} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-mono">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                {activeTab === 'proof' && activeMilestone.proof && (
                                    <div className="space-y-5">
                                        {/* Proof Metadata Bar */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                                            <div>
                                                <span className="text-[10px] font-mono text-gray-400 uppercase block">CREDENTIAL TYPE</span>
                                                <span className="text-xs font-bold text-white flex items-center gap-1.5 mt-0.5">
                                                    <Award size={14} className="text-emerald-400" />
                                                    {activeMilestone.proof.proofType}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-mono text-gray-400 uppercase block">ISSUED BY</span>
                                                <span className="text-xs font-bold text-white flex items-center gap-1.5 mt-0.5">
                                                    <Building2 size={14} className="text-emerald-400" />
                                                    {activeMilestone.proof.issuer}
                                                </span>
                                            </div>
                                            {activeMilestone.proof.credentialId && (
                                                <div className="sm:col-span-2 pt-2 border-t border-emerald-500/10 flex items-center justify-between">
                                                    <span className="text-[10px] font-mono text-gray-400">CREDENTIAL ID:</span>
                                                    <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                                                        {activeMilestone.proof.credentialId}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Certificate / Image Preview Card */}
                                        {activeMilestone.proof.proofImage && (
                                            <div className="relative group rounded-2xl overflow-hidden border border-white/15 bg-black/50 aspect-video flex items-center justify-center">
                                                <img 
                                                    src={activeMilestone.proof.proofImage} 
                                                    alt={activeMilestone.title} 
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                                                    <button 
                                                        onClick={() => setLightboxImage(activeMilestone.proof.proofImage)}
                                                        className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs flex items-center gap-1.5 shadow-lg hover:scale-105 transition-transform"
                                                    >
                                                        <Maximize2 size={14} />
                                                        View Fullscreen Preview
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Verification External Link */}
                                        {activeMilestone.proof.verificationUrl && (
                                            <div className="pt-2">
                                                <a 
                                                    href={activeMilestone.proof.verificationUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all group"
                                                >
                                                    <ExternalLink size={14} />
                                                    <span>VERIFY CREDENTIAL ONLINE</span>
                                                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )}

                            </div>

                            {/* Footer CTA Bar */}
                            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10">
                                {activeMilestone.proof ? (
                                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                                        <ShieldCheck size={14} />
                                        Verified Credential & Proof Attached
                                    </span>
                                ) : (
                                    <span className="text-[11px] text-gray-500 font-mono">
                                        Future Horizon Milestone
                                    </span>
                                )}

                                <button
                                    onClick={() => setActiveMilestone(null)}
                                    className="px-6 py-2 rounded-xl bg-secondary text-black font-semibold text-xs hover:bg-secondary/90 transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                                >
                                    Close Detail
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Lightbox Modal for Certificate/Photo View */}
            <AnimatePresence>
                {lightboxImage && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative max-w-4xl w-full"
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
