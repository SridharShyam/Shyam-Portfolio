import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Award, Users, Lightbulb, TrendingUp, Globe, Rocket, Sparkles, 
    BookOpen, Code, Zap, Star, MapPin, ChevronRight, X, Calendar, 
    Layers, Filter, CheckCircle2 
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
                        CAREER TIMELINE // GROWTH & MILESTONES
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                        Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-purple-400 to-pink-500">Leadership Timeline</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed mt-2">
                        A chronological record of engineering milestones, hackathon achievements, international delegations, and strategic leadership roles.
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
                                                onClick={() => setActiveMilestone(item)}
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
                                                onClick={() => setActiveMilestone(item)}
                                                className="h-full flex flex-col p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-secondary/40 transition-all duration-500 group shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative z-10 overflow-hidden cursor-pointer"
                                            >
                                                {/* Ambient Corner Glow */}
                                                <div className="absolute top-0 right-0 w-28 h-28 bg-secondary/5 rounded-bl-full group-hover:bg-secondary/15 transition-colors pointer-events-none" />

                                                {/* Top Meta Bar */}
                                                <div className="flex items-center justify-between mb-3.5 relative z-10">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-secondary border border-secondary/20">
                                                            #{item.stepNumber}
                                                        </span>
                                                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-gradient-to-r ${categoryColorMap[item.category] || 'text-gray-300'} border`}>
                                                            {item.category?.toUpperCase() || 'MILESTONE'}
                                                        </span>
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
                                                <div className="mt-3 flex items-center justify-end text-[11px] font-mono text-secondary/70 group-hover:text-secondary transition-colors">
                                                    <span>View detail</span>
                                                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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

            {/* Interactive Milestone Detail Modal */}
            <AnimatePresence>
                {activeMilestone && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#0b0f17] border border-white/15 rounded-3xl max-w-xl w-full p-6 md:p-8 relative shadow-2xl overflow-hidden"
                        >
                            {/* Gradient Header Light */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-purple-500 to-pink-500" />
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveMilestone(null)}
                                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3.5 rounded-2xl bg-secondary/10 border border-secondary/30 text-secondary">
                                    <activeMilestone.icon size={28} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-mono font-bold text-secondary px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20">
                                            #{activeMilestone.stepNumber} // {activeMilestone.year}
                                        </span>
                                        <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                                            <MapPin size={12} />
                                            {activeMilestone.location}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white font-heading">
                                        {activeMilestone.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Detailed Description */}
                            <div className="mb-6 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                <h4 className="text-xs font-mono uppercase text-gray-400 mb-2 font-bold tracking-wider flex items-center gap-1.5">
                                    <Layers size={14} className="text-secondary" />
                                    OVERVIEW & CONTEXT
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {activeMilestone.details || activeMilestone.description}
                                </p>
                            </div>

                            {/* Key Highlights */}
                            {activeMilestone.highlights && (
                                <div className="mb-6">
                                    <h4 className="text-xs font-mono uppercase text-gray-400 mb-3 font-bold tracking-wider flex items-center gap-1.5">
                                        <CheckCircle2 size={14} className="text-emerald-400" />
                                        KEY ACHIEVEMENTS & HIGHLIGHTS
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                                <div className="mb-6">
                                    <h4 className="text-xs font-mono uppercase text-gray-400 mb-3 font-bold tracking-wider">
                                        COMPETENCIES & SKILLS APPLIED
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

                            {/* Footer Close CTA */}
                            <div className="flex justify-end pt-4 border-t border-white/10">
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
        </section>
    );
};

export default Journey;

