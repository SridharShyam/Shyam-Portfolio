import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Star, GitBranch, X, CheckCircle2, Clock, Calendar, Beaker, RefreshCw, PauseCircle, Archive } from 'lucide-react';
import { useState, useEffect } from 'react';

const caseStudies = [
    {
        title: "Predictive Modeling for Demographic Classification",
        description: "Build a classifier to predict an individual's gender based on physical attributes (height, weight, and age). Demographic segmentation models like this are used in retail, healthcare, and HR to personalize decisions at scale.",
        tech: ["Python", "Scikit-Learn", "Pandas"],
        status: "Completed",
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Beginner_Level/Gender_Classification" }
    },
    {
        title: "Exploratory Data Analysis of Streaming Media Trends",
        description: "Perform Exploratory Data Analysis (EDA) on the Netflix dataset to uncover insights regarding content types and trends.",
        tech: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
        status: "Completed",
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Beginner_Level/Netflix_Content_Library_Analysis" }
    },
    {
        title: "Time Series Forecasting for Aviation Demand Analytics",
        description: "Apply classical time series analysis and forecasting techniques to identify demand trends and seasonal cycles in international airline passenger numbers. Accurate demand forecasting reduces airline overbooking losses and optimizes crew and fleet allocation.",
        tech: ["Python", "Pandas", "Statsmodels", "ARIMA"],
        status: "Completed",
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Beginner_Level/AirPassengers_Time_Series_Forecasting" }
    },
    {
        title: "End-to-End Time Series Analysis and Forecasting",
        description: "Comprehensive end-to-end project on time series analysis covering data preprocessing, stationarity checks, model selection (ARIMA/SARIMA), and evaluation.",
        tech: ["Python", "Time Series", "ARIMA"],
        status: "Completed",
        links: { repo: "https://github.com/SridharShyam/End-to-end-Time-Series-Analysis-and-Forecasting" }
    },
    {
        title: "Hybrid Recommender System for Personalized Media",
        description: "Robust recommendation system combining Content-Based and Collaborative Filtering using the MovieLens dataset. Recommendation engines are the primary revenue lever for streaming platforms — a 1% lift in click-through rate translates to millions in retention value.",
        tech: ["Python", "scikit-surprise", "TF-IDF"],
        status: "Completed",
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Intermediate_Level/Movie_Recommendation_Engine" }
    },
    {
        title: "Interactive Health and Demographic Analytics Dashboard",
        description: "Interactive Power BI dashboard built on a 10,000-record dataset to analyze body metrics across demographics. This dashboard prototype demonstrates how health administrators can identify at-risk demographic segments without writing a single SQL query.",
        tech: ["Power BI", "DAX", "Power Query"],
        status: "Completed",
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/PowerBI_Dashboards" }
    }
];

const projects = [
    {
        title: "Comprehensive ML, Data Science & Analytics Portfolio",
        description: "A showcase of end-to-end case studies covering predictive modeling, time series forecasting, and hybrid recommendation systems.",
        image: "/projects/ml_portfolio_bg.png",
        tech: ["Python", "TensorFlow", "Scikit-Learn", "FastAPI"],
        status: "Showcase",
        highlights: [
            "Predictive modeling for retail & healthcare",
            "Advanced time series & econometric models",
            "Interactive deployment via Streamlit & React"
        ],
        links: { demo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio", repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio" }
    },
    {
        title: "Cirrhosis Stage & Status Prediction",
        description: "Developed a robust classification model to predict the progression stage of Liver Cirrhosis based on patient clinical parameters. Clinically, achieving 0.81 ROC-AUC for Stage 4 detection means earlier identification of high-risk patients — directly supporting faster intervention decisions by hepatologists.",
        image: "/projects/cirrhosis_ai_bg.png",
        tech: ["XGBoost", "SMOTE", "Seaborn", "Optuna"],
        status: "Completed",
        highlights: [
            "Feature engineering on clinical biomarker data",
            "Handled extreme class imbalance with synthetic techniques",
            "Achieved top-tier AUC-ROC on held-out test sets"
        ],
        links: { demo: "https://colab.research.google.com/github/SridharShyam/Cirrhosis-Stage-and-Status-Prediction/blob/main/Liver_Cirrhosis.ipynb", repo: "https://github.com/SridharShyam/Cirrhosis-Stage-and-Status-Prediction" }
    },
    {
        title: "Excuse-as-a-Service",
        description: "A fun, AI-powered web application that generates creative and believable excuses for any situation on demand. Currently in development.",
        image: "/projects/excuse_api_bg.png",
        tech: ["React", "Tailwind CSS", "AI"],
        status: "In Progress",
        highlights: [
            "Generates context-aware excuses",
            "Sleek and responsive user interface",
            "Coming Soon"
        ],
        links: { demo: "#", repo: "https://github.com/SridharShyam/Excuse-as-a-Service" }
    },
    {
        title: "Health Sentinel",
        description: "A robust health monitoring and predictive analytics platform to track patient vitals and identify potential risks.",
        image: "/projects/health_sentinel_bg.png",
        tech: ["Python", "Machine Learning", "Data Analytics"],
        status: "In Progress",
        highlights: [
            "Predictive risk modeling for early detection",
            "Secure and scalable patient data processing",
            "Currently under active development"
        ],
        links: { demo: "#", repo: "https://github.com/SridharShyam/Health_Sentinal.git" }
    },
    {
        title: "Pantemo",
        description: "An innovative AI-driven fashion tech application currently under development, focusing on intelligent style analysis and modern digital apparel solutions.",
        image: "/projects/pantemo_fashion_bg.png",
        tech: ["Fashion Tech", "AI", "Computer Vision"],
        status: "In Progress",
        highlights: [
            "Exploring new frontiers in AI-driven fashion",
            "Building scalable digital apparel architecture",
            "Currently under active development"
        ],
        links: { demo: "#", repo: "https://github.com/SridharShyam/Pantemo.git" }
    },
    {
        title: "Ruled.Ink",
        description: "A modern digital workspace and notebook application designed for seamless thought organization and creative expression.",
        image: "/projects/ruled_ink_bg.png",
        tech: ["React", "Web Technologies", "UI/UX"],
        status: "In Progress",
        highlights: [
            "Intuitive digital ink and writing interface",
            "Sleek, distraction-free environment",
            "Currently under active development"
        ],
        links: { demo: "#", repo: "https://github.com/SridharShyam/Ruled.Ink.git" }
    }
];

