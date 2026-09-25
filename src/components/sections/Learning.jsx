import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Target, Award, ChevronRight, Star, Rocket, Server, Database, Brain, Layers, ArrowRight, Sparkles } from 'lucide-react';

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
                    className="absolute inset-0 bg-surface/90 backdrop-blur-xl p-6 rounded-2xl border border-border hover:border-amber-400/50 shadow-xl flex flex-col overflow-hidden transition-colors"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    {/* Ambient Corner Glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-bl-full pointer-events-none" />

                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-background border border-border ${item.textColor} mb-3 inline-block shadow-sm backdrop-blur-md`}>
                                {item.status}
                            </span>
                            <h3 className="text-xl font-bold text-heading leading-tight font-heading">{item.title}</h3>
                        </div>
                    </div>

                    <p className="text-muted text-sm mb-4 flex-grow leading-relaxed">{item.reason}</p>

                    <div className="space-y-4 relative z-10 mt-auto">
                        <div className="flex items-center justify-between border-t border-border pt-3">
                            <div className="flex flex-col gap-1">
                                <div className="text-xs text-text flex items-center gap-1 font-mono">
                                    <Layers size={12} className="text-amber-500" /> {item.source}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-muted font-mono">
                                    <Target size={10} /> {item.date}
                                </div>
                            </div>

                            <span className="text-[11px] font-mono text-amber-500 flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                                Flip Specs <ArrowRight size={12} />
                            </span>
                        </div>
                    </div>
                </div>

                {/* BACK FACE */}
                <div 
                    className="absolute inset-0 bg-surface backdrop-blur-xl p-6 rounded-2xl border border-amber-500/40 shadow-2xl flex flex-col justify-between overflow-hidden"
                    style={{ 
                        backfaceVisibility: "hidden", 
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)" 
                    }}
                >
                    <div className="flex justify-between items-center border-b border-border pb-3">
                        <h4 className="text-xs font-mono text-muted uppercase tracking-wider font-bold">Tech Stack</h4>
                        <span className="text-[10px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">SPECS</span>
                    </div>

                    <div className="flex flex-wrap gap-2 my-auto">
                        {(item.stack || []).map((t, idx) => (
                            <span key={idx} className="bg-background text-text text-xs font-mono px-3 py-1.5 rounded-lg border border-border flex items-center gap-1.5 shadow-sm">
                                <Sparkles size={10} className="text-amber-500" /> {t}
                            </span>
                        ))}
                    </div>

                    <div className="border-t border-border pt-3">
                        <div className="flex justify-between text-[11px] font-mono text-muted">
                            <span>ETA Focus: Active Q3</span>
                            <span className="text-amber-500 font-bold">In Progress</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Learning = () => {
    return (
        <section id="learning" className="py-28 bg-surface relative overflow-hidden transition-colors duration-400">
            {/* Background Orbs */}
            <div className="absolute top-1/2 -left-32 w-96 h-96 bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-left"
                >
                    <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-surface/80 border border-border text-muted font-mono text-xs mb-4 backdrop-blur-md shadow-sm">
                        <BookOpen size={14} className="text-amber-500" />
                        CONTINUOUS EVOLUTION // ACTIVE RESEARCH & LEARNING
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-heading">
                        Learning & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500">Technical Focus</span>
                    </h2>
                    <p className="text-muted max-w-2xl text-base md:text-lg leading-relaxed mt-2">
                        Active skill acquisition, production engineering research, and next-generation ML architecture studies.
                    </p>
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
                        <div className="bg-surface/80 backdrop-blur-xl p-6 rounded-2xl border border-border shadow-xl">
                            <h3 className="text-lg font-bold text-heading mb-4 flex items-center gap-2 font-heading">
                                <Star className="text-amber-500" size={18} /> Next Up
                            </h3>
                            <ul className="space-y-4">
                                {nextUp.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-text group cursor-default font-mono">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60 group-hover:bg-amber-500 transition-colors" />
                                        <span className="group-hover:text-primary transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-6 border-t border-border">
                                <p className="text-xs text-muted italic">
                                    "The more I learn, the more I realize how much I don't know."
                                </p>
                            </div>
                        </div>

                        {/* Quick Fact or Quote */}
                        <div className="p-6 rounded-2xl bg-surface/80 backdrop-blur-xl border border-border shadow-xl">
                            <p className="text-sm text-text leading-relaxed">
                                Currently focusing on <span className="text-heading font-semibold underline decoration-amber-400/50">strengthening MLOps fundamentals</span> and scaling practical AI systems.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Learning;
