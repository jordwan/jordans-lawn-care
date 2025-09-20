import type { Metadata } from "next";
import React from "react";

import HeroSection from "@/components/HeroSection";
import { ImageGrid } from "@/components/FourImages";
import { HomeSection } from "@/components/HomeSection";

export const metadata: Metadata = {
  title: "Kelowna Lawn Care Experts",
  description:
    "Jordan's Lawn Care keeps Kelowna lawns healthy with eco-friendly maintenance, precise edging, and reliable scheduling for homes and strata.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kelowna Lawn Care Experts",
    description:
      "Eco-friendly equipment, detailed finishes, and dependable routes keep your Kelowna property looking its best season after season.",
    url: "/",
  },
  twitter: {
    title: "Kelowna Lawn Care Experts",
    description:
      "Eco-friendly maintenance, detail-oriented finishing touches, and fast quotes for Kelowna lawns.",
  },
};

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
