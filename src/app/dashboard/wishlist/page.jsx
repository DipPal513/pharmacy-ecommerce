import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"

export default function WishlistPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <WishlistItem key={index} />
          ))}
        </div>

        {/* Empty State (hidden by default) */}
        <div className="hidden text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Heart size={32} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500 mb-6">Browse our products and add items to your wishlist</p>
          <Button>Browse Products</Button>
        </div>
      </div>
    </div>
  )
}

function WishlistItem() {
  return (
    <div className="border rounded-lg overflow-hidden flex flex-col">
      <div className="relative">
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Product"
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full text-red-500 hover:bg-red-50">
          <Trash2 size={18} />
        </button>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-medium mb-1 line-clamp-1">Premium Wireless Headphones</h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">
          High-quality sound with noise cancellation and long battery life.
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-lg">$129.99</span>
            <span className="text-sm text-gray-500 line-through">$159.99</span>
          </div>

          <Button className="w-full flex items-center justify-center gap-2">
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
