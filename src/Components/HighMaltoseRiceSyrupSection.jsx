import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Ak from "../Images/Starizo_Web_Banner_1899x501-05.jpg";

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
    <div className="font-[para] mt-35 ">
      {/* Hero Section */}
      <div
        className="relative w-full  bg-cover bg-center flex items-center justify-center"
        // style={{ backgroundImage: `url(${Ak})` }}
      >
        {/* <div className="absolute inset-0 bg-black/60"></div>
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
        </motion.div> */}
        <img src={Ak} alt="" />
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
      <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4 py-8 overflow-y-auto"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white max-w-9xl w-full rounded-2xl shadow-xl p-8 space-y-6 relative"
          >
            <button
              onClick={handleModalToggle}
              className="absolute top-4 right-5 text-gray-500 hover:text-black text-4xl"
            >
              &times;
            </button>

            <h4 className="text-3xl font-bold text-gray-800">STARIZO® High Maltose Syrup</h4>
            <p className="text-gray-600">
              Rice High Maltose Syrup enzymatically hydrolyzed from non-GMO rice starch, this clear,
              viscous syrup features a high maltose content and a balanced carbohydrate profile,
              offering enhanced sweetness, reduced hygroscopicity, and excellent process stability.
            </p>

            <section>
              <h5 className="text-xl font-semibold text-gray-700 mb-2">Specifications</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li><strong>Appearance:</strong> Colourless thick viscous syrup</li>
                  <li><strong>pH (50% solution):</strong> 4.8 – 5.5</li>
                  <li><strong>Odour:</strong> Odourless</li>
                  <li><strong>Viscosity:</strong> NA</li>
                  <li><strong>Identification:</strong> Passes test</li>
                </ul>
                <ul className="space-y-1">
                  <li><strong>Total plate count:</strong> 1000 Max</li>
                  <li><strong>Yeast (cfu/g):</strong> 10 Max</li>
                  <li><strong>Mold (cfu/g):</strong> 10 Max</li>
                  <li><strong>E. coli (per 10g):</strong> Absent</li>
                  <li><strong>Salmonella (per 25g):</strong> Absent</li>
                </ul>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li><strong>Total Heavy Metals:</strong> 10 mg/kg Max</li>
                  <li><strong>Arsenic:</strong> 1 mg/kg Max</li>
                  <li><strong>Lead:</strong> 1 mg/kg Max</li>
                  <li><strong>Cadmium:</strong> 0.1 mg/kg Max</li>
                  <li><strong>Mercury:</strong> 0.05 mg/kg Max</li>
                </ul>
                <ul className="space-y-1">
                  <li><strong>Pesticide Residues:</strong> Complies with EC 396/2005</li>
                  <li><strong>Contaminants:</strong> Complies with EC 1881/2006</li>
                </ul>
              </div>
            </section>

            <section>
              <h5 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Applications</h5>
              <p className="text-gray-600 text-sm">
                Used in food such as Confectionery - Caramel and Toffees, Chewing Gum, Fudge and Fondants, Gums and Jellies, High Boiling’s, Muesli Bars and Nougats, Bakery Glaze, Ice-Cream.
              </p>
            </section>

            <section>
              <h5 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Certifications to be Acquired</h5>
              <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                <li>FSSC 22000: 2017</li>
                <li>ISO 9001:2015</li>
                <li>Halal-India/Indonesia</li>
                <li>Kosher</li>
                <li>FDA-IP/BP/USP</li>
                <li>Non-GMO</li>
                <li>NABL/ISO/IEC:2017 Accreditation</li>
                <li>BRC</li>
              </ol>
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}
