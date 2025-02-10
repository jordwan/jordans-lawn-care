import React from "react";
import Image from "next/image";

import jlcLogo from "../assets/JLC_landing.png";

const HomePage = () => {
  return (
    <div>
      <Image src={jlcLogo} alt="" />
    </div>
  );
};

export default HomePage;

// Localhost:3000
// Localhost:3000/services
// Localhost:3000/contact
