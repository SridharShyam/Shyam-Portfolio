import { motion } from 'framer-motion';

const skills = [
    {
        category: "Data Science & Machine Learning",
        items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Statistical Analysis", "Feature Engineering"]
    },
    {
        category: "AI & Deep Learning",
        items: ["PyTorch", "Neural Networks", "Basic NLP"]
    },
    {
        category: "Backend & Data Handling",
        items: ["FastAPI", "SQL", "PostgreSQL", "MongoDB", "Git/GitHub"]
    },
    {
        category: "Visualization & Tools",
        items: ["Matplotlib", "Seaborn", "Jupyter Notebook", "Streamlit"]
    },
    {
        category: "Core Programming",
        items: ["Python", "Java", "C"]
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
                    <h2 className="text-4xl font-bold font-heading mb-4">Technical <span className="text-primary">Skills</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Focused on building data-driven systems and machine learning applications with practical, real-world impact.
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
