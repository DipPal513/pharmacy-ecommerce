import Image from "next/image"
import { MapPin, ArrowLeft } from "lucide-react"

export default function OrderDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b">
        <h1 className="text-xl font-semibold text-gray-800">Order Details (#28VR5K59)</h1>
        <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors">
          <ArrowLeft size={18} />
          <span>Order List</span>
        </button>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="w-full mb-8">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-4 font-medium">Product</th>
              <th className="pb-4 font-medium">Brand</th>
              <th className="pb-4 font-medium">Quantity</th>
              <th className="pb-4 font-medium">Size</th>
              <th className="pb-4 font-medium">Color</th>
              <th className="pb-4 font-medium text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-blue-700">{product.name}</p>
                      <p className="text-sm text-gray-500">Item ID: #{product.id}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">{product.brand}</td>
                <td className="py-4">{product.quantity}</td>
                <td className="py-4">{product.size}</td>
                <td className="py-4">{product.color}</td>
                <td className="py-4 text-right">${product.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary and Shipping */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Shipping Address */}
        <div className="bg-gray-50 p-5 rounded-lg">
          <h2 className="text-lg font-medium mb-4 text-gray-800">Shipping Address</h2>
          <div className="flex items-start gap-2">
            <MapPin className="text-gray-400 mt-0.5" size={18} />
            <p className="text-gray-600">25/B Milford Road, Richison Drive, New York, USA</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-5 rounded-lg">
          <h2 className="text-lg font-medium mb-4 text-gray-800">Order Summary</h2>
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
              <span className="font-medium">$10.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">$20.00</span>
            </div>
            <div className="pt-3 border-t flex justify-between">
              <span className="font-medium text-gray-800">Total</span>
              <span className="font-medium text-gray-800">$360.00</span>
            </div>
            <div className="pt-2">
              <p className="text-gray-500 text-sm">Paid by Credit/Debit Card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample product data
const products = [
  {
    id: "123456",
    name: "Surgical Face Mask",
    image: "/placeholder.svg?height=80&width=80",
    brand: "Modemo",
    quantity: "20 Pcs",
    size: "XXL",
    color: "Black",
    total: "150",
  },
  {
    id: "123456",
    name: "Surgical Face Mask",
    image: "/placeholder.svg?height=80&width=80",
    brand: "Modemo",
    quantity: "20 Pcs",
    size: "XXL",
    color: "Black",
    total: "150",
  },
  {
    id: "123456",
    name: "Surgical Face Mask",
    image: "/placeholder.svg?height=80&width=80",
    brand: "Modemo",
    quantity: "20 Pcs",
    size: "XXL",
    color: "Black",
    total: "150",
  },
]
