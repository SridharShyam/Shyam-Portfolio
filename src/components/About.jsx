import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HelpCircle, Layers, Target, Rocket } from 'lucide-react';

const AchievementCard = ({ label }) => {
    return (
        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 transition-all flex items-center justify-center min-h-[80px]">
            <div className="text-sm md:text-base font-semibold text-gray-200">{label}</div>
        </div>
    );
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const achievements = [
        "TNStartify 3.0 Finalist",
        "Building End-to-End AI Systems | ML | EDA | Power BI.",
        "Data Science & ML Focus",
        "Hands-on Learning & Building",
    ];

    return (
        <section id="about" ref={ref} className="py-24 bg-surface relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Image / Visual */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 overflow-hidden relative group">
                        <img 
                            src="/shyam-casual-2.jpeg" 
                            alt="Sridhar Shyam"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    </div>
                    {/* Decorative elements behind image */}
                    <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full border border-primary/20 rounded-2xl" />
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                            Data Science and Machine Learning Student building <span className="text-primary">Impactful AI Systems</span>
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                            <p>
                                I'm an AI Engineer based in Chennai. I don't just train models in Jupyter Notebooks; I build end-to-end data systems that translate raw inputs into actionable business intelligence.
                            </p>
                            <p>
                                From predicting supply chain bottlenecks to flagging clinical health risks, my focus is always on engineering features that capture reality and deploying models that solve actual operational problems.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-heading text-white mb-6">How I Think</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                                    <HelpCircle size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold text-white mb-1">Question First</h4>
                                    <p className="text-sm text-gray-400">Before I touch a dataset, I write the question the model needs to answer — and who acts on the answer. A model without a decision-maker is just a science experiment.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-secondary/10 text-secondary shrink-0">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold text-white mb-1">Three Domains, One Lens</h4>
                                    <p className="text-sm text-gray-400">I build across FashionTech, HealthTech, and CareerTech — not because they're similar, but because the decision-support problem is the same in all three: turn messy data into the right next action.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold text-white mb-1">Business KPI {'>'} Accuracy Score</h4>
                                    <p className="text-sm text-gray-400">A 0.81 ROC-AUC means nothing if no one acts on the output. I design systems around the metric that matters to the stakeholder — acceptance rate, utilization, avoidance of a bad decision.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400 shrink-0">
                                    <Rocket size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold text-white mb-1">Ship, Then Improve</h4>
                                    <p className="text-sm text-gray-400">I deploy before I'm ready, because real users ask questions a test set never will. Production feedback is the best feature engineer.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                        {achievements.map((achievement, idx) => (
                            <AchievementCard key={idx} label={achievement} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
