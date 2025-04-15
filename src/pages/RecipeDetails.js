import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { app } from '../firebase';
import { useAuth } from '../context/AuthContext';
import CommentSection from '../components/CommentSection';
import Rating from '../components/Rating';

function RecipeDetails({ recipes, setRecipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const db = getFirestore(app);

  const recipeIndex = recipes.findIndex((r) => r.id.toString() === id);
  const recipe = recipes[recipeIndex];
  const isOwner = user?.uid === recipe?.userId;

  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addComment = (text) => {
    const updatedRecipes = [...recipes];
    updatedRecipes[recipeIndex].comments.push(text);
    setRecipes(updatedRecipes);
  };

  const addRating = (rating) => {
    const updatedRecipes = [...recipes];
    updatedRecipes[recipeIndex].ratings.push(rating);
    setRecipes(updatedRecipes);
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteDoc(doc(db, 'recipes', id));
      setRecipes(recipes.filter((r) => r.id.toString() !== id));
      showToast('Recipe deleted successfully!');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error('Delete failed:', error.message);
      showToast('Delete failed. Please try again.', 'error');
      setDeleting(false);
    }
  };

  if (!recipe) return <p className="text-center mt-10 text-gray-500">Recipe not found.</p>;

  const averageRating =
    recipe.ratings.length > 0
      ? (recipe.ratings.reduce((a, b) => a + b, 0) / recipe.ratings.length).toFixed(1)
      : "No ratings yet";

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow relative">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{recipe.title}</h2>
      <p className="text-sm text-gray-500 mb-2">
        Posted by {recipe.author} • {new Date(recipe.createdAt).toLocaleDateString()}
      </p>
      {recipe.image && (
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-6" />
      )}
      <p className="text-md text-gray-600 mb-4">{recipe.description}</p>
      <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded mb-6">{recipe.instructions}</pre>

      {user ? (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-indigo-700 mb-1">Rating: {averageRating}</h3>
          <Rating onRate={addRating} value={Number(averageRating)} />
        </div>
      ) : (
        <p className="text-sm text-gray-400 italic mb-4">Log in to rate or comment on this recipe.</p>
      )}

      {isOwner && (
        <div className="flex justify-end mt-4 gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded shadow-sm"
          >
            Delete Recipe
          </button>
          <button
            onClick={() => navigate(`/edit/${id}`)}
            className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded shadow-sm"
          >
            Edit Recipe
          </button>
        </div>
      )}

      {user && (
        <CommentSection comments={recipe.comments || []} addComment={addComment} />
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded p-6 shadow-lg w-full max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-4 text-red-700">Are you sure?</h3>
            <p className="mb-4 text-gray-600">This action cannot be undone.</p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-5 right-5 px-4 py-2 rounded shadow-md text-white ${
            toast.type === 'error' ? 'bg-red-500' : 'bg-green-600'
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
