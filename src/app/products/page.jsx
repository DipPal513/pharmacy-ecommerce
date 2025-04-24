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
         <div className="">
          {/* Sorting and view options */}
          

          {/* Products grid */}
          <div
            className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"} gap-6 mb-8`}
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
       
       
      </div>
    </div>
  )
}
