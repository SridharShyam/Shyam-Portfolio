import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const response = await fetch("https://formspree.io/f/placeholder", { // USER: REPLACE WITH YOUR FORMSPREE ID
                method: "POST",
                body: new FormData(e.target),
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-surface to-background relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start relative z-10">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-secondary font-mono text-sm uppercase tracking-widest">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mt-3 mb-6">
                            Let's Build <br /><span className="text-primary">Something Meaningful</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            If you have a project idea, collaboration opportunity, or just want to connect, feel free to reach out. I'm always open to working on AI, data science, and impactful tech solutions.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <a href="mailto:shyamsridhar935@gmail.com" className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all border border-transparent hover:border-white/10">
                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-400 group-hover:text-primary transition-colors">Email Me</span>
                                <span className="text-lg font-medium text-white">shyamsridhar935@gmail.com</span>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/shyam-2005-ds-ml" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all border border-transparent hover:border-white/10">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Linkedin size={20} />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-400 group-hover:text-blue-400 transition-colors">Connect</span>
                                <span className="text-lg font-medium text-white">Connect on LinkedIn</span>
                            </div>
                        </a>

                        <a href="https://github.com/SridharShyam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all border border-transparent hover:border-white/10">
                            <div className="w-12 h-12 rounded-full bg-gray-700/30 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Github size={20} />
                            </div>
                            <div>
                                <span className="block text-sm text-gray-400 group-hover:text-white transition-colors">Follow Work</span>
                                <span className="text-lg font-medium text-white">View My Work on GitHub</span>
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl"
                >
                        {status === 'success' ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-500/10 border border-green-500/20 rounded-2xl"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                    <Send className="text-green-400" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message sent successfully!</h3>
                                <p className="text-gray-400">I'll get back to you soon. Looking forward to connecting!</p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-sm text-primary hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-500"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-500"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-500 resize-none"
                                        placeholder="Tell me what you're working on or how we can collaborate..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span>Start Conversation</span>
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
