import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import { useState } from 'react';
import EditForm from './editForm';  // Ensure the correct import path

export default function Table({ courses, fetchCourses }) {
  const [editingCourse, setEditingCourse] = useState(null);

  const handleEdit = (course) => {
    setEditingCourse(course);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this course?')) {
      const response = await fetch('/api/courses', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),  // Send the ID as JSON in the request body
      });

      if (response.ok) {
        fetchCourses();  // Refresh the course list
      } else {
        console.error('Failed to delete course');
      }
    }
  };

  const handleEditSubmit = async (updatedCourse) => {
    await fetch('/api/courses', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...updatedCourse, id: editingCourse.id }),  // Include the course ID
    });

    setEditingCourse(null);
    fetchCourses();  // Refresh the course list
  };

  return (
    <div>
      {editingCourse && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <EditForm course={editingCourse} onSubmit={handleEditSubmit} onCancel={() => setEditingCourse(null)} />
          </div>
        </div>
      )}
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="py-3 px-4 border-b">Teacher Name</th>
            <th className="py-3 px-4 border-b">Section</th>
            <th className="py-3 px-4 border-b">Course Name</th>
            <th className="py-3 px-4 border-b">Price</th>
            <th className="py-3 px-4 border-b">Status</th>
            <th className="py-3 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="hover:bg-gray-100">
              <td className="py-3 px-4 border-b">{course.teacherName}</td>
              <td className="py-3 px-4 border-b">{course.section}</td>
              <td className="py-3 px-4 border-b">{course.courseName}</td>
              <td className="py-3 px-4 border-b">{course.price}</td>
              <td className="py-3 px-4 border-b">{course.status}</td>
              <td className="py-3 px-4 border-b flex space-x-2">
                <button
                  className="text-indigo-500 hover:text-indigo-600"
                  onClick={() => handleEdit(course)}
                >
                  <BiEdit size={20} />
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDelete(course.id)}
                >
                  <BiTrashAlt size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
