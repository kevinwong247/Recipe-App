import React from 'react';
import FriendsList from '../components/FriendsList';

function Profile({ friends, setFriends }) {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-serif text-indigo-700 mb-4">Your Profile</h2>
      <p className="text-gray-600 mb-6">Welcome back! Here you can manage your profile and see your friends.</p>
      <FriendsList friends={friends} />
    </div>
  );
}
export default Profile;
