"use client";
import React, { useState, useCallback, type KeyboardEvent } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

// Import images
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img7.jpg";
import img3 from "../assets/img5.jpg";
import img4 from "../assets/img6.jpg";
import img5 from "../assets/img1.jpg";
import img6 from "../assets/hedge.jpg";

// Define proper types for our data structure
interface ImageItem {
  src: StaticImageData;
  title: string;
  link: string;
  alt?: string;
}

// Separate data from component
const GALLERY_ITEMS: ImageItem[] = [
  { src: img1, title: "Lawn Trimming", link: "/contact" },
  { src: img2, title: "Hedge Trimming", link: "/contact" },
  { src: img3, title: "Garden Maintenance", link: "/contact" },
  { src: img4, title: "Strata Lawn Maintenance", link: "/contact" },
  { src: img5, title: "Aeration", link: "/contact" },
  { src: img6, title: "Fertalizing", link: "/contact" },
];

export const ImageGrid = () => {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null);

  const handleImageClick = useCallback((item: ImageItem) => {
    setSelectedItem(item);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedItem(null);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  // Prevent scroll when modal is open
  React.useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  return (
    <div className="w-full bg-white pt-4 md:pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {GALLERY_ITEMS.map((item, index) => (
            <button
              key={item.title}
              className="relative group overflow-hidden h-64 sm:h-64 md:h-48 lg:h-64 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl shadow-xl"
              onClick={() => handleImageClick(item)}
              aria-label={`View ${item.title}`}
            >
              <Image
                src={item.src}
                alt={item.alt || item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105 "
                priority={index < 4}
              />
              {/* Lighter overlay on mobile, darker on desktop hover */}
              <div className="absolute inset-0 bg-black opacity-20 sm:opacity-0 sm:group-hover:opacity-40 transition-opacity duration-300" />
              {/* Always visible title with enhanced text shadow for better readability */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-100 text-3xl md:text-3xl font-bold opacity-100 transition-opacity duration-300 text-center px-12 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/75 flex justify-center items-center p-4 z-50"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href={selectedItem.link}
                className="text-white text-5xl font-bold hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-white rounded-lg px-4 py-2"
                id="modal-title"
              >
                {selectedItem.title}
              </Link>
            </div>
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <X
                size={36}
                strokeWidth={2.5}
                className="text-white drop-shadow-lg"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
