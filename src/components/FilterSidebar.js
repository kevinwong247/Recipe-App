import React from 'react';

function FilterSidebar({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full sm:w-64 mb-6">
      <h3 className="text-md font-semibold mb-4 text-indigo-700">Filter Recipes</h3>
      <div className="space-y-3">
        <select name="category" onChange={handleChange} className="input">
          <option value="">All Categories</option>
          <option value="Vegan">Vegan</option>
          <option value="Dessert">Dessert</option>
          <option value="Pasta">Pasta</option>
          <option value="Breakfast">Breakfast</option>
        </select>
        <select name="rating" onChange={handleChange} className="input">
          <option value="">All Ratings</option>
          <option value="5">★★★★★</option>
          <option value="4">★★★★ & up</option>
          <option value="3">★★★ & up</option>
        </select>
      </div>
    </div>
  );
}
export default FilterSidebar;
