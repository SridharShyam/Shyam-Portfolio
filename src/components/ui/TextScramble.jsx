import { motion } from 'framer-motion';

export const TextScramble = ({
  text,
  className = ''
}) => {
  return (
    <motion.span 
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  );
};

export default TextScramble;

