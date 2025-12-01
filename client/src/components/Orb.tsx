import { useEffect, useRef, useState } from 'react';
import { agentColors, AgentName } from '@/constants/agentColors';
import './styles/orb.css';

interface OrbProps {
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

export default function Orb({ agentName, previousAgentName }: OrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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
    const fadeDuration = 600; // 0.6s as requested
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
    const interpolateColor = (
      prev: [number, number, number],
      curr: [number, number, number],
      t: number
    ): [number, number, number] => {
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

    // Set CSS variables for gradients
    containerRef.current.style.setProperty(
      '--orb-color-1',
      `rgb(${fadeRgb1[0]}, ${fadeRgb1[1]}, ${fadeRgb1[2]})`
    );
    containerRef.current.style.setProperty(
      '--orb-color-2',
      `rgb(${fadeRgb2[0]}, ${fadeRgb2[1]}, ${fadeRgb2[2]})`
    );
    containerRef.current.style.setProperty(
      '--orb-color-3',
      `rgb(${fadeRgb3[0]}, ${fadeRgb3[1]}, ${fadeRgb3[2]})`
    );
  }, [color1, color2, color3, prevColor1, prevColor2, prevColor3, crossfadeProgress]);

  return (
    <div ref={containerRef} className="orb-wrapper">
      <div className="orb">
        {/* Outer glow layer */}
        <div className="orb-glow" />
        {/* Main sphere with gradient */}
        <div className="orb-sphere">
          {/* Inner highlight that moves */}
          <div className="orb-highlight orb-highlight-1" />
          <div className="orb-highlight orb-highlight-2" />
        </div>
      </div>
    </div>
  );
}

