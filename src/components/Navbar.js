import React from "react";
import { Link } from "react-router-dom";
import { ForkKnifeCrossed } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-indigo-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-sans flex items-center ml-3 gap-2">
            <ForkKnifeCrossed />
            Frokify
          </h1>
          <p className="text-sm">Discover. Share. Savor.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/add" className="hover:text-yellow-400">
            Add Recipe
          </Link>
          <Link to="/profile" className="hover:text-yellow-400">
            Profile
          </Link>
          <Link to="/find" className="hover:text-yellow-400">
            Find Friends
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
