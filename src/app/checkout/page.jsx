"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="border col-span-2 rounded-md overflow-hidden">
          <h2 className="text-lg font-medium p-3 text-teal-600">
            Your Payment Info
          </h2>

          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 border-t">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <input
                      id="credit-card"
                      name="payment-method"
                      type="radio"
                      className="h-4 w-4 text-teal-600 border-gray-300"
                      defaultChecked
                    />
                    <label
                      htmlFor="credit-card"
                      className="ml-2 block text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <img
                        src="/images/credit-card.png"
                        alt="Credit Card"
                        className="h-6"
                      />
                      Credit Card
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="paypal"
                      name="payment-method"
                      type="radio"
                      className="h-4 w-4 text-teal-600 border-gray-300"
                    />
                    <label
                      htmlFor="paypal"
                      className="ml-2 block text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <img
                        src="/images/paypal.png"
                        alt="PayPal"
                        className="h-6"
                      />
                      PayPal
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="bkash"
                      name="payment-method"
                      type="radio"
                      className="h-4 w-4 text-teal-600 border-gray-300"
                    />
                    <label
                      htmlFor="bkash"
                      className="ml-2 block text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <img
                        src="/images/bkash.png"
                        alt="bKash"
                        className="h-6"
                      />
                      bKash
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="nagad"
                      name="payment-method"
                      type="radio"
                      className="h-4 w-4 text-teal-600 border-gray-300"
                    />
                    <label
                      htmlFor="nagad"
                      className="ml-2 block text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <img
                        src="/images/nagad.png"
                        alt="Nagad"
                        className="h-6"
                      />
                      Nagad
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="dbbl"
                      name="payment-method"
                      type="radio"
                      className="h-4 w-4 text-teal-600 border-gray-300"
                    />
                    <label
                      htmlFor="dbbl"
                      className="ml-2 block text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <img src="/images/dbbl.png" alt="DBBL" className="h-6" />
                      DBBL
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="cod"
                      name="payment-method"
                      type="radio"
                      className="h-4 w-4 text-teal-600 border-gray-300"
                    />
                    <label
                      htmlFor="cod"
                      className="ml-2 block text-sm font-medium text-gray-700  items-center gap-2"
                    >
                      <img
                        src="/images/cash-on-delivery.png"
                        alt="Cash on Delivery"
                        className="h-6"
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setShippingExpanded(true);
                      setPaymentExpanded(false);
                    }}
                  >
                    <ArrowLeft size={16} />
                    Back
                  </Button>
                  <button className="bg-[var(--main-color)] px-4 py-2 rounded-lg text-white cursor-pointer transition duration-200 hover:bg-red-500 flex items-center gap-2">
                    Next Step <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

          
          </div>
        </div>
        <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-md p-6">
                <h2 className="text-xl font-semibold mb-6">Cart Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sub Total:</span>
                    <span className="font-medium text-right">$4,500.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount:</span>
                    <span className="text-right text-green-600">$5.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="text-right text-green-600">Free</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes:</span>
                    <span className="text-right">$25.00</span>
                  </div>

                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span className="text-right text-teal-600">
                        $4,520.00
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href={"/checkout-complete"}
                  className="w-full mt-6 bg-teal-600 hover:bg-red-500 py-2 text-white flex items-center justify-center gap-2"
                >
                  Checkout Now
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
      </div>
    </div>
  );
}
