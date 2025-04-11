import { motion } from "framer-motion";
import riceMillImg from "../Images/Mill.jfif";
import labImg from "../Images/Lab.jfif";
import rndImg from "../Images/rnd.jpg";

const Infrastructure = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="p-6 bg-white text-gray-900 font-[para]">
      <motion.h1
        className="lg:text-8xl tracking-wide font-bold text-center text-gray-800 mb-12 font-[Heading]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-8xl">O</span>UR{" "}
        <span className="text-[#fdc700]">
          <span className="text-8xl">I</span>NFRASTRUCTURE
        </span>
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 - Rice Mill */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <img src={riceMillImg} alt="Rice Mill" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-green-700">🏭 STATE-OF-THE-ART RICE MILL</h3>
            <p className="mt-3 text-gray-700">
              Our advanced rice mill boasts an output capacity of 550 MT per day, fully automated
              for precision and efficiency. We adhere to MR1 standards, ensuring high-quality production.
            </p>
          </div>
        </motion.div>

        {/* Card 2 - Lab */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <img src={labImg} alt="Lab" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-yellow-600">🔬 TESTING LABORATORY</h3>
            <p className="mt-3 text-gray-700">
              Our NABL-accredited facility ensures top-tier quality control through rigorous testing and analysis.
            </p>
          </div>
        </motion.div>

        {/* Card 3 - R&D */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <img src={rndImg} alt="R&D" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-700">🔍 R&D CENTRE</h3>
            <p className="mt-3 text-gray-700">
              Our Food Application Development Centre enables clients to conduct experiments and drive innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Infrastructure;
