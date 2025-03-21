import { CarFrontIcon, StarIcon } from "lucide-react";
import React from "react";

export default function Mini_Product_Card() {
  return (
    <div className="bg-[#EBF8F7] mini-product cursor-pointer gap-4 flex rounded-2xl p-4">
      <div className="bg-white overflow-hidden border border-gray-50 rounded-xl">
        <img
          src="https://live.themewild.com/medion/assets/img/product/01.png"
          className="duration-400 transition w-32 h-32 mini-product-image"
          alt="product image"
        />
      </div>
      <div className="relative">
        <h3 className="font-semibold text-xl">Surgical Face Mask</h3>
        <div className="stars flex my-2 text-xl text-yellow-500">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className="price flex items-center gap-3">
          <p className=" line-through semibold">$400</p>
          <p className=" text-red-600 semibold">$300</p>
        </div>
        <div className="cart absolute bg-white rounded-full p-4 -bottom-5 -right-5">
          <CarFrontIcon />
        </div>
      </div>
    </div>
  );
}
