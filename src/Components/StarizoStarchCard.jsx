import React from "react";
import { motion } from "framer-motion";
import Ak from "../Images/tahini-sesame-seeds-dark-background.jpg";

export default function SplitSection() {
  const cards = [
    {
      title: "Key Details",
      points: [
        "Properties: Neutral taste, white color, hypoallergenic.",
      ],
    },
    {
      title: "Functional Benefits",
      points: [
        "Thickening & Binding: Replaces gelatin in vegan gummies and bakery.",
        "Fat Replacement: Mimics mouthfeel in low-fat sauces.",
        "Stabilization: Prevents syneresis in frozen desserts.",
      ],
    },
    {
      title: "Functional Properties",
      points: [
        "Emulsification, foaming, water/oil retention.",
      ],
    },
    {
      title: "Health Benefits",
      points: [
        "Supports muscle recovery, cardiac health, and weight management.",
      ],
    },
    {
      title: "Applications",
      points: [
        "Bakery: Improves softness in gluten-free bread.",
        "RTC Meals: Stabilizes textures in sauces.",
        "Pharma: Tablet binder and disintegrant.",
      ],
    },
    {
      title: "Technical Specs",
      points: [
        "Amylose Content: 20–30%",
        "Gelatinization Temp: 65–75ºC",
        "Viscosity: ≥1800 CPS",
      ],
    },
  ];

  return (
    <div className="font-[para] mt-20">
      {/* Top Split Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-300 h-72 md:h-96 flex items-center justify-center overflow-hidden"
        >
          <img src={Ak} alt="Rice starch background" className="w-full h-full object-cover" />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 text-white p-10 flex flex-col justify-center relative"
        >
          <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">STARlZ0® Rice Starch</h2>
          <p className="text-gray-300 leading-relaxed">
            The Clean-Label Texture Innovator
          </p>
          <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-yellow-400" />
        </motion.div>
      </div>

      {/* Bottom Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-white mt-20">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{card.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              {card.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
