import React from "react";
import Image, { StaticImageData } from "next/image";

interface ResponsiveImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  overlay?: boolean;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  overlay = false,
}) => {
  return (
    <div
      className={`relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden shadow-xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        placeholder="blur"
        sizes={sizes}
      />
      {overlay ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900/35 via-slate-900/10 to-transparent" aria-hidden />
      ) : null}
    </div>
  );
};
