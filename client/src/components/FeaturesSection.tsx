import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Folder, Users, Sparkles } from 'lucide-react';
import ScrollSection from './ScrollSection';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.feature-card');

    gsap.from(cards, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section id="how" className="py-32 bg-muted/10">
      <div className="container">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">There's more</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to bring your visuals full-circle.
            </p>
          </div>
        </ScrollSection>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Collections Feature */}
          <div className="feature-card group">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl h-full">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Folder className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Create collections
                <br />
                on the fly
              </h3>
              <p className="text-muted-foreground mb-4">...and share with your team</p>
              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <div className="text-sm font-medium mb-2">Website Assets</div>
                <div className="text-2xl font-bold text-accent">32 images</div>
              </div>
            </div>
          </div>

          {/* Collaboration Feature */}
          <div className="feature-card group">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl h-full">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Collaborate with
                <br />
                team members
              </h3>
              <p className="text-muted-foreground mb-4">Share feedback with members in real-time</p>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-secondary border-2 border-card"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-semibold">
                    +4
                  </div>
                </div>
                <span className="text-sm text-muted-foreground ml-2">Invited</span>
              </div>
            </div>
          </div>

          {/* Prompt Enhancement Feature */}
          <div className="feature-card group">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-[oklch(0.70_0.18_240)]/50 transition-all duration-300 hover:shadow-xl h-full">
              <div className="w-12 h-12 bg-[oklch(0.70_0.18_240)]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-[oklch(0.70_0.18_240)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Enhance prompts for
                <br />
                even better results
              </h3>
              <p className="text-muted-foreground mb-4">
                Rich details for sharper, more precise prompts
              </p>
              <div className="mt-6 space-y-3">
                <div className="p-3 bg-muted/30 rounded-lg text-sm">
                  A coin floating around bank notes
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-accent"></div>
                </div>
                <div className="p-3 bg-accent/10 border border-accent/30 rounded-lg text-sm">
                  A golden coin floating at a 90° perspective around green American-like bank notes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
