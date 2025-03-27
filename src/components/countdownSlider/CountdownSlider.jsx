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
    // Set the initial time (24 hours from now)
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 24);

    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetTime - now;

      // If countdown is finished
      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate remaining time
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format time with leading zeros
  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  // Slide data
  const slides = [
    {
      id: 1,
      title: "Limited Time Offer",
      description: "Get 50% off on all products",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Flash Sale",
      description: "Buy one get one free",
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Special Discount",
      description: "Use code SPECIAL24 for extra 10% off",
      color: "bg-pink-500",
    },
    {
      id: 4,
      title: "New Arrivals",
      description: "Check out our latest collection",
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mb-5 mx-auto">
      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="rounded-xl overflow-hidden h-80 shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`${slide.color} slider-item h-full w-full flex flex-col justify-center items-center text-white p-8`}
            >
              <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl mb-6">{slide.description}</p>
              <div className="flex items-center gap-2 text-lg">
                <span>Ends in:</span>
                <span className="font-mono font-bold">
                  {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
                  <span className="d-block w-2.5 h-2.5 bg-white text-black p-5 font-bold">

                  {formatTime(timeLeft.seconds)}
                  </span>
                </span>
              </div>
              <button className="mt-6 bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
