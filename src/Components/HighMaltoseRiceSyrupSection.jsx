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

  // Function to handle modal toggle
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
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
            STARIZO® Rice Protein
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            Plant-Powered Nutrition, Uncompromised Performance – premium rice
            protein concentrate with 80% protein content for health and
            functionality.
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
              <p className="text-gray-600 text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Button to Open Modal */}
        <div className="text-center mt-8">
          <motion.button
            className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
            onClick={handleModalToggle}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Full Page Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-10 w-full h-full overflow-auto max-w-full"
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">More Details</h3>
            <p className="text-xl text-gray-700 mb-6">
              Here’s more info about the STARIZO® Rice Protein, including
              nutritional breakdown, sourcing details, and benefits for your
              health and performance.
            </p>
            <div className="flex justify-end">
              <motion.button
                className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 transition"
                onClick={handleModalToggle}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
