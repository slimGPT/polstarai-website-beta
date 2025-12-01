import { useEffect, useRef } from 'react';

interface SubtleStarBackgroundProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function SubtleStarBackground({ density = 'medium', className = '' }: SubtleStarBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const starCounts = {
    low: 15,
    medium: 25,
    high: 40,
  };

  const stars = Array.from({ length: starCounts[density] }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.3 + 0.1,
    delay: Math.random() * 3,
  }));

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: 'pulse 3s ease-in-out infinite',
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

