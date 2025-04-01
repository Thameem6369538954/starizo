import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const searchRef = useRef(null);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 font-[para] left-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold text-black">
          <img src={logo} className="w-40" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-black">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About Us</Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center hover:text-gray-400">
              Services <ChevronDown size={16} className="ml-1" />
            </button>

            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 bg-white/10 backdrop-blur-lg p-2 rounded shadow-lg w-40"
              >
                <Link to="/service1" className="block px-4 py-2 hover:bg-gray-700">Service 1</Link>
                <Link to="/service2" className="block px-4 py-2 hover:bg-gray-700">Service 2</Link>
              </motion.div>
            )}
          </div>

          <Link to="/menus" className="hover:text-gray-400">Menus</Link>
          <Link to="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>

          {/* Search Icon */}
          <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-gray-400">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Search Bar (Appears when clicking search icon) */}
      {searchOpen && (
        <motion.div
          ref={searchRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg p-3 rounded-md shadow-lg w-[300px]"
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded bg-gray-800 text-black focus:outline-none"
          />
        </motion.div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/10 backdrop-blur-lg text-center p-4 space-y-2 text-black"
        >
          <Link to="/" className="block hover:text-gray-400">Home</Link>
          <Link to="/about" className="block hover:text-gray-400">About Us</Link>

          {/* Mobile Services Dropdown */}
          <div className="relative">
            <button
              className="block w-full text-left hover:text-gray-400"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
            </button>

            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 bg-gray-700 p-2 rounded"
              >
                <Link to="/service1" className="block px-4 py-2 hover:bg-gray-600">Service 1</Link>
                <Link to="/service2" className="block px-4 py-2 hover:bg-gray-600">Service 2</Link>
              </motion.div>
            )}
          </div>

          <Link to="/menus" className="block hover:text-gray-400">Menus</Link>
          <Link to="/gallery" className="block hover:text-gray-400">Gallery</Link>
          <Link to="/contact" className="block hover:text-gray-400">Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
