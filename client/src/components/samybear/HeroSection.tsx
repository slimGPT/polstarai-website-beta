import { Button } from '@/components/ui/button';
import ScrollSection from '@/components/ScrollSection';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute rounded-full blur-3xl opacity-10"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-10"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
            bottom: '-10%',
            left: '-10%',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <ScrollSection animationType="slideRight" delay={0.2}>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                A Safe, Voice-Driven AI Companion for Children
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Shaped by UNICEF's vision for child-centred AI. Designed for ages 4–10. Powered by PolstarAI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full transition-all shadow-lg hover:shadow-xl"
                  onClick={() => {
                    const element = document.getElementById('what-is-samybear');
                    if (element) {
                      const headerHeight = 96;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - headerHeight;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                >
                  Explore SamyBear
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 rounded-full transition-all"
                  onClick={() => {
                    const element = document.getElementById('research-partners');
                    if (element) {
                      const headerHeight = 96;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - headerHeight;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                >
                  For Schools & Research Partners
                </Button>
              </div>
            </div>
          </ScrollSection>

          {/* Right Column - 3D Avatar */}
          <ScrollSection animationType="slideLeft" delay={0.4}>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img
                  src="/images/agents/Samybearavatar nobackground.png"
                  alt="SamyBear 3D Avatar"
                  className="w-full h-auto object-contain drop-shadow-2xl animate-float"
                  style={{
                    filter: 'drop-shadow(0 20px 60px rgba(59, 130, 246, 0.4))',
                    imageRendering: 'high-quality',
                  }}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    // Fallback to alternative image
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

