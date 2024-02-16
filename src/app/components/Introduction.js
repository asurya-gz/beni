"use client";
import React, { useState, useEffect } from "react";
import { FaBolt } from "react-icons/fa"; // Import FaBolt icon from React Icons

export default function Introduction() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fadeIn effect once the component mounts
    setFadeIn(true);
  }, []);

  const handleClick = () => {
    // Find the target element
    const targetElement = document.getElementById("product");
    // Scroll to the target element smoothly
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`bg-gray-800 h-screen flex flex-col justify-center items-center p-6 text-center font-sans ${
        fadeIn ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <div>
        <img
          src="/benz-logo.png"
          width={800}
          height={400}
          alt="Benz Logo"
          className="w-48 mx-auto"
        />
        <p className="text-white text-xl md:text-xl lg:text-2xl mb-8 font-medium">
          <i>
            Terang ga perlu <span className="text-red-600">mahal</span>
          </i>
        </p>
        <button
          onClick={handleClick} // Menambahkan penanganan klik
          className="bg-blue-900 hover:bg-red-700 hover:border-none border-blue-600 border-2 text-white font-bold rounded-full py-3 px-3 shadow-md md:py-4 md:px-8 lg:text-lg flex items-center mx-auto animate-bounce"
        >
          <FaBolt /> {/* Lightning bolt icon */}
        </button>
      </div>
    </div>
  );
}
