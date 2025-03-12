import { motion } from "framer-motion";

export const PlasterAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="absolute inset-x-0 top-0 bg-gradient-to-b from-white to-transparent"
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          duration: 5,
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-white/20"
      />
    </div>
  );
};
