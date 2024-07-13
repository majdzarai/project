'use client';

import Sidebar from './component/Sidebar';

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Course Management System</h1>
        <p>Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
}
