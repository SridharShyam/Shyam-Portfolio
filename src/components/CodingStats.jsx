import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BarChart3, Loader2, ArrowLeft, ChevronRight } from 'lucide-react';

const platforms = [
    {
        id: "leetcode",
        name: "LeetCode",
        icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/leetcode.svg",
        description: "Sharpening programming skills and mastering Data Structures & Algorithms through consistent practice.",
        link: "https://leetcode.com/u/RvTp8CEraN/",
        color: "from-[#FFA116]/20 to-transparent",
        accent: "#FFA116"
    },
    {
        id: "hackerrank",
        name: "HackerRank",
        icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/hackerrank.svg",
        description: "Building a strong foundation in core programming concepts and language-specific best practices.",
        link: "https://www.hackerrank.com/profile/shyamsridhar935",
        color: "from-[#2EC866]/20 to-transparent",
        accent: "#2EC866"
    },
    {
        id: "gfg",
        name: "GeeksforGeeks",
        icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/geeksforgeeks.svg",
        description: "Deep-diving into Data Science and Machine Learning concepts through high-quality technical resources.",
        link: "https://www.geeksforgeeks.org/profile/shyamsri8auv",
        color: "from-[#298d46]/20 to-transparent",
        accent: "#298d46"
    }
];

const CodingStats = () => {
    const [activePlatform, setActivePlatform] = useState(null);
    const [leetcodeData, setLeetcodeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeetCode = async () => {
            try {
                const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/RvTp8CEraN');
                const data = await response.json();
                setLeetcodeData([
                    { label: "Problems Solved", value: data.totalSolved || "47", color: "bg-[#FFA116]" },
                    { label: "Global Ranking", value: data.ranking ? data.ranking.toLocaleString() : "2.6M+", color: "bg-blue-500" },
                    { label: "Reward Points", value: data.contributionPoint || "93", color: "bg-purple-500" }
                ]);
            } catch {
                setLeetcodeData([
                    { label: "Problems Solved", value: "47", color: "bg-[#FFA116]" },
                    { label: "Global Ranking", value: "2.6M+", color: "bg-blue-500" },
                    { label: "Reward Points", value: "93", color: "bg-purple-500" }
                ]);
            } finally {
                setLoading(false);
            }
        };
        fetchLeetCode();
    }, []);

    const platformStats = {
        leetcode: leetcodeData,
        hackerrank: [
            { label: "Python Domain", value: "5 Stars", color: "bg-[#2EC866]" },
            { label: "Java / SQL", value: "4 Stars", color: "bg-[#2EC866]" },
            { label: "Problem Solving", value: "2 Stars", color: "bg-blue-500" }
        ],
        gfg: [
            { label: "Coding Score", value: "86", color: "bg-[#298d46]" },
            { label: "Problems Solved", value: "58", color: "bg-blue-400" },
            { label: "Institute Rank", value: "119", color: "bg-purple-400" }
        ]
    };

    return (
        <section id="stats" className="py-24 bg-background relative overflow-hidden min-h-[700px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto px-6 h-full">
                <AnimatePresence mode="wait">
                    {!activePlatform ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-center mb-16">
                                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">Interactive Metrics</span>
                                <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                                    Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Stats</span>
                                </h2>
                                <p className="text-gray-400 mt-4">Select a platform to view detailed performance metrics.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                                {platforms.map((platform, idx) => (
                                    <motion.div
                                        key={platform.id}
                                        layoutId={`card-${platform.id}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => setActivePlatform(platform)}
                                        className="group relative bg-surface/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 hover:border-primary/50 cursor-pointer transition-all duration-500 overflow-hidden"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 mb-6 p-2 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                <img src={platform.icon} alt={platform.name} className="w-full h-full object-contain brightness-0 invert" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4">{platform.name}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{platform.description}</p>
                                            <div className="flex items-center gap-2 text-primary text-xs font-mono font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                                                VIEW STATS <ChevronRight size={14} />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col lg:flex-row gap-12 items-center lg:items-start pt-12"
                        >
                            {/* Left Side: Selected Card */}
                            <div className="w-full lg:w-1/3">
                                <motion.button
                                    onClick={() => setActivePlatform(null)}
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-mono text-sm"
                                >
                                    <ArrowLeft size={16} /> BACK TO GRID
                                </motion.button>
                                
                                <motion.div
                                    layoutId={`card-${activePlatform.id}`}
                                    className={`relative bg-surface/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-primary/30 shadow-2xl shadow-primary/10 overflow-hidden`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${activePlatform.color} opacity-50`} />
                                    <div className="relative z-10 text-center lg:text-left">
                                        <div className="w-20 h-20 mx-auto lg:mx-0 mb-8 p-4 bg-white/10 rounded-2xl border border-white/20">
                                            <img src={activePlatform.icon} alt={activePlatform.name} className="w-full h-full object-contain brightness-0 invert" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">{activePlatform.name}</h3>
                                        <p className="text-gray-300 text-base leading-relaxed mb-8">{activePlatform.description}</p>
                                        <a 
                                            href={activePlatform.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-sm transition-all"
                                        >
                                            View Full Profile <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </motion.div>

                                <div className="mt-8 flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                                    {platforms.map(p => (
                                        <button
                                            key={p.id}
                                            onClick={() => setActivePlatform(p)}
                                            className={`p-3 rounded-xl border transition-all ${activePlatform.id === p.id ? 'bg-primary/20 border-primary shadow-lg shadow-primary/20' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                                        >
                                            <img src={p.icon} alt={p.name} className="w-6 h-6 object-contain brightness-0 invert" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Stats Panel */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="w-full lg:w-2/3 bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-12"
                            >
                                <div className="flex items-center justify-between mb-12">
                                    <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <BarChart3 className="text-primary" /> Performance Overview
                                    </h4>
                                    {activePlatform.id === "leetcode" && !loading && (
                                        <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                                            <div className="relative">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary animate-ping" />
                                            </div>
                                            <span className="text-[10px] font-mono text-primary font-bold">LIVE SYNC</span>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-10">
                                    {loading && activePlatform.id === "leetcode" ? (
                                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                                            <Loader2 className="animate-spin text-primary" size={40} />
                                            <p className="text-gray-400 font-mono text-sm animate-pulse">FETCHING LIVE METRICS...</p>
                                        </div>
                                    ) : (
                                        platformStats[activePlatform.id]?.map((stat, idx) => (
                                            <motion.div 
                                                key={stat.label}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + (idx * 0.1) }}
                                            >
                                                <div className="flex justify-between items-end mb-4">
                                                    <div>
                                                        <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1 font-mono">{stat.label}</span>
                                                        <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                                                    </div>
                                                </div>
                                                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                                            </motion.div>
                                        ))
                                    )}
                                </div>

                                <div className="mt-16 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                    <p className="text-sm text-gray-400 leading-relaxed italic">
                                        &ldquo;These statistics are a reflection of consistent effort and a passion for solving complex architectural and algorithmic problems.&rdquo;
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CodingStats;
