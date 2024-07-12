import { useState } from 'react';
import { BiUpload } from 'react-icons/bi';

export default function EditForm({ course, onSubmit, onCancel }) {
  const [teacherName, setTeacherName] = useState(course.teacherName);
  const [section, setSection] = useState(course.section);
  const [courseName, setCourseName] = useState(course.courseName);
  const [price, setPrice] = useState(course.price);
  const [description, setDescription] = useState(course.description);
  const [image, setImage] = useState(course.image);
  const [status, setStatus] = useState(course.status);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedCourse = {
      teacherName,
      section,
      courseName,
      price,
      description,
      image,
      status,
    };

    onSubmit(updatedCourse);  // Call the onSubmit function passed from Table
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
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
                checked={status === 'publish'}
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
                checked={status === 'hide'}
              />
              Hide
            </label>
          </div>
        </label>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 flex items-center gap-2"
        >
          Save Changes <BiUpload size={24} />
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 flex items-center gap-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
