import type { Metadata } from "next";
import React from "react";

import { About2 } from "@/components/AboutComponent";
import { ImageGrid } from "@/components/FourImages";

export const metadata: Metadata = {
  title: "About Jordan's Lawn Care",
  description:
    "Learn how Jordan's Lawn Care blends local Kelowna expertise with dependable service for homeowners and strata communities across the Okanagan.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Jordan's Lawn Care",
    description:
      "Locally owned Kelowna lawn care team providing eco-conscious maintenance and strata-ready professionalism.",
    url: "/about",
  },
  twitter: {
    title: "About Jordan's Lawn Care",
    description:
      "Meet the Kelowna lawn care crew delivering reliable, detail-oriented service across the Central Okanagan.",
  },
};

const HomePage = () => {
  return (
    <div>
      <About2 />
      <ImageGrid />
    </div>
  );
};

export default HomePage;

// Localhost:3000
// Localhost:3000/services
// Localhost:3000/contact
