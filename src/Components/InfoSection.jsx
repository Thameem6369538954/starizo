import { FaFlask, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AA from "../Images/Formulation.jpg"
import AB from "../Images/closeup-mixed-rice.jpg"
const AnimatedComponent = () => {
  return (
    <div className="container mx-auto p-6 font-[para]">
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Formulation Section */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-2xl shadow-xl transition-all duration-300 flex flex-col gap-4"
        >
          <img
            src={AA} // 📷 Replace with your actual image path
            alt="Formulation"
            className="w-full h-60 object-cover rounded-lg mb-3"
          />
          <h2 className="text-green-700 text-2xl font-bold flex items-center gap-2">
            <FaFlask /> FORMULATION
          </h2>
          <p className="text-gray-700">
            Our accomplished New Product Development technocrats excel in creating bespoke formulations, including:
          </p>
          <ul className="mt-2 space-y-2 text-gray-700">
            {[
              "Reduced Sugar Products",
              "Soluble Dietary Fibers & Proteins",
              "Reduced Calorie Ingredients",
              "Application of functional ingredients"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                 {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Compliance Section */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-2xl shadow-xl transition-all duration-300 flex flex-col gap-4"
        >
          <img
            src={AB} // 📷 Replace with your actual image path
            alt="Compliance"
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <h2 className="text-green-700 text-2xl font-bold flex items-center gap-2">
            COMPLIANCES & DECLARATIONS
          </h2>
          <ul className="mt-2 space-y-2 text-gray-700">
            {[
              "Food Grade Declaration",
              "Traceability Statement",
              "Contaminant Statement",
              "Pesticide Statement",
              "Ionization/Irradiation Statement",
              "GMO Status Statement",
              "Allergens Statement",
              "Cross-Contamination Management Statement"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                 {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedComponent;
