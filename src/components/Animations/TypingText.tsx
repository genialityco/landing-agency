import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface TypingTextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ text, typingSpeed = 5, className }) => {
  const [displayText, setDisplayText] = useState('');
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      let currentIndex = 0;
      setDisplayText('');
      const interval = setInterval(() => {
        setDisplayText(() => text.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex > text.length) {
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }
  }, [text, typingSpeed, inView]);

  return <span ref={ref} dangerouslySetInnerHTML={{ __html: displayText }} className={className} />;
};
