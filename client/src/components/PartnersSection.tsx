import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

const partners = [
  'SMU',
  'Level1',
  'La Médina Groupe',
  'Poulina Holdings',
  'Solaria',
  'Regency',
  'The Barn',
  'Taibah University',
];

export default function PartnersSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUpBlur', duration: 1.2 });
  const cardsRef = usePremiumScrollAnimation({ animation: 'scaleIn', stagger: 0.1, delay: 0.3, duration: 0.9 });
  const captionRef = usePremiumScrollAnimation({ animation: 'blurIn', delay: 0.7, duration: 1 });

  return (
    <section id="partners" className="relative py-6 lg:py-8 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <SubtleStarBackground density="medium" />
      <SectionConstellation sectionId="partners" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-6" />
          
          <h2 ref={titleRef} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-left mb-5 lg:mb-6">
            Partners & Affiliations
          </h2>
          
          <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-5 lg:mb-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 lg:p-6 text-center hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/15 flex items-center justify-center min-h-[80px]"
              >
                <div className="text-white/80 font-medium text-sm lg:text-base">
                  {partner}
                </div>
              </div>
            ))}
          </div>
          
          <p ref={captionRef} className="text-left text-white/60 text-sm lg:text-base max-w-2xl">
            We co-create and deploy AI agents with universities, hotels, and organizations across MENA and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}

