import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#FDF4F5] via-white to-[#FDF4F5]"
    >
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8
            }
          }}
          exit={{ 
            scale: 0,
            rotate: 180,
            transition: {
              duration: 0.3
            }
          }}
          className="relative mb-6"
        >
          <Heart className="w-20 h-20 text-[#D9A7B0]" />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.5, duration: 0.3 }
            }}
            exit={{ 
              opacity: 0,
              scale: 0,
              transition: { duration: 0.2 }
            }}
            className="absolute top-0 right-0 -mr-2 -mt-2"
          >
            <Sparkles className="w-6 h-6 text-[#C797A0]" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.3, duration: 0.5 }
          }}
          exit={{ 
            opacity: 0,
            y: -20,
            transition: { duration: 0.3 }
          }}
          className="font-['Playfair_Display'] text-4xl text-[#C797A0] mb-4"
        >
          PRO|уют
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 0.6, duration: 0.5 }
          }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.2 }
          }}
          className="font-['Lora'] text-lg text-[#2A2A2A]/80"
        >
          Создаем уют с любовью ✨
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: 1,
            transition: { delay: 0.8, duration: 0.8 }
          }}
          exit={{ 
            scaleX: 0,
            transition: { duration: 0.2 }
          }}
          className="mt-8 h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-[#D9A7B0] to-transparent"
        />
      </motion.div>
    </motion.div>
  );
}; 