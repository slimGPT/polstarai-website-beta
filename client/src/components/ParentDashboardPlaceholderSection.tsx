import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';

export default function ParentDashboardPlaceholderSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const placeholderRef = usePremiumScrollAnimation({ animation: 'scaleIn', delay: 0.3, duration: 1 });

  return (
    <section id="parent-dashboard-preview" className="relative py-20 lg:py-24 bg-black overflow-hidden">
      <SubtleStarBackground density="low" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-transparent to-cyan-950/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-12 lg:mb-16" />
          
          <div ref={titleRef} className="mb-12 lg:mb-16 text-center">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Parent Dashboard Preview
            </h2>
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-white/85 leading-relaxed font-medium max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              A dedicated control centre that keeps parents fully involved.
            </p>
          </div>
          
          <div ref={placeholderRef} className="max-w-5xl mx-auto">
            <div 
              className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-12 lg:p-16 min-h-[400px] flex items-center justify-center"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg 
                    className="w-12 h-12 text-white/30" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <p 
                  className="text-lg sm:text-xl text-white/50"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Dashboard preview coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

