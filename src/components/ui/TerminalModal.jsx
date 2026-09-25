import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Download, X } from 'lucide-react';

const lines = [
    "> Initialize Shyametrics Profile Synthesis...",
    "> Accessing Datasets [Healthcare, E-Commerce, Predictive Models]...",
    "> Running NLP extraction on candidate capabilities...",
    "> Extracted: Machine Learning, System Architecture, FastAPI, Data Engineering.",
    "> Compiling executive summary...",
    "",
    "===== SYNTHESIS COMPLETE =====",
    "Shyam is an AI Architect who bridges the gap between raw data and measurable business impact. He builds end-to-end decision-support systems, not just isolated models.",
    "",
    "> Generating PDF payload..."
];

const TerminalModal = ({ isOpen, onClose }) => {
    const [displayedLines, setDisplayedLines] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [showDownload, setShowDownload] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setDisplayedLines([]);
            setShowDownload(false);
            return;
        }

        setIsTyping(true);
        let currentIndex = 0;
        
        const typeLines = () => {
            if (currentIndex < lines.length) {
                setDisplayedLines(prev => [...prev, lines[currentIndex]]);
                currentIndex++;
                setTimeout(typeLines, Math.random() * 400 + 200); // Random delay between lines
            } else {
                setIsTyping(false);
                setTimeout(() => setShowDownload(true), 500);
            }
        };

        setTimeout(typeLines, 300);
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="w-full max-w-2xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col"
                    >
                        {/* Terminal Header */}
                        <div className="bg-background px-4 py-3 border-b border-border flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Terminal size={16} className="text-primary" />
                                <span className="text-sm font-mono text-muted">shyametrics_synthesis.exe</span>
                            </div>
                            <button onClick={onClose} className="text-muted hover:text-heading transition-colors cursor-pointer">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 font-mono text-sm min-h-[300px] flex flex-col">
                            {displayedLines.map((line, idx) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={idx} 
                                    className={`mb-2 ${line.startsWith('=====') ? 'text-primary font-bold my-4' : line.startsWith('Shyam') ? 'text-heading font-semibold' : 'text-muted'}`}
                                >
                                    {line}
                                </motion.div>
                            ))}
                            
                            {isTyping && (
                                <motion.div 
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-2 h-4 bg-primary mt-1"
                                />
                            )}

                            {showDownload && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-8 flex justify-center"
                                >
                                    <a 
                                        href="https://docs.google.com/document/d/1Vp_Esh7A6DDhyhPXo9KwWr0zjpbpr_2LDUoT3DwY3Ek/export?format=pdf" 
                                        download="Shyam_S_Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={onClose}
                                        className="flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
                                    >
                                        <Download size={18} />
                                        Download Resume PDF
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default TerminalModal;
