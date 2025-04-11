import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PA from "../Images/PA.jpg";
import PB from "../Images/PB.jpg";
import PC from "../Images/PC.jpg";
import PD from "../Images/PD.jpg";
import AS from "../Images/GM.jpg";

const products = [
  {
    id: 1,
    image: PA,
    title: "Rice Protein Concentrate (80% Protein)",
    location: "Plant-Powere@ Nutrition, Uncompromise@ Performance",
    date: "Specifications: (Chemical & Physical)",
    link: "/RiceProteinCard",
  },
  {
    id: 2,
    image: PB,
    title: "Rice Maltodextrin",
    location: "The Multi-Functional Workhorse",
    date: "Specifications: (Chemical & Physical)",
    link: "/MaltoExtrin",
  },
  {
    id: 3,
    image: PC,
    title: "High Maltose Rice Syrtp",
    location: "Redefining Sweetening Solutions",
    date: "Specifications: (Chemical & Physical)",
    link: "/HighMaltoseRiceSyrupSection",
  },
  {
    id: 4,
    image: PD,
    title: "Rice Starch",
    location: "The Clean-Label Texture Innovator",
    date: "Specifications: (Chemical & Physical)",
    link: "/StarizoStarchCard",
  },
  {
    id: 5,
    image: PA,
    title: "Clarified Rice Syrtp",
    location: "Pure Sweetness, Enhanced Functionality",
    date: "Specifications: (Chemical & Physical)",
    link: "/ClarifiedSyrupSection",
  },
  {
    id: 6,
    image: PA,
    title: "lndtstry-Specific Solttions",
    location: "Tailored for Your Market",
    date: "Specifications: (Chemical & Physical)",
    link: "/IndustrySolutionsSection",
  },
];

export default function ProductCarousel() {
  return (
    <div
      className="min-h-screen py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${AS})` }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-16 font-[Heading]">
        OUR <span className="text-[#fdc700]">PRODUCTS</span>
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <a
              href={product.link}
              className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Info Section */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {product.location}
                </p>
                <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  {product.date}
                </span>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
