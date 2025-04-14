import React, { useState } from "react";
import { motion } from "framer-motion";
import Ak from "../Images/tahini-sesame-seeds-dark-background.jpg";

export default function SplitSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="font-[para]">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Ak})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center text-white px-4 md:px-20 z-10"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            STARIZO® Rice Protein
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-xl max-w-3xl mx-auto"
          >
            Plant-Powered Nutrition, Uncompromised Performance – premium rice
            protein concentrate with 80% protein content for health and
            functionality.
          </motion.p>
        </motion.div>
      </div>

      {/* Cards Section */}
      <motion.div
        className="bg-gray-100 py-16 px-4 md:px-20"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-yellow-400 transition-transform hover:-translate-y-2 hover:shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <motion.button
            className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
            onClick={handleModalToggle}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4 py-8 overflow-y-auto">
          <div className="bg-white max-w-9xl w-full rounded-lg shadow-lg p-6 space-y-4 relative">
            <button
              onClick={handleModalToggle}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-4xl"
            >
              &times;
            </button>

            <h4 className="text-2xl font-semibold">STARIZO® High Maltose Syrup</h4>
            <p>Native Rice Starch derived from non-GMO Rice.</p>

            <h5 className="text-lg font-semibold">Specifications:</h5>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
              <li><strong>Appearance:</strong> Colourless thick viscous syrup</li>
              <li><strong>pH (50% solution):</strong> 4.8 – 5.5</li>
              <li><strong>Odor:</strong> Odorless</li>
              <li><strong>Identification:</strong> Passes test</li>
              <li><strong>Total plate count:</strong> 1000 Max</li>
              <li><strong>Yeast/Mold:</strong> 10 cfu/g Max</li>
              <li><strong>E. coli & Salmonella:</strong> Absent</li>
              <li><strong>Heavy Metals:</strong> Total ≤ 10 mg/kg (Arsenic ≤ 1, Lead ≤ 1, Cadmium ≤ 0.1, Mercury ≤ 0.05)</li>
              <li><strong>Pesticides & Contaminants:</strong> Complies with EC 396/2005 & 1881/2006</li>
            </ul>

            <h5 className="text-lg font-semibold">Applications:</h5>
            <p>
              Used in confectionery, chewing gum, fudge, jellies, muesli bars, bakery glaze, and ice cream.
            </p>

            <h5 className="text-lg font-semibold">Certifications to be acquired:</h5>
            <ol className="list-decimal list-inside space-y-1 text-sm md:text-base">
              <li>FSSC 22000: 2017</li>
              <li>ISO 9001:2015</li>
              <li>Halal-India/Indonesia</li>
              <li>Kosher</li>
              <li>FDA-IP/BP/USP</li>
              <li>Non-GMO</li>
              <li>NABL/ISO/IEC:2017</li>
              <li>BRC</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
