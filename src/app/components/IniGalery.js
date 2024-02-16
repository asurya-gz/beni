"use client";
import React from "react";

// Contoh gambar untuk galeri
const galleryImages = [
  "/al2.jpg",
  "/al3.jpg",
  "/al5.jpg",
  "/al8.jpg",
  "/al7.jpg",
  "/mt1.jpg",
  "/mt2.jpg",
  "/mt3.jpg",
];

export default function IniGallery() {
  return (
    <div className="bg-blue-900 p-8 font-sans">
      <h1 className="text-blue-500 text-center text-2xl font-bold mb-8">
        <i>
          Gallery{" "}
          <span className="text-red-600 underline underline-offset-auto">
            Autolight
          </span>
        </i>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .gallery-item {
          width: 100%; /* Ukuran tetap untuk semua gambar */
          height: 0;
          padding-bottom: 100%; /* Membuat kotak gambar menjadi persegi */
          position: relative;
          overflow: hidden;
          border-radius: 8px; /* Rounded corners */
        }
        .gallery-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover; /* Memastikan gambar terisi sepenuhnya di kotak */
          transition: transform 0.3s ease; /* Efek transisi */
        }
        .gallery-item:hover .gallery-image {
          transform: scale(1.1); /* Efek zoom saat mouse hover */
        }
        h1 {
          color: #fff; /* Warna teks putih */
        }
        span {
          color: #ff4d4d; /* Warna teks merah */
        }
      `}</style>
    </div>
  );
}
