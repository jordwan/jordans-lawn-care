import React from "react";
import Image from "next/image";

import jlcLogo from "../assets/hedge.jpg";

export const ServicesP1 = () => {
  return (
    <a href="/">
      <div className="flex justify-center">
        <Image
          src={jlcLogo}
          alt="JLC Logo"
          className="w-[80%] max-w-[450px] md:max-w-[200px] lg:max-w-[900px] h-auto"
        />
      </div>
    </a>
  );
};

export const ServicesP2 = () => {
  return (
    <div className="max-w-4xl text-center md:text-left pt-10 px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Services We Offer.
      </h1>
      <p className="mt-3 text-lg md:text-xl font-bold text-gray-700">
        Whether you need a simple lawn trim or a complete yard makeover,
        <span className="text-teal-500 font-black">
          {" "}
          Jordan&apos;s Lawn Care{" "}
        </span>
        is your go-to choice in Kelowna and the Central Okanagan.
        <br />
        <br />
        We provide top-quality, friendly service at competitive rates, offering:
      </p>

      <ul className="mt-6 text-lg md:text-xl font-black text-teal-500 list-disc list-inside">
        <li>Lawn Mowing & Hedge Maintenance</li>
        <li>Garden Bed Cleanup & Edging</li>
        <li>Power Raking & Aeration</li>
        <li>Residential and Strata Services</li>
        <li>And more... Whatever your landscaping heart desires!</li>
      </ul>

      <p className="mt-6 text-3xl font-black text-gray-900">
        Call <span className="text-teal-500">Jordan&apos;s Lawn Care</span>{" "}
        today!
      </p>
      <p className="mt-4 text-3xl font-bold text-gray-900">
        <a href="tel:250-808-8888"> 250-808-9988 </a>
      </p>
      <p className="mt-4 text-xl font-bold text-gray-900">
        <a href="mailto:info@jordanslawncare.ca?subject=Lawn Care Inquiry">
          info@jordanslawncare.ca
        </a>
      </p>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 px-6 py-16">
      <div className="md:w-1/2 flex justify-center">
        <ServicesP1 />
      </div>
      <div className="md:w-1/2">
        <ServicesP2 />
      </div>
    </div>
  );
};
