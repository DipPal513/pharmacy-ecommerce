"use client";
import Product from "@/components/product/Product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductDetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
  );
  const images = [
    "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2h8ZW58MHx8MHx8fDA%3D",
  ];
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "Surgical Face Mask",
    price: 99.99,
    description: "Short description of the product goes here.",
    stock: "Available",
    sku: "656TYTR",
    category: "Medicine",
    brand: "Novak",
    tags: ["Medicine", "Healthcare", "Modern", "Shop"],
    images: images,
    reviews: [
      { user: "John D.", comment: "Great product! Highly recommend." },
      { user: "Sarah W.", comment: "Very comfortable and durable." },
      { user: "Michael T.", comment: "Good value for the price." },
    ],
  };
  const handleCart = () => {
    console.log("triggered");
    addToCart(product);
    toast.success("Product added successfully!");
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div>
          <img
            src={selectedImage}
            alt="Main Product"
            className="w-full rounded-xl"
          />
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                  selectedImage === img ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Surgical Face Mask</h1>
          <div className="flex items-center">
            <p className="flex items-center gap-2">
              {[1, 1, 1, 1].map((_, index) => (
                <FaStar
                  key={index}
                  className="text-xl text-[var(--main-color)]"
                />
              ))}
            </p>
            <p className="text-lg"> (4 Customer Reviews)</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold text-[var(--main-color)]">
              $99.99
            </p>
            <p className="text-red-500 font-bold">30% off</p>
          </div>
          <p className="text-gray-600 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nobis
            sequi provident consequuntur esse, quam voluptates eaque magnam
            voluptate ipsa?
          </p>
          <div className="flex items-center gap-4">
            <div className="flex flex-col text-xl gap-4 items-center">
              <label>Quantity:</label>
              <input
                type="number"
                defaultValue={1}
                className="w-16 border px-2 py-1 rounded-md"
              />
            </div>

            <div className="flex flex-col text-xl gap-4 items-center">
              <label>Size:</label>
              <select className="border px-2 py-1 rounded-md">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div className="flex flex-col text-xl gap-4 items-center">
              <label>Color:</label>
              <select className="border px-2 py-1 rounded-md">
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Black</option>
              </select>
            </div>
          </div>
          {/* Additional Info */}
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>Stock:</strong> Available
            </p>
            <p className="text-gray-700">
              <strong>SKU:</strong> 656TYTR
            </p>
            <p className="text-gray-700">
              <strong>Category:</strong> Medicine
            </p>
            <p className="text-gray-700">
              <strong>Brand:</strong> Novak
            </p>
            <p className="text-gray-700">
              <strong>Tags:</strong> Medicine, Healthcare, Modern, Shop
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-[var(--main-color)] text-white rounded-xl hover:bg-gray-800 transition cursor-pointer"
              onClick={handleCart}
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>{" "}
            <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="flex w-1/2 justify-between gap-12 border-b-2 rounded-none border-[var(--main-color)] bg-transparent">
            <TabsTrigger
              value="details"
              className="px-4 py-4 font-medium text-black  transition"
            >
              Product Details
            </TabsTrigger>
            <TabsTrigger
              value="additional"
              className="px-4 py-4 font-medium text-black  transition"
            >
              Additional Info
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="px-4 py-4 font-medium text-black  transition"
            >
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="py-4">
            <p>
              This product is made with high-quality materials to ensure
              durability and comfort. It is designed for everyday use and
              provides excellent protection. Specifications include:
            </p>
            <ul className="list-disc ml-6">
              <li>Material: Non-woven fabric</li>
              <li>Size: Adjustable</li>
              <li>Usage: Single-use</li>
              <li>Color: Multiple options available</li>
            </ul>
          </TabsContent>
          <TabsContent value="additional" className="py-4">
            <p>
              <strong>Shipping:</strong> Free shipping on orders over $50.
            </p>
            <p>
              <strong>Returns:</strong> 30-day return policy. Terms and
              conditions apply.
            </p>
            <p>
              <strong>Warranty:</strong> 1-year limited warranty for
              manufacturing defects.
            </p>
          </TabsContent>
          <TabsContent value="reviews" className="py-4">
            <p>Customer reviews:</p>
            <ul className="list-disc ml-6">
              <li>"Great product! Highly recommend." - John D.</li>
              <li>"Very comfortable and durable." - Sarah W.</li>
              <li>"Good value for the price." - Michael T.</li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Related Products</h2>
        <div>
          <Swiper
            modules={[ Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
           
            navigation={false}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {[1, 2, 3, 4,3,4,].map((item, index) => (
              <SwiperSlide key={index}>
                <Product />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
