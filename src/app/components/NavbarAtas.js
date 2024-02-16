"use client";
import React, { useState } from "react";

export default function NavbarAtas() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 font-sans fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mx-4">
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="Ben'z Auolight Logo"
              className="h-10 mr-2"
            />
          </a>
        </div>
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-xl focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-full right-0 bg-gray-900 rounded-lg shadow-lg">
              <ul className="flex flex-col md:flex-row items-center md:space-x-4 p-4 w-full">
                <li>
                  <a
                    href="#home"
                    className="text-white hover:text-gray-300 py-2 px-4 block"
                  >
                    Utama
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    className="text-white hover:text-gray-300 py-2 px-4 block"
                  >
                    Produk
                  </a>
                </li>
                <li>
                  <a
                    href="#galery"
                    className="text-white hover:text-gray-300 py-2 px-4 block"
                  >
                    Galeri
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="md:flex hidden">
          <ul className="flex justify-end items-center space-x-4">
            <li>
              <a href="#home" className="text-white hover:text-gray-300">
                Utama
              </a>
            </li>
            <li>
              <a href="#product" className="text-white hover:text-gray-300">
                Profuk
              </a>
            </li>
            <li>
              <a href="#galery" className="text-white hover:text-gray-300">
                Galeri
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
