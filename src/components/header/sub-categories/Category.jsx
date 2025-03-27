"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronRight, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

export default function NestedDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const [activeSubItem, setActiveSubItem] = useState(null)

  // Refs for each menu level
  const mainButtonRef = useRef(null)
  const firstLevelRef = useRef(null)
  const secondLevelRef = useRef(null)
  const thirdLevelRef = useRef(null)

  // Timeout refs for delayed closing
  const closeTimeoutRef = useRef(null)

  const mainItems = [
    { id: 1, label: "Electronics" },
    { id: 2, label: "Clothing" },
    { id: 3, label: "Home & Garden" },
    { id: 4, label: "Sports" },
    { id: 5, label: "Books" },
    { id: 6, label: "Toys" },
    { id: 7, label: "Beauty" },
  ]

  const subItems = {
    1: [
      { id: 101, label: "Smartphones" },
      { id: 102, label: "Laptops" },
      { id: 103, label: "Tablets" },
      { id: 104, label: "Accessories" },
    ],
    2: [
      { id: 201, label: "Men's" },
      { id: 202, label: "Women's" },
      { id: 203, label: "Kids" },
      { id: 204, label: "Accessories" },
    ],
    3: [
      { id: 301, label: "Furniture" },
      { id: 302, label: "Decor" },
      { id: 303, label: "Kitchen" },
      { id: 304, label: "Garden" },
    ],
    4: [
      { id: 401, label: "Equipment" },
      { id: 402, label: "Clothing" },
      { id: 403, label: "Footwear" },
      { id: 404, label: "Accessories" },
    ],
    5: [
      { id: 501, label: "Fiction" },
      { id: 502, label: "Non-Fiction" },
      { id: 503, label: "Children's" },
      { id: 504, label: "Academic" },
    ],
    6: [
      { id: 601, label: "Action Figures" },
      { id: 602, label: "Board Games" },
      { id: 603, label: "Outdoor Toys" },
      { id: 604, label: "Educational" },
    ],
    7: [
      { id: 701, label: "Skincare" },
      { id: 702, label: "Makeup" },
      { id: 703, label: "Haircare" },
      { id: 704, label: "Fragrances" },
    ],
  }

  const tertiaryItems = {
    101: ["iPhones", "Android Phones", "Feature Phones"],
    102: ["Gaming", "Business", "Ultrabooks"],
    201: ["Shirts", "Pants", "Suits", "Jackets"],
    202: ["Dresses", "Tops", "Skirts", "Jeans"],
    301: ["Sofas", "Tables", "Beds", "Chairs"],
    401: ["Gym Equipment", "Team Sports", "Outdoor"],
    501: ["Mystery", "Romance", "Sci-Fi", "Fantasy"],
    601: ["Superheroes", "Collectibles", "Playsets"],
    701: ["Cleansers", "Moisturizers", "Serums"],
  }

  // Function to handle mouse enter on any menu element
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  // Function to handle mouse leave with delay
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      // Check if mouse is over any of our menu elements before closing
      const isMouseOverMenu =
        document.activeElement === mainButtonRef.current ||
        document.activeElement === firstLevelRef.current ||
        document.activeElement === secondLevelRef.current ||
        document.activeElement === thirdLevelRef.current

      if (!isMouseOverMenu) {
        setIsOpen(false)
        setActiveItem(null)
        setActiveSubItem(null)
      }
    }, 300) // 300ms delay before closing
  }

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  return (
<div className="bg-gray-100">
    <div className="max-w-screen-xl mx-auto relative py-3" onMouseLeave={handleMouseLeave}>
      {/* Main Category Button */}
      <button
        ref={mainButtonRef}
        className={cn(
          "flex items-center gap-2 px-4 py-3 rounded transition-all duration-200 border",
          isOpen ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-background hover:bg-muted",
        )}
        onMouseEnter={() => {
          handleMouseEnter()
          setIsOpen(true)
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Layers className={cn("h-5 w-5", isOpen ? "animate-pulse" : "")} />
        <span className="font-medium">Categories</span>
      </button>

      {/* First Level Dropdown */}
      {isOpen && (
        <div
          ref={firstLevelRef}
          className="absolute left-0 top-full mt-2 w-48 rounded-lg border bg-background shadow-lg z-50"
          onMouseEnter={handleMouseEnter}
        >
          <ul className="py-2">
            {mainItems.map((item) => (
              <li
                key={item.id}
                className={cn(
                  "px-4 py-2 hover:bg-muted flex justify-between items-center cursor-pointer",
                  activeItem === item.id && "bg-muted",
                )}
                onMouseEnter={() => {
                  handleMouseEnter()
                  setActiveItem(item.id)
                }}
              >
                <span>{item.label}</span>
                {subItems[item.id] && <ChevronRight className="h-4 w-4" />}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Second Level Dropdown - Positioned with negative margin for overlap */}
      {isOpen && activeItem !== null && subItems[activeItem] && (
        <div
          ref={secondLevelRef}
          className="absolute left-44 top-2 w-48 rounded-lg border bg-background shadow-lg z-50"
          onMouseEnter={handleMouseEnter}
          style={{ marginLeft: "4px" }} // Small overlap with first menu
        >
          <ul className="py-2">
            {subItems[activeItem].map((subItem) => (
              <li
                key={subItem.id}
                className={cn(
                  "px-4 py-2 hover:bg-muted flex justify-between items-center cursor-pointer",
                  activeSubItem === subItem.id && "bg-muted",
                )}
                onMouseEnter={() => {
                  handleMouseEnter()
                  setActiveSubItem(subItem.id)
                }}
              >
                <span>{subItem.label}</span>
                {tertiaryItems[subItem.id] && <ChevronRight className="h-4 w-4" />}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Third Level Dropdown - Positioned with negative margin for overlap */}
      {isOpen && activeSubItem !== null && tertiaryItems[activeSubItem] && (
        <div
          ref={thirdLevelRef}
          className="absolute left-92 top-2 w-48 rounded-lg border bg-background shadow-lg z-50"
          onMouseEnter={handleMouseEnter}
          style={{ marginLeft: "4px" }} // Small overlap with second menu
        >
          <ul className="py-2">
            {tertiaryItems[activeSubItem].map((tertiaryItem, index) => (
              <li key={index} className="px-4 py-2 hover:bg-muted cursor-pointer" onMouseEnter={handleMouseEnter}>
                {tertiaryItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  )
}

