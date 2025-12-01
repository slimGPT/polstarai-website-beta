import ScrollSection from '@/components/ScrollSection';
import SubtleStarBackground from '@/components/SubtleStarBackground';
import SectionConstellation from '@/components/SectionConstellation';
import { Button } from '@/components/ui/button';

export default function SamyBearConstellationSection() {
  return (
    <section id="ai-constellation" className="relative py-20 md:py-32 overflow-hidden">
      <SubtleStarBackground density="high" />
      <SectionConstellation sectionId="ai-constellation" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollSection animationType="slideUp">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                AI Constellation
              </h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Our Flagship: SamyBear
                </h3>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                  Designed for ages 4–10, shaped by UNICEF's vision, SamyBear is built to be the safest AI for children.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full transition-all shadow-lg hover:shadow-xl"
                    onClick={() => {
                      const element = document.getElementById('unicef-pillars');
                      if (element) {
                        const headerHeight = 96;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - headerHeight;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                  >
                    Learn More About SamyBear
                  </Button>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
}

