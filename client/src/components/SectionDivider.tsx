interface SectionDividerProps {
  variant?: 'gradient' | 'line';
  className?: string;
}

export default function SectionDivider({ variant = 'gradient', className = '' }: SectionDividerProps) {
  if (variant === 'line') {
    return (
      <div className={`h-px bg-gradient-to-r from-transparent via-white/10 to-transparent ${className}`} />
    );
  }

  // Default gradient variant - subtle top-to-bottom gradient
  return (
    <div className={`relative h-px ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

