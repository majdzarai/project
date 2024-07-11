import React, { useState } from 'react';
import { BiFoodMenu, BiUpload } from "react-icons/bi";
import { BiBadgeCheck } from "react-icons/bi";

export default function Form() {
  const [status, setStatus] = useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Other form fields */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teacherName">
            Teacher Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="teacherName"
            type="text"
            placeholder="Enter teacher's name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="section">
            Section
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="section"
            type="text"
            placeholder="Enter section"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
            Course Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="courseName"
            type="text"
            placeholder="Enter course name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <div className="relative flex items-center">
            <input
              className="hidden"
              id="image"
              type="file"
              accept="image/*"
            />
            <label htmlFor="image" className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full flex items-center justify-center">
              <span className='px-2'><BiUpload size={20}/></span> 
                
            </label>
          </div>
        </div>
        <div className="mb-4 form-check">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status
          </label>
          <div className="flex space-x-4">
            <label htmlFor="publish" className={`cursor-pointer py-2 px-4 rounded-full ${status === 'publish' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
              <input
                type="radio"
                name="status"
                value="publish"
                id="publish"
                className="hidden"
                onChange={handleStatusChange}
              />
              Push
            </label>
            <label htmlFor="hide" className={`cursor-pointer py-2 px-4 rounded-full ${status === 'hide' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
              <input
                type="radio"
                name="status"
                value="hide"
                id="hide"
                className="hidden"
                onChange={handleStatusChange}
              />
              Hide
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            className="flex bg-indigo-300 text-white px-4 py-1 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
            type="submit"
          >
            Submit <span className="px-1"><BiBadgeCheck size={23} /></span>
          </button>
        </div>
      </div>
    </form>
  );
}
