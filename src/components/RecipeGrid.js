import React from 'react';
import RecipeCard from '../components/RecipeCard';


function RecipeGrid({ recipes }) {
  return (
    <section className="bg-white py-12">
      <div className="text-center mb-12">
        <h2 className="text-sm tracking-widest text-gray-500 uppercase">Simple Recipes Made For</h2>
        <p className="text-3xl font-light italic text-purple-800">real. actual. everyday life.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="flex flex-col items-center text-center">
            <div className="overflow-hidden rounded-full shadow-md w-60 h-60">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <button className="mt-4 bg-yellow-400 text-white font-semibold text-sm px-4 py-2 rounded uppercase tracking-wider">
              {recipe.category}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecipeGrid;
