import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { 
    SiPython, SiPandas, SiNumpy, SiScikitlearn, 
    SiFastapi, SiMongodb, SiJupyter, SiGooglecolab, SiC 
} from 'react-icons/si';
import { 
    FaChartBar, FaTools, FaDatabase, 
    FaGithub, FaChartArea, FaChartLine, FaJava 
} from 'react-icons/fa';
import { Cpu, Database, Server, PieChart } from 'lucide-react';

const iconMap = {
    "Python": <SiPython className="text-[#3776AB]" />,
    "Pandas": <SiPandas className="text-[#150458]" />,
    "NumPy": <SiNumpy className="text-[#013243]" />,
    "Scikit-learn": <SiScikitlearn className="text-[#F7931E]" />,
    "Statistical Analysis": <FaChartBar className="text-blue-400" />,
    "Feature Engineering": <FaTools className="text-gray-400" />,
    "FastAPI": <SiFastapi className="text-[#05998B]" />,
    "SQL": <FaDatabase className="text-blue-500" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "Git/GitHub": <FaGithub className="text-white" />,
    "Matplotlib": <FaChartArea className="text-orange-400" />,
    "Seaborn": <FaChartLine className="text-blue-300" />,
    "Google Colab": <SiGooglecolab className="text-[#F9AB00]" />,
    "Jupyter Notebook": <SiJupyter className="text-[#F37626]" />,
    "Java": <FaJava className="text-[#007396]" />,
    "C": <SiC className="text-[#A8B9CC]" />,
    "Power BI": <FaChartBar className="text-[#F2C811]" />
};

const skillDomains = [
    {
        domain: "Machine Learning",
        icon: <Cpu size={20} />,
        score: 95,
        fullMark: 100,
        description: "Designing predictive models, classification systems, and decision engines to solve complex business problems.",
        items: ["Python", "Scikit-learn", "Statistical Analysis", "Feature Engineering"]
    },
    {
        domain: "Data Engineering",
        icon: <Database size={20} />,
        score: 85,
        fullMark: 100,
        description: "Wrangling messy, unstructured data into clean pipelines and optimizing queries for high-throughput analysis.",
        items: ["Pandas", "NumPy", "SQL", "MongoDB"]
    },
    {
        domain: "Backend Architecture",
        icon: <Server size={20} />,
        score: 90,
        fullMark: 100,
        description: "Building resilient, high-performance APIs and microservices to serve machine learning models at scale.",
        items: ["FastAPI", "Python", "Java", "C", "Git/GitHub"]
    },
    {
        domain: "Data Visualization",
        icon: <PieChart size={20} />,
        score: 85,
        fullMark: 100,
        description: "Translating raw algorithmic outputs into intuitive, actionable intelligence dashboards for stakeholders.",
        items: ["Matplotlib", "Seaborn", "Power BI", "Jupyter Notebook", "Google Colab"]
    }
];

// Custom Tooltip for the Radar Chart
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-surface/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl">
                <p className="text-primary font-medium">{payload[0].payload.domain}</p>
                <p className="text-gray-300 text-sm">Proficiency: {payload[0].value}%</p>
            </div>
        );
    }
    return null;
};

const Skills = () => {
    const [activeDomain, setActiveDomain] = useState(skillDomains[0]);

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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Domain</span> Capabilities
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        A multi-dimensional view of my technical proficiency. I don't just write scripts; I architect complete decision-support ecosystems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Side: Radar Chart Visualization */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 h-[400px] md:h-[500px] bg-surface/30 rounded-2xl border border-white/5 relative glass-card p-4"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="55%" data={skillDomains}>
                                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                <PolarAngleAxis 
                                    dataKey="domain" 
                                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12, fontFamily: 'Inter' }} 
                                />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Tooltip content={<CustomTooltip />} />
                                <Radar
                                    name="Proficiency"
                                    dataKey="score"
                                    stroke="#00d4ff"
                                    strokeWidth={2}
                                    fill="url(#colorUv)"
                                    fillOpacity={0.5}
                                />
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                                    </linearGradient>
                                </defs>
                            </RadarChart>
                        </ResponsiveContainer>
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
