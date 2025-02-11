import React from "react";

export const Hero2 = () => {
  return (
    <div className="flex justify-center items-center py-6 px-6">
      <div className="max-w-4xl text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Your Lawn, Our Passion
        </h1>
        <p className="mt-3 text-lg md:text-xl font-semibold text-gray-700 leading-relaxed">
          Whether you need a simple lawn trim or a complete yard makeover,
          <span className="text-green-600 font-bold"> Jordans Lawn Care </span>
          is your go-to choice in Kelowna and the Central Okanagan.
          <br />
          <br />
          We provide top-quality, friendly service at competitive rates,
          offering:
        </p>

        <ul className="mt-6 text-lg md:text-xl font-medium text-gray-800 list-disc list-inside">
          <li>Lawn Mowing & Hedge Maintenance</li>
          <li>Garden Bed Cleanup & Edging</li>
          <li>Power Raking & Aeration</li>
          <li>And more – Whatever your landscaping heart desires!</li>
        </ul>

        <p className="mt-6 text-xl font-bold text-gray-900">
          Call <span className="text-green-600">Jordans Lawn Care</span> today!
          📞
        </p>
      </div>
    </div>
  );
};
