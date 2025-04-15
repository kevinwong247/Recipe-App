import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';
import RecipeForm from './components/RecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import FindFriends from './components/FindFriends';
import Login from './pages/Login';      
import Signup from './pages/Signup';    
import dummyData from './utils/dummyData';

function App() {
  const [recipes, setRecipes] = useState(dummyData.recipes);
  const [friends, setFriends] = useState(dummyData.friends);
  const [user, setUser] = useState(dummyData.user);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: Date.now(), comments: [], ratings: [] }]);
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/add" element={<RecipeForm addRecipe={addRecipe} />} />
        <Route path="/edit/:id" element={<EditRecipeForm recipes={recipes} updateRecipe={updateRecipe} />} />
        <Route path="/profile" element={<Profile friends={friends} setFriends={setFriends} />} />
        <Route path="/find" element={<FindFriends friends={friends} setFriends={setFriends} />} />
        <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} setRecipes={setRecipes} />} />
        
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
