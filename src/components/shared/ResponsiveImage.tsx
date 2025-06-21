import React from "react";
import Image, { StaticImageData } from "next/image";

interface ResponsiveImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ 
  src, 
  alt, 
  className = "" 
}) => {
  return (
    <div className={`relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};