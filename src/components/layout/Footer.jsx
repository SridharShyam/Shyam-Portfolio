import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border py-12 relative overflow-hidden transition-colors duration-400">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

                <div className="flex space-x-8 mb-8">
                    <a href="https://github.com/SridharShyam" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface/80 rounded-full text-muted hover:text-primary transition-all hover:scale-110 border border-border shadow-sm">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/shyam-2005-ds-ml" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface/80 rounded-full text-muted hover:text-blue-500 transition-all hover:scale-110 border border-border shadow-sm">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:shyamsridhar935@gmail.com" className="p-3 bg-surface/80 rounded-full text-muted hover:text-emerald-500 transition-all hover:scale-110 border border-border shadow-sm">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-center text-muted text-sm space-y-2 font-sans">
                    <p className="font-medium text-heading">© {new Date().getFullYear()} SHYAM. All rights reserved.</p>
                    <p>Designed and developed by Shyam using React, Tailwind CSS, and Framer Motion.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
