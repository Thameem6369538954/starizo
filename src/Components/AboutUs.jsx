import React from "react";
import { motion } from "framer-motion";
import For from "../Images/For.png"; // Replace with your actual image
import Fora from "../Images/yellow-rice-seeds-cup-concrete.jpg"; // Replace with your actual image

const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12 bg-center bg-cover "
    // style={{backgroundImage:`url(${Fora})`}}
    id="about-section"
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-8xl tracking-wide font-bold text-center   font-[Heading] text-[#28563a]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span className="text-black">Us</span>
      </motion.h1>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          className="mt-12 bg-[#fffac0] shadow-lg rounded-lg p-6 md:p-8 max-w-7xl mx-auto font-[para]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-[Hdga] text-6xl ">Our Starizo</h1>
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
          <img src={For} alt="About Us" className=" w-full max-w-5xl" />
        </motion.div>
      </div>

      {/* More Info */}
      <motion.div
        className="mt-12 bg-[#fffac0] shadow-lg rounded-lg p-6 md:p-8 max-w-7xl mx-auto font-[para]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
                  <h1 className="font-[Hdga] text-6xl "> Paddy Power</h1>

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
