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
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-300 h-72 md:h-96 flex items-center justify-center overflow-hidden"
        >
          <img src={SyrupImg} alt="Clarified Rice Syrup" className="w-full h-full object-cover" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 text-white p-10 flex flex-col justify-center relative"
        >
          <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">STARlZ0® Clarifie@ Rice Syrup</h2>
          <p className="text-gray-300 leading-relaxed">
            Pure Sweetness, Enhance@ Functionality
          </p>
          <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-yellow-400" />
        </motion.div>
      </div>

      {/* Grid Cards */}
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
