import React, { useState } from "react";
import { motion } from "framer-motion";
import SyrupImg from "../Images/closeup-mixed-rice.jpg"; // Replace with your actual image path

export default function ClarifiedSyrupSection() {
  const [showModal, setShowModal] = useState(false);

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
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${SyrupImg})` }}
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

        {/* Button Section */}
        <div className="text-center mt-8">
          <motion.button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
<div className="bg-white rounded-xl shadow-xl max-w-8xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
<button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-4xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              STARIZO® Clarified Rice Syrup – Product Data Sheet
            </h3>

            <div className="text-gray-700 space-y-4 text-base">
              <h4 className="text-xl font-semibold">Specifications</h4>
              <ul className="list-disc list-inside">
                <li><strong>Appearance:</strong> Colourless thick viscous syrup</li>
                <li><strong>pH (50% solution):</strong> 4.8 – 5.5</li>
                <li><strong>Odor:</strong> Odorless</li>
                <li><strong>Identification:</strong> Passes test</li>
              </ul>

              <h4 className="text-xl font-semibold">Microbiological</h4>
              <ul className="list-disc list-inside">
                <li>Total plate count: 1000 Max</li>
                <li>Yeast/Mold: 10 Max</li>
                <li>E. coli / Salmonella: Absent</li>
              </ul>

              <h4 className="text-xl font-semibold">Nutrition Information (per 100g)</h4>
              <ul className="list-disc list-inside">
                <li>Energy: 316 Kcal</li>
                <li>Carbohydrates: 79g</li>
                <li>Total Fat: &lt;0.1g | Sugar: 19g</li>
                <li>Dietary Fiber: 0g | Trans Fat: 0g | Saturated Fat: &lt;0.1g</li>
                <li>Cholesterol: 0mg | Sodium: &lt;10mg</li>
              </ul>

              <h4 className="text-xl font-semibold">Heavy Metals</h4>
              <ul className="list-disc list-inside">
                <li>Total Heavy Metals: 10 mg/kg Max</li>
                <li>Arsenic: &lt;0.1 mg/kg | Lead: 0.05 mg/kg</li>
                <li>Cadmium: 0.05 mg/kg | Mercury: 0.01 mg/kg</li>
              </ul>

              <h4 className="text-xl font-semibold">Applications</h4>
              <p>
                Used in ice cream, beverages, yoghurts, desserts, pharmacy,
                biscuits, sauces, baby foods, cosmetics, bakery, and more.
              </p>

              <h4 className="text-xl font-semibold">Certifications To Be Acquired</h4>
              <ol className="list-decimal list-inside">
                <li>FSSC 22000: 2017</li>
                <li>ISO 9001:2015</li>
                <li>Halal-India/Indonesia</li>
                <li>Kosher</li>
                <li>FDA-IP/BP/USP</li>
                <li>Non-GMO</li>
                <li>NABL/ISO/IEC:2017 Accreditation</li>
                <li>BRC</li>
              </ol>

              <h4 className="text-xl font-semibold">Regulations</h4>
              <p>
                Pesticide Residues: Complies with EC 396/2005<br />
                Contaminants: Complies with EC 1881/2006
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
