import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    SiPython, SiPandas, SiNumpy, SiScikitlearn, 
    SiFastapi, SiMongodb, SiJupyter, SiGooglecolab, SiC,
    SiReact, SiTailwindcss
} from 'react-icons/si';
import { 
    FaChartBar, FaTools, FaDatabase, 
    FaGithub, FaChartArea, FaChartLine, FaJava,
    FaBrain, FaCodeBranch, FaPaintBrush
} from 'react-icons/fa';
import { Cpu, Database, Server, PieChart, Cloud, Code, Sparkles, Activity, CheckCircle2 } from 'lucide-react';
import notionData from '../../data/notion-data.json';

const iconMap = {
    "Python": <SiPython className="text-[#3776AB]" />,
    "Pandas": <SiPandas className="text-[#150458]" />,
    "NumPy": <SiNumpy className="text-[#013243]" />,
    "Scikit-learn": <SiScikitlearn className="text-[#F7931E]" />,
    "Scikit-Learn": <SiScikitlearn className="text-[#F7931E]" />,
    "Statistical Analysis": <FaChartBar className="text-blue-400" />,
    "Feature Engineering": <FaTools className="text-gray-400" />,
    "FastAPI": <SiFastapi className="text-[#05998B]" />,
    "SQL": <FaDatabase className="text-blue-500" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "Git/GitHub": <FaGithub className="text-white" />,
    "Git": <FaCodeBranch className="text-[#F05032]" />,
    "Matplotlib": <FaChartArea className="text-orange-400" />,
    "Seaborn": <FaChartLine className="text-blue-300" />,
    "Google Colab": <SiGooglecolab className="text-[#F9AB00]" />,
    "Jupyter Notebook": <SiJupyter className="text-[#F37626]" />,
    "Java": <FaJava className="text-[#007396]" />,
    "C": <SiC className="text-[#A8B9CC]" />,
    "Power BI": <FaChartBar className="text-[#F2C811]" />,
    "Time Series": <FaChartLine className="text-pink-400" />,
    "ARIMA": <FaChartLine className="text-purple-400" />,
    "XGBoost": <FaBrain className="text-green-500" />,
    "SMOTE": <FaBrain className="text-teal-400" />,
    "DAX": <FaDatabase className="text-yellow-500" />,
    "Optuna": <FaTools className="text-blue-600" />,
    "React": <SiReact className="text-[#61DAFB]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#38B2AC]" />,
    "UI/UX": <FaPaintBrush className="text-pink-400" />
};

const domainIconMap = {
    Cpu: <Cpu size={20} />,
    Database: <Database size={20} />,
    Server: <Server size={20} />,
    PieChart: <PieChart size={20} />,
    Cloud: <Cloud size={20} />,
    Code: <Code size={20} />
};

const initialSkillDomains = notionData.skills.map(domain => ({
    ...domain,
    icon: domainIconMap[domain.iconString] || <Cpu size={20} />
})).sort((a, b) => b.importance - a.importance);

