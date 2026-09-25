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
                <a href="#home" className="-ml-4 md:-ml-8 text-3xl md:text-4xl font-bold font-heading text-primary relative group tracking-wide flex items-center gap-1">
                    Shyam<span className="text-text">etrics</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>

                {/* Desktop Nav & Theme Toggle */}
                <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                    <div className="flex space-x-8 lg:space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`transition-colors font-semibold text-base tracking-wide ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted hover:text-primary'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <ThemeToggle />
                </div>

                {/* Mobile Menu & Theme Toggle */}
                <div className="flex items-center space-x-3 md:hidden">
                    <ThemeToggle />

                    <button
                        className="text-text hover:text-primary transition-colors p-1"
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
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
export default Navbar;
