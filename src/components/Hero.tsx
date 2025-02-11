import React from "react";
import Image from "next/image";

import jlcLogo from "../assets/hedge.jpg";

export const Hero = () => {
  return (
    <div>
      <a href="mailto:info@jordanslawncare.ca?subject=Lawn Care Inquiry">
        <div className="pb-5 px-5 py-16 flex justify-center">
          <Image
            src={jlcLogo}
            alt="JLC Logo"
            className="max-w-[350px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[540px] h-auto"
          />
        </div>
      </a>
    </div>
  );
};
