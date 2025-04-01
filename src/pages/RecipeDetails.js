import React from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';

function RecipeDetails({ recipes, setRecipes }) {
  const { id } = useParams();
  const recipeIndex = recipes.findIndex((r) => r.id.toString() === id);
  const recipe = recipes[recipeIndex];

  const addComment = (commentText) => {
    const updatedRecipes = [...recipes];
    updatedRecipes[recipeIndex].comments = [...(recipe.comments || []), commentText];
    setRecipes(updatedRecipes);
  };

  if (!recipe) return <p className="text-center text-red-600 mt-10">Recipe not found.</p>;

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    recipe.author || 'Anonymous'
  )}&background=0D8ABC&color=fff`;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      {recipe.image && (
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-6" />
      )}

      <div className="flex justify-between items-center mb-4">
        <span className="bg-yellow-400 text-white px-3 py-1 rounded uppercase text-xs font-semibold">
          {recipe.category}
        </span>
        <div className="flex items-center gap-2">
          <img src={avatarUrl} alt="author avatar" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-medium">{recipe.author}</p>
            <p className="text-xs text-gray-400">{new Date(recipe.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">{recipe.title}</h2>
      <p className="text-gray-700 mb-4">{recipe.description}</p>
      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">{recipe.instructions}</pre>

      <CommentSection comments={recipe.comments || []} addComment={addComment} />
    </div>
  );
}

export default RecipeDetails;
