import { motion, AnimatePresence } from 'framer-motion';

interface AgentDescriptionProps {
  name: string;
  subtitle: string;
  description: string;
  key: string;
}

export default function AgentDescription({ name, subtitle, description, key }: AgentDescriptionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="text-center mt-8 sm:mt-12"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3"
        >
          {name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 px-6 py-2.5 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
        >
          Learn more
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

