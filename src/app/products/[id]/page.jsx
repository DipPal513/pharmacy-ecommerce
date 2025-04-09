"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon, Heart, ShoppingCart } from "lucide-react";

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

    return (
        <div className="max-w-screen-xl mx-auto p-4">
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
                                <StarIcon key={index} className="text-black" />
                            ))}
                        </p>
                        <p className="text-lg">(4 Customer Reviews)</p>
                    </div>
                    <p className="text-gray-600">
                        Short description of the product goes here.
                    </p>
                    <p className="text-xl font-bold">$99.99</p>

                    <div className="flex gap-4 items-center">
                        <label>Quantity:</label>
                        <input
                            type="number"
                            defaultValue={1}
                            className="w-16 border px-2 py-1 rounded-md"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <label>Size:</label>
                        <select className="border px-2 py-1 rounded-md">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>

                    <div className="flex gap-4 items-center">
                        <label>Color:</label>
                        <select className="border px-2 py-1 rounded-md">
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Green</option>
                            <option>Black</option>
                        </select>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-2">
                        <p>
                            <strong>Stock:</strong> Available
                        </p>
                        <p>
                            <strong>SKU:</strong> 656TYTR
                        </p>
                        <p>
                            <strong>Category:</strong> Medicine
                        </p>
                        <p>
                            <strong>Brand:</strong> Novak
                        </p>
                        <p>
                            <strong>Tags:</strong> Medicine, Healthcare, Modern, Shop
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
                            <Heart className="w-5 h-5" />
                           
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--main-color)] text-white rounded-xl hover:bg-gray-800 transition">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-12">
                <Tabs defaultValue="details">
                    <TabsList className="flex w-full justify-between gap-12 border-b">
                        <TabsTrigger
                            value="details"
                            className="px-4 py-4 font-medium text-black hover:border-b-2 hover:border-black transition"
                        >
                            Product Details
                        </TabsTrigger>
                        <TabsTrigger
                            value="additional"
                            className="px-4 py-4 font-medium text-black hover:border-b-2 hover:border-black transition"
                        >
                            Additional Info
                        </TabsTrigger>
                        <TabsTrigger
                            value="reviews"
                            className="px-4 py-4 font-medium text-black hover:border-b-2 hover:border-black transition"
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
                        <p>
                            Customer reviews:
                        </p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="border rounded-xl p-4 shadow hover:shadow-md transition"
                        >
                            <img
                                src={`/images/product${item}.jpg`}
                                alt="Related Product"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h3 className="mt-2 font-medium">Related Product {item}</h3>
                            <p className="text-gray-600 text-sm">$49.99</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
