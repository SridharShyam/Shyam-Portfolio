import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Recharts removed for bespoke UI
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
import { Cpu, Database, Server, PieChart, Cloud, Code } from 'lucide-react';

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

// Truthful, self-assessed F-Scores (Importance) for the Feature Importance Plot
const initialSkillDomains = [
    {
        domain: "Machine Learning",
        icon: <Cpu size={20} />,
        importance: 0.92, // Fallback if API fails
        githubLanguages: ["Jupyter Notebook", "Python"],
        description: "Designing predictive models, classification systems, and decision engines to solve complex business problems.",
        items: ["Python", "Scikit-Learn", "Statistical Analysis", "Feature Engineering", "Time Series", "ARIMA", "XGBoost", "SMOTE"],
        impactMetrics: [
            { label: "Predictive Models Built", value: "5+" },
            { label: "Peak AUC-ROC Achieved", value: "0.81" }
        ]
    },
    {
        domain: "Data Engineering",
        icon: <Database size={20} />,
        importance: 0.85,
        githubLanguages: ["Python", "SQL"],
        description: "Wrangling messy, unstructured data into clean pipelines and optimizing queries for high-throughput analysis.",
        items: ["Pandas", "NumPy", "SQL", "MongoDB"],
        impactMetrics: [
            { label: "Records Analyzed", value: "10k+" },
            { label: "Pipelines Automated", value: "3" }
        ]
    },
    {
        domain: "Backend Architecture",
        icon: <Server size={20} />,
        importance: 0.88,
        githubLanguages: ["Python", "Java", "C"],
        description: "Building resilient, high-performance APIs and microservices to serve machine learning models at scale.",
        items: ["FastAPI", "Python", "Java", "C", "Git"],
        impactMetrics: [
            { label: "REST APIs Deployed", value: "2" },
            { label: "System Availability", value: "99.9%" }
        ]
    },
    {
        domain: "Data Visualization",
        icon: <PieChart size={20} />,
        importance: 0.80,
        githubLanguages: ["Jupyter Notebook", "HTML"],
        description: "Translating raw algorithmic outputs into intuitive, actionable intelligence dashboards for stakeholders.",
        items: ["Matplotlib", "Seaborn", "Power BI", "Jupyter Notebook", "Google Colab", "DAX"],
        impactMetrics: [
            { label: "Dashboards Created", value: "4" },
            { label: "Stakeholder Reports", value: "10+" }
        ]
    },
    {
        domain: "Cloud & MLOps",
        icon: <Cloud size={20} />,
        importance: 0.75,
        githubLanguages: ["Python", "Shell", "Dockerfile"],
        description: "Deploying and scaling machine learning pipelines in cloud environments, ensuring uptime and continuous integration.",
        items: ["Git/GitHub", "FastAPI", "Optuna"],
        impactMetrics: [
            { label: "Deployments Managed", value: "5" },
            { label: "Hyperparam Trials", value: "100+" }
        ]
    },
    {
        domain: "App Development",
        icon: <Code size={20} />,
        importance: 0.70,
        githubLanguages: ["JavaScript", "HTML", "CSS", "TypeScript"],
        description: "Building responsive frontend interfaces and seamless full-stack integrations to bring data insights directly to users.",
        items: ["React", "Tailwind CSS", "UI/UX"],
        impactMetrics: [
            { label: "Web Apps Shipped", value: "3" },
            { label: "Lighthouse Score", value: "95+" }
        ]
    }
].sort((a, b) => b.importance - a.importance);

// Removed CustomTooltip as we are building bespoke UI

