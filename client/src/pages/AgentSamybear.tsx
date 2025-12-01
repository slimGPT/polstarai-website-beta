import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SamyBearHeader from '@/components/samybear/SamyBearHeader';
import Footer from '@/components/Footer';
import SpaceBackground from '@/components/SpaceBackground';
import ScrollStars from '@/components/ScrollStars';
import CursorTrail from '@/components/CursorTrail';
import SubtleStarBackground from '@/components/SubtleStarBackground';
import UNICEFPillarsSection from '@/components/samybear/UNICEFPillarsSection';
import FeaturesSection from '@/components/samybear/FeaturesSection';
import ParentHubSection from '@/components/samybear/ParentHubSection';
import ScrollSection from '@/components/ScrollSection';

export default function AgentSamybear() {
  useEffect(() => {
    // Ensure ScrollTrigger refreshes after all components mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Animated space background with stars, shooting stars, and nebula clouds */}
      <SpaceBackground />
      
      {/* Scroll-based star movement */}
      <ScrollStars />
      
      {/* Cursor trail effect */}
      <CursorTrail />
      
      <SamyBearHeader />
      
      <main className="relative z-10">
        {/* Hero Section - Title, Tagline, Description with Avatar */}
        <section id="why-samybear" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 samybear-hero-container">
                {/* Left Column - Text Content */}
                <ScrollSection animationType="slideRight" delay={0.2}>
                  <div className="w-full md:flex-1 flex flex-col justify-center text-center md:text-left samybear-text-container">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                      SamyBear
                    </h1>
                    <p className="text-xl sm:text-2xl text-white/80 italic mb-8 lg:mb-10 leading-relaxed" style={{ lineHeight: '1.4' }}>
                      The most complete child-centred companion built for ages 4 to 10
                    </p>
                    <div className="space-y-4 text-lg sm:text-xl text-white/90 leading-relaxed" style={{ lineHeight: '1.6' }}>
                      <p>
                        Shaped by <span className="text-cyan-300 font-semibold">UNICEF's</span> vision and powered by PolstarAI's unified intelligence layer, SamyBear is an interactive 3D companion that gives children a safe space to explore, learn, and build healthy habits.
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
                    <div className="relative samybear-image-container">
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
                          img.style.display = 'none';
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
            .samybear-hero-container {
              padding-top: 60px;
              padding-bottom: 60px;
            }
            @media (min-width: 768px) {
              .samybear-hero-container {
                padding-top: 80px;
                padding-bottom: 80px;
              }
            }
            @media (min-width: 1024px) {
              .samybear-hero-container {
                padding-top: 100px;
                padding-bottom: 100px;
              }
            }
            .samybear-text-container {
              max-width: 620px;
            }
            .samybear-text-container p,
            .samybear-text-container > div {
              max-width: 620px;
            }
            .samybear-image-container {
              transform: translateY(12%);
            }
            .samybear-image-container img {
              height: 336px;
            }
            @media (min-width: 768px) {
              .samybear-image-container {
                transform: translateY(12%);
              }
              .samybear-image-container img {
                height: 504px;
              }
            }
          `}</style>
        </section>

        {/* Child-Centred by Design */}
        <div className="relative">
          <SubtleStarBackground density="medium" />
          <UNICEFPillarsSection />
        </div>

        {/* How SamyBear Works */}
        <FeaturesSection />

        {/* Parent Hub */}
        <div className="relative">
          <SubtleStarBackground density="low" />
          <ParentHubSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
