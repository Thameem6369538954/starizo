import React from "react";
import { motion } from "framer-motion";
import BG from "../Images/HeaderBg.jpg";
import BGN from "../Images/Bg.png";

const Header = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center px-4 sm:px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 p-6 w-full max-w-7xl mx-auto">
        {/* Left Section - Logo and Text */}
        <motion.div
          className="text-white text-center md:text-left space-y-4 md:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[heading] leading-tight">
            Harnessing Rice{" "}
            <span className="text-yellow-400">Sustainably</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-[para] text-white">
            Future-ready food ingredients for a sustainable tomorrow.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="mt-4 bg-white text-yellow-600 px-5 font-[para] sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
