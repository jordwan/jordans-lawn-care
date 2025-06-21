import React from "react";

import HeroSection from "@/components/HeroSection";
import { ImageGrid } from "@/components/FourImages";
import { HomeSection } from "@/components/HomeSection";

const HomePage = () => {
  return (
    <div>
      <HomeSection />
      <ImageGrid />
      <HeroSection />
    </div>
  );
};

export default HomePage;

// Localhost:3000
// Localhost:3000/services
// Localhost:3000/contact
