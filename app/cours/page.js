'use client';

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { BiFoodMenu } from 'react-icons/bi';
import Table from '../component/table';
import Form from '../component/form';
import Sidebar from '../component/Sidebar';

export default function Home() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [courses, setCourses] = useState([]);

  // Fetch courses from the server
  const fetchCourses = async () => {
    const response = await fetch('/api/courses');
    const data = await response.json();
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Toggle the form visibility
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  // Function to handle form submission
  const handleFormSubmit = async (newCourse) => {
    const response = await fetch('/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourse),
    });

    if (response.ok) {
      fetchCourses();  // Refresh the course list
      setFormVisible(false);  // Hide the form
    } else {
      console.error('Failed to add course');
    }
  };

  return (
    <>
      <Head>
        <title>Course Management</title>
      </Head>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-grow bg-gray-50 py-8 px-4">
          <h1 className="text-2xl md:text-4xl text-center font-bold mb-6 text-gray-800">Courses Management</h1>
          <div className="flex justify-center mb-6">
            <button
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-600 flex items-center gap-2"
              onClick={toggleFormVisibility}
            >
              Add Course <BiFoodMenu size={24} />
            </button>
          </div>
          {isFormVisible && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <Form onSubmit={handleFormSubmit} />
            </div>
          )}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Table courses={courses} fetchCourses={fetchCourses} />
          </div>
        </main>
      </div>
    </>
  );
}
