import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HelpCircle, Layers, Target, Rocket, MapPin, Award, Cpu, Zap, Trophy, Network } from 'lucide-react';
import InteractiveAIAvatar from '../ui/InteractiveAIAvatar';

const AchievementCard = ({ icon: IconComponent, label, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
            className="group relative p-4 bg-surface rounded-xl border border-border hover:border-primary/40 transition-colors flex flex-col justify-between min-h-[90px] shadow-xs"
        >
            <div className="flex items-center gap-2 mb-2">
                {IconComponent && <IconComponent size={16} className="text-primary" />}
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted">Focus Area</span>
            </div>
            <div className="text-xs md:text-sm font-semibold text-heading leading-snug">
                {label}
            </div>
        </motion.div>
    );
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const achievements = [
        { label: "Architecting Scalable AI Pipelines", icon: Cpu },
        { label: "TNStartify 3.0 Finalist (Innovation)", icon: Trophy },
        { label: "Bridging Data Science & Systems", icon: Network },
        { label: "Production-Ready ML Deployments", icon: Zap },
    ];

    const philosophies = [
        {
            icon: HelpCircle,
            title: "Question First",
            description: "Before touching a dataset, I determine the operational question the model must answer and who acts on it. A model without an actionable decision is just an experiment.",
        },
        {
            icon: Layers,
            title: "Cross-Domain Synergy",
            description: "Applying unified machine learning and predictive modeling foundations across FashionTech, HealthTech, and CareerTech to solve domain-specific data bottlenecks.",
        },
        {
            icon: Target,
            title: "Business KPI > Raw Accuracy",
            description: "High metric benchmarks are meaningless if unused. Systems must be engineered around stakeholder requirements: latency, utilization, risk reduction, and interpretability.",
        },
        {
            icon: Rocket,
            title: "Ship, Then Iterate",
            description: "Deploying early captures real user interactions no static test split can simulate. Production feedback is the most reliable driver of feature engineering.",
        }
    ];

    return (
        <section id="about" ref={ref} className="py-24 bg-surface/30 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-14 text-left"
                >
                    <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-surface border border-border text-text font-mono text-xs mb-4 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        ENGINEERING MINDSET & IDENTITY
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-heading">
                        Systems That Turn Data into Impact
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">

                    {/* Left: Professional Portrait & Grounded Badges */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative mx-auto max-w-[380px] lg:max-w-none">
                            <InteractiveAIAvatar />

                            {/* Clean Badges Bar Under Portrait */}
                            <div className="mt-4 grid grid-cols-2 gap-2.5">
                                {/* Location */}
                                <div className="py-2.5 px-3 bg-surface border border-border rounded-xl shadow-xs flex items-center gap-2">
                                    <MapPin size={14} className="text-secondary shrink-0" />
                                    <span className="text-xs font-mono text-heading font-medium truncate">Chennai, TN</span>
                                </div>

                                {/* Engineering */}
                                <div className="py-2.5 px-3 bg-surface border border-border rounded-xl shadow-xs flex items-center gap-2">
                                    <Cpu size={14} className="text-primary shrink-0" />
                                    <span className="text-xs font-mono text-heading font-medium truncate">AI & ML Engineer</span>
                                </div>

                                {/* Achievement */}
                                <div className="col-span-2 py-2.5 px-3.5 bg-surface border border-amber-500/30 rounded-xl shadow-xs flex items-center gap-2.5">
                                    <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                                        <Award size={15} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <span className="text-[9px] font-mono text-amber-600 dark:text-amber-400 uppercase font-bold block leading-none">Achievement</span>
                                        <span className="text-xs font-semibold text-heading truncate block">TNStartify 3.0 Finalist</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Bio & Philosophy Grid */}
                    <motion.div
                        className="lg:col-span-7 space-y-8"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        {/* Bio Paragraphs */}
                        <div className="space-y-4 text-text leading-relaxed text-base md:text-lg">
                            <p>
                                I am an <strong className="text-heading font-semibold">AI Engineer & Data Scientist</strong> based in Chennai. I don't just train models in isolation; I design end-to-end data pipelines and decision architectures that translate raw inputs into measurable outcomes.
                            </p>
                            <p>
                                From predicting survival risks in clinical biomarker datasets to building context-aware recommendation engines, my focus is on engineering robust features, validating statistical hypotheses, and deploying production-ready services that solve operational challenges.
                            </p>
                        </div>

                        {/* Philosophy Cards Grid */}
                        <div>
                            <h3 className="text-xl font-bold font-heading text-heading mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-5 rounded-full bg-primary" />
                                How I Think & Build
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {philosophies.map((item, idx) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="p-5 rounded-xl bg-surface border border-border shadow-xs hover:border-primary/40 transition-colors"
                                        >
                                            <div className="flex items-start gap-3.5">
                                                <div className="p-2.5 rounded-lg bg-background border border-border text-primary shrink-0">
                                                    <IconComponent size={18} />
                                                </div>
                                                <div>
                                                    <h4 className="font-heading font-semibold text-heading text-base mb-1">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs text-muted leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* Bottom Pillars / Achievements Bar */}
                <div className="pt-8 border-t border-border">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {achievements.map((item, idx) => (
                            <AchievementCard
                                key={idx}
                                icon={item.icon}
                                label={item.label}
                                delay={0.08 * idx}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
