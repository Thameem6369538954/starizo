import React from "react";
import { motion } from "framer-motion";
import Ak from "../Images/tahini-sesame-seeds-dark-background.jpg"
export default function SplitSection() {
  const cards = [
    {
      title: "Key Details",
      desc: "Source: Non-GMO rice, allergen-free, vegan.",
    },
    {
      title: "High Solubility",
      desc: "Balanced hydrophilic/hydrophobic amino acid profile.",
    },
    {
      title: "Functional Properties",
      desc: "Emulsification, foaming, water/oil retention.",
    },
    {
      title: "Health Benefits",
      desc: "Supports muscle recovery, cardiac health, and weight management.",
    },
    {
      title: "Applications",
      desc: "Protein bars, shakes, anti-diabetic foods, and meals for muscle maintenance.",
    },
    {
      title: "Technical Specs",
      desc: "≥80% protein content, pH: 6.5–7.5, Particle Size: 200–300 mesh.",
    },
  ];

  return (
    <div className="font-[para] mt-70">
      {/* Top Split Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-300 h-72 md:h-96 flex items-center justify-center"
        >
         <img src={Ak} alt="" />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 text-white p-10 flex flex-col justify-center relative"
        >
          <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">STARIZO® Rice Protein</h2>
          <p className="text-gray-300 leading-relaxed">
            Plant-Powered Nutrition, Uncompromised Performance – premium rice protein concentrate with 80% protein content for health and functionality.
          </p>
          <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-yellow-400" />
        </motion.div>
      </div>

      {/* Bottom Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-white mt-60">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-3xl font-semibold mb-2 text-gray-800">{card.title}</h3>
            <p className="text-xl text-gray-600">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
