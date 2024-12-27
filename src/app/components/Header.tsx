"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      const heroHeight = document.querySelector(".hero")?.clientHeight || 0;
      if (window.scrollY > heroHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 text-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          ABC<span className="text-yellow-500">.</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-500">
            HOME
          </a>
          <a href="#" className="hover:text-yellow-500">
            PAGES
          </a>
          <a href="#" className="hover:text-yellow-500">
            BLOG
          </a>
          <a href="#" className="hover:text-yellow-500">
            PORTFOLIO
          </a>
          <a href="#" className="hover:text-yellow-500">
            SHOP
          </a>
          <a href="#" className="hover:text-yellow-500">
            ELEMENTS
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16l-4-4m0 0l4-4m-4 4h16"
              />
            </svg>
          </button>
          <div className="relative">
            <button className="text-white hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h18l-1.5 9h-15L3 3zm0 0l1.5 9m9 6h-6m0 0l1.5-9m3 9l1.5-9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
