'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../component/Navbar';

export default function ProfilePage() {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        setUsername(data.username);
        setLastname(data.lastname);
        setEmail(data.email);
        setPhone(data.phone);
        setBirthDate(data.birthDate);
        setPhoto(data.photo);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('birthDate', birthDate);
    if (photo) {
      formData.append('photo', photo);
    }

    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Profile updated successfully');
        // Optionally redirect or perform other actions
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('An error occurred while updating profile');
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Birth Date</label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo</label>
            <input
              type="file"
              id="photo"
              accept=".jpg,.jpeg,.png"
              onChange={handlePhotoChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          {message && <p className="text-red-500 text-sm mb-4">{message}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
