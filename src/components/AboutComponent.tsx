import React from "react";
import Image from "next/image";
import Link from "next/link";

import jlcLogo from "../assets/img5.jpg";

export const AboutP1 = () => {
  return (
    <Link href="/">
      <div className="flex justify-center">
        <Image src={jlcLogo} alt="JLC Logo" className="w-full h-auto p-4" />
      </div>
    </Link>
  );
};

export const AboutP2 = () => {
  return (
    <div className="max-w-4xl text-center md:text-left pt-10 px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        About Us.
      </h1>
      <p className="mt-3 text-xl md:text-xl font-bold text-gray-700">
        At{" "}
        <span className="text-teal-500 font-bold">
          {" "}
          Jordan&apos;s Lawn Care
        </span>
        , we believe a beautiful yard should be easy and worry-free for everyone
        in Kelowna and the Central Okanagan. Whether you need a quick trim or a
        complete yard makeover, our friendly, experienced team is ready to help
        with all of your landscaping needs.
        <br />
        <br />
        Let us handle the hard work, so you can sit back, relax, and enjoy a
        vibrant outdoor space all season long.
      </p>{" "}
      <p className="mt-3 text-xl md:text-xl font-bold text-gray-700">
        Get in touch with us today and experience the difference our dependable
        service can make.
      </p>
      <p className="mt-4 text-3xl font-bold text-gray-900">
        Call us today at <Link href="tel:672-969-5296"> 672-969-LAWN </Link>
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

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 px-6 py-24">
      <div className="md:w-1/2">
        <AboutP1 />
      </div>
      <div className="md:w-1/2">
        <AboutP2 />
      </div>
    </div>
  );
};
