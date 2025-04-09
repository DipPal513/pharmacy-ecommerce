"use client";
import React, { useState } from 'react';
import Product from '@/components/product/Product';

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [products, setProducts] = useState([
        // Example product data
        { id: 1, name: 'Product 1', category: 'Category 1' },
        { id: 2, name: 'Product 2', category: 'Category 2' },
        { id: 3, name: 'Product 3', category: 'Category 1' },
        { id: 4, name: 'Product 4', category: 'Category 2' },
        { id: 5, name: 'Product 5', category: 'Category 1' },
        { id: 6, name: 'Product 6', category: 'Category 2' },
    ]);

    const categories = ['all', 'Category 1', 'Category 2'];

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>

            <div className="mb-4 flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded w-full sm:w-1/2"
                />

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border p-2 rounded w-full sm:w-1/4"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                ) : (
                    <p className="col-span-full text-center">No products found.</p>
                )}
            </div>
        </div>
    );
}
