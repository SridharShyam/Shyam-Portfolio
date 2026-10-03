import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Learning', href: '#learning' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -50% 0px',
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
        const homeSection = document.getElementById('home');
        if (homeSection) sections.push(homeSection);

        sections.forEach(sec => observer.observe(sec));

        return () => {
            sections.forEach(sec => observer.unobserve(sec));
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg border-b border-border' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <a href="#home" className="-ml-4 md:-ml-8 flex flex-col group relative">
                        <div className="text-2xl md:text-3xl font-bold font-heading text-primary tracking-wide leading-none">
                            Shyam<span className="text-text">etrics</span>
                        </div>
                        <span className="text-[10px] md:text-xs text-muted font-mono font-medium tracking-wider mt-1">
                            AI & Decision Support
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>

                    {/* Shyamarks External Sister App Link */}
                    <a 
                        href="https://shyamarks.vercel.app" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/80 border border-border hover:border-secondary/50 transition-all text-muted hover:text-secondary text-[11px] font-mono group"
                        title="Shyamarks - Achievement Vault (Coming Soon)"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        <span className="font-semibold text-heading group-hover:text-secondary">Shyamarks</span>
                        <span className="text-[10px] text-muted/70">(Coming Soon)</span>
                    </a>
                </div>

                {/* Desktop Nav & Theme Toggle */}
                <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                    <div className="flex space-x-8 lg:space-x-10">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`transition-colors duration-500 font-semibold text-base tracking-wide relative flex flex-col items-center group ${
                                        isActive ? 'text-accent font-bold' : 'text-muted hover:text-accent'
                                    }`}
                                >
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <motion.span 
                                            layoutId="activeNavIndicator"
                                            className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-accent transition-colors duration-500" 
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    <ThemeToggle />
                </div>

                {/* Mobile Menu & Theme Toggle */}
                <div className="flex items-center space-x-3 md:hidden">
                    <ThemeToggle />

                    <button
                        className="text-text hover:text-accent transition-colors duration-500 p-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-medium transition-colors duration-500 flex items-center gap-2 ${
                                            isActive ? 'text-accent font-bold' : 'text-gray-300 hover:text-accent'
                                        }`}
                                    >
                                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent transition-colors duration-500" />}
                                        <span>{link.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
export default Navbar;
