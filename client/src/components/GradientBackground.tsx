import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GradientBackground() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate gradient blobs with gentle floating motion
    if (blob1Ref.current) {
      gsap.to(blob1Ref.current, {
        x: 50,
        y: 30,
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    if (blob2Ref.current) {
      gsap.to(blob2Ref.current, {
        x: -40,
        y: -20,
        scale: 0.9,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    if (blob3Ref.current) {
      gsap.to(blob3Ref.current, {
        x: 30,
        y: -40,
        scale: 1.05,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Gradient Blobs */}
      <div
        ref={blob1Ref}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, oklch(0.70 0.12 200) 0%, transparent 70%)',
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, oklch(0.65 0.10 220) 0%, transparent 70%)',
        }}
      />
      <div
        ref={blob3Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, oklch(0.75 0.08 190) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
