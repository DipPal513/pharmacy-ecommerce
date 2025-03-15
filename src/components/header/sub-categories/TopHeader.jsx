"use client"

import { Facebook, HelpCircle, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react"

export default function TopHeader() {
  return (
    <div className="text-gray-900 bg-white border-b border-gray-300 py-2 px-4">
      <div className="max-w-screen-xl mx-auto flex justify-between gap-3 md:flex-row flex-col md:items-center text-sm">
        
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1">
          <Mail className="h-4 w-4 text-gray-400" />
          <span>email@example.com</span>

          </div>
          <div className="flex items-center gap-1">
          <Phone className="h-4 w-4 text-gray-400" />
          <span>+123 456 7890</span>
          </div>
          <div className="hidden md:flex items-center gap-1 ">
          <HelpCircle className="h-4 w-4 text-gray-400 " />
          <span>Need Help?</span></div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm">
            Daily Deals
          </button>

          <div className="flex space-x-3">
            <Facebook className="h-4 w-4 cursor-pointer hover:text-blue-500 transition" />
            <Twitter className="h-4 w-4 cursor-pointer hover:text-blue-400 transition" />
            <Instagram className="h-4 w-4 cursor-pointer hover:text-pink-500 transition" />
            <Linkedin className="h-4 w-4 cursor-pointer hover:text-blue-600 transition" />
          </div>
        </div>

      </div>
    </div>
  )
}
