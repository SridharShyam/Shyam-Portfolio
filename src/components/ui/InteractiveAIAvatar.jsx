import React, { useState, useRef } from 'react';
import { motion, useSpring, useTransform, useReducedMotion } from 'framer-motion';

const InteractiveAIAvatar = () => {
    const cardRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    const [isHovered, setIsHovered] = useState(false);

    // Smooth spring physics for mouse tracking
    const mouseX = useSpring(0, { stiffness: 220, damping: 22 });
    const mouseY = useSpring(0, { stiffness: 220, damping: 22 });

    // Subtle 3D Head Angle & Face Turning Transforms
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);

    // Parallax Image Movement
    const imgX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
    const imgY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

    const playHoverSound = () => {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        } catch {
            // Audio fallback
        }
    };

    const handleMouseMove = (e) => {
        if (!cardRef.current || shouldReduceMotion) return;
        const rect = cardRef.current.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(normX);
        mouseY.set(normY);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        playHoverSound();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div className="relative mx-auto max-w-[380px] lg:max-w-none select-none">
            {/* Outer Grounded Card with 3D Perspective */}
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="aspect-[4/5] rounded-3xl bg-surface p-1 border border-border overflow-hidden shadow-2xl relative group backdrop-blur-md cursor-pointer gpu-accelerated"
            >
                {/* AI Avatar Image Frame */}
                <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-background">
                    
                    {/* Image 1: Clean Natural Digital Art Portrait (Idle State) */}
                    <motion.img
                        src="/shyam-ai-avatar.jpg"
                        alt="SHYAM // Natural Representation"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        style={
                            shouldReduceMotion
                                ? {}
                                : {
                                      scale: isHovered ? 1.05 : 1.02,
                                      x: imgX,
                                      y: imgY,
                                  }
                        }
                        animate={{ opacity: isHovered ? 0 : 1 }}
                        transition={{ duration: 0.45 }}
                        className="absolute inset-0 w-full h-full object-cover object-[50%_15%] select-none pointer-events-none"
                    />

                    {/* Image 2: Cyberpunk Neural AI Portrait (Hover State) */}
                    <motion.img
                        src="/shyam-ai-cyberpunk.jpg"
                        alt="SHYAM // Cyberpunk AI Representation"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        style={
                            shouldReduceMotion
                                ? {}
                                : {
                                      scale: isHovered ? 1.06 : 1.02,
                                      x: imgX,
                                      y: imgY,
                                  }
                        }
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.45 }}
                        className="absolute inset-0 w-full h-full object-cover object-[50%_15%] select-none pointer-events-none"
                    />

                    {/* Ambient Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                    {/* Interactive Status Pill at Bottom */}
                    <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none">
                        <div className="p-3 rounded-2xl bg-surface/90 backdrop-blur-md border border-border shadow-md flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-semibold block">
                                    {isHovered ? 'CYBERPUNK AI MODE' : 'PORTFOLIO ARTWORK'}
                                </span>
                                <span className="text-xs font-bold text-heading">
                                    {isHovered ? '✦ Neural AI Representation' : 'Digital Portrait Representation'}
                                </span>
                            </div>
                            <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md border font-bold transition-all ${
                                isHovered
                                    ? 'text-cyan-400 bg-cyan-500/20 border-cyan-500/40 shadow-[0_0_12px_rgba(0,212,255,0.3)]'
                                    : 'text-primary bg-primary/10 border-primary/20'
                            }`}>
                                {isHovered ? 'HOVER ACTIVE' : 'HOVER TO TRANSFORM'}
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default InteractiveAIAvatar;
