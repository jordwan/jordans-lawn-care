"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

// Import images
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img7.jpg";
import img3 from "../assets/img5.jpg";
import img4 from "../assets/img6.jpg";

export const HomeSection2 = () => {
  const images: StaticImageData[] = [img1, img2, img3, img4];
  const links = ["/about", "/services", "/contact", "/"];
  const titles = [
    "Lawn Trimming",
    "Hedge Trimming",
    "Garden Maintenance",
    "Strata Lawn Maintenance",
  ];

  // Store the currently selected item (image, title, link)
  const [selectedItem, setSelectedItem] = useState<{
    image: StaticImageData;
    title: string;
    link: string;
  } | null>(null);

  // When an image is clicked, store its image, title, and link
  const handleImageClick = (index: number) => {
    setSelectedItem({
      image: images[index],
      title: titles[index],
      link: links[index],
    });
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-full p-4 flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl">
        {images.map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Thumbnail area */}
            <div
              className="relative w-full h-40 md:h-48 rounded-sm overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={src}
                alt={titles[index]}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Caption link (under the thumbnail) */}
            <Link href={links[index]}>
              <p className="mt-2 pt-1 md:pt-6 py-4 px-2 text-xl md:text-3xl font-black text-center text-black cursor-pointer">
                {titles[index]}
              </p>
            </Link>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50"
          onClick={handleClose}
        >
          {/* 
            Stop propagation on this container so clicking inside 
            doesn't close the modal 
          */}
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full-size image */}
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />

            {/* Title overlay in the center */}
            <div className="absolute inset-0 flex items-center shadow-2xl justify-center">
              <Link
                href={selectedItem.link}
                className="text-outline-black p-2 text-center text-7xl font-black"
              >
                {selectedItem.title}
              </Link>
            </div>

            {/* Close button (top -right corner) */}
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full"
              onClick={handleClose}
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

export default HomeSection2;
