import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../Images/logo.png"

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 md:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700">
        
        {/* Logo & Copyright */}
        <div className="md:col-span-1">
          <img src={logo} alt="" />
          <p className="text-sm mt-2">©2019 Starizo® </p>
          <p className="text-sm mt-1">
            <a href="#" className="underline">Terms of Service</a> | <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900">Products</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Product</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Log in</a></li>
            <li><a href="#" className="hover:underline">Request access</a></li>
            <li><a href="#" className="hover:underline">Partnerships</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900">About us</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">About heilsa</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900">Get in touch</h4>
          <p className="text-sm mt-2">Questions or feedback?</p>
          <p className="text-sm">We'd love to hear from you</p>
          <div className="flex space-x-4 mt-4 text-gray-900">
            <a href="#" className="hover:text-green-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-600"><FaTwitter /></a>
            <a href="#" className="hover:text-green-600"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900">Subscribe</h4>
          <p className="text-sm mt-2">Get updates and latest news in your inbox.</p>
          <form className="mt-3 flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button 
              type="submit" 
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
