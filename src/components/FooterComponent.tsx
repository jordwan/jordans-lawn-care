"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import jlcLogo2 from "../assets/jcl-logo.jpg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-cyan-200 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Brand Logo */}
          <Link href="/">
            <Image
              src={jlcLogo2}
              alt="Jordan's Lawn Care Logo"
              width={150}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center mt-4 space-x-4">
            <Link href="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-600"
            >
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600">
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-600"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <Link href="http://jordwan.com">
            <div className="mt-4 text-center text-white-600">webd. jordwan</div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
