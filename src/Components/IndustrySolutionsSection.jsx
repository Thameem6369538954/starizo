import React from "react";
import { motion } from "framer-motion";
import Ak from "../Images/tahini-sesame-seeds-dark-background.jpg"

export default function IndustrySolutionsSection() {
  const industries = [
    {
      industry: "Confectionery",
      solution: "Reduced stickiness, anti-crystallization (High Maltose Syrup).",
    },
    {
      industry: "Pharma",
      solution: "Spray-drying aids, binders (Maltodextrin, Starch).",
    },
    {
      industry: "Sports Nutrition",
      solution: "High-protein solubility (Rice Protein Concentrate).",
    },
    {
      industry: "Bakery",
      solution: "Shelf-life extension, moisture retention (Rice Syrup, Starch).",
    },
  ];

  const compliance = {
    title: "Quality & Compliance",
    points: [
      "Certifications: FDA GRAS, EU Directive 95/2/EC, ISO 22000.",
      "Testing Protocols: Rigorous microbiological, heavy metal, pesticides and allergen testing.",
      "Traceability: Batch-wise documentation for supply chain transparency.",
    ],
  };

  return (
    <div className="font-[para] p-8 mt-60">
      {/* Title Section */}
     <div className="grid grid-cols-1 md:grid-cols-2">
             {/* Left - Image */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="bg-gray-300 h-72 md:h-96 flex items-center justify-center"
             >
              <img src={Ak} alt="" />
             </motion.div>
     
             {/* Right - Text */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="bg-gray-800 text-white p-10 flex flex-col justify-center relative"
             >
               <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-yellow-400" />
               <h2 className="text-3xl font-bold mb-4">STARIZO® Rice Protein</h2>
               <p className="text-gray-300 leading-relaxed">
                 Plant-Powered Nutrition, Uncompromised Performance – premium rice protein concentrate with 80% protein content for health and functionality.
               </p>
               <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-yellow-400" />
             </motion.div>
           </div>

      {/* Industry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-50" >
        {industries.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.industry}</h3>
            <p className="text-gray-700 text-base">{item.solution}</p>
          </motion.div>
        ))}
      </div>

      {/* Compliance Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 text-white p-8 rounded-lg mt-20"
      >
        <h3 className="text-2xl font-bold mb-4">{compliance.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
          {compliance.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
