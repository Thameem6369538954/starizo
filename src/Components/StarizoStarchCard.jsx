import React from "react";
import { motion } from "framer-motion";
import Ak from "../Images/tahini-sesame-seeds-dark-background.jpg";

export default function SplitSectionStarch() {
  const cards = [
    {
      title: "Key Details",
      points: ["Properties: Neutral taste, white color, hypoallergenic."],
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
      points: ["Emulsification, foaming, water/oil retention."],
    },
    {
      title: "Health Benefits",
      points: ["Supports muscle recovery, cardiac health, and weight management."],
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
            STARIZO® Rice Starch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            The Clean-Label Texture Innovator
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
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
                {card.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Button to Open Modal */}
        <div className="text-center mt-8">
          <motion.button
            className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
