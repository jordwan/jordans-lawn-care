"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

// Import images as modules
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img7.jpg";
import img3 from "../assets/img5.jpg";
import img4 from "../assets/img6.jpg";

export const HeroSection2 = () => {
  const images: StaticImageData[] = [img1, img2, img3, img4];
  const links = ["/page1", "/page2", "/page3", "/page4"];
  const titles = [
    "Lawn Trimming",
    "Hedge Trimming",
    "Garden Maintenance",
    "Strata Lawn Maintenance",
  ];
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  return (
    <div className="w-full p-4 flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl">
        {images.map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={titles[index]}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <Link href={links[index]}>
              <p className="mt-2 pt-2 py-4 px-2 text-xl md:text-2xl font-bold text-center text-black cursor-pointer">
                {titles[index]}
              </p>
            </Link>
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
                size={48}
                strokeWidth={3}
                className="text-white drop-shadow-lg"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection2;
