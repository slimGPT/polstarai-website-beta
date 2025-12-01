import { useEffect, useRef } from 'react';

/**
 * Hero Star Field Component
 * 
 * Creates a soft, subtle star field with gentle parallax and twinkling effects.
 * Designed to be calm and magical, not noisy or hyperactive.
 */

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  driftX: number;
  driftY: number;
}

export default function HeroStarField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Initialize stars once
  if (starsRef.current.length === 0) {
    const starCount = 40; // Calm, not overwhelming
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5, // Small, subtle stars
        opacity: Math.random() * 0.4 + 0.3, // Soft opacity
        twinkleSpeed: Math.random() * 2 + 3, // Slow twinkling
        driftX: (Math.random() - 0.5) * 0.5, // Very slow drift
        driftY: (Math.random() - 0.5) * 0.5,
      });
    }

    starsRef.current = stars;
  }

  useEffect(() => {
    if (!containerRef.current) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse parallax handler (only on desktop)
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return; // Skip on mobile
      
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 10; // Subtle movement
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 10;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate stars using requestAnimationFrame
    let animationId: number;
    let currentX = 0;
    let currentY = 0;
    let time = 0;

    const animate = () => {
      if (!containerRef.current) return;

      time += 0.01;

      // Smooth parallax interpolation
      currentX += (mouseX.current - currentX) * 0.05;
      currentY += (mouseY.current - currentY) * 0.05;

      // Update container transform
      containerRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;

      // Update individual star positions and opacity
      starsRef.current.forEach((star, index) => {
        const starElement = containerRef.current?.querySelector(`[data-star-id="${star.id}"]`) as HTMLElement;
        if (!starElement) return;

        // Drift animation
        const driftOffsetX = Math.sin(time * 0.5 + index) * star.driftX * 5;
        const driftOffsetY = Math.cos(time * 0.5 + index) * star.driftY * 5;

        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.2 + 0.8;
        const opacity = star.opacity * twinkle;

        starElement.style.transform = `translate(${driftOffsetX}px, ${driftOffsetY}px)`;
        starElement.style.opacity = opacity.toString();
      });

      animationId = requestAnimationFrame(animate);
    };

    if (!prefersReducedMotion) {
      animate();
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {starsRef.current.map((star) => (
        <div
          key={star.id}
          data-star-id={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            willChange: 'transform, opacity',
            transform: 'translate(0, 0)',
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}
    </div>
  );
}

