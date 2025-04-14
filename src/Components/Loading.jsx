import { motion } from "framer-motion";

const letters = ["S", "t", "a", "r", "i", "z", "o",".",".",".",".","."];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center font-[Hdga]">
      <motion.div
        className="flex space-x-1 text-4xl md:text-8xl font-bold text-green-800"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Loading;
