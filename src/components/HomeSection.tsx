"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import homeImage from "../assets/big-house-lawn.png";

// Separate contact information for easy maintenance
const CONTACT_INFO = {
  phone: "672-969-LAWN",
  email: "info@jordanslawncare.ca",
  companyName: "Jordan's Lawn Care",
};

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
    <div className="space-y-6 md:space-y-8 max-w-xl m-2">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Kelowna&apos;s Best, <br></br>{" "}
          <span className="text-teal-500">Lawn Care</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          Our flexible approach is designed to meet the unique needs of both
          homeowners and strata clients, ensuring every property remains
          vibrant, healthy, and appealing.
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          Servicing Kelowna, West Kelowna, Lake Country, McKinley Beach and
          Peachland.
        </p>
      </div>

      <div className="pt-4 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Contact {CONTACT_INFO.companyName} today!
        </h2>
        <div className="space-y-3">
          <Link
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center space-x-2 text-xl md:text-2xl font-bold text-teal-500 hover:text-teal-600 transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span>{CONTACT_INFO.phone}</span>
          </Link>
          <Link
            href={`mailto:${CONTACT_INFO.email}?subject=Lawn Care Inquiry`}
            className="flex items-center space-x-2 text-lg md:text-xl font-bold text-teal-500 hover:text-teal-600 transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span>{CONTACT_INFO.email}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const HomeSection = () => {
  return (
    <section className="container mx-auto px-6">
      {/* Added pt-24 to account for fixed navbar, and increased padding on larger screens */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6 pt-12 md:pt-32 pb-12 md:pb-20">
        <div className="w-full md:w-1/2 order-2 md:order-2">
          <HomeImage />
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <HomeContent />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
