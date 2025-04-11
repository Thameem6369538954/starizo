import React from "react";
import { motion } from "framer-motion";
import SyrupImg from "../Images/GM.jpg"; // Replace with actual image path

export default function HighMaltoseRiceSyrupSection() {
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
          <img src={SyrupImg} alt="High Maltose Rice Syrup" className="object-cover h-full w-full" />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 text-white p-10 flex flex-col justify-center relative"
        >
          <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">STARlZ0<sup>®</sup> High Maltose Rice Syrtp</h2>
          <p className="text-gray-300 leading-relaxed">
            <span className="text-yellow-400 font-bold block mb-2">Re@efining Sweetening Solutions</span>
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
        {/* Key Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Details:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><span className="font-semibold">Composition:</span> Derived from non-GMO rice starch via enzymatic hydrolysis.</li>
            <li><span className="font-semibold">Appearance:</span> Colorless, transparent syrup with honey-like notes.</li>
          </ul>
        </div>

        {/* Key Attributes */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Attributes:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><span className="font-semibold">Reduced Sweetness:</span> 30–40% lower sweetness vs. sucrose.</li>
            <li><span className="font-semibold">Functional Benefits:</span> Humectancy, freezing point depression, low GI (glycemic index).</li>
          </ul>
        </div>

        {/* Applications */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Applications:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><span className="font-semibold">Confectionery:</span> Reduces crystallization in candies.</li>
            <li><span className="font-semibold">Bakery:</span> Extends freshness in breads and cakes.</li>
            <li><span className="font-semibold">Dairy:</span> Enhance texture in ice creams and flavoured yogurts.</li>
            <li><span className="font-semibold">Brewery:</span> Fermentable sugar for reduced-calorie beverages.</li>
          </ul>
        </div>

        {/* Technical Specs */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Specifications:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><span className="font-semibold">Maltose Content:</span> 40 - 85</li>
            <li><span className="font-semibold">Dextrose Equivalent (DE):</span> 40 - 55</li>
            <li><span className="font-semibold">Moisture:</span> ≤20%</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
