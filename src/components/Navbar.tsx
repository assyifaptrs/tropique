import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex justify-center items-center gap-x-3">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            <span className="text-2xl text-blue font-bold">Tropique</span>
          </div>

          <div className="flex space-x-8">
            <Link
              href="/"
              className="text-black text-lg font-semibold hover:text-blue opacity-75 transform duration-500"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-black text-lg font-semibold hover:text-blue opacity-75 transform duration-500"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-black text-lg font-semibold hover:text-blue opacity-75 transform duration-500"
            >
              Reservation
            </Link>
            <Link
              href="/"
              className="text-black text-lg font-semibold hover:text-blue opacity-75 transform duration-500"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
