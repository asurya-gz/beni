import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import FaInstagram and FaWhatsapp icons from React Icons

export default function IniFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8 border-none">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/benz-logo.png"
            alt="Company Logo"
            className="w-16 h-16 mr-4"
          />
          <div>
            <p className="text-lg font-semibold">BEN'Z AUTOLIGHT</p>
            <p className="text-sm italic">Terang Ga Harus Mahal</p>
            <p className="text-sm mt-2 text-slate-400">
              BSD AUTOPART, Jl. Letnan Sutopo No.9-10 BLOK A, Lengkong Gudang
              Tim., Kec. Serpong, Kota Tangerang Selatan, Banten 15310
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/bens.autolight/?igshid=dHkzZXJwNXozam9t&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm"
          >
            <FaInstagram />
            <span>bens.autolight</span>
          </a>
          <a
            href="https://wa.me/+6285695863107?text=Hallo%20BEN'Z%20AUTOLIGHT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm"
          >
            <FaWhatsapp />
            <span>085695863107</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