const Skills = () => {
    const [skillDomains, setSkillDomains] = useState(initialSkillDomains);
    const [activeDomain, setActiveDomain] = useState(initialSkillDomains[0]);
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const fetchGithubStats = async () => {
            try {
                const response = await fetch('https://api.github.com/users/SridharShyam/repos?per_page=100');
                if (!response.ok) return;
                const repos = await response.json();
                
                const langSizes = {};
                repos.forEach(repo => {
                    if (repo.language) {
                        langSizes[repo.language] = (langSizes[repo.language] || 0) + repo.size;
                    }
                });

                const rawDomains = initialSkillDomains.map(domain => {
                    let domainSize = 0;
                    domain.githubLanguages.forEach(lang => {
                        if (langSizes[lang]) domainSize += langSizes[lang];
                    });

                    let modifier = 1.0;
                    if (domain.domain === "Machine Learning") modifier = 1.2;
                    if (domain.domain === "App Development") modifier = 1.5;
                    if (domain.domain === "Cloud & MLOps") modifier = 1.8;

                    return { ...domain, rawSize: domainSize * modifier };
                });

                const maxRawSize = Math.max(...rawDomains.map(d => d.rawSize));

                const updatedDomains = rawDomains.map(domain => {
                    let githubScore = maxRawSize > 0 ? (domain.rawSize / maxRawSize) : 0;
                    let blendedScore = (githubScore * 0.4) + (domain.importance * 0.6);
                    let boundedScore = Math.min(Math.max(blendedScore, 0.45), 0.98);

                    return { ...domain, importance: boundedScore };
                });

                const sortedDomains = updatedDomains.sort((a, b) => b.importance - a.importance);
                setSkillDomains(sortedDomains);
                setActiveDomain(sortedDomains[0]);
                setIsLive(true);
            } catch (error) {
                console.error("Error fetching GitHub stats", error);
            }
        };

        fetchGithubStats();
    }, []);

    return (
        <section id="skills" className="py-28 bg-background relative overflow-hidden">
            {/* Background Radial Glow Orbs */}
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-left"
                >
                    <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs mb-4 backdrop-blur-md">
                        <Activity size={14} className="text-secondary" />
                        TECHNICAL PROFICIENCY // MODEL FEATURE IMPORTANCE
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Empirical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">Skill Architecture</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
                        A multi-dimensional view of my technical proficiency, structured as a machine learning feature importance plot dynamically weighted by GitHub repository data.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Feature Importance Plot Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-5 h-full bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
                    >
                        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                            <div>
                                <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                                    <Sparkles size={14} className="text-primary" />
                                    Relative Proficiency (F-Score)
                                </h3>
                            </div>
                            {isLive && (
                                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    Live Sync
                                </div>
                            )}
                        </div>
                        
                        <div className="flex-1 w-full flex flex-col gap-6 justify-center">
                            {skillDomains.map((entry, index) => {
                                const isActive = activeDomain.domain === entry.domain;
                                return (
                                    <div 
                                        key={entry.domain}
                                        className="relative flex items-center group cursor-pointer"
                                        onMouseEnter={() => setActiveDomain(entry)}
                                        onClick={() => setActiveDomain(entry)}
                                    >
                                        {/* Domain Title */}
                                        <div className={`flex-shrink-0 w-32 md:w-40 text-right pr-4 text-xs md:text-sm font-medium leading-tight transition-colors duration-300 ${isActive ? 'text-primary font-bold' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                            {entry.domain}
                                        </div>
                                        
                                        {/* Bar Container */}
                                        <div className="flex-1 h-3.5 bg-white/5 rounded-full relative overflow-visible backdrop-blur-sm">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${entry.importance * 100}%` }}
                                                transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
                                                    isActive 
                                                        ? 'bg-gradient-to-r from-primary via-purple-500 to-secondary shadow-[0_0_20px_rgba(236,72,153,0.5)]' 
                                                        : 'bg-white/20 group-hover:bg-white/40'
                                                }`}
                                            >
                                                {/* Animated Tip Dot */}
                                                <div className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full border-2 border-background transition-all duration-500 ${
                                                    isActive 
                                                        ? 'bg-white shadow-[0_0_15px_white] scale-125' 
                                                        : 'bg-gray-400 opacity-0 group-hover:opacity-100'
                                                }`} />
                                            </motion.div>
                                        </div>
                                        
                                        {/* F-Score */}
                                        <div className={`w-14 text-left pl-4 font-mono text-xs md:text-sm transition-colors duration-300 ${isActive ? 'text-white font-bold' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                            {entry.importance.toFixed(2)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                            <span>* Model weights updated via GitHub</span>
                            <span>Scale: 0.00 - 1.00</span>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Selectors & Detail Card */}
                    <div className="lg:col-span-7 h-full flex flex-col gap-6">
                        
                        {/* Domain Pills */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {skillDomains.map((domain) => {
                                const isActive = activeDomain.domain === domain.domain;
                                return (
                                    <button
                                        key={domain.domain}
                                        onClick={() => setActiveDomain(domain)}
                                        onMouseEnter={() => setActiveDomain(domain)}
                                        className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-300 text-left backdrop-blur-md ${
                                            isActive 
                                                ? 'bg-primary/10 border-primary/50 shadow-[0_0_20px_rgba(236,72,153,0.2)]' 
                                                : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                                        }`}
                                    >
                                        <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-400'}`}>
                                            {domain.icon}
                                        </div>
                                        <span className={`text-xs md:text-sm font-medium ${isActive ? 'text-white font-semibold' : 'text-gray-400'}`}>
                                            {domain.domain}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active Domain Details Card */}
                        <div className="flex-1 min-h-[340px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeDomain.domain}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.25 }}
                                    className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between backdrop-blur-xl shadow-2xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />

                                    <div>
                                        {/* Header Title */}
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-3">
                                                <span className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
                                                    {activeDomain.icon}
                                                </span>
                                                {activeDomain.domain}
                                            </h3>
                                            <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                                F-Score: {activeDomain.importance.toFixed(2)}
                                            </span>
                                        </div>

                                        <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                                            {activeDomain.description}
                                        </p>
                                        
                                        {/* Core Stack Pills */}
                                        <div className="mb-6">
                                            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 font-semibold">Core Stack & Technologies</p>
                                            <div className="flex flex-wrap gap-2.5">
                                                {activeDomain.items.map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className="flex items-center gap-2 px-3.5 py-2 bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 text-xs md:text-sm rounded-xl border border-white/10 shadow-sm transition-all"
                                                    >
                                                        <span className="text-base">
                                                            {iconMap[item] || null}
                                                        </span>
                                                        <span className="font-medium">{item}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empirical Impact Metrics */}
                                    <div className="pt-5 border-t border-white/10 mt-4">
                                        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 font-semibold flex items-center gap-1.5">
                                            <CheckCircle2 size={13} className="text-secondary" />
                                            Empirical Impact & Scale
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {activeDomain.impactMetrics.map((metric, idx) => (
                                                <div key={idx} className="bg-white/[0.03] rounded-xl p-3.5 border border-white/5 hover:border-white/15 transition-all">
                                                    <div className="text-xl md:text-2xl font-bold font-mono text-white mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-xs text-gray-400 leading-tight">
                                                        {metric.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

