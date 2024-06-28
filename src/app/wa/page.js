"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    let message = "Hallo Bens Autolight!";
    let phoneNumber = "+6285695863107"; // Ganti dengan nomor WhatsApp yang sesuai
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url);
  };

  const openGoogleMaps = () => {
    window.open("https://maps.app.goo.gl/N2F9ig6q3kkyD7aR6");
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className={`flex space-x-4 ${isOpen ? "block" : "hidden"}`}>
        <button
          onClick={openWhatsApp}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none"
        >
          <FaWhatsapp className="h-6 w-6" />
        </button>
        <button
          onClick={openGoogleMaps}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          <FaMapMarkerAlt className="h-6 w-6" />
        </button>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-900 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 ${isOpen ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppFloating;
