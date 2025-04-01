import React, { useState } from 'react';

function FindFriends({ friends, setFriends }) {
  const [search, setSearch] = useState('');
  const [results] = useState(['Abiel', 'Jamie', 'Taylor', 'Morgan']);

  const handleAdd = (name) => {
    if (!friends.includes(name)) {
      setFriends([...friends, name]);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-10 rounded shadow">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Find Friends</h2>
      <input
        className="input mb-4"
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="space-y-2">
        {results
          .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
          .map((name, index) => (
            <li key={index} className="flex justify-between items-center text-sm">
              <span>{name}</span>
              <button onClick={() => handleAdd(name)} className="btn-primary text-xs px-2 py-1">Add</button>
            </li>
        ))}
      </ul>
    </div>
  );
}
export default FindFriends;
