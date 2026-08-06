import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, TrendingUp, Globe, Rocket, Sparkles, BookOpen, Code, Zap, Star } from 'lucide-react';
import notionData from '../../data/notion-data.json';

const iconMap = {
    Award, Users, Lightbulb, TrendingUp, Globe, Rocket, Sparkles, BookOpen, Code, Zap, Star
};

const Journey = () => {
    const containerRef = useRef(null);

    // Load timeline from Notion data and map the icon string to the actual component
    const timeline = notionData.journey.map(item => ({
        ...item,
        icon: iconMap[item.iconString] || Star
    }));

    // Chunk timeline into groups of 3 for desktop
    const chunkedTimeline = [];
    for (let i = 0; i < timeline.length; i += 3) {
        chunkedTimeline.push(timeline.slice(i, i + 3));
    }

    return (
        <section id="journey" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4 border border-secondary/20">
                        <Zap size={16} />
                        <span>Growth • Leadership • Impact</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                        Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-pink-500">Growth Timeline</span>
                    </h2>
                </motion.div>

                {/* Snake Grid Container */}
                <div ref={containerRef} className="space-y-12 md:space-y-16 relative">
                    
                    {/* Mobile-only continuous vertical liquid line */}
                    <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-white/5 rounded-full z-0 overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-primary to-transparent opacity-80"
                            animate={{ top: ["-25%", "100%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    {chunkedTimeline.map((chunk, rowIndex) => {
                        const isReverseRow = rowIndex % 2 !== 0;
                        const isLastRow = rowIndex === chunkedTimeline.length - 1;
                        
                        return (
                            <div key={rowIndex} className={`flex flex-col md:flex-row gap-8 relative ${isReverseRow ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Horizontal connecting line (Desktop only) */}
                                <div className="hidden md:block absolute top-1/2 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-pink-500/10 -translate-y-1/2 rounded-full overflow-hidden z-0">
                                    <motion.div 
                                        className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent ${isReverseRow ? 'via-secondary' : 'via-primary'} to-transparent opacity-80`}
                                        animate={{ left: isReverseRow ? ["100%", "-50%"] : ["-50%", "100%"] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                                
                                {/* Vertical Connector to next row (Desktop only) */}
                                {!isLastRow && !isReverseRow && (
                                    <div className="hidden md:block absolute right-[16.66%] top-1/2 w-1 h-[calc(100%+4rem)] bg-pink-500/10 overflow-hidden z-0">
                                        <motion.div 
                                            className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-80"
                                            animate={{ top: ["-50%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                )}
                                {!isLastRow && isReverseRow && (
                                    <div className="hidden md:block absolute left-[16.66%] top-1/2 w-1 h-[calc(100%+4rem)] bg-primary/10 overflow-hidden z-0">
                                        <motion.div 
                                            className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent opacity-80"
                                            animate={{ top: ["-50%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                )}

                                {chunk.map((item, colIndex) => {
                                    const actualIndex = rowIndex * 3 + colIndex;
                                    const delay = actualIndex * 0.1;

                                    if (item.isFuture) {
                                        return (
                                            <motion.div
                                                key={actualIndex}
                                                className="w-full md:w-1/3 flex flex-col justify-center items-center text-center p-6 relative z-10 pl-16 md:pl-6"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.5, delay }}
                                            >
                                                <div className="w-16 h-16 rounded-full bg-background border-2 border-secondary animate-pulse shadow-[0_0_20px_rgba(236,72,153,0.5)] flex items-center justify-center text-secondary mb-4">
                                                    <item.icon size={28} />
                                                </div>
                                                <h3 className="font-heading font-bold text-2xl tracking-wide uppercase italic text-secondary mb-2">{item.title}</h3>
                                                <p className="text-gray-500 text-sm">{item.description}</p>
                                            </motion.div>
                                        );
                                    }

                                    return (
                                        <motion.div
                                            key={actualIndex}
                                            className="w-full md:w-1/3 relative z-10 pl-16 md:pl-0"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5, delay }}
                                        >
                                            <div className="h-full flex flex-col p-6 rounded-2xl bg-surface/60 border border-white/10 backdrop-blur-md hover:border-primary/40 hover:bg-surface/90 transition-all duration-300 group shadow-lg hover:shadow-primary/5 hover:-translate-y-2 relative z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-primary font-mono text-xs font-semibold px-2 py-1 bg-primary/10 rounded">{item.year}</span>
                                                    <motion.div
                                                        whileHover={{ rotate: 15, scale: 1.2 }}
                                                        className="text-gray-400 group-hover:text-secondary transition-colors"
                                                    >
                                                        <item.icon size={20} />
                                                    </motion.div>
                                                </div>
                                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Journey;
