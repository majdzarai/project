"use client"
import { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    username: '',
    lastname: '',
    email: '',
    phone: '',
    birthDate: '',
    photo: null,
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setProfile(data);
        } else {
          console.error('Error fetching profile:', data.error);
          setMessage('Failed to fetch profile');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        setMessage('An error occurred while fetching profile');
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      for (const key in profile) {
        formData.append(key, profile[key]);
      }

      const token = localStorage.getItem('token');
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Profile updated successfully');
      } else {
        console.error('Error updating profile:', data.error);
        setMessage('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('An error occurred while updating profile');
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="text"
          name="lastname"
          value={profile.lastname}
          onChange={handleChange}
          placeholder="Lastname"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          type="date"
          name="birthDate"
          value={profile.birthDate}
          onChange={handleChange}
        />
        <input
          type="file"
          name="photo"
          onChange={handleChange}
        />
        <button type="submit">Update Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
