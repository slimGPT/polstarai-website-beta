import { useEffect, useRef, useState } from 'react';
import { agentColors, AgentName } from '@/constants/agentColors';

interface OrbitSphereProps {
  agentName: AgentName;
  previousAgentName?: AgentName;
}

// Helper to convert hex to RGB
function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0];
}

// Helper to convert RGB to rgba string
function rgbToRgba(rgb: [number, number, number], alpha: number): string {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}

export default function OrbitSphere({ agentName, previousAgentName }: OrbitSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = agentColors[agentName];
  const [color1, color2, color3] = colors;
  
  // Get previous colors for crossfade
  const prevColors = previousAgentName ? agentColors[previousAgentName] : colors;
  const [prevColor1, prevColor2, prevColor3] = prevColors;
  
  // Track crossfade progress
  const [crossfadeProgress, setCrossfadeProgress] = useState(1);
  
  useEffect(() => {
    // Reset crossfade when agent changes
    setCrossfadeProgress(0);
    const fadeDuration = 800; // 700-900ms as requested
    const startTime = Date.now();
    
    const fadeInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / fadeDuration, 1);
      setCrossfadeProgress(progress);
      
      if (progress >= 1) {
        clearInterval(fadeInterval);
      }
    }, 16);
    
    return () => clearInterval(fadeInterval);
  }, [agentName]);

  // Update CSS variables for smooth color transitions
  useEffect(() => {
    if (!containerRef.current) return;

    // Interpolate colors for crossfade
    const interpolateColor = (prev: [number, number, number], curr: [number, number, number], t: number): [number, number, number] => {
      return [
        Math.round(prev[0] + (curr[0] - prev[0]) * t),
        Math.round(prev[1] + (curr[1] - prev[1]) * t),
        Math.round(prev[2] + (curr[2] - prev[2]) * t),
      ];
    };
    
    const prevRgb1 = hexToRgb(prevColor1);
    const prevRgb2 = hexToRgb(prevColor2);
    const prevRgb3 = hexToRgb(prevColor3);
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const rgb3 = hexToRgb(color3);
    
    const fadeRgb1 = interpolateColor(prevRgb1, rgb1, crossfadeProgress);
    const fadeRgb2 = interpolateColor(prevRgb2, rgb2, crossfadeProgress);
    const fadeRgb3 = interpolateColor(prevRgb3, rgb3, crossfadeProgress);

    // Set CSS variables
    containerRef.current.style.setProperty('--orb-start', `rgb(${fadeRgb1[0]}, ${fadeRgb1[1]}, ${fadeRgb1[2]})`);
    containerRef.current.style.setProperty('--orb-end', `rgb(${fadeRgb2[0]}, ${fadeRgb2[1]}, ${fadeRgb2[2]})`);
    containerRef.current.style.setProperty('--orb-glow', `rgb(${fadeRgb3[0]}, ${fadeRgb3[1]}, ${fadeRgb3[2]})`);
  }, [color1, color2, color3, prevColor1, prevColor2, prevColor3, crossfadeProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size (responsive) - smaller for better fit
    const getSize = () => {
      if (window.innerWidth < 640) return 200;
      if (window.innerWidth < 1024) return 280;
      return 320;
    };

    const updateCanvasSize = () => {
      const currentSize = getSize();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = currentSize * dpr;
      canvas.height = currentSize * dpr;
      canvas.style.width = `${currentSize}px`;
      canvas.style.height = `${currentSize}px`;
      ctx.scale(dpr, dpr);
      return currentSize;
    };

    let size = updateCanvasSize();
    window.addEventListener('resize', () => {
      size = updateCanvasSize();
    });

    // Get colors from CSS variables
    const getColorFromVar = (varName: string): [number, number, number] => {
      if (!containerRef.current) return [0, 0, 0];
      const color = getComputedStyle(containerRef.current).getPropertyValue(varName).trim();
      if (color.startsWith('rgb')) {
        const matches = color.match(/\d+/g);
        if (matches && matches.length >= 3) {
          return [parseInt(matches[0]), parseInt(matches[1]), parseInt(matches[2])];
        }
      }
      return hexToRgb(color1); // Fallback
    };

    let animationFrameId: number;
    let rotation = 0;
    let breathingPhase = 0;

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, size, size);

      // Center point
      const centerX = size / 2;
      const centerY = size / 2;
      const baseRadius = size * 0.3; // Proportional radius

      // Slow breathing animation (15-20s cycle)
      breathingPhase += 0.002;
      const breathScale = 1 + Math.sin(breathingPhase) * 0.03; // Subtle breathing
      const radius = baseRadius * breathScale;

      // Slow rotation (15-20s for full rotation)
      rotation += 0.003;

      // Get colors from CSS variables
      const fadeRgb1 = getColorFromVar('--orb-start');
      const fadeRgb2 = getColorFromVar('--orb-end');
      const fadeRgb3 = getColorFromVar('--orb-glow');

      // Draw outer glow (breathing with the orb)
      const glowIntensity = 0.4 + Math.sin(breathingPhase) * 0.1;
      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.7,
        centerX,
        centerY,
        radius * 2.2
      );
      glowGradient.addColorStop(0, rgbToRgba(fadeRgb1, glowIntensity * 0.6));
      glowGradient.addColorStop(0.4, rgbToRgba(fadeRgb1, glowIntensity * 0.4));
      glowGradient.addColorStop(0.7, rgbToRgba(fadeRgb1, glowIntensity * 0.1));
      glowGradient.addColorStop(1, rgbToRgba(fadeRgb1, 0));

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
      
      // Simple gradient using agent colors from CSS variables
      baseGradient.addColorStop(0, `rgb(${fadeRgb1[0]}, ${fadeRgb1[1]}, ${fadeRgb1[2]})`);
      baseGradient.addColorStop(0.2, `rgb(${fadeRgb2[0]}, ${fadeRgb2[1]}, ${fadeRgb2[2]})`);
      baseGradient.addColorStop(0.5, `rgb(${fadeRgb3[0]}, ${fadeRgb3[1]}, ${fadeRgb3[2]})`);
      baseGradient.addColorStop(0.8, `rgb(${Math.round(fadeRgb2[0] * 0.8)}, ${Math.round(fadeRgb2[1] * 0.8)}, ${Math.round(fadeRgb2[2] * 0.8)})`);
      baseGradient.addColorStop(1, `rgb(${Math.round(fadeRgb3[0] * 0.5)}, ${Math.round(fadeRgb3[1] * 0.5)}, ${Math.round(fadeRgb3[2] * 0.5)})`);

      // Draw base sphere
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = baseGradient;
      ctx.fill();

      // Calculate rotating highlight positions (slow rotation)
      const highlightAngle1 = rotation;
      const highlightAngle2 = rotation + Math.PI * 0.85;
      const highlightAngle3 = rotation + Math.PI * 1.5;

      ctx.globalCompositeOperation = 'screen';

      // First rotating highlight
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
      highlight1Gradient.addColorStop(0, rgbToRgba(fadeRgb1, 0.8));
      highlight1Gradient.addColorStop(0.2, rgbToRgba(fadeRgb1, 0.5));
      highlight1Gradient.addColorStop(0.4, rgbToRgba(fadeRgb1, 0.25));
      highlight1Gradient.addColorStop(0.7, rgbToRgba(fadeRgb1, 0.05));
      highlight1Gradient.addColorStop(1, rgbToRgba(fadeRgb1, 0));

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = highlight1Gradient;
      ctx.fill();

      // Second rotating highlight
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
      highlight2Gradient.addColorStop(0, rgbToRgba(fadeRgb2, 0.7));
      highlight2Gradient.addColorStop(0.2, rgbToRgba(fadeRgb2, 0.45));
      highlight2Gradient.addColorStop(0.4, rgbToRgba(fadeRgb2, 0.2));
      highlight2Gradient.addColorStop(0.7, rgbToRgba(fadeRgb2, 0.05));
      highlight2Gradient.addColorStop(1, rgbToRgba(fadeRgb2, 0));

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = highlight2Gradient;
      ctx.fill();

      // Third rotating highlight
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
      highlight3Gradient.addColorStop(0, rgbToRgba(fadeRgb3, 0.5));
      highlight3Gradient.addColorStop(0.3, rgbToRgba(fadeRgb3, 0.25));
      highlight3Gradient.addColorStop(0.6, rgbToRgba(fadeRgb3, 0.1));
      highlight3Gradient.addColorStop(1, rgbToRgba(fadeRgb3, 0));

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = highlight3Gradient;
      ctx.fill();

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color1, color2, color3, crossfadeProgress]);

  return (
    <div ref={containerRef} className="flex items-center justify-center orb-container">
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto w-[320px] h-[320px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]"
        style={{
          animation: 'orbHueRotate 18s linear infinite', // Slow 15-20s hue rotation
        }}
      />
    </div>
  );
}
