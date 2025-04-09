"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Clock } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CountdownSlider() {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  // Initialize countdown
  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 24);

    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Format time with leading zeros
  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  // Slide data
  const slides = [
    { id: 1, title: "Limited Time Offer", description: "Get 50% off on all products", color: "bg-blue-500" },
    { id: 2, title: "Flash Sale", description: "Buy one get one free", color: "bg-purple-500" },
    { id: 3, title: "Special Discount", description: "Use code SPECIAL24 for extra 10% off", color: "bg-pink-500" },
    { id: 4, title: "New Arrivals", description: "Check out our latest collection", color: "bg-amber-500" },
  ];

  return (
    <div className="w-full max-w-screen-xl mb-5 mx-auto">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-xl overflow-hidden h-80 shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`${slide.color} h-full w-full flex flex-col justify-center p-8 text-white`}>
              {/* Left-aligned text content */}
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-xl mb-4">{slide.description}</p>

              {/* Countdown Timer Under Text */}
              <div className="flex items-center gap-2 text-6xl font-extrabold">
                <Clock className="w-10 h-10" />
                <span>{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
              </div>

              {/* Button */}
              <button className="mt-6 bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all w-fit">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
