import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSection from './ScrollSection';

gsap.registerPlugin(ScrollTrigger);

export default function StyleSection() {
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iconsRef.current) return;

    const icons = iconsRef.current.querySelectorAll('.icon-item');

    gsap.from(icons, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: iconsRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <ScrollSection animationType="slideUp">
          <p className="text-center text-lg md:text-xl text-muted-foreground mb-12">
            Start with style. Not a blank canvas.
          </p>
        </ScrollSection>

        <div ref={iconsRef} className="flex justify-center items-center gap-6 md:gap-8">
          <div className="icon-item w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/30 p-4 flex items-center justify-center">
            <img src="/palette-icon.png" alt="Palette" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} loading="lazy" />
          </div>
          <div className="icon-item w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/20 p-4 flex items-center justify-center">
            <img src="/icon-wand.png" alt="Magic wand" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} loading="lazy" />
          </div>
          <div className="icon-item w-16 h-16 md:w-20 md:h-20 rounded-full bg-[oklch(0.80_0.10_150)]/30 p-4 flex items-center justify-center">
            <img src="/icon-colors.png" alt="Colors" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} loading="lazy" />
          </div>
          <div className="icon-item w-16 h-16 md:w-20 md:h-20 rounded-full bg-[oklch(0.70_0.18_240)]/30 p-4 flex items-center justify-center">
            <img src="/icon-flower.png" alt="Flower" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} loading="lazy" />
          </div>
          <div className="icon-item w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/20 p-4 flex items-center justify-center">
            <img src="/icon-smiley.png" alt="Smiley" className="w-full h-full object-contain" style={{ imageRendering: 'high-quality' }} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
