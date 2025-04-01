import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditRecipeForm({ recipes, updateRecipe }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id.toString() === id);
  const [form, setForm] = useState(recipe || {});

  useEffect(() => {
    if (recipe) setForm(recipe);
  }, [recipe]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(form);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={form.title} placeholder="Title" className="input" onChange={handleChange} required />
        <textarea name="description" value={form.description} placeholder="Short description" className="input" onChange={handleChange} required />
        <textarea name="instructions" value={form.instructions} placeholder="Instructions" className="input" onChange={handleChange} required />
        <input name="image" value={form.image} placeholder="Image URL" className="input" onChange={handleChange} />
        <select name="category" value={form.category} className="input" onChange={handleChange} required>
          <option value="">Select category</option>
          <option value="Vegan">Vegan</option>
          <option value="Dessert">Dessert</option>
          <option value="Pasta">Pasta</option>
          <option value="Breakfast">Breakfast</option>
        </select>
        <button type="submit" className="btn-primary">Update Recipe</button>
      </form>
    </div>
  );
}
export default EditRecipeForm;
