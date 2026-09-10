import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HelpCircle, Layers, Target, Rocket, MapPin, Award, Cpu, Zap, Trophy, Network } from 'lucide-react';

const AchievementCard = ({ icon: Icon, label, accentColor, delay }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative p-4 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[95px] overflow-hidden"
        >
            <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${accentColor} opacity-10 group-hover:opacity-25 rounded-bl-full transition-opacity duration-300`} />
            <div className="flex items-center gap-2 mb-2">
                <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 group-hover:text-gray-300">Pillar</span>
            </div>
            <div className="text-xs md:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-snug">
                {label}
            </div>
        </motion.div>
    );
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const achievements = [
        { label: "Architecting Scalable AI Pipelines", icon: Cpu, accent: "from-primary to-transparent" },
        { label: "TNStartify 3.0 Finalist (Innovation)", icon: Trophy, accent: "from-amber-500 to-transparent" },
        { label: "Bridging Data Science & Systems", icon: Network, accent: "from-secondary to-transparent" },
        { label: "Production-Ready ML Deployments", icon: Zap, accent: "from-cyan-500 to-transparent" },
    ];

    const philosophies = [
        {
            icon: HelpCircle,
            title: "Question First",
            description: "Before touching a dataset, I write the core question the model must answer and who acts on it. A model without a decision-maker is just an experiment.",
            color: "text-primary",
            bgGradient: "from-primary/20 via-primary/5 to-transparent",
            borderColor: "hover:border-primary/40"
        },
        {
            icon: Layers,
            title: "Three Domains, One Lens",
            description: "Building across FashionTech, HealthTech, and CareerTech—all linked by the same goal: converting raw, noisy data into actionable next steps.",
            color: "text-secondary",
            bgGradient: "from-secondary/20 via-secondary/5 to-transparent",
            borderColor: "hover:border-secondary/40"
        },
        {
            icon: Target,
            title: "Business KPI > Accuracy",
            description: "A high ROC-AUC is meaningless if unused. Systems are engineered around stakeholder metrics—utilization, risk reduction, and ROI.",
            color: "text-accent",
            bgGradient: "from-accent/20 via-accent/5 to-transparent",
            borderColor: "hover:border-accent/40"
        },
        {
            icon: Rocket,
            title: "Ship, Then Iterate",
            description: "Deploying early captures real user questions no test set can predict. Production feedback is the ultimate feature engineering tool.",
            color: "text-cyan-400",
            bgGradient: "from-cyan-400/20 via-cyan-400/5 to-transparent",
            borderColor: "hover:border-cyan-400/40"
        }
    ];

    return (
        <section id="about" ref={ref} className="py-28 bg-surface relative overflow-hidden">
            {/* Background Glow Orbs */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-left"
                >
                    <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs mb-4 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        ABOUT ME // CORE PHILOSOPHY
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                        Building Intelligent Systems <br className="hidden sm:block" />
                        That Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">Data into Impact</span>
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">

                    {/* Left: Enhanced Profile Visual Card */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative mx-auto max-w-[380px] lg:max-w-none">
                            {/* Main Frame */}
                            <motion.div 
                                whileHover={{ scale: 1.01 }}
                                className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-1 border border-white/15 overflow-hidden shadow-2xl relative group backdrop-blur-sm"
                            >
                                <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                                    <img 
                                        src="/shyam-casual-2.jpeg" 
                                        alt="Sridhar Shyam"
                                        className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                                </div>
                            </motion.div>

                            {/* Decorative Outer Glow Ring */}
                            <div className="absolute -z-10 -inset-3 bg-gradient-to-r from-primary/20 via-purple-500/20 to-secondary/20 rounded-[36px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Floating Badge 1: Location */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-4 -left-4 z-20 py-2 px-3.5 bg-black/80 backdrop-blur-xl border border-white/15 rounded-full shadow-lg flex items-center gap-2"
                            >
                                <MapPin size={14} className="text-secondary" />
                                <span className="text-xs font-mono text-gray-200">Chennai, TN</span>
                            </motion.div>

                            {/* Floating Badge 2: Engineering */}
                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-1/3 -right-4 z-20 py-2 px-3.5 bg-black/80 backdrop-blur-xl border border-white/15 rounded-full shadow-lg flex items-center gap-2"
                            >
                                <Cpu size={14} className="text-primary" />
                                <span className="text-xs font-mono text-gray-200">AI & ML Engineer</span>
                            </motion.div>

                            {/* Floating Badge 3: Award */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 left-6 z-20 py-2.5 px-4 bg-gradient-to-r from-amber-500/20 to-black/80 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-xl flex items-center gap-2.5"
                            >
                                <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                                    <Award size={16} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono text-amber-300/80 uppercase">Achievement</div>
                                    <div className="text-xs font-semibold text-white">TNStartify 3.0 Finalist</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Bio & Philosophy Grid */}
                    <motion.div
                        className="lg:col-span-7 space-y-8"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Bio Paragraphs */}
                        <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
                            <p>
                                I'm an <strong className="text-white font-semibold">AI Engineer</strong> based in Chennai. I don't just train models in isolation; I design end-to-end data pipelines and decision architectures that translate raw inputs into measurable business outcomes.
                            </p>
                            <p>
                                From predicting supply chain bottlenecks to flagging clinical health risks, my focus is always on engineering robust features that capture reality and deploying production-ready models that solve actual operational challenges.
                            </p>
                        </div>

                        {/* Philosophy Cards Grid */}
                        <div>
                            <h3 className="text-xl font-bold font-heading text-white mb-5 flex items-center gap-2">
                                <span className="w-1.5 h-5 rounded-full bg-primary" />
                                How I Think & Build
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {philosophies.map((item, idx) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ y: -3 }}
                                            className={`p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 ${item.borderColor} transition-all duration-300 backdrop-blur-sm group relative overflow-hidden`}
                                        >
                                            <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${item.bgGradient} rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`} />
                                            <div className="flex items-start gap-3.5 relative z-10">
                                                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${item.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                    <IconComponent size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-heading font-semibold text-white text-base mb-1 group-hover:text-primary transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs text-gray-400 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* Bottom Pillars / Achievements Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {achievements.map((item, idx) => (
                            <AchievementCard 
                                key={idx} 
                                icon={item.icon} 
                                label={item.label} 
                                accentColor={item.accent}
                                delay={0.1 * idx} 
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
