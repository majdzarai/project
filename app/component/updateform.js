import { useState } from 'react';

export default function UpdateForm({ course, onUpdate }) {
  const [teacherName, setTeacherName] = useState(course.teacherName);
  const [section, setSection] = useState(course.section);
  const [courseName, setCourseName] = useState(course.courseName);
  const [price, setPrice] = useState(course.price);
  const [description, setDescription] = useState(course.description);
  const [image, setImage] = useState(course.image);
  const [status, setStatus] = useState(course.status);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedCourse = {
      id: course.id,
      teacherName,
      section,
      courseName,
      price,
      description,
      image,
      status,
    };

    await onUpdate(updatedCourse);  // Call the onUpdate function passed from Table

    setTeacherName('');
    setSection('');
    setCourseName('');
    setPrice('');
    setDescription('');
    setImage('');
    setStatus('');
  };

  return (
    <div className="border rounded-md p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">Update Course</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Teacher Name
          <input
            type="text"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            className="border rounded-md p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Section
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="border rounded-md p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Course Name
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="border rounded-md p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Price
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-md p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Image URL
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          Status
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-md p-2 w-full"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-indigo-600"
        >
          Update Course
        </button>
      </form>
    </div>
  );
}
