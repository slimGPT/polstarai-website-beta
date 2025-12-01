import ScrollSection from '@/components/ScrollSection';
import { Sparkles, Mic, BookOpen, Brain, Users } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice-first 3D AI companion',
    description: 'For children aged 4–10',
  },
  {
    icon: Sparkles,
    title: 'Proactive engagement',
    description: 'Greetings, routines, reminders',
  },
  {
    icon: BookOpen,
    title: 'Structured Socratic teaching',
    description: 'Methodical learning approach',
  },
  {
    icon: Brain,
    title: 'Responsible learning',
    description: 'Learns preferences with contextual memory',
  },
  {
    icon: Users,
    title: 'Promotes offline activities',
    description: 'Encourages shared parent-child play',
  },
];

export default function WhatIsSamyBearSection() {
  return (
    <section id="what-is-samybear" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What SamyBear Is
            </h2>
          </div>
        </ScrollSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollSection key={index} animationType="slideUp" delay={0.1 * index}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {feature.description}
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

