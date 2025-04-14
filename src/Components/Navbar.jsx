import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const searchRef = useRef(null);
  const dropdownTimeout = useRef(null);

  // Scroll behavior for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click to close search
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reusable link click handler
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 font-[para]">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="w-36" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center text-black font-medium text-xl">
          <Link to="/" className="hover:text-gray-500" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className="hover:text-gray-500" onClick={handleLinkClick}>About Us</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout.current);
              setIsServicesOpen(true);
            }}
            onMouseLeave={() => {
              dropdownTimeout.current = setTimeout(() => {
                setIsServicesOpen(false);
              }, 150);
            }}
          >
            <button className="flex items-center gap-1 hover:text-gray-500">
              Services <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-8 left-0 bg-white rounded shadow-lg w-44 py-2"
                >
                  <Link to="/StarizoStarchCard" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Rice Starch</Link>
                  <Link to="/RiceProteinCard" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Rice Protein Concentrate</Link>
                  <Link to="/MaltoExtrin" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>MaltoExtrin</Link>
                  <Link to="/ClarifiedSyrupSection" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Clarified Syrup</Link>
                  <Link to="/HighMaltoseRiceSyrupSection" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>High Maltose Rice Syrup</Link>
                  <Link to="/IndustrySolutionsSection" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Industry Solutions</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/menus" className="hover:text-gray-500" onClick={handleLinkClick}>Menus</Link>
          <Link to="/contact" className="hover:text-gray-500" onClick={handleLinkClick}>Contact</Link>

          <button onClick={() => setSearchOpen((prev) => !prev)} className="hover:text-gray-500">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            ref={searchRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded shadow-lg w-80"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border rounded text-black focus:outline-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/30 backdrop-blur-md text-black px-4 py-6 space-y-4 shadow-md"
          >
            <Link to="/" className="block hover:text-gray-500" onClick={handleLinkClick}>Home</Link>
            <Link to="/about" className="block hover:text-gray-500" onClick={handleLinkClick}>About Us</Link>

            {/* Services Toggle for Mobile */}
            <div className="block">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left hover:text-gray-500 flex justify-between items-center"
              >
                Services <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 ml-4 space-y-1"
                  >
                    <Link to="/StarizoStarchCard" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={handleLinkClick}>Rice Starch</Link>
                    <Link to="/RiceProteinCard" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={handleLinkClick}>Rice Protein Concentrate</Link>
                    <Link to="/MaltoExtrin" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={handleLinkClick}>MaltoExtrin</Link>
                    <Link to="/ClarifiedSyrupSection" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={handleLinkClick}>Clarified Syrup</Link>
                    <Link to="/HighMaltoseRiceSyrupSection" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={handleLinkClick}>High Maltose Rice Syrup</Link>
                    <Link to="/IndustrySolutionsSection" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={handleLinkClick}>Industry Solutions</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/menus" className="block hover:text-gray-500" onClick={handleLinkClick}>Menus</Link>
            <Link to="/contact" className="block hover:text-gray-500" onClick={handleLinkClick}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
