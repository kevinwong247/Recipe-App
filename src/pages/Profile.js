import React from 'react';
import FriendsList from '../components/FriendsList';

function Profile({ friends, setFriends }) {
  const addFriend = (name) => {
    setFriends([...friends, name]);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-md shadow">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Your Profile</h2>
      <FriendsList friends={friends} addFriend={addFriend} />
    </div>
  );
}

export default Profile;