const Skills = () => {
    const [skillDomains, setSkillDomains] = useState(initialSkillDomains);
    const [activeDomain, setActiveDomain] = useState(initialSkillDomains[0]);
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const fetchGithubStats = async () => {
            try {
                // Fetch public repos for SridharShyam
                const response = await fetch('https://api.github.com/users/SridharShyam/repos?per_page=100');
                if (!response.ok) return;
                const repos = await response.json();
                
                // Aggregate size (in KB) by primary language across all repos
                const langSizes = {};
                repos.forEach(repo => {
                    if (repo.language) {
                        langSizes[repo.language] = (langSizes[repo.language] || 0) + repo.size;
                    }
                });

                // Calculate domain sizes
                const rawDomains = initialSkillDomains.map(domain => {
                    let domainSize = 0;
                    domain.githubLanguages.forEach(lang => {
                        if (langSizes[lang]) domainSize += langSizes[lang];
                    });

                    // Add domain-specific weighting to balance the visualization
                    let modifier = 1.0;
                    if (domain.domain === "Machine Learning") modifier = 1.2;
                    if (domain.domain === "App Development") modifier = 1.5; // JS repos are usually smaller
                    if (domain.domain === "Cloud & MLOps") modifier = 1.8; // Infrastructure code is small

                    return { ...domain, rawSize: domainSize * modifier };
                });

                // Find max for relative scaling so the top skill is near 1.0
                const maxRawSize = Math.max(...rawDomains.map(d => d.rawSize));

                const updatedDomains = rawDomains.map(domain => {
                    // Calculate a relative score driven by GitHub data (0 to 1.0)
                    let githubScore = maxRawSize > 0 ? (domain.rawSize / maxRawSize) : 0;
                    
                    // Blend the GitHub empirical score (40%) with the self-assessed baseline (60%)
                    // This prevents domains with 0 public bytes (like private repo work) from bottoming out completely.
                    let blendedScore = (githubScore * 0.4) + (domain.importance * 0.6);
                    
                    // Bound the final score between 0.45 and 0.98 for visual aesthetics
                    let boundedScore = Math.min(Math.max(blendedScore, 0.45), 0.98);

                    return { ...domain, importance: boundedScore };
                });

                const sortedDomains = updatedDomains.sort((a, b) => b.importance - a.importance);
                setSkillDomains(sortedDomains);
                setActiveDomain(sortedDomains[0]); // Reset active to the new #1
                setIsLive(true);
            } catch (error) {
                console.error("Error fetching GitHub stats", error);
            }
        };

        fetchGithubStats();
    }, []);

    return (
        <section id="skills" className="py-32 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Feature</span> Importance
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        A multi-dimensional view of my technical proficiency, mapped as a model feature importance plot. I don't just write scripts; I architect complete decision-support ecosystems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Side: Premium Bespoke Feature Importance Plot */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 h-full bg-surface/30 rounded-2xl border border-white/5 relative glass-card p-6 md:p-8 flex flex-col"
                    >
                        <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-2">
                            <h3 className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                                Relative Proficiency (F-Score)
                            </h3>
                            {isLive && (
                                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Live via GitHub API
                                </div>
                            )}
                        </div>
                        
                        <div className="flex-1 w-full flex flex-col gap-6 py-4 justify-center">
                            {skillDomains.map((entry, index) => {
                                const isActive = activeDomain.domain === entry.domain;
                                return (
                                    <div 
                                        key={entry.domain}
                                        className="relative flex items-center group cursor-pointer"
                                        onMouseEnter={() => setActiveDomain(entry)}
                                        onClick={() => setActiveDomain(entry)}
                                    >
                                        {/* Domain Label (Left Aligned) */}
                                        <div className={`flex-shrink-0 w-32 md:w-44 text-right pr-4 text-xs md:text-sm font-medium leading-tight transition-colors ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                            {entry.domain}
                                        </div>
                                        
                                        {/* Bar Track */}
                                        <div className="flex-1 h-3 bg-white/5 rounded-full relative overflow-visible">
                                            {/* Animated Bar Fill */}
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${entry.importance * 100}%` }}
                                                transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.15 }}
                                                viewport={{ once: true }}
                                                className={`absolute top-0 left-0 h-full rounded-full transition-colors duration-500 ${isActive ? 'bg-gradient-to-r from-primary to-purple-500 shadow-[0_0_20px_rgba(0,212,255,0.6)]' : 'bg-white/20 group-hover:bg-white/40'}`}
                                            >
                                                {/* Glowing Data Node at tip */}
                                                <div className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full border-2 border-background transition-all duration-500 ${isActive ? 'bg-white shadow-[0_0_15px_white] scale-110' : 'bg-gray-400 opacity-0 group-hover:opacity-100'}`} />
                                            </motion.div>
                                        </div>
                                        
                                        {/* F-Score (Right Aligned) */}
                                        <div className={`w-14 text-left pl-4 font-mono text-xs md:text-sm transition-colors duration-300 ${isActive ? 'text-white font-bold' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                            {entry.importance.toFixed(2)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Side: Interactive Selection & Details */}
                    <div className="lg:col-span-7 h-full flex flex-col gap-6">
                        
                        {/* Domain Selectors */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            {skillDomains.map((domain) => (
                                <button
                                    key={domain.domain}
                                    onClick={() => setActiveDomain(domain)}
                                    onMouseEnter={() => setActiveDomain(domain)}
                                    className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left ${
                                        activeDomain.domain === domain.domain 
                                            ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(0,212,255,0.15)]' 
                                            : 'bg-surface/50 border-white/5 hover:border-white/20 hover:bg-surface'
                                    }`}
                                >
                                    <div className={`${activeDomain.domain === domain.domain ? 'text-primary' : 'text-gray-400'}`}>
                                        {domain.icon}
                                    </div>
                                    <span className={`font-medium ${activeDomain.domain === domain.domain ? 'text-white' : 'text-gray-400'}`}>
                                        {domain.domain}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Domain Details (Dynamic) */}
                        <div className="flex-1 min-h-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeDomain.domain}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-surface/40 border border-white/10 rounded-xl p-8 h-full flex flex-col"
                                >
                                    <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                                        <span className="text-primary">{activeDomain.icon}</span>
                                        {activeDomain.domain}
                                    </h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {activeDomain.description}
                                    </p>
                                    
                                    {/* Core Stack */}
                                    <div className="mb-6">
                                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-3">Core Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {activeDomain.items.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2 px-3 py-1.5 bg-background text-gray-300 text-sm rounded-lg border border-white/10"
                                                >
                                                    <span className="text-lg">
                                                        {iconMap[item] || null}
                                                    </span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Impact Metrics (Path 3) */}
                                    <div className="mt-auto pt-4 border-t border-white/10">
                                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">Empirical Impact</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {activeDomain.impactMetrics.map((metric, idx) => (
                                                <div key={idx} className="bg-background/50 rounded-lg p-3 border border-white/5">
                                                    <div className="text-2xl font-bold font-mono text-white mb-1">{metric.value}</div>
                                                    <div className="text-xs text-gray-400 leading-tight">{metric.label}</div>
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
