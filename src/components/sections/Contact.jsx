import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Rocket, Briefcase, Cpu, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

const motives = [
    {
        id: 'project',
        title: 'Build a Project',
        subtitle: 'Collaborate on AI, ML, or web apps',
        icon: Rocket,
        color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400',
        placeholder: 'Tell me a bit about your idea, goals, or deliverables...',
    },
    {
        id: 'hiring',
        title: 'Hire or Freelance',
        subtitle: 'Full-time role or contract work',
        icon: Briefcase,
        color: 'border-purple-500/50 bg-purple-500/10 text-purple-400',
        placeholder: 'Tell me about the team, role scope, or opportunity...',
    },
    {
        id: 'consulting',
        title: 'Tech & AI Advice',
        subtitle: 'System ideas, feedback, or guidance',
        icon: Cpu,
        color: 'border-amber-500/50 bg-amber-500/10 text-amber-400',
        placeholder: 'What AI/ML bottleneck or system question can we solve?',
    },
    {
        id: 'general',
        title: 'Say Hello',
        subtitle: 'Quick chat, networking, or question',
        icon: MessageSquare,
        color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400',
        placeholder: 'What\'s on your mind? Drop a line or question...',
    }
];

const Contact = () => {
    const [selectedMotive, setSelectedMotive] = useState('project');
    const [timeline, setTimeline] = useState('1-3 Months');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});
    const { showToast } = useToast();

    const activeMotive = motives.find(m => m.id === selectedMotive) || motives[0];

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Please enter your name";
        if (!formData.email.trim()) newErrors.email = "Please enter your email";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
        if (!formData.message.trim()) newErrors.message = "Please write a brief message";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setStatus('submitting');
        
        try {
            const response = await fetch("https://formspree.io/f/xpqgjyld", {
                method: "POST",
                body: new FormData(e.target),
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                setStatus('idle');
                setFormData({ name: '', email: '', message: '' });
                showToast("Message sent! Thanks for reaching out, I'll get back to you soon.", "success");
            } else {
                setStatus('idle');
                showToast("Failed to send message. Please try again.", "error");
            }
        } catch {
            setStatus('idle');
            showToast("An error occurred. Please try again later.", "error");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-surface to-background relative overflow-hidden">
            {/* Background Ambient Glow Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start relative z-10">

                {/* Left Column: Friendly Contact Info & Channels */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 space-y-8"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-surface/80 border border-border text-muted font-mono text-xs mb-4 backdrop-blur-md shadow-sm">
                            <Mail size={14} className="text-primary" />
                            GET IN TOUCH
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-heading mb-6">
                            Let's Connect & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">Build Together</span>
                        </h2>
                        <p className="text-muted leading-relaxed text-base">
                            Have an exciting AI idea, a role to discuss, or just want to connect over data science? Drop me a message—I'd love to chat!
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a href="mailto:shyamsridhar935@gmail.com" className="flex items-center gap-4 group bg-surface/90 hover:bg-surface p-4 rounded-2xl transition-all border border-border shadow-sm">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="block text-xs text-muted group-hover:text-primary transition-colors">Direct Email</span>
                                <span className="text-base font-semibold text-heading truncate block">shyamsridhar935@gmail.com</span>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/shyam-2005-ds-ml" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group bg-surface/90 hover:bg-surface p-4 rounded-2xl transition-all border border-border shadow-sm">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Linkedin size={20} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="block text-xs text-muted group-hover:text-blue-400 transition-colors">LinkedIn</span>
                                <span className="text-base font-semibold text-heading truncate block">Connect on LinkedIn</span>
                            </div>
                        </a>

                        <a href="https://github.com/SridharShyam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group bg-surface/90 hover:bg-surface p-4 rounded-2xl transition-all border border-border shadow-sm">
                            <div className="w-12 h-12 rounded-xl bg-background border border-border text-heading flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Github size={20} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="block text-xs text-muted group-hover:text-heading transition-colors">GitHub</span>
                                <span className="text-base font-semibold text-heading truncate block">Explore Projects on GitHub</span>
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Friendly & Simple Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 bg-surface/95 backdrop-blur-xl border border-border p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden"
                >
                    {/* Top Accent Gradient Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-purple-500 to-secondary" />

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        
                        {/* Hidden Inputs for Formspree Email Tagging */}
                        <input type="hidden" name="inquiry_motive" value={activeMotive.title} />
                        {(selectedMotive === 'project' || selectedMotive === 'consulting') && (
                            <input type="hidden" name="target_timeline" value={timeline} />
                        )}

                        {/* Motive Selection Chips */}
                        <div>
                            <label className="block text-sm font-semibold text-heading mb-3">
                                What would you like to chat about?
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {motives.map((motive) => {
                                    const IconComp = motive.icon;
                                    const isSelected = selectedMotive === motive.id;
                                    return (
                                        <button
                                            key={motive.id}
                                            type="button"
                                            onClick={() => setSelectedMotive(motive.id)}
                                            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                                                isSelected
                                                    ? 'bg-primary/15 border-primary shadow-md text-heading'
                                                    : 'bg-background/60 hover:bg-background border-border text-muted hover:text-heading'
                                            }`}
                                        >
                                            <div className={`p-2 rounded-xl border shrink-0 ${isSelected ? motive.color : 'bg-surface border-border text-muted'}`}>
                                                <IconComp size={16} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-bold text-heading">
                                                        {motive.title}
                                                    </span>
                                                    {isSelected && <CheckCircle2 size={13} className="text-primary" />}
                                                </div>
                                                <span className="text-xs text-muted truncate block mt-0.5">
                                                    {motive.subtitle}
                                                </span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Dynamic Field: Expected Timeline (Shown for Project / Consulting Motives) */}
                        {(selectedMotive === 'project' || selectedMotive === 'consulting') && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                            >
                                <label className="block text-xs font-semibold text-muted mb-2">
                                    Target Timeline (Optional)
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {['Urgent (< 1 Mo)', '1 - 3 Months', 'Flexible'].map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() => setTimeline(option)}
                                            className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                                                timeline === option
                                                    ? 'bg-secondary/20 border-secondary text-secondary font-bold'
                                                    : 'bg-background/60 hover:bg-background border-border text-muted'
                                            }`}
                                        >
                                            <Clock size={12} />
                                            <span>{option}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Full Name & Email Inputs */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-xs font-semibold text-muted mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full bg-background border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder-muted`}
                                    placeholder="Enter your name"
                                />
                                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-semibold text-muted mb-2">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full bg-background border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder-muted`}
                                    placeholder="name@example.com"
                                />
                                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                            </div>
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-xs font-semibold text-muted mb-2">
                                Your Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full bg-background border ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder-muted resize-none`}
                                placeholder={activeMotive.placeholder}
                            />
                            {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {status === 'submitting' ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
