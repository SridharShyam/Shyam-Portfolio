import { motion } from 'framer-motion';
import { Cpu, Brain, Layers, Zap, Database } from 'lucide-react';

const techBadges = [
    { label: 'Deep Learning', sub: 'PyTorch · Transformers', icon: Brain, accent: 'text-pink-400 border-pink-500/30 bg-pink-500/10' },
    { label: 'Predictive ML', sub: 'Scikit-Learn · XGBoost', icon: Layers, accent: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
    { label: 'Agentic AI', sub: 'Multi-Agent Networks', icon: Cpu, accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
    { label: 'Backend APIs', sub: 'FastAPI · Python', icon: Zap, accent: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
    { label: 'Data Pipelines', sub: 'Pandas · NumPy · EDA', icon: Database, accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
];

const HeroVisual = () => {
    return (
        <div className="relative w-full max-w-[440px] sm:max-w-[500px] mx-auto flex flex-col items-center select-none">
            
            {/* Background Ambient Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] bg-gradient-to-tr from-primary/15 via-purple-500/10 to-secondary/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Central Grounded Hero Subject Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 w-full aspect-[4/5] max-w-[360px] sm:max-w-[400px] rounded-3xl overflow-hidden border border-border bg-surface shadow-2xl group"
            >
                {/* Real Formal Photograph */}
                <img 
                    src="/shyam-formal.jpeg" 
                    alt="SHYAM" 
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full h-full object-cover object-[50%_20%] scale-[1.03] group-hover:scale-[1.06] transition-transform duration-700 ease-out select-none pointer-events-none" 
                />

                {/* Soft Vignette Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Grounded Identity Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-surface/95 backdrop-blur-xl border border-border shadow-xl flex items-center justify-between">
                    <div>
                        <span className="text-[10px] font-mono tracking-widest text-secondary font-bold block uppercase">AI ENGINEER & DATA SCIENTIST</span>
                        <span className="text-lg font-bold text-heading font-heading tracking-tight">SHYAM</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        AVAILABLE
                    </div>
                </div>
            </motion.div>

            {/* Grounded Tech Stack Pills (Static Grid - No Floating Motion Clutter) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full max-w-[400px] mt-4 grid grid-cols-2 gap-2"
            >
                {techBadges.map((badge, idx) => {
                    const IconComp = badge.icon;
                    return (
                        <div 
                            key={idx}
                            className={`p-2.5 rounded-xl bg-surface/90 border border-border shadow-sm flex items-center gap-2.5 transition-all hover:border-primary/40 ${idx === 4 ? 'col-span-2' : ''}`}
                        >
                            <div className={`p-2 rounded-lg border shrink-0 ${badge.accent}`}>
                                <IconComp size={15} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="block text-xs font-bold text-heading font-heading truncate leading-tight">
                                    {badge.label}
                                </span>
                                <span className="block text-[10px] font-mono text-muted truncate">
                                    {badge.sub}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default HeroVisual;
