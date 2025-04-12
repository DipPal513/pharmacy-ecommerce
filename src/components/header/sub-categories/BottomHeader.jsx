"use client";

import { useCart } from "@/context/CartContext";
import {
  Heart,
  Menu,
  Search,
  ShoppingCartIcon,
  User
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// Importing FaUser for sign-in icon and FaBars for the menu icon

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
  const {cartQuantity } = useCart();
  return (
    <div className="bg-white shadow-md py-4 px-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center space-x-8">
        {/* Left: Logo/Icon */}
        <div className="flex items-center ">
          <div className="text-3xl font-bold text-blue-600 cursor-pointer">
            Logo
          </div>
        </div>

        {/* Middle: Category Dropdown and Search Bar (Visible on larger screens) */}
        <div className="hidden md:flex items-center w-full md:w-1/2 lg:w-1/3 relative">
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="py-[10px] px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-r-0"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Search Input */}
          <div className="flex items-center border border-gray-300 rounded-r-md">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="text-gray-500 text-xl mr-3" />
          </div>
        </div>

        {/* Right: Sign In, Wishlist, and Cart Icons with Text */}
        <div className="flex items-center space-x-3">
          {/* Search Button (Visible on mobile) */}
          <button
            onClick={toggleSearchModal}
            className="md:hidden flex items-center space-x-2 cursor-pointer"
          >
            <Search className="text-blue-500 text-xl hover:text-blue-700" />
            <span className="hidden md:block text-gray-600">Search</span>
          </button>

          {/* Sign In Button */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <User className="text-blue-500 text-xl hover:text-blue-700" />
            <span className="hidden md:block text-gray-600">Sign In</span>
          </div>

          {/* Wishlist Icon and Text */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Heart className="text-red-500 text-xl hover:text-red-700" />
            <span className="hidden md:block text-gray-600">Wishlist</span>
          </div>

          {/* Cart Icon and Text */}
          <Link href={"/cart"} className="flex items-center space-x-2 cursor-pointer">
            <ShoppingCartIcon className="text-green-500 text-xl hover:text-green-700" />
            <sup className="bg-blue-500 py-2 px-3 text-sm rounded-full text-white">{cartQuantity}</sup>
            <span className="hidden md:block text-gray-600">Cart</span>
          </Link>

          {/* Menu Icon (Hamburger menu for mobile) */}
          <div className="md:hidden flex items-center space-x-2 cursor-pointer">
            <Menu className="text-gray-600 text-2xl hover:text-gray-800" />
          </div>
        </div>
      </div>

      {/* Search Modal (Visible only on mobile when Search Button is clicked) */}
      {isSearchModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bg-white shadow-md py-8 px-3 z-50"
          style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.1)" }}
        >
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 w-4/5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
