import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-indigo-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif italic">RecipeShare</h1>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/add" className="hover:text-yellow-400">Add Recipe</Link>
          <Link to="/profile" className="hover:text-yellow-400">Profile</Link>
          <Link to="/find" className="hover:text-yellow-400">Find Friends</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
