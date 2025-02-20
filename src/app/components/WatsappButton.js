"use client";
import { MessageCircle, Zap } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "6285695863107";
  const message =
    "Halo, saya ingin mengetahui lebih lanjut tentang layanan modifikasi di Ben's Autolight.";

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        className="bg-gradient-to-r from-[#15B9FF] to-[#3F2AFF] hover:from-[#3F2AFF] hover:to-[#15B9FF] text-white p-4 rounded-full shadow-lg flex items-center justify-center relative transition-all duration-300 hover:scale-110 active:scale-90"
        onClick={handleClick}
        style={{
          boxShadow: "0 0 20px rgba(21, 185, 255, 0.3)",
        }}
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          <Zap
            className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 transform rotate-12"
            style={{
              filter: "drop-shadow(0 0 3px rgba(255, 255, 0, 0.5))",
            }}
          />
        </div>

        {/* Inner glow ping animation */}
        <span className="absolute w-full h-full rounded-full bg-[#15B9FF] opacity-30 animate-ping" />

        {/* Outer lightning effect */}
        <svg className="absolute w-full h-full -z-10" viewBox="0 0 100 100">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#lightning-gradient)"
            strokeWidth="2"
            filter="url(#glow)"
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <linearGradient
            id="lightning-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#15B9FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3F2AFF" stopOpacity="0.5" />
          </linearGradient>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;
