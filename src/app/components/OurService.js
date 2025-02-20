import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// Updated categories based on the data
const categories = ["Semua", "LED", "Bi-LED", "LED DRL", "Projector"];

const GlowingBorder = ({ children }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#15B9FF] to-[#A9E1E2] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
    {children}
  </div>
);

const Gallery = ({ isLoaded }) => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState(null);

  // Mock gallery items with more diverse categories
  const galleryItems = [
    {
      id: 1,
      category: "LED",
      title: "Fortuner Costume",
      description: "BI-Led",
      image: "/Product1.png",
    },
    {
      id: 2,
      category: "Bi-LED",
      title: "Brio Costume",
      description: "BI-Led",
      image: "/Product2.png",
    },
    {
      id: 3,
      category: "LED",
      title: "Accord Costume",
      description: "BI-Led",
      image: "/Product3.png",
    },
    {
      id: 4,
      category: "Projector",
      title: "Pajero Costume",
      description: "BI-Led",
      image: "/Product4.png",
    },
    {
      id: 5,
      category: "LED DRL",
      title: "Innova Costume",
      description: "BI-Led",
      image: "/Product5.png",
    },
    {
      id: 6,
      category: "LED",
      title: "Yaris Costume",
      description: "BI-Led",
      image: "/Product6.png",
    },
    {
      id: 7,
      category: "Bi-LED",
      title: "Baleno Costume",
      description: "BI-Led",
      image: "/Product7.png",
    },
    {
      id: 8,
      category: "LED DRL",
      title: "Innova Reborn Costume",
      description: "BI-Led",
      image: "/Product8.png",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "Semua" || item.category === selectedCategory
  );

  // Rest of the component remains the same
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-6 md:px-12 min-h-screen">
      <div className="pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Title Section */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            <span style={{ color: "#F4F5FB" }}>Our </span>
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #15B9FF",
                textStroke: "2px #15B9FF",
              }}
            >
              Gallery
            </span>
          </h1>

          {/* Categories */}
          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    selectedCategory === category
                      ? "bg-[#15B9FF] text-white"
                      : "bg-opacity-10 bg-[#15B9FF] text-gray-300 hover:bg-opacity-20"
                  }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={`gallery-${item.id}`}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: index * 0.1 }}
                >
                  <GlowingBorder>
                    <div
                      className="relative bg-[#15B9FF] bg-opacity-5 rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white text-lg font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {item.description}
                          </p>
                        </div>
                        <motion.div
                          className="absolute top-4 right-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ZoomIn className="text-white w-6 h-6" />
                        </motion.div>
                      </div>
                    </div>
                  </GlowingBorder>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Modal for enlarged image view */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative max-w-4xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute -top-12 right-0 text-white"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="w-8 h-8" />
                  </button>
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-300">{selectedImage.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
