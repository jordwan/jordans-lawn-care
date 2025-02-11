import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

import jlcLogo from "../assets/JLC_landing.png";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <a href="mailto:info@jordanslawncare.ca?subject=Lawn Care Inquiry">
        <div className="flex justify-center">
          <Image src={jlcLogo} alt="" />
        </div>
      </a>
    </div>
  );
};

export default HomePage;

// Localhost:3000
// Localhost:3000/services
// Localhost:3000/contact
