import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="bg-white font-[para]"
    id="con-section"
    >
         <motion.h1
        className="text-5xl md:text-8xl tracking-wide font-bold text-center text-gray-800 mb-7 font-[Heading]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        GET IN  <span className="text-[#fdc700]">TOUCH
        </span>
      </motion.h1>
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-10 md:py-16 gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-black leading-tight">
            We are always ready to help you and answer your questions
          </h2>
          <p className="text-gray-500">
            Pacific hake false trevally queen parrotfish black prickleback
            mosshead warbonnet sweeper! Greenling sleeper.
          </p>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg">Call Center</h4>
              <p className="text-gray-600">+91 81411 66866</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Our Location</h4>
              <p className="text-gray-600">21, C.V. Raman Road, Alwarpet,
              Chennai-600 018,</p>
              <p className="text-gray-600"> Tamilnadu, India.</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <h4 className="font-semibold text-lg">Email</h4>
            <p className="text-gray-600">info@tmbioenergy.com</p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg">Social Network</h4>
            <div className="flex space-x-4 mt-2 text-gray-600">
              <a href="#" className="flex items-center gap-2 hover:text-black">
                <FaFacebookF /> Facebook
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-black">
                <FaLinkedinIn /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-black">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="md:w-1/2 w-full bg-gray-100 p-6 md:p-10 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-black">Get in Touch</h3>
          <p className="text-gray-600 text-sm mb-6">
            Define your goals and identify areas where AI can add value to your business.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              ➜ Send a message
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full h-[300px] md:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.6272891265!2d80.23868582731903!3d13.00677305284664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ed15c41681%3A0x6569ce967a249e83!2sAdyar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1743235036957!5m2!1sen!2sin"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
