"use client"

import { useState } from "react"
import { Search, Grid, List } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Product from "@/components/product/Product"

// Assuming Product component is already defined elsewhere
// import { Product } from '@/components/product'



// Categories with counts
const categories = [
  { name: "Medicine", count: 15 },
  { name: "Healthcare", count: 23 },
  { name: "Beauty Care", count: 35 },
  { name: "Sexual Wellness", count: 46 },
  { name: "Fitness", count: 39 },
  { name: "Lab Test", count: 79 },
  { name: "Baby & Mom Care", count: 28 },
  { name: "Supplement", count: 17 },
  { name: "Food & Nutrition", count: 12 },
  { name: "Equipments", count: 74 },
  { name: "Medical Supplies", count: 38 },
  { name: "Pet Care", count: 22 },
  { name: "Others", count: 25 },
]

// Brands with counts
const brands = [
  { name: "Tovol", count: 12 },
  { name: "Sundoy", count: 15 },
  { name: "Sahoo Medoc", count: 20 },
  { name: "Casterly", count: 5 },
  { name: "Maindeno", count: 9 },
]

const products = [2,3,5,6]
// Colors for filter
const colors = [
  { name: "White", value: "white" },
  { name: "Black", value: "black" },
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Orange", value: "orange" },
  { name: "Navy", value: "navy" },
]

// Review sizes for filter
const reviewSizes = [
  { name: "Less than 10", value: "0-10" },
  { name: "10 to 20", value: "10-20" },
  { name: "20 to 30", value: "20-30" },
  { name: "More than 30", value: "30+" },
]

export default function ProductListingPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [priceRange, setPriceRange] = useState([0, 200])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6
  const totalPages = Math.ceil(products.length / productsPerPage)

  

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-col  lg:flex-row gap-8">
         {/* Main content */}
         <div className="lg:w-3/4">
          {/* Sorting and view options */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort By:</span>
                <div className="relative">
                  <Select defaultValue="default">
                    <SelectTrigger className="w-[180px] h-9 text-sm">
                      <SelectValue placeholder="Default Sorting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default Sorting</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="popularity">Popularity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <span className="text-sm text-gray-600">
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length}{" "}
                Results
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className={`p-2 rounded ${viewMode === "grid" ? "bg-teal-500 text-white" : "bg-gray-100"}`}
                onClick={() => setViewMode("grid")}
              >
                <Grid size={18} />
              </button>
              <button
                className={`p-2 rounded ${viewMode === "list" ? "bg-teal-500 text-white" : "bg-gray-100"}`}
                onClick={() => setViewMode("list")}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Products grid */}
          <div
            className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6 mb-8`}
          >
            {[1,2,3,4,5,6].map((product,index) => (
             <Product key={index}/>
            ))}
          </div>

          {/* Pagination */}
          <Pagination className="justify-center">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) setCurrentPage(currentPage - 1)
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage(i + 1)
                    }}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        {/* Sidebar with filters */}
        <div className="lg:w-1/4">
          {/* Search */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Search</h2>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Category filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Category</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id={`category-${category.name}`} />
                    <label htmlFor={`category-${category.name}`} className="text-sm">
                      {category.name}
                    </label>
                  </div>
                  <span className="text-gray-500 text-sm">({category.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Brands</h2>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id={`brand-${brand.name}`} />
                    <label htmlFor={`brand-${brand.name}`} className="text-sm">
                      {brand.name}
                    </label>
                  </div>
                  <span className="text-gray-500 text-sm">({brand.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Price Range</h2>
            <Slider
              defaultValue={[0, 200]}
              max={200}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-4"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm">${priceRange[0]}</span>
              <span className="text-sm">${priceRange[1]}</span>
            </div>
          </div>

          {/* Color filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Color</h2>
            <div className="space-y-2">
              {colors.map((color) => (
                <div key={color.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id={`color-${color.name}`} />
                    <label htmlFor={`color-${color.name}`} className="text-sm flex items-center gap-2">
                      <span
                        className={`inline-block w-4 h-4 rounded-full bg-${color.value === "white" ? "gray-100 border border-gray-300" : color.value}`}
                      ></span>
                      {color.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Size filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Review Size</h2>
            <div className="space-y-2">
              {reviewSizes.map((size) => (
                <div key={size.value} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id={`review-${size.value}`} />
                    <label htmlFor={`review-${size.value}`} className="text-sm">
                      {size.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}
