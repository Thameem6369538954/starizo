import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";

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
    location: "Plant-Powered Nutrition, Uncompromised Performance",
    date: "Specifications: (Chemical & Physical)",
    description: "Emphasize health benefits (muscle recovery, cardiac health) and applications (sports nutrition). Highlight solubility features.",
    link: "/RiceProteinCard",
  },
  {
    id: 2,
    image: PC,
    title: "Rice Maltodextrin",
    location: "The Multi-Functional Workhorse",
    date: "Specifications: (Chemical & Physical)",
    description: "Stress versatility as a thickener/stabilizer in food/pharma. Add details like DE value.",
    link: "/MaltoExtrin",
  },
  {
    id: 3,
    image: AS,
    title: "High Maltose Rice Syrup",
    location: "Redefining Sweetening Solutions",
    date: "Specifications: (Chemical & Physical)",
    description: "A sweetener with a high maltose content, perfect for creating healthier food and beverage options.",
    link: "/HighMaltoseRiceSyrupSection",
  },
  {
    id: 4,
    image: PA,
    title: "Rice Starch",
    location: "The Clean-Label Texture Innovator",
    date: "Specifications: (Chemical & Physical)",
    description: "Highlight functional benefits (thickening, fat replacement) and applications (bakery, pharma). Include technical specifications like amylose content.",
    link: "/StarizoStarchCard",
  },
  {
    id: 5,
    image: PD,
    title: "Clarified Rice Syrup",
    location: "Pure Sweetness, Enhanced Functionality",
    date: "Specifications: (Chemical & Physical)",
    description: "Stress versatility as a thickener/stabilizer in food/pharma. Add details like DE value.",
    link: "/ClarifiedSyrupSection",
  },
  {
    id: 6,
    image: AD,
    title: "Industry-Specific Solutions",
    location: "Tailored for Your Market",
    date: "Specifications: (Chemical & Physical)",
    description: "Custom solutions for various industries, designed to meet specific needs and challenges.",
    link: "/IndustrySolutionsSection",
  },
];

export default function ProductCarousel() {
  const navigate = useNavigate();

  // 🟡 Custom function to scroll to top and navigate
  const handleProductClick = (link) => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
    navigate(link); // navigate after scroll
  };

  return (
    <div
      className="min-h-screen py-20 px-4 bg-cover bg-center font-[para]"
      // style={{ backgroundImage: `url(${bg})` }}
      id="pro-section"
    >
      <h1 className="text-4xl md:text-8xl font-bold text-center text-gray-800 mb-16 font-[Heading]">
        OUR <span className="text-[#28563a]">PRODUCTS</span>
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
            <div
              onClick={() => handleProductClick(product.link)}
              className="cursor-pointer group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out"
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
                <p className="text-sm text-gray-500 mb-4">
                  {product.description}
                </p>
                <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  {product.date}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
