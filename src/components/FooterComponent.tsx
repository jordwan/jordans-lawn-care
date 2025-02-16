"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import jlcLogo2 from "../assets/jcl-logo.jpg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Top section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <Link href="/" className="mx-auto md:mx-0">
            <Image
              src={jlcLogo2}
              alt="Jordan's Lawn Care Logo"
              width={200}
              height={80}
              className="object-contain"
            />
          </Link>
          <nav className="flex flex-wrap justify-center mt-4 md:mt-0 space-x-8">
            <Link
              href="/"
              className="font-bold text-black hover:text-cyan-700 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="font-bold text-black hover:text-cyan-700 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="font-bold text-black hover:text-cyan-700 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-bold text-black hover:text-cyan-700 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Section: Copyright and Social Links */}
        <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-cyan-700 transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-cyan-700 transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-cyan-700 transition-colors"
            >
              Twitter
            </Link>
          </div>
          <p className="text-sm text-white mt-4 md:mt-0">
            <Link
              href="http://jordwan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              {" "}
              &copy; {currentYear} webd. jordwan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
