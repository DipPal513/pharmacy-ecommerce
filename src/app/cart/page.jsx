"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { useCart } from "@/context/CartContext"; // Ensure this path is correct
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const {
    cartItems = [],
    cartQuantity = 0,
    cartTotal = 0,
    removeFromCart,
    clearCart,
  } = useCart() || {}; // Fallback to avoid undefined errors

  const [coupon, setCoupon] = useState("");

  const handleRemove = (id) => {
    if (removeFromCart) {
      removeFromCart(id);
    } else {
      console.error("removeFromCart function is not available.");
    }
  };

  const handleApplyCoupon = () => {
    if (!coupon.trim()) {
      toast.error("Please enter a valid coupon code.");
      return;
    }
    // Optional: apply coupon logic here
    toast.success(`Applied coupon: ${coupon}`);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 5; // Example discount
  const shipping = 0; // Example shipping cost
  const taxes = 25; // Example taxes
  const total = subtotal - discount + taxes + shipping;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
      {/* Left: Product Table & Coupon */}
      <div className="w-full lg:w-[70%]">
        <h2 className="text-2xl font-bold mb-4 text-black">Shopping Cart</h2>
        <div className="overflow-x-auto">
          <table className="w-full border text-black">
            <thead>
              <tr>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Product Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Sub Total</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="p-3 text-lg text-gray-700">{item.name}</td>
                  <td className="p-3 text-lg text-gray-700">${item.price}</td>
                  <td className="p-3 text-lg text-gray-700">{item.quantity}</td>
                  <td className="p-3 text-lg text-gray-700">${item.price * item.quantity}</td>
                  <td className="p-3 text-lg text-gray-700">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-[var(--main-color)] hover:[var(--main-color)] p-2 bg-gray-50 rounded-full border"
                    >
                      <X />
                    </button>
                  </td>
                </tr>
              ))}
              {cartItems.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    Your cart is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Coupon Input */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-5 justify-between ">
          <div className="flex items-center">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon code"
            className="w-full sm:w-auto flex-1 px-4 py-2 border rounded-s-full text-black"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-[var(--main-color)] hover:[var(--main-color)] text-white px-6 py-2 rounded-r-full"
          >
            Apply
          </button>
          </div>
          <button className="bg-[var(--main-color)] px-4 py-2 rounded-lg text-white cursor-pointer" onClick={()=> router.back()}>Back to Shopping</button>
        </div>
      </div>

      {/* Right: Cart Summary */}
      <div className="w-full lg:w-[30%] bg-gray-50 p-6 rounded-md shadow-md text-black">
        <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>

        <div className="flex justify-between mb-2 text-lg text-gray-700">
          <span>Sub Total:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 text-lg text-gray-700">
          <span>Discount:</span>
          <span>${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 text-lg text-gray-700">
          <span>Shipping:</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between mb-4 text-lg text-gray-700">
          <span>Taxes:</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t pt-3  text-gray-700">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button
          onClick={() => {
            if (cartItems.length === 0) {
              toast.error("Your cart is empty. Add items to proceed.");
              return;
            }
            router.push("/checkout")
            // Proceed to checkout logic
            toast.success("Proceeding to checkout...");
          }}
          className="w-full mt-6 bg-[var(--main-color)] hover:bg-[#1e40af] text-white py-2 rounded cursor-pointer"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
