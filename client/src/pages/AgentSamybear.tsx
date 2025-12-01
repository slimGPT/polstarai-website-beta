import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpaceBackground from '@/components/SpaceBackground';
import ScrollStars from '@/components/ScrollStars';
import CursorTrail from '@/components/CursorTrail';
import SubtleStarBackground from '@/components/SubtleStarBackground';
import UNICEFPillarsSection from '@/components/samybear/UNICEFPillarsSection';
import FeaturesSection from '@/components/samybear/FeaturesSection';
import ParentOnboardingSection from '@/components/samybear/ParentOnboardingSection';
import ParentHubSection from '@/components/samybear/ParentHubSection';
import EngagementMetricsSection from '@/components/samybear/EngagementMetricsSection';
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
      
      <Header />
      
      <main className="relative z-10">
        {/* Hero Section - Title, Tagline, Description with Avatar */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                {/* Left Column - Text Content */}
                <ScrollSection animationType="slideRight" delay={0.2}>
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                      SamyBear
                    </h1>
                    <p className="text-xl sm:text-2xl text-white/80 italic mb-6">
                      The most complete child-centred companion built for ages 4 to 10
                    </p>
                    <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                      Shaped by UNICEF's vision for child-centred development and powered by PolstarAI's unified intelligence layer, SamyBear is an interactive 3D character that gives children a safe and structured space to explore, learn and build healthy habits. Parents stay fully involved through simple routines, clear visibility and shared moments that keep the learning experience connected to real family life.
                    </p>
                  </div>
                </ScrollSection>
                
                {/* Right Column - Avatar Image */}
                <ScrollSection animationType="slideLeft" delay={0.4}>
                  <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
                    <div className="relative">
                      <img 
                        src="/images/agents/Samybearavatar nobackground.png" 
                        alt="SamyBear Avatar" 
                        className="max-w-[320px] w-full h-auto object-contain drop-shadow-2xl animate-float"
                        style={{
                          filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))',
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
          `}</style>
        </section>

        {/* Child-Centred by Design */}
        <div className="relative">
          <SubtleStarBackground density="medium" />
          <UNICEFPillarsSection />
        </div>

        {/* How SamyBear Works */}
        <FeaturesSection />

        {/* Parent Onboarding Experience */}
        <div className="relative">
          <SubtleStarBackground density="low" />
          <ParentOnboardingSection />
        </div>

        {/* Parent Hub */}
        <div className="relative">
          <SubtleStarBackground density="low" />
          <ParentHubSection />
        </div>

        {/* Engagement Metrics */}
        <EngagementMetricsSection />
      </main>
      
      <Footer />
    </div>
  );
}
