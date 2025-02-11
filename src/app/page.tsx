import React from "react";
// import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Hero2 } from "@/components/Hero2";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
    </div>
  );
};

export default HomePage;

// Localhost:3000
// Localhost:3000/services
// Localhost:3000/contact
