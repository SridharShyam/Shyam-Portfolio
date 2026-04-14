import { motion } from 'framer-motion';
import { BookOpen, Calendar, Target, Clock, Award, ChevronRight, Star } from 'lucide-react';

const researchFocus = [
    {
        title: "Deep Learning Architectures",
        status: "Deep Dive",
        source: "PyTorch / TensorFlow",
        date: "Continuous",
        reason: "Exploring transformer-based models for spatial-temporal data analysis.",
        color: "text-cyan-400",
        icon: Target
    },
    {
        title: "Health-AI Diagnostic Integrity",
        status: "Active Research",
        source: "Open Healthcare Datasets",
        date: "Q3 2026",
        reason: "Researching robust feature engineering methods for high-accuracy disease detection.",
        color: "text-purple-400",
        icon: Target
    },
    {
        title: "Supply Chain Optimization",
        status: "Implementation",
        source: "RetailMind AI Project",
        date: "Deployed",
        reason: "Applied time-series forecasting to real-world inventory management for Indian SMBs.",
        color: "text-green-400",
        icon: Award
    },
    {
        title: "Full-Stack AI Deployment",
        status: "Certified",
        source: "AWS / Google Cloud",
        date: "2025",
        reason: "End-to-end production pipelines using FastAPI, Docker, and Cloud Engine.",
        color: "text-amber-400",
        icon: Award
    }
];

const nextUp = [
    "Quantum Machine Learning",
    "Edge AI Optimization",
    "Generative AI Architectures"
];

const stats = [
    { label: "Active Courses", value: "4", icon: BookOpen },
    { label: "Hours Learned", value: "120+", icon: Clock },
    { label: "Certifications", value: "7", icon: Award },
];

const LearningCard = ({ item, index }) => {
    const Icon = item.icon || Target;
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface/40 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
        >
            <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${item.color}`}>
                <Icon size={40} />
            </div>

            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className={`text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 ${item.color} mb-2 inline-block`}>
                        {item.status}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 min-h-[40px] leading-relaxed">{item.reason}</p>

            <div className="space-y-4">
                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <div className="flex flex-col gap-1">
                        <div className="text-xs text-gray-400 flex items-center gap-1">
                            <BookOpen size={12} /> {item.source}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500">
                            <Calendar size={10} />
                            <span>{item.date}</span>
                        </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-600 group-hover:text-primary transition-colors" />
                </div>
            </div>
        </motion.div>
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
                    className="mb-12 md:flex justify-between items-end"
                >
                    <div>
                        <span className="text-secondary font-mono text-sm tracking-wider uppercase">Continuous Evolution</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Focus</span>
                        </h2>
                    </div>

                    {/* Stats Widget */}
                    <div className="flex gap-6 mt-6 md:mt-0">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="flex items-center justify-center w-8 h-8 mx-auto mb-1 rounded-full bg-white/5 text-primary">
                                    <stat.icon size={14} />
                                </div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Grid - Spans 3 columns on large screens */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {researchFocus.map((item, index) => (
                            <LearningCard key={index} item={item} index={index} />
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
                                Currently focusing on <span className="text-white font-semibold">Deep Reinforcement Learning</span> agents for multi-agent environments.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Learning;
