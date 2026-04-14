import { motion } from 'framer-motion';
import { Database, Brain, Rocket, Heart } from 'lucide-react';

const Vision = () => {
    const pillars = [
        {
            title: "Data Science",
            subtitle: "Building data-driven systems",
            description: "Working with real-world datasets to extract insights, identify patterns, and support better decision-making.",
            icon: Database,
            color: "from-blue-400 to-cyan-400",
        },
        {
            title: "Artificial Intelligence",
            subtitle: "Applying ML to real problems",
            description: "Exploring machine learning techniques to build intelligent systems that go beyond theoretical models.",
            icon: Brain,
            color: "from-purple-400 to-pink-400",
        },
        {
            title: "Space Exploration",
            subtitle: "AI for space & discovery",
            description: "Interested in applying data science and AI to space-related problems and future exploration.",
            icon: Rocket,
            color: "from-orange-400 to-red-400",
        },
        {
            title: "Social Impact",
            subtitle: "Technology for real-world impact",
            description: "Focused on using AI to solve meaningful problems in areas like healthcare and everyday systems.",
            icon: Heart,
            color: "from-green-400 to-emerald-400",
        },
    ];

    return (
        <section id="vision" className="py-24 bg-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-secondary font-mono text-sm tracking-widest uppercase">My Philosophy</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mt-3 mb-6">
                        Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Interests</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        "I focus on building practical AI systems by understanding how data, models, and real-world problems connect."
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="relative group p-8 rounded-2xl bg-background border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.color}`} />

                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <pillar.icon className="text-white" size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                {pillar.title}
                            </h3>
                            <p className="text-sm text-primary/80 mb-4 font-medium">{pillar.subtitle}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {pillar.description}
                            </p>

                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-white to-transparent opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Vision;
