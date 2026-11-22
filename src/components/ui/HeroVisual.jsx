import { motion } from 'framer-motion';
import { Cpu, Brain, Layers, Zap, Database } from 'lucide-react';

const techBadges = [
    { label: 'Deep Learning', sub: 'PyTorch · Transformers', icon: Brain },
    { label: 'Predictive ML', sub: 'Scikit-Learn · XGBoost', icon: Layers },
    { label: 'Agentic AI', sub: 'Multi-Agent Networks', icon: Cpu },
    { label: 'Backend APIs', sub: 'FastAPI · Python', icon: Zap },
    { label: 'Data Pipelines', sub: 'Pandas · NumPy · EDA', icon: Database },
];

const HeroVisual = () => {
    return (
        <div className="relative w-full max-w-[440px] sm:max-w-[480px] mx-auto flex flex-col items-center select-none">
            
            {/* Central Grounded Hero Subject Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full aspect-[4/5] max-w-[360px] sm:max-w-[390px] rounded-2xl overflow-hidden border border-border bg-surface shadow-md group"
            >
                {/* Real Formal Photograph */}
                <img 
                    src="/shyam-formal.jpeg" 
                    alt="SHYAM" 
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full h-full object-cover object-[50%_20%] select-none pointer-events-none" 
                />
                
                {/* Grounded Identity Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-surface/95 backdrop-blur-md border border-border shadow-sm flex items-center justify-between">
                    <div>
                        <span className="text-[11px] font-mono tracking-wider text-primary font-bold block uppercase">DATA SCIENTIST & ML ENGINEER</span>
                        <span className="text-base font-bold text-heading font-heading tracking-tight">SHYAM</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        AVAILABLE
                    </div>
                </div>
            </motion.div>

            {/* Grounded Tech Stack Pills */}
            <div className="w-full max-w-[390px] mt-4 grid grid-cols-2 gap-2">
                {techBadges.map((badge, idx) => {
                    const IconComp = badge.icon;
                    return (
                        <div 
                            key={idx}
                            className={`p-2.5 rounded-xl bg-surface border border-border shadow-xs flex items-center gap-2.5 transition-colors hover:border-primary/40 ${idx === 4 ? 'col-span-2' : ''}`}
                        >
                            <div className="p-2 rounded-lg bg-elevated text-primary shrink-0">
                                <IconComp size={15} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="block text-xs font-semibold text-heading font-heading truncate leading-tight">
                                    {badge.label}
                                </span>
                                <span className="block text-[11px] font-mono text-muted truncate">
                                    {badge.sub}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeroVisual;
