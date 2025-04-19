import React, { useState } from "react";
import { motion } from "framer-motion";
import RiceImg from "../Images/Starizo_Web_Banner_1899x501-03.jpg";
import { X } from "lucide-react";

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
    <div className="font-[para]  mt-30 ">
      {/* Hero Section */}
      <div
        className="relative w-full  bg-cover bg-center flex items-center justify-center"
        // style={{ backgroundImage: `url(${RiceImg})` }}
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
        </motion.div> */}
        <img src={RiceImg} alt="" />
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
         className=" relative bg-white rounded-xl shadow-lg p-6 max-h-[90vh] overflow-y-auto w-full max-w-5xl mx-4"
         initial={{ scale: 0.8 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0.8 }}
       >
        <button
  onClick={() => setIsModalOpen(false)}
  className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
  aria-label="Close"
>
  <X size={24} />
</button>

         <h2 className="text-2xl font-bold mb-4 text-gray-800">
           STARIZO® Rice Maltodextrin – Technical Data Sheet
         </h2>
 
         <p className="mb-4 text-sm text-gray-700">
           Rice Maltodextrin derived from non-GMO rice starch through partial
           hydrolysis, our maltodextrin delivers a versatile functional
           carbohydrate profile, ideal for applications requiring mild sweetness,
           improved texture, and solubility.
         </p>
 
         <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
           {/* Specifications */}
           <div>
             <h3 className="font-semibold text-lg mb-2">Specifications</h3>
 
             <h4 className="font-semibold mb-1">Physical Chemical:</h4>
             <ul className="list-disc list-inside mb-3">
               <li>Appearance: White free flowing powder</li>
               <li>Moisture: 5.00 Max</li>
               <li>pH (10% w/v solution): 4.5 – 6.5</li>
               <li>Dextrose equivalent: 10 – 20%</li>
               <li>Identification: Passes test</li>
             </ul>
 
             <h4 className="font-semibold mb-1">Microbiological:</h4>
             <ul className="list-disc list-inside mb-3">
               <li>Total plate count: 500 cfu/g Max</li>
               <li>Yeast: 20 cfu/g Max</li>
               <li>Mold: 20 cfu/g Max</li>
               <li>E. coli: Absent</li>
               <li>Coli Forms MPN: 30</li>
               <li>Salmonella (25g): Absent</li>
               <li>S. Aureus: Absent</li>
             </ul>
 
             <h4 className="font-semibold mb-1">Nutrition Information:</h4>
             <ul className="list-disc list-inside mb-3">
               <li>Energy: 381 Kcal</li>
               <li>Carbohydrates: 95 g</li>
               <li>Sugar: 29 g</li>
               <li>Protein: 0.1 g</li>
               <li>Total Fat: 0 g</li>
               <li>Cholesterol: 0 mg</li>
               <li>Sodium: 30.5 mg</li>
               <li>Potassium: &lt;4 mg</li>
             </ul>
 
             <h4 className="font-semibold mb-1">Heavy Metals Value:</h4>
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
           </div>
 
           {/* Applications and Regulations */}
           <div>
             <h3 className="font-semibold text-lg mb-2">Applications</h3>
             <ul className="list-disc list-inside mb-4">
               <li>Baby Food</li>
               <li>Baked Goods</li>
               <li>Beers, Lagers</li>
               <li>Condiments, Desserts</li>
               <li>Energy Shots/Drinks</li>
               <li>Infant Foods, Medicines</li>
               <li>Non-Dairy Frozen Treats</li>
               <li>Powdered Beverages</li>
               <li>Sauces, Spices</li>
             </ul>
 
             <h4 className="font-semibold mb-1">Legislation / Specific Regulations:</h4>
             <ul className="list-disc list-inside mb-4">
               <li>FCC Maltodextrin</li>
               <li>US CFR: 21 CFR 184.1444</li>
               <li>GB/T 20882.6 – FSSAI / FDA</li>
             </ul>
 
             <h4 className="font-semibold mb-1">Pesticide Residues:</h4>
             <p className="mb-2">
               Complies with regulation (EC) 396/2005, as amended.
             </p>
 
             <h4 className="font-semibold mb-1">Contaminants:</h4>
             <p className="mb-2">
               Complies with regulation (EC) 1881/2006, as amended.
             </p>
 
             <h4 className="font-semibold mb-1">Certifications: To Be Acquired</h4>
             <ul className="list-disc list-inside">
               <li>FSSC 22000: 2017</li>
               <li>ISO 9001:2015</li>
               <li>Halal - India / Indonesia</li>
               <li>Kosher</li>
               <li>FDA-IP/BP/USP</li>
               <li>Non-GMO</li>
               <li>NABL / ISO / IEC: 2017</li>
               <li>BRC</li>
             </ul>
           </div>
         </div>
       </motion.div>
     </motion.div>
 
      )}
    </div>
  );
}
