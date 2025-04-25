import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { Eye } from "lucide-react";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";

export default function Product() {
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
    <div className="product item transition-all duration-500 ease-in-out transform hover:scale-102 rounded-lg bg-[#EBF8F7] p-3 shadow hover:shadow-sm cursor-pointer">
      <Link href={"/products/5"} className="relative image-container block overflow-hidden rounded-lg">
        <img
          src="https://live.themewild.com/medion/assets/img/product/05.png"
          alt="product image"
          className="w-full h-auto object-cover transition-all duration-300"
        />
        <div className="icons w-full items-center flex justify-center transition-all duration-300 absolute -bottom-10 z-10 gap-4">
         <Eye className="text-[var(--main-color)]"/>
         <FaShoppingCart className="maincolor text-3xl cursor-pointer" onClick={handleCart}/>
        </div>
      </Link>
      <h3 className="font-semibold mt-6 capitalize text-xl mb-4">
        Surgical Face Mask
      </h3>
      <div className="text-xl star-ratings flex space-x-1 mb-4">
        {/* Rating Stars */}
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStarHalfAlt className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-red-700 font-semibold text-lg">$250.00</p>
        <div className="">
          <p className="cursor-pointer text-sm font-semibold bg-white text-[var(--main-color)] px-3 py-1 rounded-xl" onClick={handleCart}>Add To Cart</p>
        </div>
      </div>
    </div>
  );
}
