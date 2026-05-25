 import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from "lucide-react";
const NavDropdown = ({ onApply, onApplyDeveloper }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown safely
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on ESC key (PRO LEVEL UX)
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>

      {/* Trigger Button */}
      <button
  onClick={toggleDropdown}
  className="flex items-center gap-0.5 px-4 py-2 text-sm font-medium bg-white text-[#1C39BB] border-2 border-[#1C39BB] rounded-lg transition-all duration-300 hover:text-orange-400 hover:border-orange-400"
>
  Apply Now

  <ChevronDown
    className={`pt-1  w-4 h-5  transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
  />
</button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-2xl py-2 z-50">

          {/* Intern */}
          <button
            onClick={() => {
              onApply();
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full text-left px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 transition"
          >
            Apply as Intern
          </button>

          {/* Developer */}
          <button
            onClick={() => {
              onApplyDeveloper?.(); // optional safe call
              setIsOpen(false);
            }}
            className="w-full text-left px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100 border-t border-gray-100 transition"
          >
            Apply as Developer
          </button>

        </div>
      )}
    </div>
  );
};

export default NavDropdown;