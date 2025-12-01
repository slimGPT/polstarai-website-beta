import { useEffect, useRef } from 'react';

export default function OrbitSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const size = 400;
    canvas.width = size;
    canvas.height = size;

    let animationFrameId: number;
    let rotation = 0;

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, size, size);

      // Center point
      const centerX = size / 2;
      const centerY = size / 2;
      const radius = 120;

      // Increment rotation (slower for smoother effect)
      rotation += 0.008;

      // Draw outer glow (larger and more prominent)
      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.7,
        centerX,
        centerY,
        radius * 2.2
      );
      glowGradient.addColorStop(0, 'rgba(100, 150, 255, 0.4)');
      glowGradient.addColorStop(0.4, 'rgba(100, 150, 255, 0.2)');
      glowGradient.addColorStop(0.7, 'rgba(100, 150, 255, 0.05)');
      glowGradient.addColorStop(1, 'rgba(100, 150, 255, 0)');

      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, size, size);

      // Create base gradient for the sphere
      const baseGradient = ctx.createRadialGradient(
        centerX - 40,
        centerY - 40,
        0,
        centerX,
        centerY,
        radius
      );
      
      // Base blue gradient with more depth
      baseGradient.addColorStop(0, '#b8d4ff');
      baseGradient.addColorStop(0.2, '#7ba7ff');
      baseGradient.addColorStop(0.5, '#5686f5');
      baseGradient.addColorStop(0.8, '#3d5fce');
      baseGradient.addColorStop(1, '#2a4494');

      // Draw base sphere
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = baseGradient;
      ctx.fill();

      // Calculate rotating highlight positions
      const highlightAngle1 = rotation;
      const highlightAngle2 = rotation + Math.PI * 0.85;
      const highlightAngle3 = rotation + Math.PI * 1.5;

      ctx.globalCompositeOperation = 'screen';

      // First rotating highlight (pink/magenta) - more prominent
      const highlight1X = centerX + Math.cos(highlightAngle1) * radius * 0.55;
      const highlight1Y = centerY + Math.sin(highlightAngle1) * radius * 0.55;

      const highlight1Gradient = ctx.createRadialGradient(
        highlight1X,
        highlight1Y,
        0,
        highlight1X,
        highlight1Y,
        radius * 1.1
      );
      highlight1Gradient.addColorStop(0, 'rgba(255, 140, 200, 0.8)');
      highlight1Gradient.addColorStop(0.2, 'rgba(255, 120, 190, 0.5)');
      highlight1Gradient.addColorStop(0.4, 'rgba(255, 100, 180, 0.25)');
      highlight1Gradient.addColorStop(0.7, 'rgba(255, 100, 180, 0.05)');
      highlight1Gradient.addColorStop(1, 'rgba(255, 100, 180, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = highlight1Gradient;
      ctx.fill();

      // Second rotating highlight (cyan/teal)
      const highlight2X = centerX + Math.cos(highlightAngle2) * radius * 0.45;
      const highlight2Y = centerY + Math.sin(highlightAngle2) * radius * 0.45;

      const highlight2Gradient = ctx.createRadialGradient(
        highlight2X,
        highlight2Y,
        0,
        highlight2X,
        highlight2Y,
        radius * 0.95
      );
      highlight2Gradient.addColorStop(0, 'rgba(120, 230, 255, 0.7)');
      highlight2Gradient.addColorStop(0.2, 'rgba(100, 220, 255, 0.45)');
      highlight2Gradient.addColorStop(0.4, 'rgba(100, 210, 255, 0.2)');
      highlight2Gradient.addColorStop(0.7, 'rgba(100, 200, 255, 0.05)');
      highlight2Gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = highlight2Gradient;
      ctx.fill();

      // Third rotating highlight (subtle purple/lavender)
      const highlight3X = centerX + Math.cos(highlightAngle3) * radius * 0.35;
      const highlight3Y = centerY + Math.sin(highlightAngle3) * radius * 0.35;

      const highlight3Gradient = ctx.createRadialGradient(
        highlight3X,
        highlight3Y,
        0,
        highlight3X,
        highlight3Y,
        radius * 0.8
      );
      highlight3Gradient.addColorStop(0, 'rgba(200, 160, 255, 0.5)');
      highlight3Gradient.addColorStop(0.3, 'rgba(180, 150, 255, 0.25)');
      highlight3Gradient.addColorStop(0.6, 'rgba(170, 140, 255, 0.1)');
      highlight3Gradient.addColorStop(1, 'rgba(160, 130, 255, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = highlight3Gradient;
      ctx.fill();

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto"
        style={{ width: '400px', height: '400px' }}
      />
    </div>
  );
}
