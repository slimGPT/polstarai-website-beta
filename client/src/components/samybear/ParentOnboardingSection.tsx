import ScrollSection from '@/components/ScrollSection';
import { UserPlus, Users, Lightbulb, BarChart } from 'lucide-react';

const onboardingSteps = [
  {
    icon: UserPlus,
    title: 'Setup Wizard',
    description: 'Parents share child\'s age, interests, and routines',
    example: 'Quick 5-minute setup: "Leila is 6, loves animals, and we read together at 7 PM"',
  },
  {
    icon: Users,
    title: 'First Joint Session',
    description: 'Parent + child meet SamyBear together',
    example: 'SamyBear introduces itself: "Hi! I\'m SamyBear. Let\'s explore together with your mom!"',
  },
  {
    icon: Lightbulb,
    title: 'Daily Tips (Week 1)',
    description: 'Parents receive advice to boost engagement',
    example: 'Tip: "Try asking Leila about her favorite part of today\'s story during dinner"',
  },
  {
    icon: BarChart,
    title: 'Weekly Insights',
    description: 'Progress reports, strengths, and recommendations',
    example: 'Weekly report: "Leila showed great curiosity about space this week. Consider exploring planets together!"',
  },
];

export default function ParentOnboardingSection() {
  return (
    <section id="parent-onboarding" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Parent Onboarding Experience
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-2">
              Designed so parents feel like co-teachers, not replaced
            </p>
            <p className="text-base text-white/60 max-w-2xl mx-auto italic">
              "Parents should feel like co-teachers, not replaced."
            </p>
          </div>
        </ScrollSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {onboardingSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollSection key={index} animationType="slideUp" delay={0.1 * index}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                    <p className="text-sm md:text-base text-cyan-200 italic">
                      {step.example}
                    </p>
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

