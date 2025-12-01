import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function CarouselArrows({ onPrevious, onNext }: CarouselArrowsProps) {
  return (
    <>
      {/* Left Arrow */}
      <motion.button
        onClick={onPrevious}
        className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ChevronLeft size={24} className="sm:w-6 sm:h-6" />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        onClick={onNext}
        className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ChevronRight size={24} className="sm:w-6 sm:h-6" />
      </motion.button>
    </>
  );
}

