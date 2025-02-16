import React from "react";

export const Hero2 = () => {
  return (
    <div className="flex justify-center items-center py-20 px-6">
      <div className="max-w-4xl text-left md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Kelowna's Friendliest Lawn Care Prodiver
        </h1>
        <p className="mt-3 text-lg md:text-xl font-bold text-gray-700">
          We offer a wide array of lawn care services. Whether you need a simple
          lawn trim or a complete yard makeover,
          <span className="text-teal-500 font-black">
            {" "}
            Jordan&apos;s Lawn Care{" "}
          </span>
          is your go-to choice in Kelowna and the Central Okanagan.
          <br />
          <br />
          We provide top-quality, friendly service at competitive rates,
          servicing Kelowna, West Kelowna, Lake Country, Peachland and more!:
        </p>

        <ul className="mt-6 text-lg md:text-xl font-black text-teal-500 list-disc list-inside">
          <li>Lawn Mowing & Hedge Maintenance</li>
          <li>Garden Bed Cleanup & Edging</li>
          <li>Power Raking & Aeration</li>
          <li>Residential and Strata Services</li>
          <li>And more... Whatever your landscaping heart desires!</li>
        </ul>

        <p className="mt-6 text-3xl text-center font-black text-gray-900">
          Call <span className="text-teal-500">Jordan&apos;s Lawn Care</span>{" "}
          today!
        </p>
        <p className="mt-4 text-3xl text-center font-bold text-gray-900">
          <a href="tel:250-808-8888"> 250-808-9988 </a>
        </p>
        <p className="mt-4 text-xl text-center font-bold text-gray-900">
          <a href="mailto:info@jordanslawncare.ca?subject=Lawn Care Inquiry">
            info@jordanslawncare.ca
          </a>
        </p>
      </div>
    </div>
  );
};
