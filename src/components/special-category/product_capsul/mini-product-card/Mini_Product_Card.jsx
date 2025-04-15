"use client";
import { useCart } from "@/context/CartContext";
import { CarFrontIcon, StarIcon } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

export default function Mini_Product_Card() {
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "Surgical Face Mask",
    price: 99.99,
    description: "Short description of the product goes here.",
    stock: "Available",
    sku: "656TYTR",
    category: "Medicine",
    brand: "Novak",
    tags: ["Medicine", "Healthcare", "Modern", "Shop"],
    images: ['images',"",""],
    reviews: [
      { user: "John D.", comment: "Great product! Highly recommend." },
      { user: "Sarah W.", comment: "Very comfortable and durable." },
      { user: "Michael T.", comment: "Good value for the price." },
    ],
  };
  const handleCart = () => {
    console.log("triggered")
    addToCart(product);
    toast.success("Product added successfully!");
  };
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
        <div className="cart absolute bg-white rounded-full p-4 -bottom-5 -right-5 hover:bg-gray-200 transition duration-200" onClick={handleCart}>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}
