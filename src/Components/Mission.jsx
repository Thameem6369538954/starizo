import React from "react";
import { motion } from "framer-motion";

const VisionMissionValues = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12 bg-white font-[para]">
         <motion.h1
                className="lg:text-6xl tracking-wide font-bold text-center text-gray-800 mb-8 font-[Heading]"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                VISION & <span className="text-[#fdc700]">Mission</span>
              </motion.h1>
        
      {/* Vision & Mission Section */}
      <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-xl font-bold text-black-600 border-b pb-2">VISION</h2>
          <p className="text-gray-700 mt-4">
            To pioneer a new era in rice starch and derivatives by merging technological advancements with sustainable
            practices from farm to shelf, providing creative solutions that enrich lives worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-xl font-bold text-[#fdc700] border-b pb-2">MISSION</h2>
          <p className="text-gray-700 mt-4">
            To uphold integrity, foster innovation, and attain operational excellence in the food ingredient space.
          </p>
        </motion.div>
      </div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 p-8 bg-white shadow-lg rounded-lg relative"
      >
        <h2 className="text-2xl font-bold text-green-600 border-b pb-2">VALUES</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <ul className="text-gray-700 space-y-4">
            <li>✅ Pride in manufacturing finished products with zero defects.</li>
            <li>✅ Consistency in delivering both standard and customized products.</li>
            <li>✅ Clean Label Focus – Creating natural, globally accepted products.</li>
            <li>✅ Allergen-free products meeting worldwide quality standards.</li>
          </ul>
          <ul className="text-gray-700 space-y-4">
            <li>✅ Zero carbon emission – No usage of fossil fuels.</li>
            <li>✅ Upholding integrity in every product and customer interaction.</li>
            <li>✅ Manufacturing stable products with essential functional attributes.</li>
            <li>✅ Adherence to universal food safety compliance norms.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default VisionMissionValues;
