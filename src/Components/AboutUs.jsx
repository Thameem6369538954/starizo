import React from "react";
import { motion } from "framer-motion";
import For from "../Images/For.jpg"; // Replace with your actual image

const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      {/* Heading */}
      <motion.h1
        className="lg:text-6xl tracking-wide font-bold text-center text-gray-800 mb-8 font-[Heading]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span className="text-[#fdc700]">Us</span>
      </motion.h1>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          className="text-gray-700 space-y-4 font-[para]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="leading-relaxed text-lg">
            At Starizo, rice becomes more than just a grain; it is transformed into a global catalyst
            for innovation and industry excellence.
          </p>
          <p className="leading-relaxed text-lg">
            Seeded in the fertile soils of Tamil Nadu on the River Cauvery delta region and harvesting
            universal success—setting new standards in rice processing.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={For} alt="About Us" className="rounded-lg shadow-lg w-full max-w-md" />
        </motion.div>
      </div>

      {/* More Info */}
      <motion.div
        className="mt-12 bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto font-[para]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-700 text-lg leading-relaxed">
          With 50 years of experience in paddy farming and 15 years in producing high-quality rice
          varieties under the Cauvery brand, we are now expanding our value chain.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          TM Bio Energy Pvt Ltd is advancing from rice production to rice-based ingredients,
          specializing in rice-derived starch for B2B markets in Europe, America, and Japan.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
