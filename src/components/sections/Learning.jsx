import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Target, Award, ChevronRight, Star, Rocket, Server, Database, Brain, Layers } from 'lucide-react';

const learningFocus = [
    {
        title: "End-to-End MLOps Pipelines",
        status: "CI/CD & Operations",
        source: "MLflow, GitHub Actions",
        date: "Advanced",
        reason: "Orchestrating model training, tracking experiments, and deploying artifacts automatically via CI/CD pipelines.",
        textColor: "text-blue-400",
        glowColor: "bg-blue-400/20",
        gradientTo: "to-blue-400",
        icon: Rocket,
        philosophy: "Because Jupyter Notebooks don't scale. I'm learning MLOps to understand how to deploy and monitor models in production for millions of users.",
        stack: ["Docker", "MLflow", "GitHub Actions", "AWS"],
        progress: 75
    },
    {
        title: "Model Serving & API Architecture",
        status: "Backend Engineering",
        source: "FastAPI, Docker",
        date: "Advanced",
        reason: "Packaging machine learning models into highly scalable, low-latency REST APIs for consumer applications.",
        textColor: "text-green-400",
        glowColor: "bg-green-400/20",
        gradientTo: "to-green-400",
        icon: Server,
        philosophy: "A model is useless if applications can't communicate with it. I'm focusing on building robust backend APIs that serve predictions reliably.",
        stack: ["FastAPI", "Uvicorn", "Docker", "Redis"],
        progress: 85
    },
    {
        title: "Data Engineering for AI",
        status: "Data Pipelines",
        source: "Apache Airflow",
        date: "Intermediate",
        reason: "Building automated ETL pipelines to clean, transform, and stream raw data directly into feature stores for model consumption.",
        textColor: "text-amber-400",
        glowColor: "bg-amber-400/20",
        gradientTo: "to-amber-400",
        icon: Database,
        philosophy: "Garbage in, garbage out. Mastering data engineering ensures my models are trained on reliable, up-to-date, and well-structured data.",
        stack: ["Airflow", "PySpark", "PostgreSQL", "Kafka"],
        progress: 60
    },
    {
        title: "LLM Orchestration & RAG",
        status: "Generative AI",
        source: "LangChain, Pinecone",
        date: "Advanced",
        reason: "Designing Retrieval-Augmented Generation systems to give Large Language Models memory and access to proprietary data.",
        textColor: "text-purple-400",
        glowColor: "bg-purple-400/20",
        gradientTo: "to-purple-400",
        icon: Brain,
        philosophy: "Standard LLMs hallucinate. By building RAG pipelines, I can ground AI responses in actual ground-truth business data.",
        stack: ["LangChain", "Vector DBs", "OpenAI API", "HuggingFace"],
        progress: 90
    }
];

const nextUp = [
    "Kubernetes for ML Scaling",
    "Model Drift & Monitoring",
    "Distributed Training"
];

const DirectionAwareCard = ({ item }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mouseDirection, setMouseDirection] = useState('right');
    const Icon = item.icon || Target;

    const getDirection = (e) => {
        if (!cardRef.current) return 'right';
        const rect = cardRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);
        if (angle < 0) angle += 360;

        if (angle >= 45 && angle < 135) return 'bottom';
        if (angle >= 135 && angle < 225) return 'left';
        if (angle >= 225 && angle < 315) return 'top';
        return 'right';
    };

    const handleMouseEnter = (e) => {
        const dir = getDirection(e);
        setMouseDirection(dir);
        setIsHovered(true);
    };

    const handleMouseLeave = (e) => {
        const dir = getDirection(e);
        setMouseDirection(dir);
        setIsHovered(false);
    };

    let rotateX = 0;
    let rotateY = 0;

    if (isHovered) {
        if (mouseDirection === 'top') rotateX = -180;
        if (mouseDirection === 'bottom') rotateX = 180;
        if (mouseDirection === 'left') rotateY = 180;
        if (mouseDirection === 'right') rotateY = -180;
    }

    const backfaceTransform = 
        mouseDirection === 'top' ? 'rotateX(180deg)' :
        mouseDirection === 'bottom' ? 'rotateX(-180deg)' :
        mouseDirection === 'left' ? 'rotateY(-180deg)' :
        'rotateY(180deg)';

    return (
        <div 
            ref={cardRef}
            className="relative w-full h-full min-h-[300px]"
            style={{ perspective: "1000px" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="w-full h-full relative"
                animate={{ rotateX, rotateY }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* FRONT FACE */}
                <div 
                    className="absolute inset-0 bg-surface/40 p-6 rounded-xl border border-white/5 shadow-lg flex flex-col overflow-hidden"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    <div className={`absolute top-0 right-0 p-3 opacity-10 ${item.textColor}`}>
                        <Icon size={40} />
                    </div>

                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <span className={`text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 ${item.textColor} mb-3 inline-block`}>
                                {item.status}
                            </span>
                            <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">{item.reason}</p>

                    <div className="space-y-4 relative z-10 mt-auto">
                        <div className="flex items-center justify-between border-t border-white/5 pt-3">
                            <div className="flex flex-col gap-1">
                                <div className="text-xs text-gray-400 flex items-center gap-1">
                                    <Layers size={12} /> {item.source}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                    <Target size={10} />
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-600" />
                        </div>
                    </div>
                </div>

                {/* BACK FACE */}
                <div 
                    className="absolute inset-0 bg-gradient-to-br from-surface to-background p-6 rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
                    style={{ 
                        transform: backfaceTransform,
                        backfaceVisibility: "hidden", 
                        WebkitBackfaceVisibility: "hidden",
                    }}
                >
                    {/* Glow */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 ${item.glowColor} blur-3xl rounded-full`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <h4 className={`text-sm font-bold mb-3 flex items-center gap-2 ${item.textColor}`}>
                            <Brain size={14} /> The Philosophy
                        </h4>
                        <p className="text-sm text-gray-300 leading-relaxed italic mb-4 font-serif">
                            "{item.philosophy}"
                        </p>
                        
                        <div className="mt-auto border-t border-white/10 pt-4">
                            <h4 className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.stack.map(tech => (
                                    <span key={tech} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden">
                                <div className={`h-full bg-gradient-to-r from-gray-600 ${item.gradientTo}`} style={{ width: `${item.progress}%` }} />
                            </div>
                            <div className="text-[10px] text-right mt-1 text-gray-500">
                                Mastery Progress: {item.progress}%
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Learning = () => {
    return (
        <section id="learning" className="py-24 bg-background relative">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-secondary font-mono text-sm tracking-wider uppercase">Continuous Evolution</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                        Learning & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Focus</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Grid - Spans 3 columns on large screens */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {learningFocus.map((item, index) => (
                            <DirectionAwareCard key={index} item={item} index={index} />
                        ))}
                    </div>

                    {/* Sidebar - Next Up */}
                    <motion.div
                        className="lg:col-span-1 space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="bg-surface/30 p-6 rounded-xl border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Star className="text-accent" size={18} /> Next Up
                            </h3>
                            <ul className="space-y-4">
                                {nextUp.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 group cursor-default">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors" />
                                        <span className="group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-6 border-t border-white/5">
                                <p className="text-xs text-gray-500 italic">
                                    "The more I learn, the more I realize how much I don't know."
                                </p>
                            </div>
                        </div>

                        {/* Quick Fact or Quote */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5">
                            <p className="text-sm text-gray-300">
                                Currently focusing on <span className="text-white font-semibold">strengthening MLOps fundamentals</span> and scaling practical AI systems.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Learning;
