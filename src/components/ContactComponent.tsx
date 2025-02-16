import React from "react";
import Image from "next/image";
import Link from "next/link";

import jlcLogo from "../assets/big-house-lawn.png";

export const ContactP1 = () => {
  return (
    <Link href="/">
      <div className="flex justify-center">
        <Image
          src={jlcLogo}
          alt="JLC Logo"
          className="w-[95%] max-w-[550px] md:max-w-[200px] lg:max-w-[900px] h-auto"
        />
      </div>
    </Link>
  );
};

export const ContactP2 = () => {
  return (
    <div className="max-w-4xl text-center md:text-left pt-10 px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Contact Us!
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

      <p className="mt-4 text-3xl font-bold text-gray-900">
        Call us today at <Link href="tel:250-808-8888"> 250-808-9988 </Link>
      </p>
      <p className="mt-4 text-xl font-bold text-gray-900">
        Or send us an e-mail with a description of your vision and we will be in
        touch!
      </p>
      <p className="mt-4 text-2xl font-bold text-gray-900">
        <Link href="mailto:info@jordanslawncare.ca?subject=Lawn Care Inquiry">
          info@jordanslawncare.ca
        </Link>
      </p>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 px-6 py-24">
      <div className="md:w-1/2 flex justify-center">
        <ContactP1 />
      </div>
      <div className="md:w-1/2">
        <ContactP2 />
      </div>
    </div>
  );
};
