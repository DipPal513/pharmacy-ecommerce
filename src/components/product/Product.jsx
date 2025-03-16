import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCartArrowDown,
} from "react-icons/fa";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

export default function Product() {
  return (
    <div className="product item transition-all duration-500 ease-in-out transform hover:scale-102 rounded-lg bg-[#EBF8F7] p-3 shadow hover:shadow-sm cursor-pointer">
      <div className="relative image-container overflow-hidden rounded-lg">
        <img
          src="https://live.themewild.com/medion/assets/img/product/05.png"
          alt="product image"
          className="w-full h-auto object-cover transition-all duration-300 "
        />
        <div className="icons w-full items-center flex justify-center transition-all duration-300 absolute -bottom-10 z-10 gap-4">
          <div className="bg-white p-2 rounded-full">
            <FaFacebook className="text-blue-600" />
          </div>
          <div className="bg-white p-2 rounded-full">
            <FaTwitter className="text-blue-400" />
          </div>
          <div className="bg-white p-2 rounded-full">
            <FaInstagram className="text-pink-600" />
          </div>
        </div>
      </div>
      <h3 className="font-semibold mt-6 capitalize text-xl mb-4">
        Surgical Face Mask
      </h3>
      <div className="text-xl star-ratings flex space-x-1 mb-4">
        {/* Rating Stars */}
        <MdStar className="text-yellow-400" />
        <MdStar className="text-yellow-400" />
        <MdStar className="text-yellow-400" />
        <MdStarHalf className="text-yellow-400" />
        <MdStarBorder className="text-yellow-400" />
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-red-700 font-semibold text-lg">$250.00</p>
        <div className="">
          <FaCartArrowDown className="maincolor text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
