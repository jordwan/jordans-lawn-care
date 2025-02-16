import React from "react";
import Navbar from "@/components/Navbar";
import { Services } from "@/components/ServicesComponent";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Services />
    </div>
  );
};

export default HomePage;

// Localhost:3000
// Localhost:3000/services
// Localhost:3000/contact
