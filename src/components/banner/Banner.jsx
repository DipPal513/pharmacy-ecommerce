"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-8">
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // Ensure only one slide at a time
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
        className="rounded-xl  overflow-hidden"
      >
        <SwiperSlide>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Banner Image 1"
              className="w-full h-[80vh] object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-2xl font-bold">Data 1</h2>
              <p>Information about the first item goes here.</p>
            </div>
          </div>
        </SwiperSlide>
 
        {/* Navigation buttons */}
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full cursor-pointer">
          &#10094;
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full cursor-pointer">
          &#10095;
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
