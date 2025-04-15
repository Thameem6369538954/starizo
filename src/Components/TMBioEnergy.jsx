import { motion } from "framer-motion";
import qq from "../Images/qq.jpg"
const StarizoOverview = () => {
  return (
    <section
    className="bg-cover bg-center bg-no-repeat py-20 px-4 md:px-24 font-[para]"
    style={{ backgroundImage: `url(${qq})` }}
  >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-8xl tracking-wide font-bold text-center  font-[Heading] text-[#fdc700] "
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
         <span className="text-black">TM Bio</span>  <span className="" >Energy Initiative</span>
        </motion.h2>

        <motion.p
          className="text-2xl md:text-3xl text-gray-700  text-center p-5 font-medium "
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Global Leader in Rice Innovation
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            {
              title: "Rooted in Innovation",
              content:
                "Based in the fertile Cauvery Delta of Tamil Nadu, Starizo has cultivated over 50 years of paddy expertise and 15 years of premium rice production under the renowned Cauvery brand, serving India and Europe.",
            },
            {
              title: "Sustainable Starch Solutions",
              content:
                "Using advanced tech and sustainable practices, we produce high-purity, gluten-free rice starch and derivatives for food, pharma, and industrial sectors—compliant with ISO, FSSAI, and FDA standards.",
            },
            {
              title: "Dedicated Capacity",
              content:
                "Our exclusive manufacturing lines ensure partners receive priority volumes and fully customized rice starch output with global scalability in mind.",
            },
            {
              title: "Supply Chain Efficiency",
              content:
                "Our facilities are located close to raw material sources, enabling cost-effective operations, reduced lead times, and reliable end-to-end delivery.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-3xl font-semibold text-gray-800 mb-5">
                {item.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StarizoOverview;
