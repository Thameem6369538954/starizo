import React from "react";
import PA from "../Images/PA.jpg";
import PB from "../Images/PB.jpg";
import PC from "../Images/PC.jpg";
import PD from "../Images/PD.jpg";
import { motion } from "framer-motion";
const products = [
  {
    id: 1,
    image: PA,
    title: "Native Rice Starch",
    location: "Native Rice Starch derived from non-GMO Rice.",
    date: "Specifications: (Chemical & Physical)",
    link: "/product/native-rice-starch",
  },
  {
    id: 2,
    image: PB,
    title: "Rice Maltodextrin",
    location:
      "A slightly hygroscopic, fine, white powder manufactured by spray drying partially hydrolyzed food-grade refined non-GMO Rice starch.",
    date: "Specifications: (Chemical & Physical)",
    link: "/product/rice-maltodextrin",
  },
  {
    id: 3,
    image: PC,
    title: "Clarified Rice Syrups",
    location:
      "Colorless to slight yellow thick viscous syrup used in confectionery, bakery, beverages, nutraceuticals & pharmaceuticals.",
    date: "Specifications: (Chemical & Physical)",
    link: "/product/clarified-rice-syrups",
  },
  {
    id: 4,
    image: PD,
    title: "High Maltose Syrup",
    location:
      "Colorless thick viscous Syrup used in confectionery, bakery, beverages, breweries, nutraceuticals & Pharmaceuticals.",
    date: "Specifications: (Chemical & Physical)",
    link: "/product/high-maltose-syrup",
  },
];

export default function ProductGrid() {
  return (
    <div>
<motion.h1
                className="lg:text-6xl tracking-wide font-bold text-center text-gray-800 mb-8 font-[Heading]"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Our <span className="text-[#fdc700]">Products</span>
              </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:p-10 p-3 bg-white font-[para]">
      {products.map((product) => (
        <a
          key={product.id}
          href={product.link}
          className="relative w-72 h-96 overflow-hidden rounded-2xl shadow-lg group block"
        >
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Always Visible Title Below Image */}
          <div className="absolute bottom-0 w-full bg-black/80 text-white py-2 text-center">
            <h2 className="text-lg font-semibold">{product.title}</h2>
          </div>

          {/* Hover Overlay (Shows Description & Date) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
          <h2 className="text-lg text-white">{product.title}</h2>

            <p className="text-white text-sm">{product.location}</p>
            <div className="mt-2 text-white">
              <span className="bg-white/20 px-3 py-1 rounded-md">
                {product.date}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
    </div>
  );
}
