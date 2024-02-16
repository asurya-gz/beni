import React from "react";

export default function FeaturedProducts() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white font-sans">
      <h1 className="text-blue-500 text-center text-2xl font-bold mb-8">
        <i>
          Produk{" "}
          <span className="text-red-600 underline underline-offset-auto">
            Autolight
          </span>
        </i>
      </h1>
      <div className="max-w-5xl mx-auto p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-600">
          <h2 className="text-xl font-semibold mb-3 text-blue-500">
            <span className="text-red-600">Bi-Led</span> Deluxe X9
          </h2>
          <p className="text-lg mb-3">
            Bi-Led Deluxe X9 adalah produk unggulan kami yang menawarkan
            kombinasi sempurna antara kinerja canggih dan desain yang menarik.
            Dengan teknologi terbaru dan material berkualitas tinggi, produk ini
            akan memberikan pencahayaan yang optimal dan tahan lama untuk
            kendaraan Anda.
          </p>
          <a href="https://wa.me/6281234567890">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              Beli Sekarang
            </button>
          </a>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-600 relative">
          <h2 className="text-xl font-semibold mb-3 text-blue-500">
            <span className="text-red-600">Bi-Led</span> Deluxe X-Lite
          </h2>
          <p className="text-lg mb-3">
            Bi-Led Deluxe X-Lite adalah solusi pencahayaan yang ringan dan
            efisien untuk kendaraan Anda. Dengan desain kompak dan kualitas yang
            terjamin, produk ini memberikan kinerja yang luar biasa tanpa
            mengorbankan estetika. Jadikan kendaraan Anda berbeda dengan Bi-Led
            Deluxe X-Lite!
          </p>
          <span className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-tr-md rounded-bl-md">
            Best Seller
          </span>
          <a href="https://wa.me/6281234567890">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              Beli Sekarang
            </button>
          </a>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-600">
          <h2 className="text-xl font-semibold mb-3 text-blue-500">ML2R</h2>
          <p className="text-lg mb-3">
            <span className="text-red-600">ML2R</span> adalah lampu modul
            multifungsi yang dirancang untuk meningkatkan kenyamanan dan
            keamanan berkendara Anda. Dengan fitur-fitur canggih seperti
            pencahayaan adaptif dan mode khusus, ML2R menghadirkan pengalaman
            berkendara yang tak tertandingi.
          </p>
          <a href="https://wa.me/6281234567890">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              Beli Sekarang
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
