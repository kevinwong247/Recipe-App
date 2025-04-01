import React from 'react';
import RecipeCard from '../components/RecipeCard';

function Home({ recipes = [] }) {
  return (
    <section className="bg-white pb-20">
      <div className="text-center pt-12 pb-8">
        <h3 className="text-sm tracking-widest text-gray-500 uppercase">Simple Recipes Made For</h3>
        <h1 className="text-4xl font-serif italic text-purple-800 font-light">
          real. actual. everyday life.
        </h1>
      </div>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-400 text-lg mt-12">No recipes added yet!</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
