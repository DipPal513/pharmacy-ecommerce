"use client";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#023350ac] relative text-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* 1st Column - Logo & Contact Details */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-3">
            <img src="https://yourlogo.com/logo.png" alt="Logo" className="w-24" />
          </div>
          <div>
            <p className="flex items-center space-x-3">
              <FaPhoneAlt /> <span>+123 456 789</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaEnvelope /> <span>contact@yourwebsite.com</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaLocationArrow /> <span>123 Your Street, City, Country</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full transition duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="bg-pink-500 hover:bg-pink-700 text-white p-2 rounded-full transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-600 text-white p-2 rounded-full transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-full transition duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* 2nd Column - Quick Links */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd Column - Browse Categories */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-semibold text-lg">Browse Categories</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Technology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Health
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Education
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Lifestyle
              </a>
            </li>
          </ul>
        </div>

        {/* 4th Column - Support Center */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-semibold text-lg">Support Center</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Help Desk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:translate-x-2 cursor-pointer transition duration-300">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>

        {/* 5th Column - Get Our Apps */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-semibold text-lg">Get Our Apps</h4>
          <div className="flex space-x-4">
            <a href="#" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300">
              App Store
            </a>
            <a href="#" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300">
              Google Play
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved. | Developed by Your Name</p>
      </div>
    </footer>
  );
}
