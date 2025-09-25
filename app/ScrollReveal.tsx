// ScrollReveal.tsx - Versi Sederhana
'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  as?: keyof JSX.IntrinsicElements;
  stagger?: number;
}

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  as = 'h2',
  stagger = 0.05
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const textEl = textRef.current;
    if (!el || !textEl) return;

    const scroller = scrollContainerRef?.current || window;

    // Rotation animation pada container
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    // Animasi pada teks (opacity dan blur)
    gsap.fromTo(
      textEl,
      { 
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
        willChange: 'opacity, filter'
      },
      {
        ease: 'none',
        opacity: 1,
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, stagger]);

  const Tag = as;

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <Tag ref={textRef} className={`leading-[1.5] font-semibold ${textClassName}`}>
        {children}
      </Tag>
    </div>
  );
};

export default ScrollReveal;