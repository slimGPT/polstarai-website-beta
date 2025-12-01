import { motion } from 'framer-motion';

interface Agent {
  name: string;
  subtitle: string;
}

interface AgentTabsProps {
  agents: Agent[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function AgentTabs({ agents, activeIndex, onSelect }: AgentTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8 px-4">
      {agents.map((agent, index) => {
        const isActive = index === activeIndex;
        return (
          <motion.button
            key={agent.name}
            onClick={() => onSelect(index)}
            className={`px-6 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
              isActive
                ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {agent.name}
          </motion.button>
        );
      })}
    </div>
  );
}

