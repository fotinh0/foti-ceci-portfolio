import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    // Show the button when the user scrolls down 400px
    if (window.scrollY > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        showButton ? "block" : "hidden"
      } fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg transition-opacity duration-300 hover:bg-indigo-700 focus:outline-none z-10`}
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="w-6 h-6" aria-hidden="true" />
    </button>
  );
}
