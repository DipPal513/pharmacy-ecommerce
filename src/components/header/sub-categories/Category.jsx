import React from "react";
import { Tag, ShoppingCart, Laptop, BookOpen } from "lucide-react";

const categories = [
  { name: "Electronics", icon: <Laptop size={20} /> },
  { name: "Books", icon: <BookOpen size={20} /> },
  { name: "Fashion", icon: <Tag size={20} /> },
  { name: "Grocery", icon: <ShoppingCart size={20} /> },
  { name: "Electronics", icon: <Laptop size={20} /> },
  { name: "Books", icon: <BookOpen size={20} /> },
  { name: "Fashion", icon: <Tag size={20} /> },
  { name: "Grocery", icon: <ShoppingCart size={20} /> },
  { name: "Electronics", icon: <Laptop size={20} /> },
  { name: "Books", icon: <BookOpen size={20} /> },
  { name: "Fashion", icon: <Tag size={20} /> },
  { name: "Grocery", icon: <ShoppingCart size={20} /> },
];

export default function Category() {
  return (
    <div className="w-full bg-white px-2 border-b border-t border-gray-100 py-3">
      <div className="relative max-w-screen-xl mx-auto">
        <select className="w-fit px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none">
          {categories.map((category, index) => (
            <option key={index} value={category.name} className="p-2 text-gray-500">
              {category.name}
            </option>
          ))}
        </select>
       
      </div>
    </div>
  );
}
