"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/80",
      name: "Product A",
      price: 1500,
      quantity: 2,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/80",
      name: "Product B",
      price: 1500,
      quantity: 1,
    },
  ]);

  const [coupon, setCoupon] = useState("");

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = () => {
    // Optional: apply coupon logic here
    alert(`Applied coupon: ${coupon}`);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 5;
  const shipping = 0;
  const taxes = 25;
  const total = subtotal - discount + taxes + shipping;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
      {/* Left: Product Table & Coupon */}
      <div className="w-full lg:w-[70%]">
        <h2 className="text-2xl font-bold mb-4 text-black">Shopping Cart</h2>
        <div className="overflow-x-auto">
          <table className="w-full border text-black">
            <thead className="">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Product Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Sub Total</th>
                {/* <th className="p-3">Action</th> */}
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
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">${item.price}</td>
                  <td className="p-3">{item.quantity}</td>
                  <td className="p-3">${item.price * item.quantity}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-[var(--main-color)] hover:[var(--main-color)]"
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
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon code"
            className="w-full sm:w-auto flex-1 px-4 py-2 border rounded text-black"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-[var(--main-color)] hover:[var(--main-color)] text-white px-6 py-2 rounded"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Right: Cart Summary */}
      <div className="w-full lg:w-[30%] bg-gray-100 p-6 rounded-md shadow-md text-black">
        <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>

        <div className="flex justify-between mb-2">
          <span>Sub Total:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount:</span>
          <span>${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Taxes:</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t pt-3">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="w-full mt-6 bg-[var(--main-color)] hover:bg-[#1e40af] text-white py-2 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
