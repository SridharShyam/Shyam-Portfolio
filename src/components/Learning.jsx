import { motion } from 'framer-motion';
import { BookOpen, Calendar, Target, Clock, Award, ChevronRight, Star } from 'lucide-react';

const learningItems = [
    {
        title: "PyTorch & Deep Learning",
        progress: 70,
        source: "DeepLearning.AI",
        date: "Q2 2026",
        reason: "Core framework for advanced AI research.",
        color: "text-cyan-400",
        barColor: "bg-cyan-400",
        status: "Advanced"
    },
    {
        title: "Astronomy Data Analysis",
        progress: 55,
        source: "NASA Open Data",
        date: "Q3 2026",
        reason: "Applying ML to exoplanet detection.",
        color: "text-purple-400",
        barColor: "bg-purple-400",
        status: "Intermediate"
    },
    {
        title: "Advanced RL Algorithms",
        progress: 45,
        source: "Sutton & Barto",
        date: "Q4 2026",
        reason: "Optimizing complex decision systems.",
        color: "text-purple-400",
        barColor: "bg-purple-400",
        status: "Intermediate"
    },
    {
        title: "Cloud ML Deployment",
        progress: 30,
        source: "AWS Certification",
        date: "Q1 2027",
        reason: " scalable production pipelines.",
        color: "text-amber-400",
        barColor: "bg-amber-400",
        status: "In Progress"
    },
    {
        title: "Graph Neural Networks",
        progress: 20,
        source: "Stanford CS224W",
        date: "Q2 2027",
        reason: "Structuring complex relational data.",
        color: "text-amber-400",
        barColor: "bg-amber-400",
        status: "Just Started"
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
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface/40 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
        >
            <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${item.color}`}>
                <Target size={40} />
            </div>

            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className={`text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 ${item.color} mb-2 inline-block`}>
                        {item.status}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{item.reason}</p>

            <div className="space-y-4">
                {/* Progress Bar */}
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <div className="text-xs text-gray-400 flex items-center gap-1">
                            <BookOpen size={12} /> {item.source}
                        </div>
                        <div className={`text-xs font-semibold ${item.color}`}>
                            {item.progress}%
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/5">
                        <motion.div
                            style={{ width: `${item.progress}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${item.barColor}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={12} />
                        <span>Target: {item.date}</span>
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
                        <span className="text-secondary font-mono text-sm tracking-wider uppercase">Continuous Growth</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Journey</span>
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
                        {learningItems.map((item, index) => (
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
