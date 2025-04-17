"use client";

import { useCart } from "@/context/CartContext";
import {
  FaHeart,
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Top_Category from "@/components/top_category/Top_Category";
import NestedDropdown from "./Category";

export default function BottomHeader() {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // State to control modal visibility

  const categories = [
    "Electronics",
    "Fashion",
    "Books",
    "Toys",
    "Home Appliances",
    "Groceries",
    "Sports",
    "Beauty",
  ];

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };
  const { cartQuantity } = useCart();
  return (
    <div className="bg-white shadow-md py-4 px-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center space-x-8">
        {/* Left: Logo/Icon */}
        <Link href={"/"} className="flex items-center ">
          <div className="text-3xl font-bold text-blue-600 cursor-pointer">
            <img
              src="https://live.themewild.com/medion/assets/img/logo/logo.png"
              width={200}
            />
          </div>
        </Link>
        <div className="hidden sm:flex">
          <NestedDropdown />
        </div>
       
          <div className="hidden md:flex items-center w-full md:w-1/3 relative border-[var(--main-color)] border-2 rounded-full text-xl">
            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-[8.9px] px-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] border-r-0"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
            {category}
                </option>
              ))}
            </select>

            {/* Search Input */}
            <div className="flex items-center border border-gray-300 rounded-r-full w-3/4">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-2 w-full focus:outline-none  "
              />
              <FaSearch className="text-gray-500 text-2xl mr-3 hover:text-[var(--main-color)] cursor-pointer" />
            </div>
          </div>

          {/* Right: Sign In, Wishlist, and Cart Icons with Text */}
        <div className="flex items-center text-2xl space-x-5">
          {/* Search Button (Visible on mobile) */}
          <button
            onClick={toggleSearchModal}
            className="md:hidden flex items-center space-x-2 cursor-pointer"
          >
            <FaSearch className=" text-xl text-[var(--main-color)]" />
            <span className="hidden md:block text-gray-600">Search</span>
          </button>

          {/* Sign In Button */}
          <div className="hidden sm:flex items-center space-x-2 cursor-pointer bg-gray-100 px-2 py-2 rounded-full text-[var(--main-color)]">
            <FaUser className="" />
          </div>

          {/* Wishlist Icon and Text */}
          <div className="hidden sm:flex items-center space-x-2 cursor-pointer bg-gray-100 px-2 py-2 rounded-full text-[var(--main-color)]">
            <FaHeart className="" />
          </div>

          {/* Cart Icon and Text */}
          <Link
            href={"/cart"}
            className="flex hover:text-red-500 transition duration-200 items-center space-x-2 cursor-pointer  "
          >
            <FaShoppingCart className=" text-[var(--main-color)]" />
            <sup className="text-sm bg-gray-400 px-2 py-1 rounded-full text-white">
              {cartQuantity}
            </sup>
          </Link>

          {/* Menu Icon (Hamburger menu for mobile) */}
          <div className="sm:hidden flex items-center space-x-2 cursor-pointer">
            <NestedDropdown isGray={false} />
          </div>
        </div>
      </div>

      {isSearchModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bg-white shadow-md py-8 px-3 z-50"
          style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.1)" }}
        >
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 w-4/5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
            />
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => setIsSearchModalOpen(false)}
            >
              Search
            </button>
          </div>
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}
