import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Heart, Rocket, Database } from 'lucide-react';

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
        "AI/ML Projects (In Progress)",
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
                            src="https://lh3.googleusercontent.com/d/12ImFcIaDRDsU8WP0JWDf-Vq2k68zNI-o" 
                            alt="Sridhar Shyam"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="absolute inset-0 hidden items-center justify-center bg-white/5 flex-col gap-2">
                             <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                                <Brain className="text-primary" size={40} />
                             </div>
                             <span className="text-gray-500 font-mono text-xs text-center px-4">Upload profile.jpg <br/> to /public folder</span>
                        </div>
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
                            AI & ML/Data Science Student building <span className="text-primary">Impactful AI Systems</span>
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                            <p>
                                I'm an AI & Data Science student from Chennai, focused on building practical, data-driven systems and machine learning applications.
                            </p>
                            <p>
                                I have worked on projects involving inventory optimization and health risk analysis using AI concepts, gaining hands-on experience in data analysis, feature engineering, and model development.
                            </p>
                            <p>
                                I focus on clarity, usability, and building systems that go beyond experimentation.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Rocket size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-white mb-1">Problem-Solver</h3>
                                <p className="text-sm text-gray-400">Transforming complex challenges into structured, logical solutions.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                                <Brain size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-white mb-1">Curiosity-Driven</h3>
                                <p className="text-sm text-gray-400">Continuously exploring new ideas, tools, and technologies.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-accent/10 text-accent">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-white mb-1">Impact-Focused</h3>
                                <p className="text-sm text-gray-400">Building practical, user-centered AI systems that create real value.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400">
                                <Database size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-white mb-1">Data-Driven</h3>
                                <p className="text-sm text-gray-400">Making informed decisions through data analysis and insights.</p>
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
