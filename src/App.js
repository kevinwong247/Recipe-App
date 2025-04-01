import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';
import RecipeForm from './components/RecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [friends, setFriends] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, comments: [] }]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/add" element={<RecipeForm addRecipe={addRecipe} />} />
        <Route path="/profile" element={<Profile friends={friends} setFriends={setFriends} />} />
        <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} setRecipes={setRecipes} />} />
      </Routes>
    </>
  );
}

export default App;
