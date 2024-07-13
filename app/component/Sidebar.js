'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">Sidebar</div>
      <nav className="flex flex-col space-y-2 p-4">
        <Link href="/cours" className={`p-2 rounded ${pathname === '/courses' ? 'bg-gray-600' : 'bg-gray-800'}`}>
          Courses
        </Link>
        <Link href="/chapters" className={`p-2 rounded ${pathname === '/chapters' ? 'bg-gray-600' : 'bg-gray-800'}`}>
          Chapters
        </Link>
        <Link href="/levels" className={`p-2 rounded ${pathname === '/levels' ? 'bg-gray-600' : 'bg-gray-800'}`}>
          Levels
        </Link>
      </nav>
    </div>
  );
}
