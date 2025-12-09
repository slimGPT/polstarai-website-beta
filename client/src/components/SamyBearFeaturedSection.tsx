import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import ScrollSection from './ScrollSection';

export default function SamyBearFeaturedSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });

  return (
    <section id="samybear" className="relative py-20 lg:py-24 bg-black overflow-hidden">
      <SubtleStarBackground density="medium" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-12 lg:mb-16" />
          
          <div ref={titleRef} className="mb-12 lg:mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
              Meet SamyBear
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 italic max-w-4xl mx-auto leading-relaxed mb-8">
              The most complete child-centred companion built for ages 4 to 10
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Column - Text Content */}
            <ScrollSection animationType="slideRight" delay={0.2}>
              <div className="w-full md:flex-1 flex flex-col justify-center text-center md:text-left">
                <div className="space-y-6 text-lg sm:text-xl text-white/90 leading-relaxed">
                  <p>
                    Shaped by <span className="text-cyan-400 font-semibold underline" style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4)' }}>UNICEF</span>'s vision and powered by PolstarAI's unified intelligence layer, SamyBear is an interactive 3D companion that gives children a safe space to explore, learn, and build healthy habits.
                  </p>
                  <p>
                    Parents stay fully involved through simple routines, clear visibility, and shared moments that keep learning connected to real family life.
                  </p>
                </div>
              </div>
            </ScrollSection>
            
            {/* Right Column - Avatar Image */}
            <ScrollSection animationType="slideLeft" delay={0.4}>
              <div className="w-full md:flex-1 flex items-center justify-center md:justify-end">
                <div className="relative" style={{ maxWidth: '500px' }}>
                  <img 
                    src="/images/agents/Samybearavatar nobackground.png" 
                    alt="SamyBear Avatar" 
                    className="w-full h-auto object-contain drop-shadow-2xl animate-float"
                    style={{
                      filter: 'drop-shadow(0 20px 60px rgba(59, 130, 246, 0.4))',
                      imageRendering: 'high-quality',
                    }}
                    loading="eager"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (img.src !== '/samy-bear.png') {
                        img.src = '/samy-bear.png';
                      } else {
                        img.style.display = 'none';
                      }
                    }}
                  />
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 -z-10 blur-3xl opacity-20"
                    style={{
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
                    }}
                  />
                </div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

