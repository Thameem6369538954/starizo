import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import AA from "../Images/AA.png"
import AB from "../Images/AB.png"
import AC from "../Images/AC.png"
import AD from "../Images/AD.png"
import AE from "../Images/AE.png"
import AF from "../Images/AF.png"
import AG from "../Images/AG.png"
import AH from "../Images/AH.png"
import Halal from "../Images/Halal.png"
import Nabl from "../Images/Nabl.png"
const certifications = [
    AA, AB, AC, AD,
    AE, AF, AG, AH, Halal ,Nabl
];

export default function Certifications() {
  return (
    <div className="bg-white py-10 px-5">
      <div className="flex items-center gap-2 mb-5">
        <FaCertificate className="text-green-600 text-2xl" />
        <h2 className="text-xl font-bold text-green-600">CERTIFICATIONS</h2>
      </div>
      <div className="overflow-hidden w-full relative">
        <motion.div
          className="flex space-x-10"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {certifications.map((cert, index) => (
            <div key={index} className="w-24 h-24 flex-shrink-0">
              <img src={cert} alt="Certification" width={96} height={96} className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}