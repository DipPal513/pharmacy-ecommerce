"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function CheckoutPage() {
  const [billingExpanded, setBillingExpanded] = useState(true);
  const [shippingExpanded, setShippingExpanded] = useState(false);
  const [paymentExpanded, setPaymentExpanded] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Billing Address Section */}
          <div className="border rounded-md overflow-hidden">
            <div
              className="flex justify-between items-center p-4 bg-white cursor-pointer"
              onClick={() => setBillingExpanded(!billingExpanded)}
            >
              <h2 className="text-lg font-medium text-teal-600">
                Your Billing Address
              </h2>

              <button className="text-gray-500">
                {billingExpanded ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
            </div>

            {billingExpanded && (
              <div className="p-6 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <Input id="firstName" placeholder="First Name" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Last Name" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <Input id="phone" placeholder="Phone Number" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label
                      htmlFor="addressLine1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address Line 1
                    </label>
                    <Input id="addressLine1" placeholder="Address Line 1" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label
                      htmlFor="addressLine2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address Line 2
                    </label>
                    <Input id="addressLine2" placeholder="Address Line 2" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <Select>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Choose Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <Input id="city" placeholder="City" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="postCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Post Code
                    </label>
                    <Input id="postCode" placeholder="Post Code" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <Input id="state" placeholder="State" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Message For Order
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your Message"
                      rows={4}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setBillingExpanded(true);
                      setShippingExpanded(false);
                    }}
                  >
                    <ArrowLeft size={16} />
                    Back
                  </Button>

                  <button
                    className="bg-[var(--main-color)] px-4 py-2 rounded-lg text-white cursor-pointer transition duration-200 hover:bg-red-500 flex items-center gap-2"
                    onClick={() => {
                      setShippingExpanded(true);
                      setBillingExpanded(false);
                    }}
                  >
                    <ArrowLeft size={16} />
                    Next Step{" "}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Shipping Address Section */}
          <div className="border rounded-md overflow-hidden">
            <div
              className="flex justify-between items-center p-4 bg-white cursor-pointer"
              onClick={() => setShippingExpanded(!shippingExpanded)}
            >
              <h2 className="text-lg font-medium text-teal-600">
                Your Shipping Address
              </h2>
              <button className="text-gray-500">
                {shippingExpanded ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
            </div>

            {shippingExpanded && (
              <div className="p-6 border-t">
                <div className="flex items-center mb-4">
                  <input
                    id="same-as-billing"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="same-as-billing"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Same as billing address
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="shipFirstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <Input id="shipFirstName" placeholder="First Name" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="shipLastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <Input id="shipLastName" placeholder="Last Name" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label
                      htmlFor="shipAddressLine1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address Line 1
                    </label>
                    <Input id="shipAddressLine1" placeholder="Address Line 1" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label
                      htmlFor="shipAddressLine2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address Line 2
                    </label>
                    <Input id="shipAddressLine2" placeholder="Address Line 2" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="shipCountry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <Select>
                      <SelectTrigger id="shipCountry">
                        <SelectValue placeholder="Choose Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="shipCity"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <Input id="shipCity" placeholder="City" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="shipPostCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Post Code
                    </label>
                    <Input id="shipPostCode" placeholder="Post Code" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="shipState"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <Input id="shipState" placeholder="State" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setBillingExpanded(true);
                      setShippingExpanded(false);
                    }}
                  >
                    <ArrowLeft size={16} />
                    Back
                  </Button>
                  <button
                    className="bg-[var(--main-color)] px-4 py-2 rounded-lg text-white cursor-pointer transition duration-200 hover:bg-red-500 flex items-center gap-2"
                    onClick={() => {
                      setShippingExpanded(true);
                      setBillingExpanded(false);
                    }}
                  >
                    <ArrowLeft size={16} />
                    Next Step{" "}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Payment Info Section */}
          <div className="border rounded-md overflow-hidden">
            <div
              className="flex justify-between items-center p-4 bg-white cursor-pointer"
              onClick={() => setPaymentExpanded(!paymentExpanded)}
            >
              <h2 className="text-lg font-medium text-teal-600">
                Your Payment Info
              </h2>
              <button className="text-gray-500">
                {paymentExpanded ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
            </div>

            {paymentExpanded && (
              <div className="p-6 border-t">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-4">
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
                        className="ml-2 block text-sm font-medium text-gray-700"
                      >
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
                        className="ml-2 block text-sm font-medium text-gray-700"
                      >
                        PayPal
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="bank-transfer"
                        name="payment-method"
                        type="radio"
                        className="h-4 w-4 text-teal-600 border-gray-300"
                      />
                      <label
                        htmlFor="bank-transfer"
                        className="ml-2 block text-sm font-medium text-gray-700"
                      >
                        Bank Transfer
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <label
                        htmlFor="cardName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name on Card
                      </label>
                      <Input id="cardName" placeholder="Name on Card" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label
                        htmlFor="cardNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Card Number
                      </label>
                      <Input
                        id="cardNumber"
                        placeholder="XXXX XXXX XXXX XXXX"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="expiryDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Expiry Date
                      </label>
                      <Input id="expiryDate" placeholder="MM/YY" />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="cvv"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CVV
                      </label>
                      <Input id="cvv" placeholder="XXX" />
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
            )}
          </div>
        </div>

        {/* Cart Summary */}
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
                  <span className="text-right text-teal-600">$4,520.00</span>
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
