"use client";
import React from "react";
import Image from "next/image";
import homeImage from "../assets/heroimage.jpg";

// Separate contact information for easy maintenance
const CONTACT_INFO = {
  phone: "672-969-5296",
  email: "info@jordanslawncare.ca",
  companyName: "Jordan's Lawn Care",
};

// Separate services list for maintainability
const SERVICES = [
  "Lawn Mowing & Hedge Maintenance",
  "Garden Bed Cleanup & Edging",
  "Power Raking & Aeration",
  "Residential and Strata Services",
  "And more... Whatever your landscaping heart desires!",
];

const HomeImage = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
      <Image
        src={homeImage}
        alt="Professional lawn care services in Kelowna"
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

const HomeContent = () => {
  return (
    <div className="px-2 space-y-4 md:space-y-6 max-w-xl">
      <div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Your Lawn, <br />
          <span className="text-teal-500">Our Passion</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          Whether you need a basic lawn trimming, detailed edging, or a complete
          yard makeover,{" "}
          <span className="text-teal-500 font-bold">
            {CONTACT_INFO.companyName}
          </span>{" "}
          is your go-to choice in Kelowna and the Central Okanagan.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          We provide top-quality, friendly service at competitive rates,
          offering:
        </h2>
        <ul className="space-y-2">
          {SERVICES.map((service, index) => (
            <li
              key={index}
              className="flex items-start space-x-2 text-lg text-gray-700"
            >
              <span className="text-teal-500 font-bold mt-1">•</span>
              <span className="text-xl text-gray-600 font-bold mt-1">
                {service}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const HomeSection = () => {
  return (
    <section className="container mx-auto px-6">
      {/* Added pt-24 to account for fixed navbar, and increased padding on larger screens */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="w-full md:w-1/2 md:order-1">
          <HomeImage />
        </div>
        <div className="w-full md:w-1/2 md:order-2">
          <HomeContent />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
