import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Brain, Heart, Rocket } from 'lucide-react';

const StatCounter = ({ value, label, isInView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value);
            if (start === end) return;

            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, 50); // basic animation logic
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 transition-all">
            <div className="text-3xl font-bold text-primary mb-1 font-heading">{count}+</div>
            <div className="text-sm text-gray-400">{label}</div>
        </div>
    );
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const stats = [
        { value: 10, label: "Projects Completed" },
        { value: 5, label: "ML Models Deployed" },
        { value: 2, label: "Hackathon Wins" },
        { value: 15, label: "Hackathons Participated" },
    ];

    return (
        <section id="about" ref={ref} className="py-24 bg-surface relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Image Placeholder / Visual */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-white/10 overflow-hidden flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                        <span className="text-gray-500 font-mono text-sm">[ Profile Image Placeholder ]</span>
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
                            Data Scientist with a <span className="text-primary">Vision</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            I'm a passionate technologist driven by curiosity and the desire to build systems that make a difference.
                            My journey involves exploring the intersection of data science, machine learning, and space technology,
                            aiming to push the boundaries of what's possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Rocket size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-white mb-1">Problem-Solver</h3>
                                <p className="text-sm text-gray-400">Transforming complex challenges into logic.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                                <Brain size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-white mb-1">Curiosity-Driven</h3>
                                <p className="text-sm text-gray-400">Always learning, always exploring new frontiers.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 col-span-1 md:col-span-2">
                            <div className="p-3 rounded-lg bg-accent/10 text-accent">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-white mb-1">Impact-Focused</h3>
                                <p className="text-sm text-gray-400">Building precise, human-centered technology.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                        {stats.map((stat, idx) => (
                            <StatCounter key={idx} {...stat} isInView={isInView} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
