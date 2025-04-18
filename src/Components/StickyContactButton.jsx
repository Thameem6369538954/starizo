import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const StickyContactButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-34 right-6 z-50 flex flex-col items-end group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Info box - appears above */}
      <div
        className={`mb-3 transition-all duration-300 ease-in-out transform ${
          hovered
            ? "opacity-100 -translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        } bg-white shadow-xl rounded-xl px-5 py-3 text-gray-800 text-sm font-medium space-y-2`}
      >
        <div>
          <p className="font-semibold text-blue-600">Thameem</p>
          <a href="tel:+919876543210" className="hover:underline block">
            +91 98765 43210
          </a>
        </div>
        <div>
          <p className="font-semibold text-blue-600">Rahul</p>
          <a href="tel:+919812345678" className="hover:underline block">
            +91 98123 45678
          </a>
        </div>
      </div>

      {/* Main Contact Button */}
      <Link
        to="/contact"
        className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white font-medium text-sm md:text-base rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 font-[para]"
      >
        <MessageSquare size={20} className="animate-pulse" />
        Client's Assist
      </Link>
    </div>
  );
};

export default StickyContactButton;
