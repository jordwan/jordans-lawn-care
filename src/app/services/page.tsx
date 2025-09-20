import type { Metadata } from "next";
import React from "react";

import { Services2 } from "@/components/ServicesComponent";
import { ImageGrid } from "@/components/FourImages";

export const metadata: Metadata = {
  title: "Lawn & Landscape Services in Kelowna",
  description:
    "Explore Jordan's Lawn Care services: weekly mowing, hedge trimming, power raking, aeration, and strata maintenance across the Central Okanagan.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Lawn & Landscape Services in Kelowna",
    description:
      "Custom maintenance plans, seasonal cleanups, and strata-ready reporting from Jordan's Lawn Care.",
    url: "/services",
  },
  twitter: {
    title: "Lawn & Landscape Services in Kelowna",
    description:
      "Weekly routes, seasonal cleanups, and strata care delivered by Jordan's Lawn Care.",
  },
};

const HomePage = () => {
  return (
    <div>
      <Services2 />
      <ImageGrid />
    </div>
  );
};

export default HomePage;

// Localhost:3000
// Localhost:3000/services
// Localhost:3000/contact
