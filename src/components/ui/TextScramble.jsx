import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GLYPHS = 'ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=';

export const TextScramble = ({
  text,
  className = '',
  speed = 40,
  scrambleCount = 2,
  triggerOnce = true
}) => {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: triggerOnce, margin: '-20px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || (triggerOnce && hasAnimated.current)) return;
    hasAnimated.current = true;

    let iteration = 0;
    let interval = null;

    interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / scrambleCount;
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed, scrambleCount, triggerOnce]);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {displayText}
    </span>
  );
};

export default TextScramble;
