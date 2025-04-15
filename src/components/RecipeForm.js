import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RecipeForm({ addRecipe }) {
  const [form, setForm] = useState({
    title: '', description: '', instructions: '', image: '', category: ''
  });

  const navigate = useNavigate();
  const { user } = useAuth(); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...form,
      author: user?.email || 'Anonymous',
      userId: user?.uid || null, 
      createdAt: Date.now(),
      comments: [],
      ratings: [],
    };

    addRecipe(newRecipe);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" className="input" onChange={handleChange} required />
        <textarea name="description" placeholder="Short description" className="input" onChange={handleChange} required />
        <textarea name="instructions" placeholder="Instructions" className="input" onChange={handleChange} required />
        <input name="image" placeholder="Image URL" className="input" onChange={handleChange} />
        <select name="category" className="input" onChange={handleChange} required>
          <option value="">Select category</option>
          <option value="Vegan">Vegan</option>
          <option value="Dessert">Dessert</option>
          <option value="Pasta">Pasta</option>
          <option value="Breakfast">Breakfast</option>
        </select>
        <button type="submit" className="btn-primary">Post Recipe</button>
      </form>
    </div>
  );
}

export default RecipeForm;
