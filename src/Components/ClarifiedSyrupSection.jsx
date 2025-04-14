import React from "react";
import { motion } from "framer-motion";
import SyrupImg from "../Images/closeup-mixed-rice.jpg"; // replace with your actual image path

export default function ClarifiedSyrupSection() {
  const cards = [
    {
      title: "Key Details",
      points: [
        "Composition: Derived from non-GMO rice starch via controlled enzymatic hydrolysis.",
        "Clean-label, allergen-free, and vegan-friendly.",
        "Appearance: Colorless, transparent syrup with clean, mild sweetness and subtle honey-like notes.",
      ],
    },
    {
      title: "Functional Attributes",
      points: [
        "Moisture Retention: Prevents drying in baked goods and confectionery.",
        "Flavor & Color Preservation: Maintains authentic taste and neutral color.",
        "Texture Enhancement: Improves chewability in gums and softness in caramel/toffees.",
        "Binding Agent: Ideal for muesli bars, nougats, and pharmaceutical tablets.",
        "Sugar Release Control: Low-GI profile for sustained energy release.",
      ],
    },
    {
      title: "Applications – Food Industry",
      points: [
        "Confectionery: Caramels, toffees, chewing gum, fudge, fondants, gummies, and jellies.",
        "Bakery: Glazes for pastries, binding agent in muesli/nougat bars.",
        "Dairy: Texture enhancer in ice creams and frozen desserts.",
      ],
    },
    {
      title: "Applications – Pharmaceutical Industry",
      points: [
        "Carrier & Bodying Agent: Improves consistency in syrups and tablets.",
      ],
    },
    {
      title: "Technical Specifications",
      points: [
        "Sweetness Level: Comparable to sucrose with 20–30% reduced intensity.",
        "pH: 4.5–5.5",
        "Solids Content: 75–80%",
        "Viscosity: 2,000–3,000 cP (at 25ºC)",
        "Certifications: Gluten-free, vegan, hypoallergenic, non-GMO.",
      ],
    },
    {
      title: "Why Choose STARlZ0® Clarified Rice Syrup?",
      points: [
        "Clean-Label Compliance: No artificial additives or preservatives.",
        "Versatility: Seamless integration into sweet and savory formulations.",
        "Health-Conscious: Supports reduced-sugar and low-GI product development.",
      ],
    },
  ];

  return (
    <div className="font-[para] mt-20">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${SyrupImg})` }}>
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
            STARlZ0® Clarified Rice Syrup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            Pure Sweetness, Enhance Functionality
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
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{card.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Button Section */}
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
