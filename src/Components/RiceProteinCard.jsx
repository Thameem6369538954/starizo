  import React, { useState } from "react";
  import { motion } from "framer-motion";
  import Ak from "../Images/Starizo_Web_Banner_1899x501-02.jpg";

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
      <div className="font-[para]  mt-35 ">
        {/* Hero Section */}
        <div
          className="relative w-full bg-cover bg-center flex items-center justify-center"
          // style={{ backgroundImage: `url(${Ak})` }}
        >
          {/* <div className="absolute inset-0 bg-black/60"></div>
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
          </motion.div> */}
          <img src={Ak} alt="" />
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
    className="bg-white p-6 md:p-10 w-full h-full md:h-[90vh] md:w-[80%] overflow-auto rounded-lg shadow-lg relative"
    initial={{ y: -30 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
      STARIZO® Rice Protein – Full Data Sheet
    </h3>

    <div className="space-y-6 text-gray-700 text-[16px] leading-relaxed">

      <section>
        <h4 className="font-semibold text-xl mb-2">🌾 Description</h4>
        <p>
          Rice Protein Concentrate extracted from non-GMO rice, this plant-based protein concentrate
          retains key functional properties, including high digestibility, clean flavor, and excellent
          dispersibility, ideal for nutritional, sports, and alternative meat & dairy formulations.
        </p>
      </section>

      <section>
        <h4 className="font-semibold text-xl mb-2">📌 Physical & Chemical</h4>
        <ul className="list-disc ml-6">
          <li>Appearance: Creamish free flowing powder</li>
          <li>Moisture: Max 10.00%</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold text-xl mb-2">🧫 Microbiological</h4>
        <ul className="list-disc ml-6">
          <li>Total plate count: &lt;500 cfu/g</li>
          <li>Yeast: &lt;10 cfu/g</li>
          <li>Mold: &lt;10 cfu/g</li>
          <li>E. coli (per 10g): Absent</li>
          <li>Coliforms MPN: &lt;10</li>
          <li>Salmonella (25g): Absent</li>
          <li>S. Aureus: Absent</li>
          <li>Bacillus cereus: 100 /g max</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold text-xl mb-2">🧪 Nutrition Information (per 100g)</h4>
        <ul className="list-disc ml-6">
          <li>Energy: 390 Kcal</li>
          <li>Carbohydrates (Total): 11g</li>
          <li>Sugar: 4.5g</li>
          <li>Protein: 85g</li>
          <li>Total Fat: 0.4g</li>
          <li>Calcium: 14mg</li>
          <li>Iron: 5mg</li>
          <li>Phosphorous: 0.20%</li>
          <li>Potassium: 0.002%</li>
          <li>Magnesium: 0.007%</li>
          <li>Manganese: 0.003%</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold text-xl mb-2">⚠️ Heavy Metals</h4>
        <ul className="list-disc ml-6">
          <li>Total Heavy Metals: Max 10 mg/kg</li>
          <li>Arsenic: Max 1 mg/kg</li>
          <li>Lead: Max 1 mg/kg</li>
          <li>Cadmium: Max 0.1 mg/kg</li>
          <li>Mercury: Max 0.05 mg/kg</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold text-xl mb-2">🍽️ Applications</h4>
        <ul className="list-disc ml-6">
          <li>Baked Goods and Baking Mixes (Breads, Rolls, Bagels, English Muffins)</li>
          <li>Beverages and Non-Milk Based Meal Replacements</li>
          <li>Breakfast Cereals Ready-to-Eat</li>
          <li>Dairy Product Analogues - Soy/Imitation Milks</li>
          <li>Margarine, Salad Dressings</li>
          <li>Health Bars and Snacks</li>
          <li>Grain-Based Bars Containing Fruits/Vegetables</li>
          <li>Flavored Milk Drinks & Milk-Based Meal Replacements</li>
          <li>Plant Protein Products - Meat Alternatives</li>
          <li>Fruit Juices and Smoothies</li>
          <li>Vegetable/Tomato Juices, Vegetable Smoothies</li>
          <li>Soups, Soup Mixes and Condensed Soups</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold text-xl mb-2">📜 Legislation / Specific Regulations</h4>
        <ul className="list-disc ml-6">
          <li>Codex Alimentarius CXS 174-1989</li>
          <li>Pesticide Residues: Complies with regulation (EC) 396/2005</li>
          <li>Contaminants: Complies with regulation (EC) 1881/2006</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold text-xl mb-2">✅ Certifications (To Be Acquired)</h4>
        <ul className="list-disc ml-6">
          <li>FSSC 22000:2017</li>
          <li>ISO 9001:2015</li>
          <li>Halal (India/Indonesia)</li>
          <li>Kosher</li>
          <li>FDA-IP/BP/USP</li>
          <li>Non-GMO</li>
          <li>NABL/ISO/IEC:2017 Accreditation</li>
          <li>BRC</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold text-xl mb-2">📍 Manufacturer</h4>
        <p>
          THIRUMAVADI BIO ENERGY<br />
          21, C.V. Raman Road, Alwarpet, Chennai – 600 018<br />
          📧 info@tmbioenergy.com | 📞 +91 81411 66866<br />
          🌐 www.starizo.com
        </p>
      </section>
    </div>

    {/* Close Button */}
    <div className="absolute top-6 right-6">
      <motion.button
        className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
        onClick={handleModalToggle}
      >
        Close
      </motion.button>
    </div>

    {/* Download PDF */}
    <div className="mt-8 text-center">
      <a
        href="/starizo-brochure.pdf"
        download
        className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
      >
        Download PDF
      </a>
    </div>
  </motion.div>
</motion.div>

)}

      </div>
    );
  }
