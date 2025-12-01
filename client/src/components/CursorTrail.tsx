import { useEffect, useRef, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  size: number;
}

export default function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const points: TrailPoint[] = [];
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Add new point to trail
      points.push({
        x: mouseX,
        y: mouseY,
        opacity: 1,
        size: 4,
      });

      // Keep only last 8 points
      if (points.length > 8) {
        points.shift();
      }

      // Fade out older points
      points.forEach((point, index) => {
        const age = points.length - index;
        point.opacity = Math.max(0, 1 - age * 0.15);
        point.size = Math.max(2, 4 - age * 0.3);
      });

      setTrail([...points]);
    };

    const animate = () => {
      // Gradually fade out all points
      setTrail((prevTrail) => {
        return prevTrail
          .map((point) => ({
            ...point,
            opacity: Math.max(0, point.opacity - 0.1),
          }))
          .filter((point) => point.opacity > 0.05);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    >
      {trail.map((point, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${point.size}px`,
            height: `${point.size}px`,
            transform: 'translate(-50%, -50%)',
            opacity: point.opacity,
            boxShadow: `0 0 ${point.size * 2}px rgba(255, 255, 255, 0.6)`,
            transition: 'opacity 0.1s ease-out',
          }}
        />
      ))}
    </div>
  );
}

