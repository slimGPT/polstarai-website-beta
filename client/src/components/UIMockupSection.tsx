import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Sparkles, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function UIMockupSection() {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mockupRef.current) return;

    gsap.from(mockupRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: mockupRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section className="py-32 bg-muted/10">
      <div className="container">
        <div
          ref={mockupRef}
          className="max-w-5xl mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden border border-border"
        >
          {/* UI Mockup */}
          <div className="grid md:grid-cols-[240px_1fr_1fr] h-[500px]">
            {/* Sidebar */}
            <div className="bg-muted/50 p-6 border-r border-border hidden md:block">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="w-8 h-8 bg-accent rounded-lg"></div>
              </div>
              <button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground rounded-xl py-3 px-4 text-sm font-semibold mb-6 transition-colors">
                Create
              </button>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 bg-muted rounded-lg"></div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="p-8 bg-background">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">New wish</span>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-lg hover:bg-muted transition-colors flex items-center justify-center">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <div className="w-6 h-6 rounded-full bg-accent/50"></div>
                  <div className="flex-1 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm">
                    Generating...
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted/30 rounded-xl">
                  <div className="h-3 bg-muted rounded w-full mb-2"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="bg-muted/30 p-8 border-l border-border hidden md:block">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-accent rounded"></div>
                  <div className="w-8 h-8 bg-muted rounded"></div>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
