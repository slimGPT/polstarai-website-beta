import ScrollSection from '@/components/ScrollSection';
import { Mic2, Shield, Languages, Smile, Cpu } from 'lucide-react';

const technologies = [
  {
    icon: Mic2,
    title: 'Child-tuned speech system',
    description: 'Voice recognition optimized for children\'s speech patterns',
  },
  {
    icon: Shield,
    title: 'Safety & grounding engine',
    description: 'Real-time content filtering and safety checks',
  },
  {
    icon: Languages,
    title: 'Age-adjusted language & interaction',
    description: 'Developmentally appropriate communication',
  },
  {
    icon: Smile,
    title: '3D avatar with non-emotional expression',
    description: 'Calm, supportive visual presence',
  },
  {
    icon: Cpu,
    title: 'PolstarAI unified intelligence layer',
    description: 'Advanced AI powering safe, engaging interactions',
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Advanced technology designed specifically for child safety and development
            </p>
          </div>
        </ScrollSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <ScrollSection key={index} animationType="slideUp" delay={0.1 * index}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full">
                  <div className="flex flex-col items-start gap-4 h-full">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-blue-500/20 border border-yellow-500/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {tech.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

