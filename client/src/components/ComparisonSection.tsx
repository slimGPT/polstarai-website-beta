import { useState, useRef, useEffect } from 'react';
import { Check, X, AlertCircle, Heart, Sparkles, Shield, Smartphone, Mic, Eye } from 'lucide-react';
import ScrollSection from './ScrollSection';
import FloatingSparkles from './FloatingSparkles';
import gsap from 'gsap';

interface FeatureData {
  name: string;
  description: string;
  icon: any;
  samyBear: 'full' | 'limited' | 'none';
  talkingTom: 'full' | 'limited' | 'none';
  buddyAI: 'full' | 'limited' | 'none';
  miko: 'full' | 'limited' | 'none';
}

export default function ComparisonSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandedRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features: FeatureData[] = [
    {
      name: 'Emotional Intelligence',
      description: 'Recognizes and responds to children\'s emotions with empathy, adjusting tone and suggestions based on emotional state.',
      icon: Heart,
      samyBear: 'full',
      talkingTom: 'none',
      buddyAI: 'none',
      miko: 'limited',
    },
    {
      name: 'Curiosity-Driven Learning',
      description: 'Tracks and nurtures each child\'s unique interests with a Curiosity Index, encouraging exploration and deep learning.',
      icon: Sparkles,
      samyBear: 'full',
      talkingTom: 'none',
      buddyAI: 'limited',
      miko: 'limited',
    },
    {
      name: 'Activity Suggestions',
      description: 'Provides personalized, age-appropriate activity recommendations that promote creativity and hands-on learning.',
      icon: Eye,
      samyBear: 'full',
      talkingTom: 'none',
      buddyAI: 'limited',
      miko: 'full',
    },
    {
      name: 'Privacy-by-Design',
      description: 'Built with privacy as the foundation - no data selling, minimal collection, and full parental control over information.',
      icon: Shield,
      samyBear: 'full',
      talkingTom: 'none',
      buddyAI: 'limited',
      miko: 'limited',
    },
    {
      name: 'No Hardware Required',
      description: 'Works on existing devices without expensive hardware purchases, making it accessible to more families.',
      icon: Smartphone,
      samyBear: 'full',
      talkingTom: 'full',
      buddyAI: 'full',
      miko: 'none',
    },
    {
      name: 'Voice-First Interaction',
      description: 'Natural conversation interface that feels like talking to a friend, not typing commands to a machine.',
      icon: Mic,
      samyBear: 'full',
      talkingTom: 'none',
      buddyAI: 'full',
      miko: 'full',
    },
    {
      name: 'Screen-Light, Purposeful',
      description: 'Minimizes screen time while maximizing learning, encouraging real-world exploration and imagination.',
      icon: Eye,
      samyBear: 'full',
      talkingTom: 'none',
      buddyAI: 'limited',
      miko: 'full',
    },
  ];

  useEffect(() => {
    if (expandedIndex !== null && expandedRefs.current[expandedIndex]) {
      const element = expandedRefs.current[expandedIndex];
      gsap.fromTo(
        element,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [expandedIndex]);

  const handleRowHover = (index: number) => {
    if (expandedIndex !== index) {
      setExpandedIndex(index);
    }
  };

  const handleRowLeave = () => {
    setExpandedIndex(null);
  };

  const getIcon = (status: string) => {
    switch (status) {
      case 'full':
        return <Check className="w-5 h-5 text-accent" />;
      case 'limited':
        return <AlertCircle className="w-5 h-5 text-secondary" />;
      case 'none':
        return <X className="w-5 h-5 text-muted-foreground/50" />;
      default:
        return null;
    }
  };

  const getLabel = (status: string) => {
    switch (status) {
      case 'full':
        return '✔';
      case 'limited':
        return '⚠️ Limited';
      case 'none':
        return '✘';
      default:
        return status;
    }
  };

  return (
    <section className="relative py-32 md:py-40 overflow-hidden warm-gradient-bg">
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
            background: 'radial-gradient(circle, rgba(255, 192, 203, 0.2) 0%, transparent 70%)',
            bottom: '20%',
            right: '10%',
          }}
        />
      </div>

      <FloatingSparkles count={10} />

      <div className="container relative z-10">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white/95">
              How Samy-Bear Compares
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-2">
              The new standard for emotionally intelligent learning companions.
            </p>
            <p className="text-sm text-white/70">
              Hover over any feature to learn more
            </p>
          </div>
        </ScrollSection>

        <ScrollSection animationType="scale" delay={0.2}>
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 mb-4 px-4">
                <div className="font-semibold text-foreground/80">Feature</div>
                <div className="font-bold text-primary text-center">Samy-Bear</div>
                <div className="text-muted-foreground text-center text-sm">
                  Talking Tom /
                  <br />
                  Entertainment Apps
                </div>
                <div className="text-muted-foreground text-center text-sm">
                  Buddy AI /
                  <br />
                  Edutainment
                </div>
                <div className="text-muted-foreground text-center text-sm">
                  Miko /
                  <br />
                  Hardware Robots
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleRowHover(index)}
                    onMouseLeave={handleRowLeave}
                  >
                    <div
                      className={`grid grid-cols-5 gap-4 p-6 glass-card rounded-[24px] glass-card-hover cursor-pointer ${
                        expandedIndex === index
                          ? 'border-white/40'
                          : ''
                      }`}
                      style={{
                        background: expandedIndex === index
                          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)'
                          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <feature.icon className="w-5 h-5 glow-icon flex-shrink-0" style={{
                          color: 'rgba(59, 130, 246, 0.9)',
                        }} />
                        <span className="text-white/95 font-semibold">{feature.name}</span>
                      </div>
                      <div className="flex justify-center items-center">
                        {getIcon(feature.samyBear)}
                      </div>
                      <div className="flex justify-center items-center text-sm">
                        {getLabel(feature.talkingTom)}
                      </div>
                      <div className="flex justify-center items-center text-sm">
                        {getLabel(feature.buddyAI)}
                      </div>
                      <div className="flex justify-center items-center text-sm">
                        {getLabel(feature.miko)}
                      </div>
                    </div>

                    {/* Expanded Description */}
                    {expandedIndex === index && (
                      <div
                        ref={(el) => { expandedRefs.current[index] = el; }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 p-8 glass-card rounded-[24px] warm-gradient-lavender">
                          <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 glass-card" style={{
                              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                              border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}>
                              <feature.icon className="w-6 h-6 glow-icon" style={{
                                color: 'rgba(59, 130, 246, 0.9)',
                              }} />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white/95 mb-3">
                                {feature.name}
                              </h4>
                              <p className="text-white/85 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
