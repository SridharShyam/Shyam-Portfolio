import { motion } from 'framer-motion';
import { Award, Zap, Users, Lightbulb, TrendingUp, Globe, Rocket, Sparkles } from 'lucide-react';

const Innovation = () => {
    const timeline = [
        {
            year: "2023 (Foundation Phase)",
            title: "Started Journey in AI & Programming",
            description: "Began exploring programming fundamentals, problem-solving, and core concepts in data science and AI.",
            icon: Lightbulb,
        },
        {
            year: "2024 (Skill Building Phase)",
            title: "AI & Data Science Learning Phase",
            description: "Completed foundational courses in Data Science and AI, focusing on Python, data analysis, and machine learning concepts.",
            icon: Award,
        },
        {
            year: "2024 (Mid – Practical Exposure)",
            title: "Inplant Training – CIRF",
            description: "Gained hands-on experience in exploratory data analysis, data science workflows, and real-world datasets.",
            icon: TrendingUp,
        },
        {
            year: "2025",
            title: "Student Immersion Programme (SEC × UTP, Malaysia)",
            description: "Selected for an international student immersion programme in collaboration with UTP, Malaysia, gaining global exposure and collaborative experience.",
            icon: Globe,
        },
        {
            year: "2025 (Growth & Recognition)",
            title: "Finalist — TNStartify 3.0",
            description: "Recognized as a finalist for developing innovative solutions in TNStartify 3.0.",
            icon: Rocket,
        },
        {
            year: "2025 (Present)",
            title: "Innovation Vertical Chair — YUVA Club",
            description: "Leading innovation initiatives, organizing projects, and driving a culture of problem-solving within YUVA Club.",
            icon: Users,
        },
        {
            year: "Beyond 2025",
            title: "The Horizon",
            description: "Continuously evolving, building, and exploring the next frontiers of AI and human-centered technology.",
            icon: Sparkles,
            isFuture: true
        },
    ];

    return (
        <section id="innovation" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4 border border-secondary/20">
                        <Zap size={16} />
                        <span>Growth • Leadership • Impact</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                        Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-pink-500">Growth Timeline</span>
                    </h2>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:content-[''] before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-secondary/50 before:to-transparent">
                    {timeline.map((item, index) => {
                        if (item.isFuture) {
                            return (
                                <motion.div
                                    key={index}
                                    className="flex flex-col md:flex-row gap-8 items-start md:items-center relative"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Pulsing Dot */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-secondary animate-pulse shadow-[0_0_15px_rgba(236,72,153,0.5)] z-20" />
                                    
                                    {/* Fading Extension Line */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-4 w-0.5 h-32 bg-gradient-to-b from-secondary/50 to-transparent z-10" />

                                    <div className="ml-16 md:ml-0 md:w-full flex flex-col md:items-center justify-center pt-2">
                                        <div className="flex items-center gap-3 text-secondary animate-pulse duration-[3000ms]">
                                            <item.icon size={24} />
                                            <span className="font-heading font-bold text-xl tracking-wider uppercase italic">The Journey Continues...</span>
                                        </div>
                                        <p className="text-gray-500 text-sm mt-2 max-w-sm md:text-center italic">
                                            Exploring the next frontiers of AI and building systems that matter.
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        }

                        return (
                            <motion.div
                                key={index}
                                className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.2 }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-1/2 p-6 rounded-xl bg-surface/40 border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-all hover:bg-surface/60 group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-primary font-mono text-sm">{item.year}</span>
                                        <item.icon size={18} className="text-gray-400 group-hover:text-secondary transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Innovation;
