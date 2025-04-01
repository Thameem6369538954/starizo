import { FaFlask, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
  return (
    <div className="container mx-auto p-6">
      <motion.div 
        className="grid md:grid-cols-2 gap-8 items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Formulation Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-green-700 text-xl font-bold flex items-center gap-2">
            <FaFlask /> FORMULATION
          </h2>
          <p className="text-gray-700 mt-2">
            Our accomplished New Product Development technocrats excel in creating bespoke formulations, including:
          </p>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Reduced Sugar Products</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Soluble Dietary Fibers & Proteins</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Reduced Calorie Ingredients</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Application of functional ingredients</li>
          </ul>
        </div>

        {/* Compliance Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-green-700 text-xl font-bold flex items-center gap-2">
            <FaCheckCircle /> COMPLIANCES & DECLARATIONS
          </h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Food Grade Declaration</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Traceability Statement</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Contaminant Statement</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Pesticide Statement</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Ionization/Irradiation Statement</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> GMO Status Statement</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Allergens Statement</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Cross-Contamination Management Statement</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedComponent;
