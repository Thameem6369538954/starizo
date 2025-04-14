import React, { useState } from "react";
import { motion } from "framer-motion";
import Ak from "../Images/tahini-sesame-seeds-dark-background.jpg";

export default function SplitSectionStarch() {
  const [showModal, setShowModal] = useState(false);

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
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <button
  onClick={() => setShowModal(false)}
  className="text-gray-500 hover:text-red-500 text-xl"
>
  &times;
</button>

          <div className="bg-white rounded-xl shadow-2xl max-w-9xl w-full p-6 overflow-y-auto min-h-[100vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Product Data Sheet</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-500 text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="text-xl text-gray-700 space-y-2 overflow-y-auto max-h-[70vh]">
              <p><strong>Product:</strong> STARIZO – Native Rice Starch</p>
              <p><strong>Description:</strong> Native Rice Starch derived from non-GMO Rice.</p>
              <p><strong>Appearance:</strong> White free flowing powder</p>
              <p><strong>Odor:</strong> Odourless</p>
              <p><strong>Moisture %:</strong> 12.0% Max</p>
              <p><strong>pH:</strong> 4.5 – 7.0</p>
              <p><strong>Brookfield Viscosity:</strong> 1000Cps</p>
              <p><strong>Microbiological:</strong> TPC: 500, Yeast/Mold: 100, Salmonella/E.coli: Absent</p>
              <p><strong>Nutrition:</strong> 390 Kcal, Carbs: 98.6g, Protein: 0.4g, Fat: 0.2g</p>
              <p><strong>Heavy Metals:</strong> All within limits. Arsenic: 1mg/kg Max, Lead: 1mg/kg Max</p>
              <p><strong>Applications:</strong> Food, Cosmetics, Pharmaceuticals</p>
              <p><strong>Compliance:</strong> FCC, FAO JECFA, FSSAI, FDA</p>
              <p><strong>Certifications To Be Acquired:</strong> FSSC 22000, ISO 9001, Halal, Kosher, etc.</p>
              <p><strong>Contact:</strong> Thirumavadi Bio Energy, Chennai – info@tmbioenergy.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
