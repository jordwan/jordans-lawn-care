"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import jlcLogo2 from "../assets/jcl-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/">
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                <Image
                  className="max-w-[150px] h-auto sm:max-w-[160px]"
                  src={jlcLogo2}
                  alt="Jordan's Lawn Care"
                />
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link href="/" className="text-gray-700 hover:text-green-600">
                Services
              </Link>
              <Link href="/" className="text-gray-700 hover:text-green-600">
                About
              </Link>
              <Link href="/" className="text-gray-700 hover:text-green-600">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full">
            <div className="flex flex-col space-y-4 py-4 px-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
      );
    </div>
  );
};

export default Navbar;
