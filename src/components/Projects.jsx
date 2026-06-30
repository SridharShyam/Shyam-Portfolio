import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Star, GitBranch, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const additionalProjects = [
    {
        title: "Gender Classification Using Machine Learning",
        description: "Build a classifier to predict an individual's gender based on physical attributes (height, weight, and age).",
        tech: ["Python", "Scikit-Learn", "Pandas"],
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Beginner_Level/Gender_Classification" }
    },
    {
        title: "Netflix Content Library Analysis",
        description: "Perform Exploratory Data Analysis (EDA) on the Netflix dataset to uncover insights regarding content types and trends.",
        tech: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Beginner_Level/Netflix_Content_Library_Analysis" }
    },
    {
        title: "Hybrid Movie Recommendation Engine",
        description: "Robust recommendation system combining Content-Based and Collaborative Filtering using the MovieLens dataset.",
        tech: ["Python", "scikit-surprise", "TF-IDF"],
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Intermediate_Level/Movie_Recommendation_Engine" }
    },
    {
        title: "Health Analytics Dashboard",
        description: "Interactive Power BI dashboard built on a 10,000-record dataset to analyze body metrics across demographics.",
        tech: ["Power BI", "DAX", "Power Query"],
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/PowerBI_Dashboards" }
    }
];

const projects = [
    {
        title: "Data Science & Machine Learning Projects",
        description: "A living portfolio showcasing end-to-end workflows, hands-on experiments, and model building across various difficulty levels.",
        tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
        highlights: [
            "Developing diverse predictive models spanning classification and regression tasks",
            "Demonstrating end-to-end workflows and hands-on experiments",
            "Organizing projects into structured difficulty levels for progressive learning"
        ],
        links: { demo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio", repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio" }
    },
    {
        title: "Cirrhosis Patient Outcome Prediction",
        description: "Machine learning pipeline predicting disease progression stages and patient survival outcomes using clinical biomarkers from the Mayo Clinic PBC trial, rebuilt end-to-end with production-grade practices.",
        tech: ["Python", "scikit-learn", "XGBoost", "pandas", "matplotlib", "seaborn"],
        highlights: [
            "Recovered 34% of discarded data (retaining all 418 patients) using median/mode imputation",
            "Benchmarked LR, SVM, Random Forest, and XGBoost using 5-fold cross-validation with F1-macro scoring",
            "Achieved 0.81 ROC-AUC for Stage 4 disease detection, the most clinically critical outcome",
            "Identified Bilirubin, Prothrombin, and Platelets as key predictors, aligning with hepatology literature"
        ],
        links: { demo: "https://colab.research.google.com/github/SridharShyam/Cirrhosis-Stage-and-Status-Prediction/blob/main/Liver_Cirrhosis.ipynb", repo: "https://github.com/SridharShyam/Cirrhosis-Stage-and-Status-Prediction" }
    },
];

const ProjectCard = ({ project, index }) => {
    const [githubStats, setGithubStats] = useState({ stars: 0, forks: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            if (project.links.repo) {
                try {
                    const repoPath = project.links.repo.split('github.com/')[1];
                    const response = await fetch(`https://api.github.com/repos/${repoPath}`);
                    if (response.ok) {
                        const data = await response.json();
                        setGithubStats({
                            stars: data.stargazers_count,
                            forks: data.forks_count
                        });
                    }
                } catch (error) {
                    console.error("Error fetching GitHub stats:", error);
                }
            }
        };
        fetchStats();
    }, [project.links.repo]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-surface rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
        >
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
                
                {/* GitHub Quick Stats Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs text-white">
                        <Star size={12} className="text-yellow-500 fill-yellow-500" /> {githubStats.stars}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs text-white">
                        <GitBranch size={12} className="text-primary" /> {githubStats.forks}
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-3">
                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Repo"><Github size={20} /></a>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Live Demo"><ExternalLink size={20} /></a>
                    </div>
                </div>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                </p>

                <ul className="mb-6 space-y-2">
                    {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                            <span>{h}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="bg-white/5 text-xs text-primary px-2 py-1 rounded border border-white/10">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isModalOpen]);

    return (
        <section id="projects" className="py-24 bg-surface/50 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} project={p} index={i} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium relative group cursor-pointer outline-none">
                        <span>View detailed case studies</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
                    </button>
                </div>
            </div>

            {/* Full-Screen Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-surface border border-white/10 w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-surface/80 backdrop-blur-sm sticky top-0 z-10">
                                <h3 className="text-2xl font-bold font-heading text-white">More Projects & Case Studies</h3>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 overflow-y-auto space-y-6">
                                {additionalProjects.map((p, i) => (
                                    <div key={i} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors flex flex-col sm:flex-row gap-6 justify-between items-start">
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{p.title}</h4>
                                            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-2xl">{p.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {p.tech.map((t, j) => (
                                                    <span key={j} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="shrink-0 pt-1">
                                            {p.links.repo && (
                                                <a href={p.links.repo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg flex items-center gap-2 text-sm transition-colors border border-white/10">
                                                    <Github size={16} /> Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
