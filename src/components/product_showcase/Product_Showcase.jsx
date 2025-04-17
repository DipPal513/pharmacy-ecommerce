"use client";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../product/Product"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Product_Showcase({ title, isSlide = false }) {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 px-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-2xl mb-8 relative">{title} <span className="absolute -bottom-3 w-1/2 h-2 rounded-full bg-[var(--main-color)] left-0 "></span></h3>
          <button className="flex text-blue-500 font-semibold items-center gap-2">
            <span>View More</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        {isSlide ? (
          <Swiper
            spaceBetween={20} 
            loop={true} 
            modules={[ Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={false}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              320: {
                slidesPerView: 1, 
              },
              480: {
                slidesPerView: 2, 
              },
              768: {
                // Tablets and small desktop screens
                slidesPerView: 3, 
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
