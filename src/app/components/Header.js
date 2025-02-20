"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = ({ isLoaded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "6285695863107";
  const message =
    "Halo, saya ingin mengetahui lebih lanjut tentang layanan modifikasi di Ben's Autolight.";

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "/", text: "Home", delay: 0.1 },
    { href: "/components/About", text: "About Us", delay: 0.2 },
    { href: "/components/Galery", text: "Galery", delay: 0.3 },
    { href: "/components/Product", text: "Product", delay: 0.4 },
    {
      href: "#",
      text: "Contact Us",
      delay: 0.5,
      onClick: handleWhatsAppClick,
      isSpecial: true,
    },
  ];

  return (
    <header
      className="py-4 px-4 sm:px-6 md:px-12 fixed w-full z-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(4, 9, 47, 0.95) 0%, rgba(4, 9, 47, 0.85) 100%)",
        boxShadow: "0 4px 20px rgba(21, 185, 255, 0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        <Link href="/">
          <div className="flex items-center cursor-pointer group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold relative">
                <span className="relative">
                  <span style={{ color: "#15B9FF" }} className="animate-pulse">
                    BEN'S
                  </span>
                  <span
                    className="ml-2 hidden sm:inline"
                    style={{ color: "#F4F5FB" }}
                  >
                    Auto<span style={{ color: "#FE0000" }}>light</span>
                  </span>
                  <span className="ml-2 sm:hidden" style={{ color: "#F4F5FB" }}>
                    AL
                  </span>
                </span>
              </h1>
            </motion.div>
          </div>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="#15B9FF" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="#15B9FF" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation with new styling */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="relative"
              >
                {item.onClick ? (
                  <a
                    href="#"
                    onClick={item.onClick}
                    className={`px-4 py-2 rounded-full text-sm lg:text-base transition-all duration-300 
                    ${
                      item.isSpecial
                        ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                        : "bg-[#15B9FF]/10 text-[#15B9FF] border border-[#15B9FF]/30"
                    }`}
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link href={item.href}>
                    <span className="px-4 py-2 rounded-full text-sm lg:text-base bg-[#15B9FF]/10 text-[#15B9FF] border border-[#15B9FF]/30">
                      {item.text}
                    </span>
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation with new styling */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <ul className="flex flex-col space-y-3 py-4">
            {menuItems.map((item) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: item.delay }}
                className="px-4"
              >
                {item.onClick ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      item.onClick(e);
                      setIsMenuOpen(false);
                    }}
                    className={`block text-center py-2 rounded-full transition-all duration-300
                    ${
                      item.isSpecial
                        ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                        : "bg-[#15B9FF]/10 text-[#15B9FF] border border-[#15B9FF]/30"
                    }`}
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <span className="block text-center py-2 rounded-full bg-[#15B9FF]/10 text-[#15B9FF] border border-[#15B9FF]/30">
                      {item.text}
                    </span>
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
