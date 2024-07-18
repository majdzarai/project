// app/components/CourseCard.js
'use client';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4">
      <img src={course.image} alt={course.name} className="w-full h-32 sm:h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{course.name}</h2>
        <p className="text-gray-700">{course.description}</p>
      </div>
    </div>
  );
}
