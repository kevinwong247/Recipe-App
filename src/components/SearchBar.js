import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <div className="max-w-lg mx-auto mt-6 mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search recipes..."
        className="input"
      />
    </div>
  );
}
export default SearchBar;
