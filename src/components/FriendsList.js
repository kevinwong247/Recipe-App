import React from 'react';

function FriendsList({ friends }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-indigo-700 mb-4">Your Friends</h2>
      {friends.length === 0 ? (
        <p className="text-gray-500">No friends added yet.</p>
      ) : (
        <ul className="list-disc list-inside space-y-1">
          {friends.map((friend, index) => (
            <li key={index} className="text-sm text-gray-700">{friend}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default FriendsList;
