import React, { useEffect, ReactNode } from 'react';
import './ScrollAnimation.css';

interface ScrollAnimationProps {
  children: ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if elements are already visible on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="scroll-animation">{children}</div>;
};

export default ScrollAnimation;
