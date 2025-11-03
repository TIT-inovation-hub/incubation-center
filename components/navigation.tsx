"use client";
import React, { useState } from "react";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "GUIDELINES", href: "#", isDropdown: true },
    { name: "OUR PROJECT", href: "#" },
    { name: "FAQS", href: "#" },
    { name: "CONTACT US", href: "#" },
  ];

  const dropdownItems = [
    { name: "General Guidelines", href: "#" },
    { name: "Submission Rules", href: "#" },
    { name: "Team Requirements", href: "#" },
  ];

  return (
    <div className="font-sans relative">
      <style jsx global>{`
        .dropdown-arrow::after {
          content: "▼";
          font-size: 0.6rem;
          margin-left: 0.4rem;
          transform: scaleY(0.8);
          display: inline-block;
        }
        .sih-login-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          background-color: #ff5722;
          border-radius: 9999px;
          border: 1px solid white;
        }
      `}</style>

      <header className="shadow-md bg-white w-full">
        {/* Top accent line */}
        <div className="h-2 bg-[#EF6C00]"></div>

        {/* Top section: Logos + Buttons */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 flex justify-between items-center flex-wrap gap-3">
          {/* Logos */}
          <div className="flex items-center flex-wrap gap-3 sm:gap-5 md:gap-6">
            <img
              src="MOE.png"
              alt="Ministry of Education Logo"
              className="h-8 sm:h-10 md:h-16 object-contain"
            />

            <span className="hidden md:block text-gray-400 text-xl select-none">
              |
            </span>

            <img
              src="moeIncubation.png"
              alt="MoE's Innovation Cell Logo"
              className="h-8 hidden md:block sm:h-10 md:h-16 object-contain"
            />

            <span className=" hidden md:block text-gray-400 text-xl select-none">
              |
            </span>

            <img
              src="iic logo.avif"
              alt="IIC Logo"
              className="h-8 sm:h-10 md:h-16 object-contain"
            />

            <span className=" hidden md:block text-gray-400 text-xl select-none">
              |
            </span>

            <img
              src="Incubation.png"
              alt="College Incubation Cell Logo"
              className="h-12 sm:h-14 md:h-20 object-contain"
            />

            <span className="hidden md:block text-gray-400 text-xl select-none">
              |
            </span>

            <img
              src="titlogo.png"
              alt="TIT Logo"
              className="h-12 sm:h-14 md:h-20 object-contain"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Apply Button (Outlined Style) */}
            <a
              href="#"
              className="hidden md:inline-block px-6 sm:px-7 py-3 border-2 border-[#EF6C00] text-[#EF6C00] text-base sm:text-lg font-semibold rounded-2xl transition-colors hover:bg-[#EF6C00] hover:text-white shadow-sm"
            >
              Apply
            </a>

            {/* Desktop Login */}
            <a
              href="#"
              className="hidden md:inline-block relative px-6 sm:px-7 py-3 bg-[#EF6C00] text-white text-base sm:text-lg font-semibold rounded-2xl transition-colors hover:bg-orange-700 shadow-md"
            >
              Login
              <span className="sih-login-dot"></span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-links"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block border-t border-gray-200 relative">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <ul className="flex justify-center space-x-8 text-sm lg:text-base font-medium text-[#555] h-12 items-center">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  {link.isDropdown ? (
                    <>
                      <button
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        className={`hover:text-[#EF6C00] transition-colors dropdown-arrow flex items-center gap-1`}
                      >
                        {link.name}
                      </button>

                      {isDropdownOpen && (
                        <ul className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white shadow-lg border border-gray-100 rounded-lg py-2 w-52 z-50">
                          {dropdownItems.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#EF6C00] transition-colors"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-[#EF6C00] transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        <nav
          id="mobile-menu-links"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden border-t border-gray-200 bg-gray-50`}
        >
          <ul className="flex flex-col p-3 sm:p-4 space-y-2 text-gray-700 text-sm sm:text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                {/* Dropdown on mobile */}
                {link.isDropdown ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex justify-between w-full py-2 px-3 hover:bg-gray-200 rounded-lg"
                    >
                      {link.name}
                      <span>{isDropdownOpen ? "▲" : "▼"}</span>
                    </button>
                    {isDropdownOpen && (
                      <ul className="pl-6 space-y-1">
                        {dropdownItems.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="block py-1 text-gray-600 hover:text-[#EF6C00]"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block py-2 px-3 hover:bg-gray-200 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}

            {/* Apply + Login (mobile) */}
            <li className="pt-3 border-t border-gray-200 flex flex-col gap-2">
              <a
                href="#"
                className="block text-center w-full py-2 border-2 border-[#EF6C00] text-[#EF6C00] font-semibold rounded-xl shadow-sm hover:bg-[#EF6C00] hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply
              </a>
              <a
                href="#"
                className="block text-center w-full py-2 bg-[#EF6C00] text-white font-semibold rounded-xl shadow-md hover:bg-orange-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavbarComponent;
