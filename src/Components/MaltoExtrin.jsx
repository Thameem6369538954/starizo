import React, { useState } from "react";
import { motion } from "framer-motion";
import RiceImg from "../Images/Bg.png";

export default function RiceMaltodextrinSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        style={{ backgroundImage: `url(${RiceImg})` }}
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
            STARIZO® Rice Maltodextrin
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
            onClick={() => setIsModalOpen(true)}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 max-h-[100vh] overflow-y-auto w-full max-w-9xl mx-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              STARIZO® Rice Maltodextrin – Technical Data Sheet
            </h2>

            <div className="text-sm text-gray-700 space-y-4">
              <section>
                <h3 className="font-semibold text-lg mb-1">Physical Chemical</h3>
                <ul className="list-disc list-inside">
                  <li>Appearance: White free flowing powder</li>
                  <li>Moisture (%): 5.00 Max</li>
                  <li>pH (10% w/v solution): 4.5 – 6.5</li>
                  <li>Dextrose equivalent: 10 – 20%</li>
                  <li>Identification: Passes test</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-1">Microbiological</h3>
                <ul className="list-disc list-inside">
                  <li>Total plate count: 500 cfu/g Max</li>
                  <li>Yeast: 20 cfu/g</li>
                  <li>Mold: 20 cfu/g</li>
                  <li>E. coli (per 10g): Absent</li>
                  <li>Coliforms MPN: 30</li>
                  <li>Salmonella/25g: Absent</li>
                  <li>S. Aureus/g: Absent</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-1">Nutrition Information (per 100g)</h3>
                <ul className="list-disc list-inside">
                  <li>Energy: 381 Kcal</li>
                  <li>Total Carbohydrates: 95g</li>
                  <li>Sugar: 29g</li>
                  <li>Protein: 0.1g</li>
                  <li>Total Fat: 0g</li>
                  <li>Cholesterol: 0mg</li>
                  <li>Sodium: 30.5mg</li>
                  <li>Potassium: &lt;4mg</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-1">Heavy Metals</h3>
                <ul className="list-disc list-inside">
                  <li>Total Heavy Metals: 10 mg/kg Max</li>
                  <li>Arsenic: 0.2 mg/kg Max</li>
                  <li>Lead: 0.02 mg/kg Max</li>
                  <li>Cadmium: 0.01 mg/kg Max</li>
                  <li>Mercury: 0.02 mg/kg Max</li>
                  <li>Aluminum: 1 mg/kg Max</li>
                  <li>Phosphorous: 100 mg/kg Max</li>
                  <li>Magnesium: 20 mg/kg Max</li>
                  <li>Iron: 1 mg/kg Max</li>
                  <li>Copper: 1 mg/kg Max</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-1">Applications</h3>
                <p>
                  Baby Food, Baked Goods, Beers, Lagers, Condiments, Desserts, Energy Shots, Energy Drinks, Infant Foods, Medicines, Non-Dairy Frozen Treats, Powdered Beverages, Sauces, Spices.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-1">Regulations & Compliance</h3>
                <ul className="list-disc list-inside">
                  <li>FCC Maltodextrin</li>
                  <li>US Code of Federal Regulations: 21 CFR 184.1444</li>
                  <li>GB/T 20882.6 – FSSAI/FDA</li>
                  <li>Pesticide Residues: Complies with EC 396/2005</li>
                  <li>Contaminants: Complies with EC 1881/2006</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-1">Certifications (To Be Acquired)</h3>
                <ul className="list-disc list-inside">
                  <li>FSSC 22000: 2017</li>
                  <li>ISO 9001:2015</li>
                  <li>Halal – India / Indonesia</li>
                  <li>Kosher</li>
                  <li>FDA – IP/BP/USP</li>
                  <li>Non-GMO</li>
                  <li>NABL / ISO / IEC: 2017 Accreditation</li>
                  <li>BRC</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-1">Contact Info</h3>
                <p>
                  <strong>Thirumavadi Bio Energy</strong><br />
                  21, C.V. Raman Road, Alwarpett, Chennai–600 018, Tamilnadu, India. <br />
                  Email: info@tmbioenergy.com <br />
                  Phone: +91 81411 66866 <br />
                  Website: <a href="http://www.starizo.com" target="_blank" className="text-blue-600 underline">www.starizo.com</a>
                </p>
              </section>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 px-5 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
