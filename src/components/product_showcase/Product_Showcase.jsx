"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import Product from "../product/Product"; // Your product component

export default function Product_Showcase({ title }) {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 px-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-2xl mb-8">{title}</h3>
          <button className="flex text-blue-500 font-semibold items-center gap-2">
            <span>View More</span>
            <FaArrowRight />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20} // Adjust space between slides
          loop={true} // Enable looping
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Enable autoplay with delay
          navigation={{
            nextEl: ".swiper-button-next", // Specify next button
            prevEl: ".swiper-button-prev", // Specify prev button
          }}
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
              &#10094;
            </div>
            <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full cursor-pointer">
              &#10095;
            </div>
            {[0, 0, 0, 0, 0, 0, 0].map((element, index) => (
              <SwiperSlide key={index}>
                <Product />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}
