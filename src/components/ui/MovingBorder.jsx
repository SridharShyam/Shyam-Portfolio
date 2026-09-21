import { motion } from 'framer-motion';

export const MovingBorder = ({
  children,
  duration = 3500,
  className = "",
  containerClassName = "",
  as: Component = "button",
  borderClassName = "",
  ...otherProps
}) => {
  return (
    <Component
      className={`relative p-[1.5px] overflow-hidden rounded-full font-mono text-xs font-bold transition-transform active:scale-95 ${containerClassName}`}
      {...otherProps}
    >
      {/* Moving Border Gradient Beam */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          className="absolute -inset-[100%] w-[300%] h-[300%] m-auto"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, #00c7b7 0deg, #ec4899 120deg, transparent 240deg, #00c7b7 360deg)'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: duration / 1000, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Inner Button Content */}
      <div className={`relative px-6 py-3 rounded-full bg-[#0b0f17] text-white flex items-center justify-center gap-2 backdrop-blur-xl ${className}`}>
        {children}
      </div>
    </Component>
  );
};

export default MovingBorder;
