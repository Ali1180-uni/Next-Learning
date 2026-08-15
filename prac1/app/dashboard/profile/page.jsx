"use client"; // Required for hooks and events
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Profile() {
  const [userId, setUserId] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      // Navigates to /dashboard/profile/[userId]
      router.push(`/dashboard/profile/${userId}`);
    }
  };

  return (
    <>
      <h1>Profile Page</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter user ID" 
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">View Profile</button>
      </form>
    </>
  );
}
