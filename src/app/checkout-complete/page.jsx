"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 text-center">
        <div className="flex justify-center">
          <div className="bg-white rounded-full p-2 -mt-14 shadow-md">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
        </div>

        <h1 className="text-2xl font-semibold mt-4">
          Thank you for your order!
        </h1>
        <p className="text-gray-600 mt-2">
          Your order has been placed and will be processed as soon as possible.
          Make sure you make note of your order number, which is
          <span className="font-semibold"> 38HF654DWR</span>. You will be
          receiving an email shortly with confirmation of your order.
        </p>

        <div className="mt-6">
          <Link
            href="/products"
            className="px-6 py-3 bg-[var(--main-color)] text-white rounded-lg hover:bg-gray-800 transition"
          >
            Back to Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
