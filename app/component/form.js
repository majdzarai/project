import React, { useState } from 'react';
import { BiUpload, BiBadgeCheck } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Success from './sucsess'; // Import the Success component

export default function Form({ onSubmit }) {
  const [teacherName, setTeacherName] = useState('');
  const [section, setSection] = useState('');
  const [courseName, setCourseName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!teacherName || !section || !courseName || !price || !description || !status) {
      setError('Please fill out all required fields.');
      return;
    }

    setError('');
    
    const newCourse = {
      teacherName,
      section,
      courseName,
      price,
      description,
      image,
      status,
    };

    await onSubmit(newCourse);  // Call the onSubmit function passed from Home

    setTeacherName('');
    setSection('');
    setCourseName('');
    setPrice('');
    setDescription('');
    setImage('');
    setStatus('');
    setShowSuccess(true);  // Show success message
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md">
          {error}
        </div>
      )}
      {showSuccess && <Success />}
      <form className="bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowSuccess(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">Teacher Name</span>
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">Section</span>
            <input
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">Course Name</span>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">Price</span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">Description</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">Image URL</span>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-1">Status</span>
            <div className="flex space-x-4">
              <label className={`cursor-pointer py-2 px-4 rounded-full ${status === 'publish' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                <input
                  type="radio"
                  name="status"
                  value="publish"
                  className="hidden"
                  onChange={(e) => setStatus(e.target.value)}
                />
                Publish
              </label>
              <label className={`cursor-pointer py-2 px-4 rounded-full ${status === 'hide' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                <input
                  type="radio"
                  name="status"
                  value="hide"
                  className="hidden"
                  onChange={(e) => setStatus(e.target.value)}
                />
                Hide
              </label>
            </div>
          </label>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 flex items-center gap-2"
        >
          Add Course <BiBadgeCheck size={24} />
        </button>
      </form>
    </div>
  );
}
