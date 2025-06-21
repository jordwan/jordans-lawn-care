"use client";
import React from "react";
import homeImage from "../assets/big-house-lawn.png";
import { ResponsiveImage } from "./shared/ResponsiveImage";
import { ServicesList } from "./shared/ServicesList";
import { ContactInfo } from "./shared/ContactInfo";
import { SERVICE_AREAS } from "../constants/contact";

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
          servicing {SERVICE_AREAS.join(", ")} and everything in between. Let us handle the hard work, so
          you can sit back, relax, and enjoy a vibrant outdoor space all season
          long.
        </h2>
        <ServicesList />
      </div>
      <div className="pt-2 space-y-4">
        <ContactInfo />
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <section className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="w-full md:w-1/2 md:order-1">
          <ResponsiveImage 
            src={homeImage}
            alt="Professional lawn care services in Kelowna"
          />
        </div>
        <div className="w-full md:w-1/2 md:order-2">
          <ContactContent />
        </div>
      </div>
    </section>
  );
};

export default Contact;
