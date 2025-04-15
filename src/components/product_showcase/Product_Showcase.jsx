"use client";
import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper styles
import Product from "../product/Product"; // Your product component
import { Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Product_Showcase({ title, isSlide = false }) {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 px-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-2xl mb-8">{title}</h3>
          <button className="flex text-blue-500 font-semibold items-center gap-2">
            <span>View More</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {isSlide ? (
          // Swiper Slider
          <Swiper
            spaceBetween={20} // Adjust space between slides
            loop={true} // Enable looping
            // Enable autoplay with delay
            modules={[Pagination, Navigation, Autoplay]}
         
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={false}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
           
            breakpoints={{
              320: {
                // Mobile (small screens)
                slidesPerView: 1, // Show 1 slide at a time
              },
              480: {
                // Small screens like tablets in portrait
                slidesPerView: 2, // Show 2 slides at a time
              },
              768: {
                // Tablets and small desktop screens
                slidesPerView: 3, // Show 3 slides at a time
              },
              1024: {
                // Desktops
                slidesPerView: 4, // Show 4 slides at a time
              },
              1280: {
                // Larger desktops
                slidesPerView: 5, // Show 5 slides at a time
              },
            }}
            className="rounded-xl"
          >
            <div className="relative">
              <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full cursor-pointer">
                <ChevronLeft className="w-6 h-6" />
              </div>
              <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full cursor-pointer">
                <ChevronRight className="w-6 h-6" />
              </div>
              {[0, 0, 0, 0, 0, 0, 0].map((_, index) => (
                <SwiperSlide key={index}>
                  <Product />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        ) : (
          // Static Product List
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[0, 0, 0, 0, 0, 0, 0].map((_, index) => (
              <Product key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
