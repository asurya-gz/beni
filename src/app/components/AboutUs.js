import React from "react";
import { motion } from "framer-motion";

const HeadlightAnimation = () => (
  <svg viewBox="0 0 400 300" className="w-full h-auto">
    <defs>
      <radialGradient id="headlightGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#15B9FF" stopOpacity="0" />
      </radialGradient>
      <filter id="blur">
        <feGaussianBlur stdDeviation="3" />
      </filter>
    </defs>

    {/* Headlight housing */}
    <motion.path
      d="M150,100 C150,60 250,60 250,100 L250,200 C250,240 150,240 150,200 Z"
      fill="#2B2B2B"
      stroke="#444"
      strokeWidth="2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />

    {/* Light beam */}
    <motion.path
      d="M160,150 L350,50 L350,250 L160,150"
      fill="url(#headlightGlow)"
      filter="url(#blur)"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* LED strips */}
    {[1, 2, 3].map((i) => (
      <motion.rect
        key={i}
        x="170"
        y={110 + i * 30}
        width="60"
        height="5"
        fill="#15B9FF"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
      />
    ))}
  </svg>
);

const AboutUs = ({ isLoaded }) => {
  return (
    <div className="container mx-auto px-6 md:px-12 min-h-screen">
      <div className="pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            <span style={{ color: "#F4F5FB" }}>Tentang </span>
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #15B9FF",
                textStroke: "2px #15B9FF",
              }}
            >
              Ben's Autolight
            </span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <p className="text-lg leading-relaxed mb-6 text-gray-200">
                Ben's Autolight adalah spesialis modifikasi lampu kendaraan
                terkemuka dengan pengalaman lebih dari 10 tahun. Kami
                berkomitmen untuk menghadirkan solusi pencahayaan kustom yang
                tidak hanya meningkatkan tampilan kendaraan Anda, tetapi juga
                mengutamakan keamanan dan kualitas.
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                Dengan teknisi berpengalaman dan peralatan modern, kami
                menyediakan layanan modifikasi lampu profesional untuk berbagai
                jenis kendaraan. Setiap proyek dikerjakan dengan detail dan
                presisi tinggi, memastikan hasil yang maksimal sesuai dengan
                ekspektasi pelanggan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-xl opacity-20"
                  style={{ backgroundColor: "#15B9FF", filter: "blur(40px)" }}
                />
                <div className="relative w-full max-w-lg mx-auto">
                  <HeadlightAnimation />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: "rgba(21, 185, 255, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                Visi Kami
              </h3>
              <p className="text-gray-200">
                Menjadi pionir dalam industri modifikasi lampu kendaraan dengan
                menghadirkan inovasi dan kualitas terbaik untuk setiap
                pelanggan.
              </p>
            </div>

            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: "rgba(21, 185, 255, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                Misi Kami
              </h3>
              <p className="text-gray-200">
                Memberikan layanan modifikasi lampu berkualitas tinggi dengan
                mengutamakan kepuasan pelanggan, keamanan, dan inovasi
                teknologi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: "rgba(21, 185, 255, 0.1)" }}
            >
              <div className="text-3xl font-bold mb-2 text-white">1000+</div>
              <p className="text-gray-200">Proyek Selesai</p>
            </div>

            <div
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: "rgba(21, 185, 255, 0.1)" }}
            >
              <div className="text-3xl font-bold mb-2 text-white">500+</div>
              <p className="text-gray-200">Pelanggan Puas</p>
            </div>

            <div
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: "rgba(21, 185, 255, 0.1)" }}
            >
              <div className="text-3xl font-bold mb-2 text-white">10+</div>
              <p className="text-gray-200">Tahun Pengalaman</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
