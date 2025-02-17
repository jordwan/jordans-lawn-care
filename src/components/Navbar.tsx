"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import jlcLogo2 from "../assets/jcl-logo.jpg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={jlcLogo2}
              alt="Jordan's Lawn Care Logo"
              className="w-32 sm:w-40"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button in the nav bar */}
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-gray-700 hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay & Sliding Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition duration-300 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Semi-transparent Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sliding Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-2/3 max-w-xs bg-white h-full shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Extra X Button inside the sliding panel */}
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-700 hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-end space-y-6 mt-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 text-2xl hover:text-cyan-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
