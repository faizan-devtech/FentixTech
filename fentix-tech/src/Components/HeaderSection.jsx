 import React, { useState } from "react";
import NavDropdown from "./NavDropdown";

const HeaderSection = ({ onApply, goHome, onDashboard }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id) => {
    goHome();
    setMobileOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -70;
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Services", id: "services" },
    { name: "Our Expertise", id: "expertise" },
    { name: "Our Work", id: "projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border border-white shadow-sm z-50">

      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">

        {/* LOGO */}
        <div
          onClick={goHome}
          className="flex items-center gap-0.3 cursor-pointer select-none"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 w-10 "
          />

          <div className=" mr-4 text-l uppercase font-bold leading-none">
            <span className="text-[#1C39BB]">Fentix</span>
            <span className="text-orange-500">Tech</span>
          </div>
        </div>

        {/* NAV LINKS (desktop) */}
        <ul className="hidden lg:flex items-center gap-10 ml-auto text-base font-medium text-gray-800">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className="hover:text-orange-500 transition duration-200"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT ACTIONS (desktop) */}
        <div className="hidden lg:flex flex-wrap items-center gap-4 ml-8 ">

          {/* Dashboard Button */}
          <button
            onClick={onDashboard}
            className="px-5 py-2 text-sm font-medium bg-white text-[#1C39BB] border-2 border-[#1C39BB] rounded-lg transition-all duration-300 hover:border-orange-400 hover:text-orange-400 focus:outline-none focus:ring-0"
          >
            Dashboard
          </button>

          <NavDropdown onApply={onApply} />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden ml-auto flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        >
          <span className="w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">

          <ul className="flex flex-col px-6 py-4 gap-4 text-base font-medium text-gray-800">

            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="w-full text-left py-2 hover:text-orange-500"
                >
                  {link.name}
                </button>
              </li>
            ))}

            {/* Mobile Dashboard */}
            <button
              onClick={onDashboard}
              className="w-full mt-2 px-5 py-2 bg-white text-black border border-[#1C39BB] rounded-lg hover:bg-orange-400 hover:text-white hover:border-orange-400 transition-all duration-300"
            >
              Dashboard
            </button>

            <div className="mt-2">
              <NavDropdown onApply={onApply} />
            </div>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default HeaderSection;