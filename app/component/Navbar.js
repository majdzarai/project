// app/components/Navbar.js
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Website</div>
        <div className="flex space-x-4">
          <Link href="/dashboard">
            Dashboard
          </Link>
          <Link href="/profile">
            Profile
          </Link>
          <Link href="/logout">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
