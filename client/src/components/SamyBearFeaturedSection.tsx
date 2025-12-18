import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import { ShieldCheck, Sparkles, Repeat } from 'lucide-react';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import ScrollSection from './ScrollSection';

export default function SamyBearFeaturedSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });

  return (
    <section id="samybear" className="relative py-20 lg:py-24 bg-black">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-10 lg:gap-16 items-start lg:items-stretch">
            {/* Left Column - Text Content */}
            <ScrollSection
              animationType="slideRight"
              delay={0.2}
              // Match the phone/video's guaranteed height on desktop so both columns align.
              className="h-full lg:min-h-[560px]"
            >
              <div className="w-full h-full min-h-full flex flex-col justify-start lg:justify-between text-center md:text-left">
                <div
                  className="space-y-7 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed"
                  style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, sans-serif' }}
                >
                  <p>
                    Shaped by{' '}
                    <span
                      className="text-cyan-300 font-semibold underline underline-offset-4"
                      style={{
                        textShadow:
                          '0 0 10px rgba(6, 182, 212, 0.8), 0 0 18px rgba(6, 182, 212, 0.35)',
                      }}
                    >
                      UNICEF
                    </span>
                    's vision and powered by PolstarAI's unified intelligence layer, SamyBear is a digital companion
                    designed to feel natural, familiar, and safe for children. It interacts the way a trusted friend
                    would: listening, responding with care, and remembering what matters, while always staying within
                    clear boundaries set to protect children and give parents peace of mind.
                  </p>

                  <div className="pt-2">
                    <div className="text-white font-semibold text-lg sm:text-xl lg:text-2xl mb-4">
                      What makes SamyBear different
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 text-left overflow-hidden transition-colors hover:bg-white/[0.05] hover:border-white/20">
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" />
                        <div className="relative flex items-start gap-4">
                          <div className="shrink-0 w-11 h-11 rounded-xl bg-cyan-500/15 border border-white/10 flex items-center justify-center"
                               style={{ boxShadow: '0 10px 30px rgba(6, 182, 212, 0.12)' }}>
                            <Repeat className="w-5 h-5 text-cyan-300" style={{ filter: 'drop-shadow(0 2px 8px rgba(6,182,212,0.25))' }} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-white font-semibold mb-2">Natural interaction with memory</div>
                            <div className="text-white/80 text-sm sm:text-base leading-relaxed">
                          SamyBear remembers details over time, favorite stories, recurring interests, small
                          preferences, making each interaction feel continuous and personal rather than repetitive or
                          random.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 text-left overflow-hidden transition-colors hover:bg-white/[0.05] hover:border-white/20">
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
                        <div className="relative flex items-start gap-4">
                          <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-500/15 border border-white/10 flex items-center justify-center"
                               style={{ boxShadow: '0 10px 30px rgba(59, 130, 246, 0.14)' }}>
                            <ShieldCheck className="w-5 h-5 text-blue-300" style={{ filter: 'drop-shadow(0 2px 8px rgba(59,130,246,0.25))' }} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-white font-semibold mb-2">Built-in safeguards</div>
                            <div className="text-white/80 text-sm sm:text-base leading-relaxed">
                          Every interaction is designed to stay within strict, well-defined boundaries. SamyBear has
                          been <span className="text-white/90 font-semibold">extensively stress-tested</span> to remain
                          safe, predictable, and appropriate, no matter how curious or creative a child becomes.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 text-left overflow-hidden transition-colors hover:bg-white/[0.05] hover:border-white/20">
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent" />
                        <div className="relative flex items-start gap-4">
                          <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald-500/15 border border-white/10 flex items-center justify-center"
                               style={{ boxShadow: '0 10px 30px rgba(16, 185, 129, 0.12)' }}>
                            <Sparkles className="w-5 h-5 text-emerald-300" style={{ filter: 'drop-shadow(0 2px 8px rgba(16,185,129,0.22))' }} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-white font-semibold mb-2">A gentle structure for everyday moments</div>
                            <div className="text-white/80 text-sm sm:text-base leading-relaxed">
                          SamyBear can support light routines and transitions when needed (morning transitions, bedtime
                          resistance, after-school decompression), helping tasks flow more smoothly throughout the day.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSection>
            
            {/* Right Column - Demo Video (no scroll animation to avoid hidden/opacity issues) */}
            <div className="w-full h-full flex items-start justify-center lg:justify-end opacity-100 relative z-[9999]">
                <div className="relative w-full max-w-[420px]">
                  {/* Glow */}
                  <div
                    className="pointer-events-none absolute -inset-8 -z-10 blur-3xl opacity-30"
                    style={{
                      background:
                        'radial-gradient(circle at 35% 25%, rgba(59, 130, 246, 0.55) 0%, transparent 55%), radial-gradient(circle at 70% 65%, rgba(6, 182, 212, 0.45) 0%, transparent 55%), radial-gradient(circle at 60% 20%, rgba(34, 197, 94, 0.22) 0%, transparent 55%)',
                    }}
                  />

                  {/* Phone frame (explicit aspect ratio + non-collapsing) */}
                  <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/[0.02] backdrop-blur-xl"
                       style={{ boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)' }}>
                    <div
                      className="w-full"
                      style={{
                        aspectRatio: '9 / 16',
                        // keep a guaranteed non-zero height on small layouts
                        minHeight: '560px',
                      }}
                    >
                    <iframe
                      title="SamyBear demo video"
                      src="https://www.youtube.com/embed/45_UFBfurZM?rel=0&modestbranding=1&playsinline=1"
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 0,
                        display: 'block',
                        opacity: 1,
                        position: 'relative',
                        zIndex: 2,
                      }}
                      loading="eager"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                    </div>
                    {/* Subtle sheen */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
                  </div>
                </div>
              </div>
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

