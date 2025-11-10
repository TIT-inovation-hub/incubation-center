"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

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
        <div className="h-2 bg-[#EF6C00]" />

        {/* === Top Section === */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 flex justify-between items-center flex-wrap gap-3">
          {/* Logos */}
          <div className="flex items-center flex-wrap gap-3 sm:gap-5 md:gap-6">
            <div className="relative hidden sm:block h-8 sm:h-10 md:h-16 w-24 sm:w-28 md:w-32">
              <Image
                src="/MOE.png"
                alt="Ministry of Education Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 60px, 120px"
                priority
              />
            </div>
            <span className="hidden md:block text-gray-400 text-xl select-none">
              |
            </span>

            <div className="relative hidden md:block h-8 sm:h-10 md:h-16 w-28 sm:w-32 md:w-36">
              <Image
                src="/moeIncubation.png"
                alt="MoE's Innovation Cell Logo"
                fill
                className="object-contain"
                sizes="120px"
              />
            </div>

            <span className="hidden md:block text-gray-400 text-xl select-none">
              |
            </span>

            <div className="relative h-8 sm:h-10 md:h-16 w-24 sm:w-28 md:w-32">
              <Image
                src="/iic logo.avif"
                alt="IIC Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 60px, 120px"
              />
            </div>

            <span className="hidden md:block text-gray-400 text-xl select-none">
              |
            </span>

            <div className="relative h-12 sm:h-14 md:h-20 w-14 sm:w-14 md:w-20">
              <Image
                src="/Incubation.png"
                alt="College Incubation Cell Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80px, 160px"
              />
            </div>

            <span className="hidden md:block text-gray-400 text-xl select-none">
              |
            </span>

            <div className="relative h-12 sm:h-14 md:h-20 w-14 sm:w-14 md:w-20">
              <Image
                src="/titlogo.png"
                alt="TIT Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80px, 160px"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#"
              className="hidden md:inline-block px-6 sm:px-7 py-3 border-2 border-[#EF6C00] text-[#EF6C00] text-base sm:text-lg font-semibold rounded-2xl transition-colors hover:bg-[#EF6C00] hover:text-white shadow-sm"
            >
              Apply
            </a>

            <a
              href="/dashboard"
              className="hidden md:inline-block relative px-6 sm:px-7 py-3 bg-[#EF6C00] text-white text-base sm:text-lg font-semibold rounded-2xl transition-colors hover:bg-orange-700 shadow-md"
            >
              Login
              <span className="sih-login-dot" />
            </a>

            {/* Mobile Toggle */}
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

        {/* === Desktop Nav === */}
        <nav className="hidden md:block border-t border-gray-200 relative">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <ul className="flex justify-center space-x-8 text-sm lg:text-base font-medium text-[#555] h-12 items-center">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  {link.isDropdown ? (
                    <div ref={dropdownRef} className="relative">
                      {" "}
                      {/* 👈 Wrap with ref */}
                      <button
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        className="hover:text-[#EF6C00] transition-colors dropdown-arrow flex items-center gap-1"
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
                    </div>
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

        {/* === Mobile Menu === */}
        <nav
          id="mobile-menu-links"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden border-t border-gray-200 bg-white shadow-md`}
        >
          <ul className="flex flex-col px-5 py-3 space-y-2 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                {link.isDropdown ? (
                  <div ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className="w-full text-left py-2 flex items-center justify-between hover:text-[#EF6C00] transition-colors"
                    >
                      {link.name}
                      <span className="text-xs ml-2">▼</span>
                    </button>
                    {isDropdownOpen && (
                      <ul className="mt-1 ml-3 border-l border-gray-200 pl-3 space-y-1">
                        {dropdownItems.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="block py-1 text-gray-600 hover:text-[#EF6C00] transition-colors"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block py-2 hover:text-[#EF6C00] transition-colors"
                    onClick={() => setIsMenuOpen(false)} // close on click
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}

            {/* Mobile Buttons */}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="#"
                className="w-full text-center px-6 py-2 border-2 border-[#EF6C00] text-[#EF6C00] font-semibold rounded-2xl hover:bg-[#EF6C00] hover:text-white transition"
              >
                Apply
              </a>
              <a
                href="/dashboard"
                className="w-full text-center px-6 py-2 bg-[#EF6C00] text-white font-semibold rounded-2xl hover:bg-orange-700 transition relative"
              >
                Login
                <span className="sih-login-dot" />
              </a>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavbarComponent;
