import React from 'react';

function FriendsList({ friends, addFriend }) {
  const [name, setName] = React.useState('');

  const handleAdd = () => {
    if (name.trim()) {
      addFriend(name.trim());
      setName('');
    }
  };

  return (
    <div>
      <h3>Friends</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Friend's name" />
      <button onClick={handleAdd}>Add Friend</button>
      <ul>
        {friends.map((friend, i) => (
          <li key={i}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
