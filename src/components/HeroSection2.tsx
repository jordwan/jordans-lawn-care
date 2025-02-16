"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// Import images as modules
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img5.jpg";
import img4 from "../assets/img6.jpg";

export const HeroSection2 = () => {
  const images = [img1, img2, img3, img4];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full p-12 md:py-16 flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-48 md:h-48 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full">
            <Image
              src={selectedImage}
              alt="Full Size Image"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X
                size={38}
                strokeWidth={3}
                className="text-white drop-shadow-4xl border-white"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection2;
