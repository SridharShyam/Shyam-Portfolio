import { motion } from 'framer-motion';

const skills = [
    {
        category: "Data Science & ML",
        items: ["Python", "Pandas", "NumPy", "Scikit-learn", "K-means Clustering"]
    },
    {
        category: "AI & Deep Learning",
        items: ["TensorFlow", "PyTorch", "Neural Networks", "Reinforcement Learning"]
    },
    {
        category: "Development Tools",
        items: ["Git", "GitHub", "VS Code", "Docker", "Jupyter"]
    },
    {
        category: "Visualization",
        items: ["Streamlit", "Dash", "Matplotlib", "Seaborn", "Altair"]
    },
    {
        category: "Programming",
        items: ["Python", "C++", "C", "SQL", "JavaScript"]
    },
    {
        category: "Creative Tools",
        items: ["Blender", "Figma", "Adobe Suite"]
    }
];

const SkillCard = ({ category, items, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface/50 p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all hover:shadow-lg group"
        >
            <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">{category}</h3>
            <div className="flex flex-wrap gap-2">
                {items.map((item, idx) => (
                    <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10 group-hover:border-primary/30 transition-colors"
                    >
                        {item}
                    </span>
                ))}
            </div>
            {/* Proficiency bar example - decorative only for this design to keep it clean */}
            <div className="w-full h-1 bg-white/5 mt-4 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }} // Generic High proficiency
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                />
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-background relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold font-heading mb-4">Technical <span className="text-primary">Expertise</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for solving complex problems, from data analysis to full-stack development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
