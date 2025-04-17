"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
  
// Banner slides data
const bannerSlides = [
  {
    id: 1,
    title: "Medicine & Health Care",
    subtitle: "For Your Family",
    description:
      "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour.",
    price: "$250",
    tag: "EASY HEALTH CARE",
    image: "https://live.themewild.com/medion/assets/img/hero/01.png",
    bgColor: "bg-cyan-50",
    accentColor: "bg-teal-500",
  },
  {
    id: 2,
    title: "Beauty & Personal Care",
    subtitle: "For Your Wellness",
    description:
      "Discover premium beauty products that enhance your natural glow and support your personal care routine.",
    price: "$199",
    tag: "PREMIUM CARE",
    image: "https://live.themewild.com/medion/assets/img/hero/02.png",
    bgColor: "bg-rose-50",
    accentColor: "bg-rose-500",
  },
  {
    id: 3,
    title: "Supplements & Vitamins",
    subtitle: "For Your Health",
    description:
      "Support your health with our range of high-quality supplements and vitamins designed for optimal wellbeing.",
    price: "$120",
    tag: "DAILY ESSENTIALS",
    image: "https://live.themewild.com/medion/assets/img/hero/03.png",
    bgColor: "bg-amber-50",
    accentColor: "bg-amber-500",
  },
]
  return (
    <div className="mb-10 rounded-xl overflow-hidden max-w-screen-xl mx-auto mt-5">
 
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
       
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-xl"
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`${slide.bgColor} rounded-xl overflow-hidden`}>
              <div className="flex flex-col md:flex-row items-center p-6 md:p-10">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="inline-block">
                    <div
                      className={`${slide.accentColor} text-white px-4 py-2 text-sm font-bold relative`}
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                      }}
                    >
                      {slide.tag}
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-6">
                    {slide.title} <br />
                    <span className={`text-${slide.accentColor.replace("bg-", "")}`}>{slide.subtitle}</span>
                  </h2>

                  <p className="my-6 text-slate-600 max-w-md">{slide.description}</p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      className={`${slide.accentColor} text-white px-6 py-3 rounded-md font-medium flex items-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer`}
                    >
                      Shop Now
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </button>
                    <button className="bg-white text-slate-800 px-6 py-3 rounded-md font-medium border border-slate-200 flex items-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                      Learn More
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="md:w-1/2 relative">
                  <div className="absolute top-4 right-4 md:top-10 md:right-10 bg-red-100 text-red-500 rounded-full p-4 font-bold flex flex-col items-center justify-center w-16 h-16 border-2 border-dashed border-red-300">
                    <span className="text-xs">Price</span>
                    <span>{slide.price}</span>
                  </div>
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="mx-auto max-h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom pagination */}
        <div className="swiper-pagination bottom-4"></div>
      </Swiper>
    </div>
  );
};

export default Banner;
