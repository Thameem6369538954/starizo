import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animation

const TripleAAA = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#f0f0f0] text-center">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -50 }} // Initial state: invisible and slightly above
        animate={{ opacity: 1, y: 0 }}   // Final state: fully visible and in original position
        transition={{ duration: 0.8 }}    // Duration of the animation
      >
        Our Triple AAA Principles
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Availability Section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly below
          animate={{ opacity: 1, y: 0 }}  // Final state: fully visible and in original position
          transition={{ duration: 0.6 }}  // Duration of the animation
        >
          <h3 className="text-3xl font-semibold text-[#28563a] mb-4">Availability</h3>
          <p className="text-lg text-gray-700">
            Secure supply chain with direct farmer relationships, ensuring consistent and reliable delivery.
          </p>
          <ul className="mt-4 text-gray-600">
            <motion.li
              className="mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              - Direct relationships with farmers
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              - Dedicated production capacity for custom solutions
            </motion.li>
          </ul>
        </motion.div>

        {/* Affordability Section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-[#28563a] mb-4">Affordability</h3>
          <p className="text-lg text-gray-700">
            Optimized pricing through vertical integration and biomass energy.
          </p>
          <ul className="mt-4 text-gray-600">
            <motion.li
              className="mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              - Vertical integration across the supply chain
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              - Cost-effective biomass energy generation
            </motion.li>
          </ul>
        </motion.div>

        {/* Add a Placeholder for the Third 'A' (if applicable) */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-[#28563a] mb-4">(Third Principle)</h3>
          <p className="text-lg text-gray-700">
            Add another principle here if needed (e.g., Accessibility, Assurance, etc.).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TripleAAA;
