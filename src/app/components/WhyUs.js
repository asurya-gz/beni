import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleWhatsAppClick = (productName) => {
    const phoneNumber = "6285695863107";
    const message = `Hallo Ben's Autolight. Saya pengem membeli ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const products = [
    {
      id: 1,
      name: "K-45",
      price: "Start From Rp.850K",
      description: "Watt: 55/35",
      isBestSeller: true,
      image: "/jual1.jpg",
    },
    {
      id: 2,
      name: "4S - Pro",
      price: "Start From Rp.1200K",
      description: "Watt: 60/50",
      isBestSeller: false,
      image: "/jual2.jpg",
    },
    {
      id: 3,
      name: "Y01",
      price: "Start From Rp.900K",
      description: "Watt: 30/25",
      isBestSeller: false,
      image: "/jual3.jpg",
    },
    {
      id: 4,
      name: "X-01",
      price: "Start From Rp.450K",
      description: "Watt: 30/25",
      isBestSeller: false,
      image: "/jual4.jpg",
    },
    {
      id: 5,
      name: "CA-4",
      price: "Start From Rp.1100K",
      description: "Watt: 75/55",
      isBestSeller: false,
      image: "/jual5.jpg",
    },
    {
      id: 6,
      name: "Z01",
      price: "Start From Rp.650K",
      description: "Watt: 30/25",
      isBestSeller: false,
      image: "/jual6.jpg",
    },
    {
      id: 7,
      name: "D2SR/D4SR (no cable)",
      price: "Start From Rp.1200K",
      description: "Watt: 35",
      isBestSeller: false,
      image: "/jual7.jpg",
    },
    {
      id: 8,
      name: "D2SR/D4SR (with cable)",
      price: "Start From Rp.1200K",
      description: "Watt: 65/50",
      isBestSeller: false,
      image: "/jual8.jpg",
    },
    {
      id: 9,
      name: "FG1",
      price: "Start From Rp.900K",
      description: "Watt: 30/25",
      isBestSeller: false,
      image: "/jual9.jpg",
    },
    {
      id: 10,
      name: "AK-1",
      price: "Start From Rp.1350K",
      description: "Watt: 110/80",
      isBestSeller: false,
      image: "/jual10.jpg",
    },
    {
      id: 11,
      name: "X-LITE V2",
      price: "Start From Rp.2699K",
      description: "Watt: 50/60",
      isBestSeller: false,
      image: "/jual11.jpg",
    },
    {
      id: 12,
      name: "X9 HYBRID",
      price: "Start From Rp.3799K",
      description: "Watt: 60/70",
      isBestSeller: false,
      image: "/jual12.jpg",
    },
  ];

  return (
    <main className="min-h-screen py-16 bg-[#04092F]">
      <div className="container mx-auto px-4">
        <h1
          className={`text-4xl font-bold mb-12 text-center text-[#F4F5FB] transition-all duration-500 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          Koleksi <span className="text-[#15B9FF]">Premium</span> Autolight
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`transition-all duration-500 transform ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${product.id * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-gray-900 rounded-lg">
                {product.isBestSeller && (
                  <span className="absolute top-4 right-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Best Seller
                  </span>
                )}
                <div className="relative">
                  <div className="absolute inset-0 opacity-20 bg-[#15B9FF] blur-xl z-0" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover relative z-10"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">
                      {product.price}
                    </span>
                    <button
                      onClick={() => handleWhatsAppClick(product.name)}
                      className="px-4 py-2 rounded-lg font-medium bg-[#15B9FF] text-[#04092F] transition-all duration-300 hover:scale-105"
                    >
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
