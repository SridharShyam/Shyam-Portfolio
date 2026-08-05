import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell } from 'recharts';
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
const skillDomains = [
    {
        domain: "Machine Learning",
        icon: <Cpu size={20} />,
        importance: 0.92,
        description: "Designing predictive models, classification systems, and decision engines to solve complex business problems.",
        items: ["Python", "Scikit-Learn", "Statistical Analysis", "Feature Engineering", "Time Series", "ARIMA", "XGBoost", "SMOTE"]
    },
    {
        domain: "Data Engineering",
        icon: <Database size={20} />,
        importance: 0.85,
        description: "Wrangling messy, unstructured data into clean pipelines and optimizing queries for high-throughput analysis.",
        items: ["Pandas", "NumPy", "SQL", "MongoDB"]
    },
    {
        domain: "Backend Architecture",
        icon: <Server size={20} />,
        importance: 0.88,
        description: "Building resilient, high-performance APIs and microservices to serve machine learning models at scale.",
        items: ["FastAPI", "Python", "Java", "C", "Git"]
    },
    {
        domain: "Data Visualization",
        icon: <PieChart size={20} />,
        importance: 0.80,
        description: "Translating raw algorithmic outputs into intuitive, actionable intelligence dashboards for stakeholders.",
        items: ["Matplotlib", "Seaborn", "Power BI", "Jupyter Notebook", "Google Colab", "DAX"]
    },
    {
        domain: "Cloud & MLOps",
        icon: <Cloud size={20} />,
        importance: 0.75,
        description: "Deploying and scaling machine learning pipelines in cloud environments, ensuring uptime and continuous integration.",
        items: ["Git/GitHub", "FastAPI", "Optuna"]
    },
    {
        domain: "App Development",
        icon: <Code size={20} />,
        importance: 0.70,
        description: "Building responsive frontend interfaces and seamless full-stack integrations to bring data insights directly to users.",
        items: ["React", "Tailwind CSS", "UI/UX"]
    }
].sort((a, b) => a.importance - b.importance); // Sort ascending so highest is at top of horizontal bar chart

// Custom Tooltip for the Feature Importance Plot
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-surface/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl">
                <p className="text-primary font-medium">{payload[0].payload.domain}</p>
                <p className="text-gray-300 text-sm">F-Score (Importance): {payload[0].value.toFixed(2)}</p>
            </div>
        );
    }
    return null;
};

const Skills = () => {
    const [activeDomain, setActiveDomain] = useState(skillDomains[skillDomains.length - 1]);

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
                    
                    {/* Left Side: Feature Importance Plot */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 h-[400px] md:h-[500px] bg-surface/30 rounded-2xl border border-white/5 relative glass-card p-6 flex flex-col"
                    >
                        <h3 className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-6 text-center border-b border-white/5 pb-2">
                            Relative Proficiency (F-Score)
                        </h3>
                        <div className="flex-1 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart 
                                    data={skillDomains} 
                                    layout="vertical" 
                                    margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={true} vertical={true} />
                                    <XAxis type="number" domain={[0, 1]} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} tickLine={false} />
                                    <YAxis type="category" dataKey="domain" tick={false} width={0} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                                    <Tooltip cursor={{ fill: 'rgba(255,255,255,0.02)' }} content={<CustomTooltip />} />
                                    <Bar dataKey="importance" radius={[0, 4, 4, 0]} barSize={24}>
                                        {skillDomains.map((entry, index) => (
                                            <Cell 
                                                key={`cell-${index}`} 
                                                fill={activeDomain.domain === entry.domain ? '#00d4ff' : 'rgba(139, 92, 246, 0.4)'} 
                                                style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                                                onClick={() => setActiveDomain(entry)}
                                                onMouseEnter={() => setActiveDomain(entry)}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Right Side: Interactive Selection & Details */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        
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
                        <div className="min-h-[280px]">
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
                                    
                                    <div className="mt-auto">
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
