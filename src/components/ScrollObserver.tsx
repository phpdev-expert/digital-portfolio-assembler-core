
import React, { useEffect, useRef } from 'react';

interface ScrollObserverProps {
  children: React.ReactNode;
}

const ScrollObserver: React.FC<ScrollObserverProps> = ({ children }) => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all sections
    if (sectionsRef.current) {
      const sections = sectionsRef.current.querySelectorAll('section');
      sections.forEach((section) => {
        section.classList.add('section-fade');
        observer.observe(section);
      });
    }

    return () => {
      if (sectionsRef.current) {
        const sections = sectionsRef.current.querySelectorAll('section');
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, []);

  return <div ref={sectionsRef}>{children}</div>;
};

export default ScrollObserver;
