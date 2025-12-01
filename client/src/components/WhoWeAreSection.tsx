import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';
import { Sparkles, Rocket, Heart } from 'lucide-react';

export default function WhoWeAreSection() {
  const contentRef = usePremiumScrollAnimation({ animation: 'fadeUpBlur', delay: 0.2, duration: 1.2 });
  const philosophyRef = usePremiumScrollAnimation({ animation: 'scaleIn', delay: 0.5, duration: 1 });

  return (
    <section id="who-we-are" className="relative py-6 lg:py-8 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <SubtleStarBackground density="low" />
      <SectionConstellation sectionId="who-we-are" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionSeparator variant="gradient" className="mb-6" />
        
        <div ref={contentRef} className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 lg:mb-6 text-left">Who We Are</h2>
          
          {/* Visual tiles with icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">AI-Native Approach</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Built for teams that are AI-native, not just AI-curious. Systems that understand context and create real impact.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Real-World Impact</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Reshaping how people work, serve, and learn across hospitality, finance, and education.
              </p>
            </div>

            <div ref={philosophyRef} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-xs font-medium text-blue-400 mb-2 uppercase tracking-wider">Our Philosophy</p>
              <p className="text-base font-semibold text-white italic leading-relaxed">
                AI should feel natural, be context-aware, and create measurable value.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 lg:p-6 mt-4">
            <p className="text-base text-white/90 leading-relaxed text-center md:text-left">
              PolstarAI exists to help forward-thinking teams turn AI from an abstract idea into a practical advantage, one intelligent agent at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

