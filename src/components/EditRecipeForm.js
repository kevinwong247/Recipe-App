import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { app } from '../firebase';

function EditRecipeForm({ recipes, updateRecipe }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id.toString() === id);
  const [form, setForm] = useState(recipe || {});
  const db = getFirestore(app); // Initialize Firestore

  useEffect(() => {
    if (recipe) setForm(recipe);
  }, [recipe]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, 'recipes', id);
      const { id: _, ...updatedData } = form;
      await updateDoc(docRef, updatedData);

      updateRecipe(form);
      alert('Recipe updated in Firestore!');
      navigate('/');
    } catch (error) {
      console.error('Failed to update Firestore:', error.message);
      alert('Update failed. Please try again.');
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
    if (!confirmDelete) return;

    try {
      const docRef = doc(db, 'recipes', id);
      await deleteDoc(docRef);
      alert('Recipe deleted from Firestore!');
      navigate('/');
    } catch (error) {
      console.error('Delete failed:', error.message);
      alert('Delete failed. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          placeholder="Title"
          className="input"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={form.description}
          placeholder="Short description"
          className="input"
          onChange={handleChange}
          required
        />
        <textarea
          name="instructions"
          value={form.instructions}
          placeholder="Instructions"
          className="input"
          onChange={handleChange}
          required
        />
        <input
          name="image"
          value={form.image}
          placeholder="Image URL"
          className="input"
          onChange={handleChange}
        />
        <select
          name="category"
          value={form.category}
          className="input"
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="Vegan">Vegan</option>
          <option value="Dessert">Dessert</option>
          <option value="Pasta">Pasta</option>
          <option value="Breakfast">Breakfast</option>
        </select>
        <div className="flex justify-between items-center">
          <button type="submit" className="btn-primary">Update Recipe</button>
          <button
            type="button"
            onClick={handleDelete}
            className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditRecipeForm;
