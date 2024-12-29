"use client";
import { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 z-20 bg-yellow-500 text-white px-3 py-2 rounded-full shadow-lg hover:bg-yellow-600 focus:outline-none transition-transform transform hover:scale-110"
        aria-label="Scroll to top"
      >
        &#8593;
      </button>
    )
  );
};

export default ScrollToTopButton;
