import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PA from "../Images/stro.png";
import PB from "../Images/stroa.png";
import PC from "../Images/strob.png";
import PD from "../Images/stroc.png";
import AS from "../Images/strod.png";
import AD from "../Images/stroe.png";
import bg from "../Images/bg.jpg";

const products = [
  {
    id: 1,
    image: PB,
    title: "Rice Protein Concentrate (80% Protein)",
    location: "Plant-Powere@ Nutrition, Uncompromise@ Performance",
    date: "Specifications: (Chemical & Physical)",
    link: "/RiceProteinCard",
  },
  {
    id: 2,
    image: PC,
    title: "Rice Maltodextrin",
    location: "The Multi-Functional Workhorse",
    date: "Specifications: (Chemical & Physical)",
    link: "/MaltoExtrin",
  },
  {
    id: 3,
    image: AS,
    title: "High Maltose Rice Syrup",
    location: "Redefining Sweetening Solutions",
    date: "Specifications: (Chemical & Physical)",
    link: "/HighMaltoseRiceSyrupSection",
  },
  {
    id: 4,
    image: PA,
    title: "Rice Starch",
    location: "The Clean-Label Texture Innovator",
    date: "Specifications: (Chemical & Physical)",
    link: "/StarizoStarchCard",
  },
  {
    id: 5,
    image: PD,
    title: "Clarified Rice Syrup",
    location: "Pure Sweetness, Enhanced Functionality",
    date: "Specifications: (Chemical & Physical)",
    link: "/ClarifiedSyrupSection",
  },
  {
    id: 6,
    image: AD,
    title: "lndtstry-Specific Solutions",
    location: "Tailored for Your Market",
    date: "Specifications: (Chemical & Physical)",
    link: "/IndustrySolutionsSection",
  },
];

export default function ProductCarousel() {
  return (
    <div
      className="min-h-screen py-20 px-4 bg-cover bg-center font-[para]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-4xl md:text-8xl font-bold text-center text-gray-800 mb-16 font-[Heading]">
        OUR <span className="text-[#fdc700]">PRODUCTS</span>
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
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
              className="group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out"
            >
              <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
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
