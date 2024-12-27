
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
        className="fixed bottom-4 mb-10 z-20 right-4 bg-yellow-500 text-white px-2 shadow-lg hover:bg-yellow-600 focus:outline-none"
      >
        &#8593;
      </button>
    )
  );
};

export default ScrollToTopButton;
