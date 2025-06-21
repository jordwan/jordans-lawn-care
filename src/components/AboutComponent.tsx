"use client";
import React from "react";
import homeImage from "../assets/img5.jpg";
import { ResponsiveImage } from "./shared/ResponsiveImage";
import { ServicesList } from "./shared/ServicesList";
import { ContactInfo } from "./shared/ContactInfo";

const About2Content = () => {
  return (
    <div className="px-2 space-y-4 md:space-y-6 max-w-xl">
      <div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          About Us.
        </h1>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-regular text-gray-900">
          We believe a beautiful yard should be easy and worry-free for everyone
          in Kelowna and the Central Okanagan. Whether you need a quick trim or
          a complete yard makeover, our friendly, experienced team is ready to
          help with all of your landscaping needs.
        </h2>

        <ServicesList />
      </div>
      <div className="pt-2 space-y-4">
        <ContactInfo />
      </div>
    </div>
  );
};

export const About2 = () => {
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
          <About2Content />
        </div>
      </div>
    </section>
  );
};

export default About2;
