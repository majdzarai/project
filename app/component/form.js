import React, { useState } from 'react';
import { BiUpload } from 'react-icons/bi';
import { BiBadgeCheck } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Success from './sucsess'; // Import the Success component

export default function Form() {
  const [status, setStatus] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [section, setSection] = useState('');
  const [courseName, setCourseName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // Track the success state
  const [showPopup, setShowPopup] = useState(false); // Track the visibility of the confirmation popup
  const [showForm, setShowForm] = useState(true); // Track the visibility of the form

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!teacherName || !section || !courseName || !price || !description || !image || !status) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setSuccess(true); // Set success state to true
      setTeacherName('');
      setSection('');
      setCourseName('');
      setPrice('');
      setDescription('');
      setImage('');
      setStatus('');
    }, 500); // Simulate a delay for the form submission
  };

  const handleCloseForm = () => {
    setShowPopup(true); // Show the confirmation popup
  };

  const handleConfirmClose = () => {
    setShowPopup(false); // Hide the confirmation popup
    setShowForm(false);  // Hide the form
  };

  const handleCancelClose = () => {
    setShowPopup(false); // Hide the confirmation popup
  };

  return (
    <div>
      {success && <Success />} {/* Show success message if form submission was successful */}

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4"> You want to close the form?</h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleConfirmClose}
                className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-600"
              >
                <span>Yes</span>
                <BiBadgeCheck size={20} />
              </button>
              <button
                onClick={handleCancelClose}
                className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-red-600"
              >
                <span>No</span>
                <AiOutlineClose size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Component */}
      {showForm && (
        <form className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md relative" onSubmit={handleSubmit}>
          <button
            type="button"
            onClick={handleCloseForm}
            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          >
            <AiOutlineClose size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Form Fields */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teacherName">
                Teacher Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="teacherName"
                type="text"
                placeholder="Enter teacher's name"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
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
                value={section}
                onChange={(e) => setSection(e.target.value)}
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
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                  onChange={(e) => setImage(e.target.files[0]?.name || '')}
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
                  Publish
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
                className="flex bg-indigo-300 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
                type="submit"
              >
                Submit <span className="px-1"><BiBadgeCheck size={23} /></span>
              </button>
            </div>
          </div>
        </form>
      )}
      {error && (
        <div className="flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-5 text-center bg-opacity-5 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
}
