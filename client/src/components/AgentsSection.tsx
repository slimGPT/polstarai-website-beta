import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Building2, Headphones, Mic, Brain, TrendingUp, Target } from 'lucide-react';
import ScrollSection from './ScrollSection';
import FloatingSparkles from './FloatingSparkles';

gsap.registerPlugin(ScrollTrigger);

export default function AgentsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = cardsRef.current.querySelectorAll('.agent-card');

    // Ensure cards are visible by default
    cards.forEach((card) => {
      gsap.set(card, { 
        opacity: 1, 
        y: 0,
        clearProps: 'all' // Clear any stuck animations
      });
    });

    if (prefersReducedMotion) return;

    // Kill any existing ScrollTriggers on these cards
    cards.forEach((card) => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === card || (card.contains && card.contains(trigger.trigger as Node))) {
          trigger.kill();
        }
      });
    });

    // Animate cards on scroll with proper stagger - use fromTo for better control
    cards.forEach((card, index) => {
      gsap.fromTo(card, {
        y: 80,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: index * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
          id: `agent-card-${index}`, // Unique ID for each trigger
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === cardsRef.current || 
            (cardsRef.current && cardsRef.current.contains(trigger.trigger as Node)) ||
            (trigger.vars && trigger.vars.id && trigger.vars.id.startsWith('agent-card-'))) {
          trigger.kill();
        }
      });
    };
  }, []);

  const agents = [
    {
      name: 'Samy-Bear',
      subtitle: 'The Curiosity Companion',
      description: 'For children aged 5–10. Encourages curiosity, emotional literacy, and joyful discovery.',
      icon: Heart,
      gradient: 'from-secondary/20 to-secondary/5',
      borderColor: 'border-secondary/30',
    },
    {
      name: 'Solaria',
      subtitle: 'Guest Relations Agent',
      description: 'For hotels & hospitality. Professional, multilingual, frictionless guest care.',
      icon: Building2,
      gradient: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/30',
    },
    {
      name: 'Maxence',
      subtitle: 'Customer Support Agent',
      description: 'For businesses. Fast, human-like support without the frustration.',
      icon: Headphones,
      gradient: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/30',
    },
  ];

  const sharedDNA = [
    { icon: Mic, label: 'Natural voice-first interaction' },
    { icon: Brain, label: 'Emotional intelligence' },
    { icon: TrendingUp, label: 'Adaptive behavior through human feedback' },
    { icon: Target, label: 'Ability to follow goals and deliver outcomes' },
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Warm background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute rounded-full blur-3xl opacity-12"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(230, 230, 250, 0.2) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-12"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(176, 224, 230, 0.2) 0%, transparent 70%)',
            bottom: '20%',
            right: '10%',
          }}
        />
      </div>

      <FloatingSparkles count={10} />

      <div className="container relative z-10">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Our Intelligent Agents
            </h2>
            <p className="text-lg md:text-xl text-white/80">
              PolstarAI builds <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">vertical ai agents</span> that understand, adapt and deliver measurable outcomes.
            </p>
          </div>
        </ScrollSection>

        {/* Agent Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 md:gap-10 mb-24">
          {agents.map((agent, index) => (
            <div
              key={index}
              className={`agent-card group glass-card rounded-[28px] p-10 glass-card-hover`}
              style={{
                background: index === 0 
                  ? 'linear-gradient(135deg, rgba(255, 192, 203, 0.15) 0%, rgba(255, 192, 203, 0.05) 100%)'
                  : index === 1
                  ? 'linear-gradient(135deg, rgba(176, 224, 230, 0.15) 0%, rgba(176, 224, 230, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(230, 230, 250, 0.15) 0%, rgba(230, 230, 250, 0.05) 100%)',
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform glass-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}>
                <agent.icon className="w-8 h-8 glow-icon" style={{
                  color: index === 0 ? 'rgba(255, 192, 203, 0.9)' : index === 1 ? 'rgba(176, 224, 230, 0.9)' : 'rgba(230, 230, 250, 0.9)',
                }} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white/95">{agent.name}</h3>
              <p className="text-sm font-semibold mb-6" style={{
                color: index === 0 ? 'rgba(255, 192, 203, 0.9)' : index === 1 ? 'rgba(176, 224, 230, 0.9)' : 'rgba(230, 230, 250, 0.9)',
              }}>{agent.subtitle}</p>
              <p className="text-white/85 leading-relaxed">{agent.description}</p>
            </div>
          ))}
        </div>

        {/* Shared DNA */}
        <ScrollSection animationType="slideUp" delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-white/95">
              Shared DNA across all Polstar agents:
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {sharedDNA.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 p-8 glass-card rounded-[24px] glass-card-hover warm-gradient-bg"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 glass-card" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}>
                    <item.icon className="w-6 h-6 glow-icon" style={{
                      color: 'rgba(59, 130, 246, 0.9)',
                    }} />
                  </div>
                  <p className="text-white/90 leading-relaxed pt-1.5 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
