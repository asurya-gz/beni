"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FounderCard = ({ name, role, description, image, socialLinks }) => (
  <motion.div
    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <div className="relative h-96">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
      <img
        src="/Founder.jpeg"
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-[#A9E1E2] mb-4">{role}</p>
        <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="text-gray-400 hover:text-[#A9E1E2] transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const Achievement = ({ number, label }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="text-4xl font-bold text-white mb-2">{number}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </motion.div>
);

export default function OurFounder() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const founder = {
    name: "Georgy Bani Wasiat, S.Kom.",
    role: "Founder & CEO",
    description:
      "Dengan pengalaman lebih dari 15 tahun di industri teknologi dan digital marketing, Georgy telah memimpin berbagai proyek transformasi digital untuk perusahaan nasional dan multinasional. Visinya untuk menciptakan solusi digital yang inovatif dan berkelanjutan telah membawa perusahaan menjadi salah satu pemain utama di industri ini.",
    socialLinks: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76c-1.15 0-2.08-.95-2.08-2.08 0-1.15.95-2.08 2.08-2.08 1.15 0 2.08.95 2.08 2.08 0 1.15-.95 2.08-2.08 2.08zm14.63 12.34h-3.62v-5.7c0-1.35-.02-3.1-1.88-3.1-1.88 0-2.17 1.47-2.17 3v5.8h-3.62V9.24h3.48v1.6h.05c.48-.92 1.65-1.88 3.4-1.88 3.65 0 4.32 2.4 4.32 5.52v5.62z" />
          </svg>
        ),
        url: "#linkedin",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.95 4.57a9.96 9.96 0 0 1-2.87.79 5.02 5.02 0 0 0 2.2-2.77c-.97.58-2.04.99-3.18 1.22a5 5 0 0 0-8.52 4.56A14.2 14.2 0 0 1 1.68 3.15a5 5 0 0 0 1.54 6.67A4.97 4.97 0 0 1 1 9.11v.06a5 5 0 0 0 4 4.9 5.05 5.05 0 0 1-2.26.09 5 5 0 0 0 4.66 3.47 10.02 10.02 0 0 1-7.4 2.07 14.14 14.14 0 0 0 7.66 2.25c9.2 0 14.2-7.62 14.2-14.22 0-.22 0-.43-.02-.64a10.17 10.17 0 0 0 2.5-2.59" />
          </svg>
        ),
        url: "#twitter",
      },
    ],
  };

  const achievements = [
    { number: "15+", label: "TAHUN PENGALAMAN" },
    { number: "100+", label: "PROYEK SUKSES" },
    { number: "50+", label: "PARTNER BISNIS" },
    { number: "4", label: "PENGHARGAAN INDUSTRI" },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span style={{ color: "#F4F5FB" }}>Our </span>
            <motion.span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #A9E1E2",
                textStroke: "2px #A9E1E2",
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Founder
            </motion.span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat sosok di balik kesuksesan dan inovasi
            perusahaan kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <FounderCard {...founder} />

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white">Visi & Misi</h3>
            <p className="text-gray-300 leading-relaxed">
              "Menjadi pemimpin dalam transformasi digital di Indonesia dengan
              menghadirkan solusi inovatif yang memberikan dampak nyata bagi
              pertumbuhan bisnis klien kami."
            </p>
            <div className="grid grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Achievement key={index} {...achievement} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
