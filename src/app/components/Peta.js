import React from "react";

export default function Peta() {
  return (
    <div className="flex justify-center items-center bg-gray-800">
      <div className="w-full max-w-screen-lg">
        <h1 className="text-blue-500 text-center text-2xl font-bold mb-8 mt-4">
          <i>
            Lokasi{" "}
            <span className="text-red-600 underline underline-offset-auto">
              Autolight
            </span>
          </i>
        </h1>
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7634243154307!2d106.67985619999999!3d-6.294790099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbb072216733%3A0x95a8eb75cfc899ce!2sBens%20Autolight!5e0!3m2!1sid!2sid!4v1708015852984!5m2!1sid!2sid"
            width="600"
            height="338" // Adjusted height for larger screens
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
