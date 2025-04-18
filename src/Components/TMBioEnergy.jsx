import { motion } from "framer-motion";
import qq from "../Images/qq.jpg";

const features = [
  {
    title: "Rooted in Innovation",
    content:
      "Over 50 years of paddy power and 15+ years of rice magic, now rolling across India and Europe!",
  },
  {
    title: "Sustainable Starch Solutions",
    content:
      "Gluten-free, guilt-free, high-tech rice starch made with love and certified goodness.",
  },
  {
    title: "Dedicated Capacity",
    content:
      "We don’t just scale — we super-size your custom rice dreams. Full throttle rice vibes!",
  },
  {
    title: "Supply Chain Zing",
    content:
      "Right from the source to your doorstep — lightning fast, no drama, all rice.",
  },
  {
    title: "Global Certified Cool",
    content:
      "We’re rocking ISO, FSSC, and FDA badges like a flex. Also? We’re kind to the planet.",
  },
  {
    title: "Clean, Ethical & Epic",
    content:
      "Gluten-free, non-GMO, and farmer-fueled. Clean label with that feel-good glow.",
  },
];

const funkyVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const StarizoOverview = () => {
  return (
    <section className="relative py-24 px-6 md:px-20 font-[para]">
      <div className="relative max-w-7xl mx-auto text-center z-10 font-[para]">
        {/* Brand Intro Section */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold font-[Heading] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          TM Bio <span className="text-black">Energy Initiative</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-800 font-semibold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Fueling the future with bold rice moves 🚀
        </motion.p>

        {/* Add Overview Content */}
        <div className="mt-16 text-gray-800 font-medium text-lg md:text-xl">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Our Legacy & Vision
          </h3>
          <p>
            Rooted in the fertile Cauvery Delta of Tamil Nadu, India, TM Bio
            Energy, through its brand Starizo, is redefining the role of
            rice-derived ingredients as a driver of innovation and performance
            in both the global food system and industrial applications.
          </p>
          <p className="mt-6">
            With over four decades of expertise and a trusted legacy under the
            Cauvery brand, which serves discerning markets across India and
            Europe, we are now scaling our vision as we transform premium
            non-GMO rice into a high-performance portfolio of rice-derived
            ingredients tailored for the global B2B sector.
          </p>
          <p className="mt-6">
            At Starizo, we combine advanced processing technologies with
            sustainable practices to deliver a new generation of high-purity rice
            starches and derivatives designed for industrial excellence. Our
            portfolio meets the most rigorous international quality standards
            (ISO, FSSAI, FDA-compliant) and provides gluten-free, non-allergenic
            solutions that address critical needs across the food ingredients,
            pharmaceutical, and specialty manufacturing sectors.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8">
            Our Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-9xl p-8 shadow-lg border-4 border-transparent hover:border-yellow-400 hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
                variants={funkyVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <h4 className="text-2xl font-bold text-pink-600 mb-6">
                  {item.title}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarizoOverview;
