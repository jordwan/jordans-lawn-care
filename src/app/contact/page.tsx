import type { Metadata } from "next";
import React from "react";

import { Contact } from "@/components/ContactComponent";
import ImageGrid from "@/components/FourImages";

export const metadata: Metadata = {
  title: "Contact Jordan's Lawn Care",
  description:
    "Request a quote, schedule service, or ask about strata maintenance with Jordan's Lawn Care in Kelowna.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Jordan's Lawn Care",
    description:
      "Get in touch with Jordan's Lawn Care for fast quotes and reliable lawn maintenance across Kelowna and the Central Okanagan.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Jordan's Lawn Care",
    description:
      "Reach the Jordan's Lawn Care team for quotes, service schedules, and strata support in Kelowna.",
  },
};

const HomePage = () => {
  return (
    <div>
      <Contact />
      <ImageGrid />
    </div>
  );
};

export default HomePage;

// Localhost:3000
// Localhost:3000/services
// Localhost:3000/contact
