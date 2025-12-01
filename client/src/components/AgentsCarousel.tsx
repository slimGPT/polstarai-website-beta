import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Orb from './Orb';
import OrbSparkles from './OrbSparkles';
import { AgentName } from '@/constants/agentColors';
import { playAgentSwitchSound, playHoverSound } from '@/utils/soundEffects';
import { useLocation } from 'wouter';

interface Agent {
  name: string;
  key: AgentName;
  displayName: string;
  description: string;
  route: string;
}

const agents: Agent[] = [
  {
    name: 'Educational Agent',
    key: 'education',
    displayName: 'SamyBear',
    description: 'A child-centred companion created for exploration, learning, and healthy habits.',
    route: '/agents/samybear',
  },
  {
    name: 'Hospitality Agent',
    key: 'hospitality',
    displayName: 'Solaria',
    description: 'Automate guest interactions, handle bookings, and deliver personalized hospitality experiences.',
    route: '/agents/solaria',
  },
  {
    name: 'Finance Agent',
    key: 'finance',
    displayName: 'FinSight',
    description: 'Interpret ratios, run simulations, and generate clean insights for decision-makers.',
    route: '/agents/finsight',
  },
  {
    name: 'Pricing Agent',
    key: 'pricing',
    displayName: 'Linda',
    description: 'Analyze competitors, demand signals, and generate revenue-optimized price strategies.',
    route: '/agents/linda',
  },
];

export default function AgentsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [, setLocation] = useLocation();

  const activeAgent = agents[activeIndex];
  const previousAgent = agents[previousIndex];

  const handleNext = () => {
    console.log('handleNext called', { isTransitioning, activeIndex });
    if (isTransitioning) return;
    try {
      setIsTransitioning(true);
      setPreviousIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % agents.length);
      playAgentSwitchSound();
      setTimeout(() => setIsTransitioning(false), 900);
    } catch (error) {
      console.error('Error in handleNext:', error);
      setIsTransitioning(false);
    }
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    try {
      setIsTransitioning(true);
      setPreviousIndex(activeIndex);
      setActiveIndex((prev) => (prev - 1 + agents.length) % agents.length);
      playAgentSwitchSound();
      setTimeout(() => setIsTransitioning(false), 900);
    } catch (error) {
      console.error('Error in handlePrevious:', error);
      setIsTransitioning(false);
    }
  };

  const handleSelect = (index: number) => {
    console.log('handleSelect called', { index, isTransitioning, activeIndex });
    if (isTransitioning || index === activeIndex) return;
    try {
      setIsTransitioning(true);
      setPreviousIndex(activeIndex);
      setActiveIndex(index);
      playAgentSwitchSound();
      setTimeout(() => setIsTransitioning(false), 900);
    } catch (error) {
      console.error('Error in handleSelect:', error);
      setIsTransitioning(false);
    }
  };

  const handleLearnMore = () => {
    console.log('handleLearnMore called', { route: activeAgent.route, activeAgent });
    try {
      // Use window.location for reliable navigation
      window.location.href = activeAgent.route;
    } catch (error) {
      console.error('Error in handleLearnMore:', error);
      // Fallback to setLocation if window.location fails
      try {
        setLocation(activeAgent.route);
      } catch (e) {
        console.error('Both navigation methods failed:', e);
      }
    }
  };

  return (
    <div className="relative w-full py-6 sm:py-8 lg:py-10" style={{ position: 'relative', zIndex: 10 }}>
      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4 sm:mb-6">
        AI Agents, Each Built for a Mission
      </h2>

      {/* Agent Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 sm:mb-8 px-4">
        {agents.map((agent, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={agent.key}
              onClick={() => {
                console.log('CLICK REGISTERED - Agent tab:', agent.name);
                handleSelect(index);
              }}
              onMouseEnter={() => {
                if (!isActive) {
                  try {
                    playHoverSound();
                  } catch (error) {
                    // Ignore sound errors
                  }
                }
              }}
              style={{ position: 'relative', zIndex: 12 }}
              className={`px-6 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 relative cursor-pointer ${
                isActive
                  ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30 shadow-lg shadow-white/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/10'
              }`}
              type="button"
            >
              {agent.name}
              {/* Hover glow effect */}
              {!isActive && (
                <span className="absolute inset-0 rounded-full bg-white/0 hover:bg-white/5 transition-all duration-300 blur-sm -z-10" />
              )}
            </button>
          );
        })}
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 11 }}>
        {/* Navigation Arrows - More visible */}
        <button
          onClick={() => {
            console.log('CLICK REGISTERED - Previous arrow');
            handlePrevious();
          }}
          onMouseEnter={() => {
            try {
              playHoverSound();
            } catch (error) {
              // Ignore sound errors
            }
          }}
          style={{ position: 'absolute', zIndex: 50, pointerEvents: 'auto' }}
          className="left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/30 hover:border-white/60 opacity-80 hover:opacity-100 transition-all duration-300 shadow-xl shadow-white/20 cursor-pointer"
          aria-label="Previous agent"
          type="button"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => {
            console.log('CLICK REGISTERED - Next arrow');
            handleNext();
          }}
          onMouseEnter={() => {
            try {
              playHoverSound();
            } catch (error) {
              // Ignore sound errors
            }
          }}
          style={{ position: 'absolute', zIndex: 50, pointerEvents: 'auto' }}
          className="right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/30 hover:border-white/60 opacity-80 hover:opacity-100 transition-all duration-300 shadow-xl shadow-white/20 cursor-pointer"
          aria-label="Next agent"
          type="button"
        >
          <ChevronRight size={24} />
        </button>

        {/* Orb Container - Fixed dimensions to prevent layout shift */}
        <div className="relative flex items-center justify-center mb-4 sm:mb-6" style={{ 
          minHeight: '240px',
          width: '100%',
          height: '320px'
        }}>
          <div className="relative w-[320px] h-[320px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
            <Orb 
              agentName={activeAgent.key} 
              previousAgentName={previousIndex !== activeIndex ? previousAgent.key : undefined}
            />
            {/* Sparkle animation around orb */}
            <OrbSparkles />
          </div>
        </div>

        {/* Agent Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAgent.key}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.5 },
              scale: { duration: 0.7 }
            }}
            className="text-center"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2"
            >
              {activeAgent.displayName}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-4"
            >
              {activeAgent.description}
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onClick={() => {
                console.log('CLICK REGISTERED - Learn more button', activeAgent);
                handleLearnMore();
              }}
              style={{ position: 'relative', zIndex: 12 }}
              className="group relative px-5 py-2 border border-white/30 text-white rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm overflow-hidden cursor-pointer"
              type="button"
            >
              <span className="relative z-10">Learn more</span>
              {/* Ripple effect on click */}
              <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300 opacity-0 group-active:opacity-100" />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
