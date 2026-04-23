import { motion } from 'framer-motion';
import { 
    SiPython, SiPandas, SiNumpy, SiScikitlearn, SiPytorch, 
    SiFastapi, SiPostgresql, SiMongodb, SiJupyter, SiStreamlit, SiC 
} from 'react-icons/si';
import { 
    FaChartBar, FaTools, FaBrain, FaLanguage, FaDatabase, 
    FaGithub, FaChartArea, FaChartLine, FaJava 
} from 'react-icons/fa';

const iconMap = {
    "Python": <SiPython className="text-[#3776AB]" />,
    "Pandas": <SiPandas className="text-[#150458]" />,
    "NumPy": <SiNumpy className="text-[#013243]" />,
    "Scikit-learn": <SiScikitlearn className="text-[#F7931E]" />,
    "Statistical Analysis": <FaChartBar className="text-blue-400" />,
    "Feature Engineering": <FaTools className="text-gray-400" />,
    "PyTorch": <SiPytorch className="text-[#EE4C2C]" />,
    "Neural Networks": <FaBrain className="text-pink-400" />,
    "Basic NLP": <FaLanguage className="text-green-400" />,
    "FastAPI": <SiFastapi className="text-[#05998B]" />,
    "SQL": <FaDatabase className="text-blue-500" />,
    "PostgreSQL": <SiPostgresql className="text-[#336791]" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "Git/GitHub": <FaGithub className="text-white" />,
    "Matplotlib": <FaChartArea className="text-orange-400" />,
    "Seaborn": <FaChartLine className="text-blue-300" />,
    "Jupyter Notebook": <SiJupyter className="text-[#F37626]" />,
    "Streamlit": <SiStreamlit className="text-[#FF4B4B]" />,
    "Java": <FaJava className="text-[#007396]" />,
    "C": <SiC className="text-[#A8B9CC]" />
};

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
            <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-primary transition-colors">{category}</h3>
            <div className="flex flex-wrap gap-3">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/10 group-hover:border-primary/20 transition-all hover:bg-white/10"
                    >
                        <span className="text-lg">
                            {iconMap[item] || null}
                        </span>
                        <span>{item}</span>
                    </div>
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
                    <h2 className="text-4xl font-bold font-heading mb-4 text-white">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Skills</span></h2>
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
