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
    <div className="font-[para]  mt-30 ">
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

    <div className="text-base text-gray-700 space-y-2 overflow-y-auto max-h-[70vh]">
      <p><strong>Product:</strong> STARIZO – Native Rice Starch</p>
      <p><strong>Description:</strong> Native Rice Starch derived from non-GMO Rice.</p>

      <h3 className="font-semibold mt-4">Specifications:</h3>
      <p><strong>Physical/Chemical:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Appearance:</strong> White free flowing powder</li>
        <li><strong>Odor:</strong> Odourless</li>
        <li><strong>Moisture:</strong> 12.0% Max</li>
        <li><strong>pH (10% solution):</strong> 4.5 – 7.0</li>
        <li><strong>Brookfield Viscosity (5% @75°C):</strong> 1000Cps</li>
        <li><strong>Identification:</strong> Passes test</li>
      </ul>

      <p><strong>Microbiological:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>TPC/MAPC/SPC (cfu/g): 500</li>
        <li>Yeast and Mold (cfu/g): 100</li>
        <li>Salmonella (/25g): Absent</li>
        <li>E. coli (/10g): Absent</li>
      </ul>

      <p><strong>Nutrition Information (per 100g):</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>Energy (Kcal): 390</li>
        <li>Carbohydrates: 98.6g</li>
        <li>Sugar: ---</li>
        <li>Protein: 0.40g</li>
        <li>Total Fat: 0.20g</li>
        <li>Calcium: 14.0mg</li>
        <li>Iron: 5.0mg</li>
      </ul>

      <p><strong>Heavy Metals Value:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>Total Heavy Metals: 10 mg/kg Max</li>
        <li>Arsenic: 1 mg/kg Max</li>
        <li>Lead: 1 mg/kg Max</li>
        <li>Cadmium: 0.1 mg/kg Max</li>
        <li>Mercury: 0.05 mg/kg Max</li>
      </ul>

      <p><strong>Pesticide Residues:</strong> Complies with regulation (EC) 396/2005, as amended</p>
      <p><strong>Contaminants:</strong> Complies with regulation (EC) 1881/2006, as amended</p>

      <h3 className="font-semibold mt-4">Applications:</h3>
      <p><strong>Food:</strong> Bakery, Snacks, Thickening, Bulking, Texturizing, Herbs and Spices Carrier, Noodles, Soups, Chewing Gum, Condiments, Dehydrated Foods, Mixes, Gravies, Puddings, Sauces, and Brewing.</p>
      <p><strong>Cosmetics:</strong> Personal Care Products Such As Body Powders, Liquid Talc, Colour Cosmetics, Lotions, Creams, Gels, Deodorants, Dry Shampoo</p>
      <p><strong>Pharmaceuticals:</strong> Bulking, Binding, Dispersant and As An Excipient</p>

      <h3 className="font-semibold mt-4">Legislation / Specific Regulations:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>FCC FOOD STARCH</li>
        <li>FAO JECFA</li>
        <li>US Code of Federal Regulations: 21 CFR 172.892</li>
        <li>Commission Regulation (EU) No 231/2012 and its amendments</li>
        <li>FSSAI/FDA</li>
      </ul>

      <h3 className="font-semibold mt-4">Certifications (To Be Acquired):</h3>
      <ul className="list-disc list-inside ml-4">
        <li>FSSC 22000: 2017</li>
        <li>ISO 9001:2015</li>
        <li>Halal-India / Indonesia</li>
        <li>Kosher</li>
        <li>FDA-IP/BP/USP</li>
        <li>Non-GMO</li>
        <li>NABL/ISO/IEC:2017 Accreditation</li>
        <li>BRC</li>
      </ul>

      <p><strong>Contact:</strong> Thirumavadi Bio Energy, Chennai – info@tmbioenergy.com</p>
    </div>
  </div>
</div>

      )}
    </div>
  );
}
