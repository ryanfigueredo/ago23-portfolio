import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const Animation: React.FC = () => { // Removemos a propriedade "children" que não está sendo usada
  useEffect(() => {
    const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    if (isAnimationOk) {
      setupAnimations();
    }
  }, []);

  function setupAnimations() {
    // O código GSAP da sua animação aqui
    // ...

    // Cole aqui o código GSAP que você mostrou anteriormente
    // ...

    gsap.from(".stroke__wide", {
      drawSVG: "0%",
      delay: 1,
      scrollTrigger: {
        trigger: "main",
        start: "-10% top",
        end: "bottom+=30% bottom",
        scrub: 1
      }
    });

    // ...

    let headers = gsap.utils.toArray(".header") as HTMLElement[]; // Adicione a tipagem explícita aqui
    headers.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        yPercent: 5,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "resume pause resume pause"
        }
      });
    });
  }

  return null; 
};

export default Animation;
