import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Shield } from 'lucide-react';
import ScrollSection from './ScrollSection';
import FloatingSparkles from './FloatingSparkles';

export default function SamyBearSection() {
  const helps = [
    'explore topics they care about',
    'ask deeper questions',
    'reflect on what they learn',
    'understand emotions',
    'build curiosity as a habit',
  ];

  const innovations = [
    {
      number: '1',
      title: 'The Curiosity Index',
      description:
        'Our proprietary metric that measures engagement quality — not scores or performance. It adapts dialogue, difficulty, and follow-ups in real time.',
      icon: Sparkles,
      gradient: 'from-accent/20 to-accent/5',
    },
    {
      number: '2',
      title: 'Emotion-Conditioned AI',
      description:
        "Samy's tone, facial animation, and pacing shift based on the child's voice.",
      icon: Heart,
      gradient: 'from-secondary/20 to-secondary/5',
    },
    {
      number: '3',
      title: 'Privacy-By-Design',
      description: 'COPPA & GDPR-K compliant from day one. Parents stay in full control.',
      icon: Shield,
      gradient: 'from-primary/20 to-primary/5',
    },
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden warm-gradient-bg">
      {/* Warm background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute rounded-full blur-3xl opacity-12"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255, 192, 203, 0.2) 0%, transparent 70%)',
            top: '10%',
            right: '10%',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-12"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(230, 230, 250, 0.2) 0%, transparent 70%)',
            bottom: '20%',
            left: '10%',
          }}
        />
      </div>

      <FloatingSparkles count={12} />

      <div className="container relative z-10">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-white/95">
              A companion that understands children.
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Samy-Bear helps kids:
            </p>
          </div>
        </ScrollSection>

        <ScrollSection animationType="scale" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-5 mb-24 max-w-3xl mx-auto">
            {helps.map((help, index) => (
              <div
                key={index}
                className="px-8 py-4 glass-card rounded-full glass-card-hover warm-gradient-lavender"
              >
                <span className="text-base md:text-lg text-white/90 font-medium">{help}</span>
              </div>
            ))}
          </div>
        </ScrollSection>

        <ScrollSection animationType="slideUp" delay={0.3}>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-16 text-white/95">
            Powered by three breakthrough innovations:
          </h3>
        </ScrollSection>

        <div className="space-y-6 max-w-4xl mx-auto mb-16">
          {innovations.map((innovation, index) => (
            <ScrollSection key={index} animationType="slideUp" delay={0.1 * index}>
              <div
                className={`p-10 glass-card rounded-[28px] glass-card-hover`}
                style={{
                  background: index === 0 
                    ? 'linear-gradient(135deg, rgba(176, 224, 230, 0.15) 0%, rgba(176, 224, 230, 0.05) 100%)'
                    : index === 1
                    ? 'linear-gradient(135deg, rgba(255, 192, 203, 0.15) 0%, rgba(255, 192, 203, 0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(230, 230, 250, 0.15) 0%, rgba(230, 230, 250, 0.05) 100%)',
                }}
              >
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 glass-card" style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}>
                      <innovation.icon className="w-7 h-7 glow-icon" style={{
                        color: index === 0 ? 'rgba(176, 224, 230, 0.9)' : index === 1 ? 'rgba(255, 192, 203, 0.9)' : 'rgba(230, 230, 250, 0.9)',
                      }} />
                    </div>
                    <div className="text-4xl font-semibold text-white/30">{innovation.number}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-semibold mb-4 text-white/95">{innovation.title}</h4>
                    <p className="text-white/85 leading-relaxed">{innovation.description}</p>
                  </div>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>

        <ScrollSection animationType="slideUp" delay={0.5}>
          <div className="text-center">
            <Button
              size="lg"
              className="glass-card rounded-[30px] px-10 py-6 text-base font-semibold bg-gradient-to-r from-blue-400/80 via-cyan-400/80 to-blue-400/80 hover:from-blue-400 hover:via-cyan-400 hover:to-blue-400 transition-all glass-card-hover border-2 border-white/30"
              style={{
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3), 0 0 60px rgba(6, 182, 212, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              }}
            >
              <span className="text-white">See how Samy-Bear works</span>
            </Button>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
