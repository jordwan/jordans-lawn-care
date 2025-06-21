"use client";
import React from "react";
import homeImage from "../assets/big-house-lawn.png";
import { ResponsiveImage } from "./shared/ResponsiveImage";
import { ContactInfo } from "./shared/ContactInfo";
import { CONTACT_INFO, SERVICE_AREAS } from "../constants/contact";

const HomeContent = () => {
  return (
    <div className="space-y-6 md:space-y-8 max-w-xl m-4">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Kelowna&apos;s Best, <br />
          <span className="text-teal-500">Lawn Care</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          Our flexible approach is designed to meet the unique needs of both
          homeowners and strata clients, ensuring every property remains
          vibrant, healthy, and appealing.
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          Servicing {SERVICE_AREAS.join(", ")}.
        </p>
      </div>

      <div className="pt-4 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Contact {CONTACT_INFO.companyName} today!
        </h2>
        <ContactInfo />
      </div>
    </div>
  );
};

export const HomeSection = () => {
  return (
    <section className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="w-full md:w-1/2 order-2 md:order-2">
          <ResponsiveImage
            src={homeImage}
            alt="Professional lawn care services in Kelowna"
          />
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <HomeContent />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
