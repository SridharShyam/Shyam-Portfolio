import { useState } from 'react';
import { Github, Linkedin, Mail, ShieldCheck, FileText } from 'lucide-react';
import LegalModal from '../ui/LegalModal';

const Footer = () => {
    const [legalType, setLegalType] = useState(null);

    return (
        <footer className="bg-transparent border-t border-border py-12 relative overflow-hidden transition-colors duration-400">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

                <div className="flex space-x-6 mb-8">
                    <a href="https://github.com/SridharShyam" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface/80 rounded-xl text-muted hover:text-primary transition-all border border-border shadow-xs" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/shyam-2005-ds-ml" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface/80 rounded-xl text-muted hover:text-primary transition-all border border-border shadow-xs" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:shyamsridhar935@gmail.com" className="p-3 bg-surface/80 rounded-xl text-muted hover:text-primary transition-all border border-border shadow-xs" aria-label="Email">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-center text-muted text-sm font-sans space-y-2">
                    <p className="font-medium text-heading">
                        Shyametrics © 2026 · Built by Sridhar Shyam
                    </p>
                    <p className="text-xs text-muted flex items-center justify-center gap-1.5 flex-wrap">
                        <span>Data is just the beginning. Decisions are the destination.</span>
                        <span className="hidden sm:inline">·</span>
                        <a 
                            href="https://shyamarks.vercel.app" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-emerald-500 hover:text-emerald-400 hover:underline font-mono font-medium inline-flex items-center gap-1.5"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            <span>Sister App: Shyamarks (Verified Vault) ↗</span>
                        </a>
                    </p>

                    <div className="flex items-center justify-center gap-4 text-xs text-muted pt-2">
                        <button 
                            onClick={() => setLegalType('privacy')}
                            className="hover:text-heading transition-colors underline-offset-4 hover:underline"
                        >
                            Privacy Policy
                        </button>
                        <span>·</span>
                        <button 
                            onClick={() => setLegalType('terms')}
                            className="hover:text-heading transition-colors underline-offset-4 hover:underline"
                        >
                            Terms of Service
                        </button>
                    </div>
                </div>

            </div>

            <LegalModal 
                isOpen={!!legalType} 
                type={legalType} 
                onClose={() => setLegalType(null)} 
            />
        </footer>
    );
};

export default Footer;
