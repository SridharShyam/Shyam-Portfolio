import { motion } from 'framer-motion';
import { Award, Zap, Users, Lightbulb, TrendingUp, Globe, Rocket } from 'lucide-react';

const Innovation = () => {
    const timeline = [
        {
            year: "2025",
            title: "Student Immersion Programme",
            description: "Attended student immersion programme by SEC x UTP, Malaysia.",
            icon: Globe,
        },
        {
            year: "2025",
            title: "TNStartfiy 3.0 Finalist",
            description: "Recognized as a finalist for innovative solutions in TNStartfiy 3.0.",
            icon: Rocket,
        },
        {
            year: "2025",
            title: "Innovation Vertical Chair",
            description: "Leading innovation initiatives as the Chair of YUVA Club, SEC.",
            icon: Users,
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
                        <span>Leadership & Impact</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                        Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-pink-500">Timeline</span>
                    </h2>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:content-[''] before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-secondary/50 before:to-transparent">
                    {timeline.map((item, index) => (
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Innovation;
