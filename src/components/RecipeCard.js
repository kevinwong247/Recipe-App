import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(recipe.author)}&background=0D8ABC&color=fff`;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-200">
      {recipe.image && (
        <div className="aspect-square overflow-hidden">
          <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
      )}
      <div className="p-4 text-center space-y-2">
        <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          {recipe.category}
        </span>
        <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{recipe.description}</p>
        <div className="flex justify-center items-center gap-2 mt-4">
          <img src={avatarUrl} alt={recipe.author} className="w-8 h-8 rounded-full" />
          <div className="text-left">
            <p className="text-sm font-medium text-gray-700">{recipe.author}</p>
            <p className="text-xs text-gray-400">{new Date(recipe.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <Link to={`/recipe/${recipe.id}`} className="inline-block text-sm text-indigo-600 hover:underline font-medium mt-2">
          View Recipe →
        </Link>
      </div>
    </div>
  );
}
export default RecipeCard;
