import React from "react";

import { HomeSection } from "@/components/HeroSection";
import { ImageGrid } from "@/components/FourImages";
import HeroSection from "@/components/HeroSection2";

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
