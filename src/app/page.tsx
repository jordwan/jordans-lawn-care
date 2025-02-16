import React from "react";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import Footer from "@/components/FooterComponent";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;

// Localhost:3000
// Localhost:3000/services
// Localhost:3000/contact
