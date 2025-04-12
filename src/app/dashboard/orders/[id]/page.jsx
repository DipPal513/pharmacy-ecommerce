import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OrderDetailsPage() {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-xl font-semibold">Order Details (#28VR5K59)</h1>
        <Link href="/dashboard/orders">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-2">
            <ArrowLeft size={16} />
            Order List
          </Button>
        </Link>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left font-medium text-gray-500">Product</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500">Brand</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500">Quantity</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500">Size</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500">Color</th>
                <th className="py-3 px-4 text-right font-medium text-gray-500">Total</th>
              </tr>
            </thead>
            <tbody>
              <OrderItem
                image="/placeholder.svg?height=80&width=80"
                name="Surgical Face Mask"
                itemId="123456"
                brand="Moderna"
                quantity="20 Pcs"
                size="XXL"
                color="Black"
                total="$150"
                bgColor="bg-gray-50"
              />
              <OrderItem
                image="/placeholder.svg?height=80&width=80"
                name="Surgical Face Mask"
                itemId="123456"
                brand="Moderna"
                quantity="20 Pcs"
                size="XXL"
                color="Black"
                total="$150"
              />
              <OrderItem
                image="/placeholder.svg?height=80&width=80"
                name="Surgical Face Mask"
                itemId="123456"
                brand="Moderna"
                quantity="20 Pcs"
                size="XXL"
                color="Black"
                total="$150"
                bgColor="bg-gray-50"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* Shipping and Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Address */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
          <div className="flex items-start gap-3">
            <MapPin className="text-teal-500 mt-0.5" size={18} />
            <p className="text-gray-700">25 N Milford Road, Richison Drive, New York, USA</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">$350.00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span className="text-green-600">$10.00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>$20.00</span>
            </div>

            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-teal-600">$360.00</span>
              </div>
            </div>

            <div className="pt-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Payment Method</span>
                <span className="text-sm">Paid by Credit/Debit Card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function OrderItem({
  image,
  name,
  itemId,
  brand,
  quantity,
  size,
  color,
  total,
  bgColor = "",
}) {
  return (
    <tr className={`border-b ${bgColor}`}>
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 relative rounded overflow-hidden border">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-medium text-teal-600">{name}</h3>
            <p className="text-sm text-gray-500">Item ID: #{itemId}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">{brand}</td>
      <td className="py-4 px-4">{quantity}</td>
      <td className="py-4 px-4">{size}</td>
      <td className="py-4 px-4">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-black inline-block"></span>
          {color}
        </span>
      </td>
      <td className="py-4 px-4 text-right">{total}</td>
    </tr>
  )
}
