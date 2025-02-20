"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Main = ({ isLoaded }) => {
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

  return (
    <main className="flex-grow flex items-center">
      <div className="container mx-auto px-6 md:px-12 pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#F4F5FB" }}
            >
              Upgrade Your{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #FE0000",
                  textStroke: "2px #FE0000",
                }}
              >
                Vehicle
              </span>{" "}
              with <span style={{ color: "#15B9FF" }}>Custom Lighting</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: "#F4F5FB" }}>
              Spesialis modifikasi lampu kendaraan terpercaya dengan pengalaman
              lebih dari 10 tahun. Kami menyediakan solusi lighting custom untuk
              mobil dan motor Anda.
            </p>
            <div className="flex space-x-4">
              <Link href="/components/OurService">
                <button
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: "#15B9FF", color: "#04092F" }}
                >
                  Lihat Katalog
                </button>
              </Link>
              <Link href="/contact">
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundColor: "transparent",
                    color: "#F4F5FB",
                    border: "2px solid #15B9FF",
                  }}
                >
                  Konsultasi Gratis
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-xl opacity-20"
                style={{ backgroundColor: "#15B9FF", filter: "blur(40px)" }}
              ></div>
              <div className="relative w-full max-w-lg mx-auto">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-auto"
                  style={{ minHeight: "300px" }}
                >
                  <defs>
                    <linearGradient
                      id="lightningGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#FE0000", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#3F2AFF", stopOpacity: 0.8 }}
                      />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <motion.path
                    d="M200,50 L180,150 L240,170 L160,350 L200,250 L140,230 L200,50"
                    fill="url(#lightningGrad)"
                    filter="url(#glow)"
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.path
                    d="M220,30 L200,130 L260,150 L180,330 L220,230 L160,210 L220,30"
                    fill="url(#lightningGrad)"
                    filter="url(#glow)"
                    initial={{ opacity: 0.3, scale: 0.9 }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.9, 1.2, 0.9],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Main;
