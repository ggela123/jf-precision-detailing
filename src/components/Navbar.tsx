"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Logo on left */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="J&F Precision Detailing Logo" 
            width={200} 
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Navbar links on right */}
        <div className="flex items-center space-x-6">
          <Link href="#packages" className="text-white hover:text-blue-400 transition font-medium">
            Packages
          </Link>
          <Link href="#services" className="text-white hover:text-blue-400 transition font-medium">
            Services
          </Link>
          <Link href="#about" className="text-white hover:text-blue-400 transition font-medium">
            About
          </Link>
          <Link href="#contact" className="text-white hover:text-blue-400 transition font-medium">
            Contact
          </Link>
          <Link href="/booking" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            Book Now
          </Link>

          {/* Theme toggle on far right */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
