import Header from './Header';
import Footer from './Footer';
import SpaceBackground from './SpaceBackground';

interface AgentDetailLayoutProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  avatar?: string;
  capabilities?: string[];
  forAudience?: string[];
  solves?: string[];
  domain?: string;
}

export default function AgentDetailLayout({
  title,
  tagline,
  description,
  image,
  avatar,
  capabilities,
  forAudience,
  solves,
  domain,
}: AgentDetailLayoutProps) {
  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      <Header />
      
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Title, Tagline, Description with Avatar - Two Column Layout */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              {/* Left Column - Text Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {title}
                </h1>
                <p className="text-xl sm:text-2xl text-white/80 italic mb-6">
                  {tagline}
                </p>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  {description}
                </p>
              </div>
              
              {/* Right Column - Avatar Image - Anchored right, vertically centered */}
              {avatar && (
                <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
                  <div className="relative">
                    <img 
                      src={avatar} 
                      alt={`${title} Avatar`}
                      className="max-w-[320px] w-full h-auto object-contain drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))',
                        imageRendering: 'high-quality',
                      }}
                      loading="eager"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        const parent = img.parentElement;
                        if (parent && !parent.querySelector('.avatar-error')) {
                          const errorDiv = document.createElement('div');
                          errorDiv.className = 'avatar-error text-white/50 text-center p-4 bg-white/5 rounded-xl border border-white/10';
                          errorDiv.innerHTML = `<p class="text-sm">Avatar image not found</p>`;
                          parent.appendChild(errorDiv);
                        }
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* For Audience */}
            {forAudience && forAudience.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  For:
                </h2>
                <ul className="space-y-3">
                  {forAudience.map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start text-white/80 text-base sm:text-lg leading-relaxed"
                    >
                      <span className="text-white/50 mr-3 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Solves */}
            {solves && solves.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Solves:
                </h2>
                <ul className="space-y-3">
                  {solves.map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start text-white/80 text-base sm:text-lg leading-relaxed"
                    >
                      <span className="text-white/50 mr-3 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Key Capabilities Section */}
          {capabilities && capabilities.length > 0 && (
            <div className="mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Key Capabilities
              </h2>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li 
                    key={index}
                    className="flex items-start text-white/80 text-base sm:text-lg leading-relaxed"
                  >
                    <span className="text-white/50 mr-3 mt-1.5">•</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Domain */}
          {domain && (
            <div className="mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Domain
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {domain}
              </p>
            </div>
          )}


        </div>
      </main>
      
      <Footer />
    </div>
  );
}
