import React from "react";
import { motion } from "framer-motion";
import RiceImg from "../Images/Bg.png"; // replace with actual rice-related image

export default function RiceMaltodextrinSection() {
  return (
    <div className="font-[para] p-8 mt-60">
      {/* Top Section - Image + Text */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-300 h-72 md:h-96 flex items-center justify-center"
        >
          <img src={RiceImg} alt="Rice Maltodextrin" className="object-cover h-full w-full" />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 text-white p-10 flex flex-col justify-center relative"
        >
          <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">
            STARlZ0<sup>®</sup> Rice Malto@extrin
          </h2>
          <p className="text-gray-300 leading-relaxed">
            <span className="text-yellow-400 font-bold block mb-2">The Multi-Functional Workhorse</span>
            Partial enzymatic hydrolysis of rice starch. Neutral-tasting white powder.
          </p>
          <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-yellow-400" />
        </motion.div>
      </div>

      {/* Key Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 p-8 rounded-lg shadow-md mt-12 space-y-8"
      >
        {/* Functional Roles */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Functional Roles:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><span className="font-semibold">Thickener & Stabilizer:</span> Ideal for soups, sauces, and dairy alternatives.</li>
            <li><span className="font-semibold">Spray-Drying Aid:</span> Enhances powder solubility in pharmaceuticals.</li>
            <li><span className="font-semibold">Bulking Agent:</span> Reduces calories in snacks and desserts.</li>
          </ul>
        </div>

        {/* Applications */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Applications:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><span className="font-semibold">Baby Food:</span> Hypoallergenic base for sensitive formulations.</li>
            <li><span className="font-semibold">Pharmaceuticals:</span> Excipient for tablets and wound-healing products.</li>
            <li><span className="font-semibold">Beverages:</span> Improves mouthfeel in powdered drinks.</li>
          </ul>
        </div>

        {/* Technical Specs */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Specifications:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><span className="font-semibold">DE Value:</span> 10–20</li>
            <li><span className="font-semibold">Solubility:</span> ≥98%</li>
            <li><span className="font-semibold">Particle Size:</span> 80–100 mesh</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
