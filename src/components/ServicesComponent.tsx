import React from "react";
import Image from "next/image";
import Link from "next/link";

import jlcLogo from "../assets/mowing-service.jpg";

export const ServicesP1 = () => {
  return (
    <Link href="/">
      <div className="flex justify-center">
        <Image
          src={jlcLogo}
          alt="JLC Logo"
          className="w-full h-auto pl-8 pr-4 pt-12"
        />
      </div>
    </Link>
  );
};

export const ServicesP2 = () => {
  return (
    <div className="max-w-4xl text-center md:text-left pt-2 px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Services We Offer.
      </h1>
      <p className="mt-3 text-lg md:text-xl font-bold text-gray-700">
        <span className="text-teal-500 font-black">
          {" "}
          Jordan&apos;s Lawn Care{" "}
        </span>{" "}
        offers a full range of lawn care and landscaping solutions throughout
        Kelowna and the Central Okanagan.
      </p>
      <ul className="mt-6 text-lg md:text-xl font-black text-teal-500 list-disc list-inside">
        <li>Lawn Mowing & Hedge Maintenance</li>
        <li>Garden Bed Cleanup & Edging</li>
        <li>Power Raking & Aeration</li>
        <li>Residential and Strata Services</li>
        <li>And more... Whatever your landscaping heart desires!</li>
      </ul>
      <p className="mt-3 text-lg md:text-xl font-bold text-gray-700">
        {" "}
        Our flexible approach is designed to meet the unique needs of both
        homeowners and strata clients, ensuring every property remains vibrant,
        healthy, and appealing.{" "}
      </p>

      <p className="mt-4 text-3xl font-bold text-gray-900">
        Call us today at <Link href="tel:672-969-LAWN"> 672-969-LAWN </Link>
      </p>
      <p className="mt-4 text-2xl font-bold text-gray-900"></p>
      <p className="mt-4 text-lg font-bold text-gray-900">
        Or send us an e-mail @{" "}
        <Link href="mailto:info@jordanslawncare.ca?subject=Lawn Care Inquiry">
          info@jordanslawncare.ca
        </Link>{" "}
        to discuss your landscaping needs, schedule a service, and experience
        the difference our commitment to quality can make.
      </p>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-1 px-2 pt-16 md:pt-[125px] pb-24">
      <div className="md:w-1/2">
        <ServicesP1 />
      </div>
      <div className="md:w-1/2">
        <ServicesP2 />
      </div>
    </div>
  );
};
