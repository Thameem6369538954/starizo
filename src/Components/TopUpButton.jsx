// components/TopUpButton.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function TopUpButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [borderSize, setBorderSize] = useState(80); // initial size

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent = Math.min(scrollY / 800, 1); // cap at 100%
      const size = 80 - scrollPercent * 40; // shrink from 80 to 40
      setBorderSize(size);
      setIsVisible(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Animated shrinking border */}
          <motion.div
            animate={{
              width: borderSize,
              height: borderSize,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 m-auto rounded-full border-4 border-white opacity-70"
            style={{
              pointerEvents: "none",
            }}
          />

          {/* Main button */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(253, 199, 0, 0.7)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative bg-yellow-400 hover:bg-yellow-500 text-white p-5 rounded-full shadow-2xl border-[3px] border-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-7 h-7" strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
