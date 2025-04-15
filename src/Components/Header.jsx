import React from "react";
import { motion } from "framer-motion";
import BG from "../Images/HeaderBg.jpg";
import BGN from "../Images/Screenshot_2025-04-15_174411-removebg-preview.png";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 1, duration: 1, ease: "easeOut" },
  },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center px-4 sm:px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full max-w-7xl mx-auto p-6">
        {/* Left - Text */}
        <div className="text-white text-center md:text-left space-y-4 md:space-y-6">
          <motion.h1
            className="text-4xl sm:text-3xl md:text-6xl lg:text-9xl font-[velen] text-[#00a63e]"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Harnessing Rice{" "}
            <span className="text-yellow-400">Sustainably</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-xl font-[para] text-black"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Future-ready food ingredients for a sustainable tomorrow.
          </motion.p>
          <motion.p
            className="text-sm sm:text-base md:text-xl font-[para] text-black"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Harnessing  rice sustainably for   future food ingredients
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="mt-4 bg-white text-yellow-600 px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-[para] font-semibold hover:bg-yellow-600 hover:text-white transition"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Learn More
          </motion.button>
        </div>

        {/* Right - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          animate={["visible", "float"]}
          variants={imageVariants}
        >
          <img
            src={BGN}
            alt="Rice Illustration"
            className="w-3/4 sm:w-2/3 md:w-full max-w-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
