import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeForm({ addRecipe }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    instructions: '',
    image: '',
    category: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...form,
      id: Date.now(),
      author: 'Kevin Wong', // Replace with dynamic user later if needed
      createdAt: new Date(),
    };

    addRecipe(newRecipe);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          className="input"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Short description"
          className="input"
          value={form.description}
          onChange={handleChange}
          required
        />

        <textarea
          name="instructions"
          placeholder="Instructions"
          className="input"
          value={form.instructions}
          onChange={handleChange}
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          className="input"
          value={form.image}
          onChange={handleChange}
        />

        <select
          name="category"
          className="input"
          value={form.category}
          onChange={handleChange}
          required
        >
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

