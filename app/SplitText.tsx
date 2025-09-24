// SplitText.tsx - Alternatif sederhana
'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

interface SplitTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: string;
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties['textAlign'];
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  onLetterAnimationComplete?: () => void;
}

const SplitText = ({
  children,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}: SplitTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !isMounted || !fontsLoaded) return;
      
      const el = ref.current;

      if ((el as any)._rbsplitInstance) {
        try {
          (el as any)._rbsplitInstance.revert();
        } catch (_) {
          /* ignore */
        }
        (el as any)._rbsplitInstance = null;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign = marginValue === 0 ? '' : 
                   marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : 
                   `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      let targets: any[] = [];
      const assignTargets = (self: any) => {
        if (splitType.includes('chars') && self.chars?.length) targets = self.chars;
        else if (splitType.includes('words') && self.words?.length) targets = self.words;
        else if (splitType.includes('lines') && self.lines?.length) targets = self.lines;
        else targets = self.chars || self.words || self.lines || [];
      };

      try {
        const splitInstance = new GSAPSplitText(el, {
          type: splitType,
          wordsClass: 'split-word',
          charsClass: 'split-char',
          linesClass: 'split-line',
          reduceWhiteSpace: false,
        });

        (el as any)._rbsplitInstance = splitInstance;

        gsap.delayedCall(0.01, () => {
          assignTargets(splitInstance);
          
          if (targets.length === 0) return;

          gsap.fromTo(targets, 
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onLetterAnimationComplete?.();
              }
            }
          );
        });

        return () => {
          if (animationCompletedRef.current) {
            ScrollTrigger.getAll().forEach(st => {
              if (st.trigger === el) st.kill();
            });
          }
          try {
            splitInstance.revert();
          } catch (_) {
            /* ignore */
          }
          (el as any)._rbsplitInstance = null;
        };
      } catch (error) {
        console.error('SplitText animation error:', error);
      }
    },
    {
      dependencies: [
        children,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        isMounted,
        onLetterAnimationComplete
      ],
      scope: ref
    }
  );

  // Conditional rendering untuk setiap tag yang didukung
  const style: React.CSSProperties = {
    textAlign,
    wordWrap: 'break-word',
    willChange: 'transform, opacity'
  };
  
  const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;

  switch (tag) {
    case 'h1':
      return <h1 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>{children}</h1>;
    case 'h2':
      return <h2 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>{children}</h2>;
    case 'h3':
      return <h3 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>{children}</h3>;
    case 'h4':
      return <h4 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>{children}</h4>;
    case 'h5':
      return <h5 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>{children}</h5>;
    case 'h6':
      return <h6 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>{children}</h6>;
    case 'div':
      return <div ref={ref as React.RefObject<HTMLDivElement>} style={style} className={classes}>{children}</div>;
    case 'span':
      return <span ref={ref as React.RefObject<HTMLSpanElement>} style={style} className={classes}>{children}</span>;
    case 'p':
    default:
      return <p ref={ref as React.RefObject<HTMLParagraphElement>} style={style} className={classes}>{children}</p>;
  }
};

export default SplitText;