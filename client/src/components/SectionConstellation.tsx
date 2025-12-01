import { useEffect, useRef } from 'react';
import ConstellationNetwork from './ConstellationNetwork';
import { agentColors } from '@/constants/agentColors';

interface SectionConstellationProps {
  sectionId: string;
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

// Define constellation patterns per section - Polstar AI Palette
const sectionConfigs: Record<string, { color: string; density: 'low' | 'medium' | 'high' }> = {
  'hero': {
    color: '#3B82F6', // Polstar Blue
    density: 'high',
  },
  'who-we-are': {
    color: '#FF8C73', // Solaria coral (keeping agent-specific color)
    density: 'medium',
  },
  'why-we-shine': {
    color: '#4B82F2', // FinSight blue (keeping agent-specific color)
    density: 'low',
  },
  'ai-constellation': {
    color: '#06B6D4', // Polstar Cyan
    density: 'high',
  },
  'how-it-works': {
    color: '#3DD6A0', // Mahdi green (keeping agent-specific color)
    density: 'medium',
  },
  'why-polstar': {
    color: '#FACC15', // Polstar Yellow
    density: 'medium',
  },
  'partners': {
    color: '#06B6D4', // Polstar Cyan
    density: 'low',
  },
  'contact': {
    color: '#3B82F6', // Polstar Blue
    density: 'medium',
  },
};

export default function SectionConstellation({
  sectionId,
  density,
  className = '',
}: SectionConstellationProps) {
  const config = sectionConfigs[sectionId] || {
    color: '#ffffff',
    density: density || 'medium',
  };

  return (
    <ConstellationNetwork
      density={config.density}
      color={config.color}
      sectionId={sectionId}
      className={className}
    />
  );
}

