import { useRef } from 'react';
import { motion, useSpring, useTransform, useReducedMotion } from 'framer-motion';

const InteractiveAIAvatar = () => {
    const cardRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    // Subtle 3D perspective tracking
    const mouseX = useSpring(0, { stiffness: 220, damping: 22 });
    const mouseY = useSpring(0, { stiffness: 220, damping: 22 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

    const handleMouseMove = (e) => {
        if (!cardRef.current || shouldReduceMotion) return;
        const rect = cardRef.current.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(normX);
        mouseY.set(normY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div className="relative mx-auto max-w-[380px] lg:max-w-none select-none">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={
                    shouldReduceMotion
                        ? {}
                        : {
                              perspective: 1000,
                              rotateX,
                              rotateY,
                          }
                }
                className="aspect-[4/5] rounded-2xl bg-surface p-1 border border-border overflow-hidden shadow-md relative group"
            >
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-background">
                    <img
                        src="/shyam-formal.jpeg"
                        alt="Shyam - AI & Data Systems Engineer"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        className="w-full h-full object-cover object-[50%_15%] select-none pointer-events-none"
                    />

                    {/* Clean caption card */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                        <div className="p-3 rounded-xl bg-surface/95 backdrop-blur-md border border-border shadow-sm flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-semibold block">
                                    ENGINEERING PROFILE
                                </span>
                                <span className="text-xs font-bold text-heading">
                                    Shyam Sridhar
                                </span>
                            </div>
                            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-border text-text bg-background font-medium">
                                Chennai, IN
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default InteractiveAIAvatar;
