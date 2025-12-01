import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function ScrollStars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Create stars
    const createStars = () => {
      const starCount = 30;
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.3 + 0.1,
        });
      }
      
      return newStars;
    };

    setStars(createStars());
  }, []);

  useEffect(() => {
    if (!containerRef.current || stars.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const scrollFactor = scrollY * 0.15; // Adjust speed here

        stars.forEach((star, index) => {
          const starElement = containerRef.current?.children[index] as HTMLElement;
          if (starElement) {
            const newY = (star.y + scrollFactor * star.speed) % 100;
            starElement.style.transform = `translate(${star.x}vw, ${newY}vh)`;
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [stars]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
            transition: 'transform 0.1s linear',
          }}
        />
      ))}
    </div>
  );
}

