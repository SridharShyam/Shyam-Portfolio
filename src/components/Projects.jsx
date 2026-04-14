import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "RetailMind AI",
        description: "An AI-powered inventory intelligence platform designed for Indian SMBs to optimize stock levels and predict demand transitions.",
        tech: ["Python", "FastAPI", "React", "PostgreSQL", "Time-Series"],
        highlights: ["Optimized inventory efficiency by 40% using custom forecasting", "Real-time stock level monitoring with automated alerts", "Deployed for 5+ local pilot merchants"],
        links: { demo: "https://github.com/SridharShyam/Shyam-Portfolio", repo: "https://github.com/SridharShyam/Shyam-Portfolio" }
    },
    {
        title: "HealthSentinel AI",
        description: "State-of-the-art health risk prediction platform analyzing non-communicable disease patterns in urban populations.",
        tech: ["Python", "TensorFlow", "FastAPI", "Next.js", "Redis"],
        highlights: ["Achieved 95% detection accuracy in early risk screenings", "Interactive telemetry dashboard for real-time risk assessment", "Engineered for high-throughput diagnostic data"],
        links: { demo: "https://github.com/SridharShyam/Shyam-Portfolio", repo: "https://github.com/SridharShyam/Shyam-Portfolio" }
    },
    {
        title: "Digital Healthcare Prediction",
        description: "Machine learning model for predicting patient statuses and disease stages with high accuracy using electronic health records.",
        tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
        highlights: ["Early-stage disease detection with 92% F1 score", "Optimized feature engineering pipeline for medical data", "User-friendly web interface for clinical use"],
        links: { demo: "https://github.com/SridharShyam/Shyam-Portfolio", repo: "https://github.com/SridharShyam/Shyam-Portfolio" }
    },
    {
        title: "Exoplanet Habitability Analysis",
        description: "Data science project analyzing NASA astronomical datasets to identify potentially habitable worlds using multi-modal classification.",
        tech: ["Python", "AstroPy", "Matplotlib", "Random Forest"],
        highlights: ["Processed 10k+ planetary entries from NASA Archive", "Habitability Index calculation with Bayesian optimization", "Interactive cosmic data visualizations"],
        links: { demo: "https://github.com/SridharShyam/Shyam-Portfolio", repo: "https://github.com/SridharShyam/Shyam-Portfolio" }
    },
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-surface rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
        >
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-3">
                        <a href={project.links.repo} className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Repo"><Github size={20} /></a>
                        <a href={project.links.demo} className="text-gray-400 hover:text-primary transition-colors" aria-label="Live Demo"><ExternalLink size={20} /></a>
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
                    <a href="#" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium relative group">
                        <span>View detailed case studies</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
