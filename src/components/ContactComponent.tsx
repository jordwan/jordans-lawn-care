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

// Separate services list for maintainability
const SERVICES = [
  "Lawn Mowing & Hedge Maintenance",
  "Garden Bed Cleanup & Edging",
  "Power Raking & Aeration",
  "Residential and Strata Services",
  "And more... Whatever your landscaping heart desires!",
];

const ContactImage = () => {
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

const ContactContent = () => {
  return (
    <div className="px-2 space-y-4 md:space-y-6 max-w-xl">
      <div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Contact Us.
        </h1>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-regular text-gray-900">
          Jordan&apos;s Lawn Care operates in the Central Okanagan Region
          servicing Kelowna, West Kelowna, McKinley Beach, Lake Country,
          Peachland and everything in between. Let us handle the hard work, so
          you can sit back, relax, and enjoy a vibrant outdoor space all season
          long.
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
      <div className="pt-2 space-y-4">
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

export const Contact = () => {
  return (
    <section className="container mx-auto px-6">
      {/* Added pt-24 to account for fixed navbar, and increased padding on larger screens */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="w-full md:w-1/2 md:order-1">
          <ContactImage />
        </div>
        <div className="w-full md:w-1/2 md:order-2">
          <ContactContent />
        </div>
      </div>
    </section>
  );
};

export default Contact;
