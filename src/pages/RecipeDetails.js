import React from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import Rating from '../components/Rating';

function RecipeDetails({ recipes, setRecipes }) {
  const { id } = useParams();
  const recipeIndex = recipes.findIndex((r) => r.id.toString() === id);
  const recipe = recipes[recipeIndex];

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

  if (!recipe) return <p className="text-center mt-10 text-gray-500">Recipe not found.</p>;

  const averageRating =
    recipe.ratings.length > 0 ? (recipe.ratings.reduce((a, b) => a + b, 0) / recipe.ratings.length).toFixed(1) : "No ratings yet";

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{recipe.title}</h2>
      <p className="text-sm text-gray-500 mb-2">Posted by {recipe.author} • {new Date(recipe.createdAt).toLocaleDateString()}</p>
      {recipe.image && <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-6" />}
      <p className="text-md text-gray-600 mb-4">{recipe.description}</p>
      <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded mb-6">{recipe.instructions}</pre>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-indigo-700 mb-1">Rating: {averageRating}</h3>
        <Rating onRate={addRating} value={Number(averageRating)} />
      </div>

      <CommentSection comments={recipe.comments || []} addComment={addComment} />
    </div>
  );
}
export default RecipeDetails;
