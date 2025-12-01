import { ReactNode } from 'react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';

interface PremiumSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'slideUp' | 'scaleIn' | 'blurIn' | 'fadeUpBlur';
  delay?: number;
  duration?: number;
  stagger?: number;
}

export default function PremiumSection({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 1.2,
  stagger = 0,
}: PremiumSectionProps) {
  const ref = usePremiumScrollAnimation({
    animation,
    delay,
    duration,
    stagger,
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

