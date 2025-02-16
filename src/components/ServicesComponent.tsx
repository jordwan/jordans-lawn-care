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
          className="w-[95%] max-w-[550px] md:max-w-[450px] lg:max-w-[900px] h-auto"
        />
      </div>
    </Link>
  );
};

export const ServicesP2 = () => {
  return (
    <div className="max-w-4xl text-center md:text-left pt-10 px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Services We Offer.
      </h1>
      <p className="mt-3 text-lg md:text-xl font-bold text-gray-700">
        <span className="text-teal-500 font-black">
          {" "}
          Jordan&apos;s Lawn Care{" "}
        </span>{" "}
        offers a full range of lawn care and landscaping solutions throughout
        Kelowna and the Central Okanagan. We handle everything from regular lawn
        mowing, hedge maintenance, and garden bed cleanup to specialized
        services like power raking and aeration. Our flexible approach is
        designed to meet the unique needs of both homeowners and strata clients,
        ensuring every property remains vibrant, healthy, and appealing.{" "}
      </p>
      <p className="mt-3 text-lg md:text-xl font-bold text-gray-700">
        Contact{" "}
        <span className="text-teal-500 font-black">
          {" "}
          Jordan&apos;s Lawn Care{" "}
        </span>{" "}
        today to discuss your landscaping needs, schedule a service, and
        experience the difference our commitment to quality can make.
      </p>

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

export const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 px-6 py-24">
      <div className="md:w-1/2 flex justify-center">
        <ServicesP1 />
      </div>
      <div className="md:w-1/2">
        <ServicesP2 />
      </div>
    </div>
  );
};
