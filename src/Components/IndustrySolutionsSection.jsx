import React from "react";
import { motion } from "framer-motion";
import Ak from "../Images/tahini-sesame-seeds-dark-background.jpg";

export default function IndustrySolutionsSection() {
  const industries = [
    {
      industry: "Confectionery",
      solution: "Reduced stickiness, anti-crystallization (High Maltose Syrup).",
    },
    {
      industry: "Pharma",
      solution: "Spray-drying aids, binders (Maltodextrin, Starch).",
    },
    {
      industry: "Sports Nutrition",
      solution: "High-protein solubility (Rice Protein Concentrate).",
    },
    {
      industry: "Bakery",
      solution: "Shelf-life extension, moisture retention (Rice Syrup, Starch).",
    },
  ];

  const compliance = {
    title: "Quality & Compliance",
    points: [
      "Certifications: FDA GRAS, EU Directive 95/2/EC, ISO 22000.",
      "Testing Protocols: Rigorous microbiological, heavy metal, pesticides and allergen testing.",
      "Traceability: Batch-wise documentation for supply chain transparency.",
    ],
  };

  return (
    <div className="font-[para]">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Ak})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center text-white px-6 md:px-20 z-10"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            STARIZO® Industry Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            Custom Formulations for Specialized Performance
          </motion.p>
        </motion.div>
      </div>

      {/* Cards Section */}
      <motion.div
        className="bg-gray-100 py-16 px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-400 transition-transform hover:-translate-y-2 hover:shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.industry}
              </h3>
              <p className="text-gray-700 text-base">{item.solution}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Section */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 mt-16 border-t-4 border-yellow-400"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {compliance.title}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
            {compliance.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <motion.button
            className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
