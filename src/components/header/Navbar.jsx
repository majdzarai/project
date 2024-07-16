"use client"

import React from 'react';
import Link from 'next/link';
import { LiaUniversitySolid } from 'react-icons/lia';

const Navbar = () => {
  return (
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out">
          <LiaUniversitySolid size={32} />
          <span className="ml-2 text-xl font-bold">Rivez.com</span>
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">Home</Link>
        </li>
        <li>
          <Link href="/cours" className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">Cours</Link>
        </li>
        <li>
          <Link href="/login" className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">Sign in</Link>
        </li>
        <li>
          <Link href="/register" className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
