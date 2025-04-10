"use client";
import React, { useState } from 'react';

const CheckoutPage = () => {
  const [openSection, setOpenSection] = useState('billing');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const subtotal = 4500;
  const discount = 5;
  const shipping = 0;
  const taxes = 25;
  const total = subtotal - discount + shipping + taxes;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6 text-black">
      {/* Left: Accordion Forms */}
      <div className="w-full lg:w-[70%] space-y-4">
        {/* Billing Address */}
        <div className="border rounded-md shadow-sm">
          <div
            onClick={() => toggleSection('billing')}
            className="cursor-pointer px-6 py-4 font-semibold bg-gray-100"
          >
            Billing Address
          </div>
          {openSection === 'billing' && (
            <div className="p-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border p-2 rounded" placeholder="Full Name" />
                <input className="border p-2 rounded" placeholder="Email" />
                <input className="border p-2 rounded" placeholder="Address" />
                <input className="border p-2 rounded" placeholder="City" />
                <input className="border p-2 rounded" placeholder="Zip Code" />
                <input className="border p-2 rounded" placeholder="Country" />
              </div>
            </div>
          )}
        </div>

        {/* Shipping Address */}
        <div className="border rounded-md shadow-sm">
          <div
            onClick={() => toggleSection('shipping')}
            className="cursor-pointer px-6 py-4 font-semibold bg-gray-100"
          >
            Shipping Address
          </div>
          {openSection === 'shipping' && (
            <div className="p-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border p-2 rounded" placeholder="Full Name" />
                <input className="border p-2 rounded" placeholder="Phone" />
                <input className="border p-2 rounded" placeholder="Street" />
                <input className="border p-2 rounded" placeholder="City" />
                <input className="border p-2 rounded" placeholder="Zip Code" />
                <input className="border p-2 rounded" placeholder="Country" />
              </div>
            </div>
          )}
        </div>

        {/* Payment Info */}
        <div className="border rounded-md shadow-sm">
          <div
            onClick={() => toggleSection('payment')}
            className="cursor-pointer px-6 py-4 font-semibold bg-gray-100"
          >
            Payment Info
          </div>
          {openSection === 'payment' && (
            <div className="p-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border p-2 rounded" placeholder="Card Number" />
                <input className="border p-2 rounded" placeholder="Name on Card" />
                <input className="border p-2 rounded" placeholder="Expiry Date (MM/YY)" />
                <input className="border p-2 rounded" placeholder="CVV" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right: Summary */}
      <div className="w-full lg:w-[30%] bg-gray-100 p-6 rounded-md shadow-md">
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
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Taxes:</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t pt-3">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="w-full mt-6 bg-[#2563eb] hover:bg-[#1e40af] text-white py-2 rounded">
          Confirm & Pay
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
