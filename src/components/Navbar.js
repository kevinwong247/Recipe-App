import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('You have been logged out.');
      navigate('/login'); // redirect to login page
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <nav className="bg-indigo-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif italic">RecipeShare</h1>
        <div className="flex gap-6 text-sm font-medium items-center">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/add" className="hover:text-yellow-400">Add Recipe</Link>
          <Link to="/profile" className="hover:text-yellow-400">Profile</Link>
          <Link to="/find" className="hover:text-yellow-400">Find Friends</Link>

          {user ? (
            <>
              <span className="text-yellow-200 italic">Welcome, {user.email}</span>
              {/* Avatar Placeholder */}
              <div className="w-8 h-8 rounded-full bg-yellow-400 text-indigo-800 flex items-center justify-center font-bold">
                {user.email.charAt(0).toUpperCase()}
              </div>

              <button
                onClick={handleLogout}
                className="ml-3 px-3 py-1 bg-yellow-400 text-indigo-800 font-semibold rounded hover:bg-yellow-300 transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-400">Login</Link>
              <Link to="/signup" className="hover:text-yellow-400">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
