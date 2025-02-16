import React from "react";

import { Services } from "@/components/ServicesComponent";
import { ImageGrid } from "@/components/FourImages";

const HomePage = () => {
  return (
    <div>
      <Services />
      <ImageGrid />
    </div>
  );
};

export default HomePage;

// Localhost:3000
// Localhost:3000/services
// Localhost:3000/contact
