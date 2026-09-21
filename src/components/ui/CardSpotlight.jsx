import { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const CardSpotlight = ({
  children,
  className = "",
  radius = 300,
  color = "rgba(0, 199, 183, 0.15)",
  slotColor = "rgba(236, 72, 153, 0.2)",
  ...props
}) => {
  const mouseX = useMotionValue(-radius);
  const mouseY = useMotionValue(-radius);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 80%)`;
  const borderBackground = useMotionTemplate`radial-gradient(${radius * 0.7}px circle at ${mouseX}px ${mouseY}px, ${slotColor}, transparent 80%)`;

  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 group overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(-radius);
        mouseY.set(-radius);
      }}
      {...props}
    >
      {/* Interactive Cursor Spotlight Background Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{ background }}
      />

      {/* Interactive Border Spotlight Highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0 border border-secondary/40"
        style={{ background: borderBackground, maskImage: 'linear-gradient(black, black)' }}
      />

      {/* Inner Content Container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CardSpotlight;
