import { motion } from "framer-motion";

const Infrastructure = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="p-6 bg-white text-gray-900 font-[para]">
          <motion.h1
                        className="lg:text-6xl tracking-wide font-bold text-center text-gray-800 mb-8 font-[Heading]"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        Our <span className="text-[#fdc700]">INFRASTRUCTURE</span>
                      </motion.h1>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
        className="text-3xl font-bold text-green-700 mb-6"
      >
        🌾 INFRASTRUCTURE
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Rice Mill Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          className="p-6 bg-white shadow-lg rounded-lg"
        >
          <h3 className="text-xl font-bold text-green-700">🏭 STATE-OF-THE-ART RICE MILL</h3>
          <p className="mt-2 text-gray-700">
            Our advanced rice mill boasts an output capacity of 550 MT per day, fully automated
            for precision and efficiency. We adhere to MR1 standards, ensuring high-quality production.
          </p>
        </motion.div>

        {/* Testing Laboratory Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          className="p-6 bg-white shadow-lg rounded-lg"
        >
          <h3 className="text-xl font-bold text-yellow-600">🔬 TESTING LABORATORY</h3>
          <p className="mt-2 text-gray-700">
            Our NABL-accredited facility ensures top-tier quality control through rigorous testing and analysis.
          </p>
        </motion.div>

        {/* R&D Centre Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          className="p-6 bg-white shadow-lg rounded-lg"
        >
          <h3 className="text-xl font-bold text-blue-700">🔍 R&D CENTRE</h3>
          <p className="mt-2 text-gray-700">
            Our Food Application Development Centre enables clients to conduct experiments and drive innovation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Infrastructure;
