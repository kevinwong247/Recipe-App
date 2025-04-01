import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-serif text-purple-800 font-semibold">
          recipe<span className="text-gray-500 font-light">share</span>
        </h1>

        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-purple-700">Home</Link>
          <Link to="/add" className="hover:text-purple-700">Add Recipe</Link>
          <Link to="/profile" className="hover:text-purple-700">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
