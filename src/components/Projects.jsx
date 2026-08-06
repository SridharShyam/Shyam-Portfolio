import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Star, GitBranch, X, CheckCircle2, Clock, Calendar, Beaker, RefreshCw, PauseCircle, Archive, Shirt, HeartPulse, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';

const caseStudies = [
    {
        title: "Predictive Modeling for Demographic Classification",
        tagline: "Retail & HR Demographic Segmentation",
        description: "Build a classifier to predict an individual's gender based on physical attributes (height, weight, and age). Demographic segmentation models like this are used in retail, healthcare, and HR to personalize decisions at scale.",
        businessImpact: "Enables highly targeted retail promotions and personalized healthcare risk assessments by accurately segmenting user populations without requiring explicit demographic surveys.",
        question: "Can we accurately infer demographic segments from basic physical attributes to personalize user experiences?",
        tech: ["Python", "Scikit-Learn", "Pandas"],
        status: "Completed",
        domain: "ml-core",
        highlights: [],
        image: "",
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Beginner_Level/Gender_Classification" }
    },
    {
        title: "Exploratory Data Analysis of Streaming Media Trends",
        tagline: "Content Strategy & Trend Discovery",
        description: "Perform Exploratory Data Analysis (EDA) on the Netflix dataset to uncover insights regarding content types and trends.",
        businessImpact: "Identifies content saturation and emerging viewer preferences, allowing streaming platforms to optimize their content acquisition and original production budgets.",
        question: "What underlying patterns in content metadata reveal the most cost-effective genres to produce next?",
        tech: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
        status: "Completed",
        domain: "ml-core",
        highlights: [],
        image: "",
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Beginner_Level/Netflix_Content_Library_Analysis" }
    },
    {
        title: "Time Series Forecasting for Aviation Demand Analytics",
        tagline: "Logistics Optimization via Demand Prediction",
        description: "Apply classical time series analysis and forecasting techniques to identify demand trends and seasonal cycles in international airline passenger numbers. Accurate demand forecasting reduces airline overbooking losses and optimizes crew and fleet allocation.",
        businessImpact: "Minimizes operational waste and overbooking penalties by accurately predicting cyclic demand surges, directly protecting airline profit margins.",
        question: "How can historical passenger volume predict future demand to optimize fleet deployment?",
        tech: ["Python", "Pandas", "Statsmodels", "ARIMA"],
        status: "Completed",
        domain: "ml-core",
        highlights: [],
        image: "",
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Beginner_Level/AirPassengers_Time_Series_Forecasting" }
    },
    {
        title: "End-to-End Time Series Analysis and Forecasting",
        tagline: "ARIMA/SARIMA Modeling Pipeline",
        description: "Comprehensive end-to-end project on time series analysis covering data preprocessing, stationarity checks, model selection (ARIMA/SARIMA), and evaluation.",
        businessImpact: "Provides a reusable forecasting pipeline that can be adapted for sales, inventory, or resource demand prediction across multiple business units.",
        question: "Can an automated pipeline reliably determine stationarity and select optimal forecasting parameters?",
        tech: ["Python", "Time Series", "ARIMA"],
        status: "Completed",
        domain: "ml-core",
        highlights: [],
        image: "",
        links: { repo: "https://github.com/SridharShyam/End-to-end-Time-Series-Analysis-and-Forecasting" }
    },
    {
        title: "Hybrid Recommender System for Personalized Media",
        tagline: "Content & Collaborative Filtering Engine",
        description: "Robust recommendation system combining Content-Based and Collaborative Filtering using the MovieLens dataset. Recommendation engines are the primary revenue lever for streaming platforms — a 1% lift in click-through rate translates to millions in retention value.",
        businessImpact: "Drives user retention and increases platform stickiness by surfacing highly relevant media, directly impacting subscription renewal rates.",
        question: "Can combining content-based and collaborative filtering outperform either approach alone on cold-start users?",
        tech: ["Python", "scikit-surprise", "TF-IDF"],
        status: "Completed",
        domain: "ml-core",
        highlights: [],
        image: "",
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/Intermediate_Level/Movie_Recommendation_Engine" }
    },
    {
        title: "Interactive Health and Demographic Analytics Dashboard",
        tagline: "No-Code Clinical Data Exploration",
        description: "Interactive Power BI dashboard built on a 10,000-record dataset to analyze body metrics across demographics. This dashboard prototype demonstrates how health administrators can identify at-risk demographic segments without writing a single SQL query.",
        businessImpact: "Democratizes data access for non-technical clinical administrators, accelerating demographic risk identification and policy planning.",
        question: "How can complex demographic health distributions be visualized for immediate policy action?",
        tech: ["Power BI", "DAX", "Power Query"],
        status: "Completed",
        domain: "ml-core",
        highlights: [],
        image: "",
        links: { repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio/tree/main/PowerBI_Dashboards" }
    }
];

const projects = [
    {
        title: "Comprehensive ML, Data Science & Analytics Portfolio",
        tagline: "End-to-End Applied Machine Learning Showcase",
        description: "A showcase of end-to-end case studies covering predictive modeling, time series forecasting, and hybrid recommendation systems.",
        businessImpact: "Demonstrates the ability to translate raw data into deployed, stakeholder-ready applications across multiple business domains, proving full-stack data science competency.",
        image: "/projects/ml_portfolio_bg.png",
        tech: ["Python", "TensorFlow", "Scikit-Learn", "FastAPI"],
        status: "Showcase",
        domain: "ml-core",
        question: "Which clinical markers are most predictive — and does the model's reasoning align with what hepatologists already know?",
        highlights: [
            "Predictive modeling for retail & healthcare",
            "Advanced time series & econometric models",
            "Interactive deployment via Streamlit & React"
        ],
        links: { demo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio", repo: "https://github.com/SridharShyam/Data-Science-Machine-Learning-Analytics-Portfolio" }
    },
    {
        title: "Cirrhosis Stage & Status Prediction",
        tagline: "Clinical Biomarker Classification & Survival Prediction",
        description: "Developed a robust classification model to predict the progression stage of Liver Cirrhosis based on patient clinical parameters. Clinically, achieving 0.81 ROC-AUC for Stage 4 detection means earlier identification of high-risk patients — directly supporting faster intervention decisions by hepatologists.",
        businessImpact: "Accelerates diagnostic triage by identifying Stage 4 progression risks early, allowing hepatologists to prioritize high-risk interventions and reduce late-stage mortality.",
        image: "/projects/cirrhosis_ai_bg.png",
        tech: ["XGBoost", "SMOTE", "Seaborn", "Optuna"],
        status: "Completed",
        domain: "healthtech",
        question: "Can clinical biomarkers alone predict liver disease stage and survival outcome accurately enough to inform early intervention?",
        highlights: [
            "Feature engineering on clinical biomarker data",
            "Handled extreme class imbalance with synthetic techniques",
            "Achieved top-tier AUC-ROC on held-out test sets"
        ],
        links: { demo: "https://colab.research.google.com/github/SridharShyam/Cirrhosis-Stage-and-Status-Prediction/blob/main/Liver_Cirrhosis.ipynb", repo: "https://github.com/SridharShyam/Cirrhosis-Stage-and-Status-Prediction" }
    },
    {
        title: "Excuse-as-a-Service",
        tagline: "Context-Aware Generative AI Web App",
        description: "A fun, AI-powered web application that generates creative and believable excuses for any situation on demand. Currently in development.",
        businessImpact: "Explores prompt engineering and generative AI deployment constraints in a lightweight, high-engagement consumer application.",
        image: "/projects/excuse_api_bg.png",
        tech: ["React", "Tailwind CSS", "AI"],
        status: "Paused",
        domain: "ml-core",
        question: "How can LLMs be constrained to reliably generate context-appropriate, humorous responses with sub-second latency?",
        highlights: [
            "Generates context-aware excuses",
            "Sleek and responsive user interface",
            "Coming Soon"
        ],
        links: { demo: "#", repo: "https://github.com/SridharShyam/Excuse-as-a-Service" }
    },
    {
        title: "HealthSentinel AI",
        tagline: "Predictive Health Analytics & Early Warning System",
        description: "A robust health monitoring and predictive analytics platform to track patient vitals and identify potential risks.",
        businessImpact: "Enables proactive care by flagging high-risk patient trajectories before critical symptoms appear, reducing emergency readmissions and optimizing clinical resource allocation.",
        image: "/projects/health_sentinel_bg.png",
        tech: ["Python", "Machine Learning", "Data Analytics"],
        status: "Iterating",
        domain: "healthtech",
        question: "Can a model predict chronic disease risk across 13 conditions before symptoms become critical — calibrated for India?",
        highlights: [
            "Predictive risk modeling for early detection",
            "Secure and scalable patient data processing",
            "Currently under active development"
        ],
        links: { demo: "#", repo: "https://github.com/SridharShyam/Health_Sentinal.git" }
    },
    {
        title: "StyleSynk",
        tagline: "Wardrobe Intelligence & Fashion Decision Support System",
        description: "StyleSynk converts unstructured wardrobe images into structured fashion intelligence. By combining a core visual classification model with context-aware decision logic (occasion, weather, style history), it generates ranked recommendations for what to wear, reuse, or purchase next.",
        businessImpact: "Central KPI is not classification accuracy — it's recommendation acceptance rate, wardrobe utilization, and duplicate-purchase avoidance. Enables decisions for 4 stakeholders simultaneously: user (what to wear/buy), retailer (what's genuinely relevant), platform (what to rank), and sustainability (can an existing item satisfy this need?).",
        image: "/projects/pantemo_fashion_bg.png",
        tech: ["Computer Vision", "Recommendation System", "FastAPI", "React", "Decision Support"],
        status: "In Progress",
        domain: "fashiontech",
        featured: true,
        question: "Given everything a user already owns, prefers, and needs — what should they wear, reuse, avoid buying, or purchase next?",
        highlights: [
            "Exploring new frontiers in AI-driven fashion",
            "Building scalable digital apparel architecture",
            "Currently under active development"
        ],
        links: { demo: "#", repo: "https://github.com/SridharShyam/Pantemo.git" }
    },
    {
        title: "Ruled.Ink",
        tagline: "Digital Workspace & Ink Recognition Engine",
        description: "A modern digital workspace and notebook application designed for seamless thought organization and creative expression.",
        businessImpact: "Bridges the gap between analog ideation and digital structuring, improving personal productivity and unstructured data capture.",
        image: "/projects/ruled_ink_bg.png",
        tech: ["React", "Web Technologies", "UI/UX"],
        status: "In Progress",
        domain: "ml-core",
        question: "Can a digital workspace accurately interpret and organize freehand thought structures into searchable metadata?",
        highlights: [
            "Intuitive digital ink and writing interface",
            "Sleek, distraction-free environment",
            "Currently under active development"
        ],
        links: { demo: "#", repo: "https://github.com/SridharShyam/Ruled.Ink.git" }
    },
    {
        title: "CareerSynk",
        tagline: "Data-Driven Career Mapping & Decision Engine",
        description: "Intelligent career mapping and decision support system.",
        businessImpact: "Replaces generic career advice with personalized trajectory modeling, improving user retention on job platforms and increasing the success rate of upskilling recommendations.",
        image: "/projects/careersynk_bg.png",
        tech: ["AI", "CareerTech"],
        status: "Upcoming",
        domain: "careertech",
        question: "What career move is actually right for this person — based on their real profile, not just what's trending?",
        highlights: [
            "Data-driven career recommendations",
            "Personalized growth trajectories"
        ],
        links: { demo: "#", repo: "#" }
    },
    {
        title: "MCQ Assessment System",
        tagline: "Automated Evaluation & Knowledge Testing",
        description: "Automated MCQ generation and evaluation system.",
        businessImpact: "Reduces manual assessment overhead by 90% for educators, allowing for highly scalable, adaptive testing in e-learning environments.",
        image: "/projects/mcq_assessment_bg.png",
        tech: ["NLP", "EducationTech"],
        status: "Upcoming",
        domain: "careertech",
        question: "Can NLP successfully distractors and validate question difficulty autonomously?",
        highlights: [
            "Context-aware question generation",
            "Automated grading"
        ],
        links: { demo: "#", repo: "#" }
    },
    {
        title: "TN SchemeOS",
        tagline: "Unified Welfare Scheme Discovery & Eligibility Engine",
        description: "Unified portal for government scheme discovery and eligibility matching.",
        businessImpact: "Radically reduces the time-to-discovery for welfare schemes from days to minutes, increasing scheme utilization rates and ensuring funds reach the intended demographic accurately.",
        image: "/projects/tn_schemeos_bg.png",
        tech: ["GovTech", "Data Matching"],
        status: "Upcoming",
        domain: "govtech",
        question: "Can a recursive eligibility engine surface the right welfare scheme for any Tamil Nadu resident in under 2 minutes?",
        highlights: [
            "Eligibility prediction",
            "Centralized scheme repository"
        ],
        links: { demo: "#", repo: "#" }
    },
    {
        title: "RoadSOS",
        tagline: "Predictive Emergency Routing & SOS Trigger",
        description: "Emergency response routing and accident prediction system.",
        businessImpact: "Minimizes emergency response times in low-connectivity zones, directly improving survival rates in road traffic accidents and optimizing ambulance dispatch logistics.",
        image: "/projects/roadsos_bg.png",
        tech: ["IoT", "Routing", "Predictive ML"],
        status: "Upcoming",
        domain: "govtech",
        question: "How do you get emergency response information to a road accident victim when connectivity is unreliable?",
        highlights: [
            "Real-time accident prediction",
            "Optimized SOS routing"
        ],
        links: { demo: "#", repo: "#" }
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
            {project.isGithubSourced && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 text-[10px] font-bold text-emerald-400 bg-black/60 px-2 py-1 rounded border border-emerald-400/20 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE VIA API
                </div>
            )}
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden group">
                {project.image ? (
                    <>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-20 group-hover:scale-105 transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
                    </>
                )}

                {/* Architecture Node-Graph Hover State */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full">
                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
                            <motion.line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#00C7B7" strokeWidth="1.5" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                            <motion.line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                            <motion.line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                        </svg>

                        {/* Nodes */}
                        <div className="absolute top-[30%] left-[20%] w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-primary shadow-[0_0_10px_#00C7B7] animate-pulse" />
                        <div className="absolute top-[50%] left-[50%] w-3 h-3 -ml-[6px] -mt-[6px] rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7] animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="absolute top-[70%] left-[80%] w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" style={{ animationDelay: '0.4s' }} />
                        <div className="absolute top-[25%] left-[75%] w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" style={{ animationDelay: '0.1s' }} />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-mono text-[10px] font-bold tracking-widest uppercase bg-black/80 px-4 py-1.5 rounded border border-white/10 shadow-xl">
                                AI Architecture
                            </span>
                        </div>
                    </div>
                </div>
                
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

                {project.question && (
                    <div className="mb-4 pb-4 border-b border-white/5">
                        <span className="text-[10px] font-bold text-primary/70 tracking-wider uppercase block mb-1">THE QUESTION</span>
                        <p className="text-[12px] italic text-gray-300">
                            "{project.question}"
                        </p>
                    </div>
                )}

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                </p>

                {project.businessImpact && (
                    <div className="mb-6 pt-4 border-t border-white/5">
                        <span className="text-[10px] font-bold text-emerald-500/70 tracking-wider uppercase block mb-1">BUSINESS IMPACT</span>
                        <p className="text-[12px] italic text-gray-300">
                            {project.businessImpact}
                        </p>
                    </div>
                )}

                <ul className="mb-6 space-y-2">
                    {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                            <span>{h}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
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
    const [githubProjects, setGithubProjects] = useState([]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isModalOpen]);

    useEffect(() => {
        const fetchGithubProjects = async () => {
            try {
                // Phase 1: GitHub Tag Engine
                // Fetches any public repo tagged with 'portfolio-project'
                const res = await fetch('https://api.github.com/search/repositories?q=user:SridharShyam+topic:portfolio-project');
                if (res.ok) {
                    const data = await res.json();
                    if (data.items && data.items.length > 0) {
                        const formatted = data.items.map(repo => ({
                            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
                            tagline: repo.description || "Live Sourced GitHub Repository",
                            description: `Automatically sourced from GitHub. Last updated: ${new Date(repo.updated_at).toLocaleDateString()}`,
                            businessImpact: "Automatically synchronized from source control.",
                            tech: repo.language ? [repo.language, "GitHub API"] : ["GitHub API"],
                            status: "Live",
                            domain: "ml-core",
                            question: "Live Code Synchronization via GitHub API",
                            highlights: ["Dynamically sourced via Tag Engine", `⭐ ${repo.stargazers_count} Stars`, `🍴 ${repo.forks_count} Forks`],
                            links: { repo: repo.html_url, demo: repo.homepage || undefined },
                            isGithubSourced: true
                        }));
                        setGithubProjects(formatted);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch github projects", error);
            }
        };
        fetchGithubProjects();
    }, []);

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

    const styleSynk = projects.find(p => p.title === "StyleSynk");
    const healthSentinel = projects.find(p => p.title === "HealthSentinel AI");
    const careerSynk = projects.find(p => p.title === "CareerSynk");
    
    // Inject Live GitHub Projects directly into the remaining projects list!
    const remainingProjects = [
        ...githubProjects,
        ...projects.filter(p => !["StyleSynk", "HealthSentinel AI", "CareerSynk"].includes(p.title))
    ];

    return (
        <section id="projects" className="py-24 bg-surface/50 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-primary font-mono text-sm tracking-wider uppercase">Shyametrics</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Domains</span>
                    </h2>
                </motion.div>

                {/* 3 Domain Pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    {/* Pillar 1: FashionTech */}
                    <div className="flex flex-col gap-6 h-full">
                        <div className="relative group h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500/30 to-pink-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 overflow-hidden flex flex-col justify-between">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-rose-500/20 transition-colors duration-500" />
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10 flex flex-col h-full gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-transparent border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_20px_rgba(244,63,94,0.1)]">
                                            <Shirt size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-3xl font-bold font-heading text-white">
                                            Fashion<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">Tech</span>
                                        </h3>
                                    </div>
                                    
                                    <div className="mt-auto pl-5 border-l-2 border-rose-500/40 relative">
                                        <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-rose-400 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <p className="text-gray-300 text-lg leading-relaxed font-light italic">
                                            "Style is data. Personal fit is a prediction problem."
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="absolute -bottom-8 -right-8 text-rose-500/5 group-hover:text-rose-500/10 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                                    <Shirt size={180} strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                        {styleSynk && (
                            <div className="flex-grow">
                                <ProjectCard project={styleSynk} index={0} isFullWidth={false} />
                            </div>
                        )}
                    </div>

                    {/* Pillar 2: HealthTech */}
                    <div className="flex flex-col gap-6 h-full">
                        <div className="relative group h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 overflow-hidden flex flex-col justify-between">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-emerald-500/20 transition-colors duration-500" />
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10 flex flex-col h-full gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_20px_rgba(16,185,129,0.1)]">
                                            <HeartPulse size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-3xl font-bold font-heading text-white">
                                            Health<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Tech</span>
                                        </h3>
                                    </div>
                                    
                                    <div className="mt-auto pl-5 border-l-2 border-emerald-500/40 relative">
                                        <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-emerald-400 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <p className="text-gray-300 text-lg leading-relaxed font-light italic">
                                            "AI should flag risk before a doctor has to guess."
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="absolute -bottom-8 -right-8 text-emerald-500/5 group-hover:text-emerald-500/10 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                                    <HeartPulse size={180} strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                        {healthSentinel && (
                            <div className="flex-grow">
                                <ProjectCard project={healthSentinel} index={1} isFullWidth={false} />
                            </div>
                        )}
                    </div>

                    {/* Pillar 3: CareerTech */}
                    <div className="flex flex-col gap-6 h-full">
                        <div className="relative group h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 overflow-hidden flex flex-col justify-between">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-500/20 transition-colors duration-500" />
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10 flex flex-col h-full gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
                                            <GraduationCap size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-3xl font-bold font-heading text-white">
                                            Career<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Tech</span>
                                        </h3>
                                    </div>
                                    
                                    <div className="mt-auto pl-5 border-l-2 border-blue-500/40 relative">
                                        <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-blue-400 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <p className="text-gray-300 text-lg leading-relaxed font-light italic">
                                            "Career decisions deserve the same rigour as medical ones."
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="absolute -bottom-8 -right-8 text-blue-500/5 group-hover:text-blue-500/10 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                                    <GraduationCap size={180} strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                        {careerSynk && (
                            <div className="flex-grow">
                                <ProjectCard project={careerSynk} index={2} isFullWidth={false} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Remaining Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">
                        More <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {remainingProjects.map((p, i) => (
                        <ProjectCard 
                            key={i} 
                            project={p} 
                            index={i + 3} 
                            isFullWidth={i === 0 && remainingProjects.length % 2 !== 0}
                            onClick={p.title.includes("Portfolio") ? () => setIsModalOpen(true) : undefined}
                        />
                    ))}
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
                                                            <h5 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{p.title}</h5>
                                                            {p.tagline && <div className="text-sm font-semibold text-primary/80 mb-3">{p.tagline}</div>}
                                                            
                                                            {p.question && (
                                                                <div className="mb-4 p-3 bg-black/20 rounded-lg border border-white/5">
                                                                    <span className="text-[10px] font-bold text-primary/70 tracking-wider uppercase block mb-1">THE QUESTION</span>
                                                                    <p className="text-[12px] italic text-gray-300">"{p.question}"</p>
                                                                </div>
                                                            )}
                                                            
                                                            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-2xl">{p.description}</p>
                                                            
                                                            {p.businessImpact && (
                                                                <div className="mb-4">
                                                                    <span className="text-[10px] font-bold text-emerald-500/70 tracking-wider uppercase block mb-1">BUSINESS IMPACT</span>
                                                                    <p className="text-[12px] italic text-gray-300">{p.businessImpact}</p>
                                                                </div>
                                                            )}
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