const StatusBadge = ({ status }) => {
    let colorClass = "";
    let Icon = null;
    
    switch(status) {
        case "Completed":
            colorClass = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
            Icon = CheckCircle2;
            break;
        case "In Progress":
            colorClass = "bg-amber-500/10 text-amber-400 border-amber-500/20";
            Icon = Clock;
            break;
        case "Upcoming":
            colorClass = "bg-blue-500/10 text-blue-400 border-blue-500/20";
            Icon = Calendar;
            break;
        case "Beta":
            colorClass = "bg-pink-500/10 text-pink-400 border-pink-500/20";
            Icon = Beaker;
            break;
        case "Iterating":
            colorClass = "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
            Icon = RefreshCw;
            break;
        case "Paused":
            colorClass = "bg-gray-500/10 text-gray-400 border-gray-500/20";
            Icon = PauseCircle;
            break;
        case "Legacy":
            colorClass = "bg-stone-500/10 text-stone-400 border-stone-500/20";
            Icon = Archive;
            break;
        case "Showcase":
            colorClass = "bg-purple-500/10 text-purple-400 border-purple-500/20";
            Icon = Star;
            break;
        default:
            return null;
    }

    if (!Icon) return null;

    return (
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium backdrop-blur-md ${colorClass}`}>
            <Icon size={12} />
            <span>{status}</span>
        </div>
    );
};

const ProjectCard = ({ project, index, isFullWidth, onClick }) => {
    const [githubStats, setGithubStats] = useState({ stars: 0, forks: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            if (project.links.repo && project.links.repo.includes('github.com')) {
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
            onClick={onClick}
            className={`group relative bg-surface rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full ${isFullWidth ? 'md:col-span-2' : ''} ${onClick ? 'cursor-pointer' : ''}`}
        >
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden group">
                {project.image ? (
                    <>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
                    </>
                )}
                
                {/* Status Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                    <StatusBadge status={project.status} />
                </div>

                {/* GitHub Quick Stats Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-primary transition-colors flex items-center gap-3">
                        {project.title}
                        {onClick && (
                            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-normal px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                                Click to view detailed case studies <ArrowUpRight size={14} />
                            </span>
                        )}
                    </h3>
                    <div className="flex gap-3 shrink-0">
                        {project.links.repo && project.links.repo !== "#" && (
                            <a href={project.links.repo} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Repo"><Github size={20} /></a>
                        )}
                        {project.links.demo && project.links.demo !== "#" && (
                            <a href={project.links.demo} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Live Demo"><ExternalLink size={20} /></a>
                        )}
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

    // Group Case Studies by Status
    const groupedCaseStudies = {
        "Showcase": caseStudies.filter(p => p.status === "Showcase"),
        "Completed": caseStudies.filter(p => p.status === "Completed"),
        "Iterating": caseStudies.filter(p => p.status === "Iterating"),
        "In Progress": caseStudies.filter(p => p.status === "In Progress"),
        "Beta": caseStudies.filter(p => p.status === "Beta"),
        "Upcoming": caseStudies.filter(p => p.status === "Upcoming"),
        "Paused": caseStudies.filter(p => p.status === "Paused"),
        "Legacy": caseStudies.filter(p => p.status === "Legacy")
    };

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

                <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((p, i) => (
                            <ProjectCard 
                                key={i} 
                                project={p} 
                                index={i} 
                                isFullWidth={i === 0}
                                onClick={i === 0 ? () => setIsModalOpen(true) : undefined}
                            />
                        ))}
                    </div>
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
                            <div className="p-6 overflow-y-auto space-y-8">
                                {Object.entries(groupedCaseStudies).map(([status, groupProjects]) => (
                                    groupProjects.length > 0 && (
                                        <div key={status} className="space-y-4">
                                            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
                                                <StatusBadge status={status} />
                                                <h4 className="text-lg font-heading text-white font-semibold">{status} Projects</h4>
                                            </div>
                                            
                                            <div className="space-y-4">
                                                {groupProjects.map((p, i) => (
                                                    <div key={i} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors flex flex-col sm:flex-row gap-6 justify-between items-start">
                                                        <div>
                                                            <h5 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{p.title}</h5>
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
                                                            {p.links.repo && p.links.repo !== "#" && (
                                                                <a href={p.links.repo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg flex items-center gap-2 text-sm transition-colors border border-white/10">
                                                                    <Github size={16} /> Code
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
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
