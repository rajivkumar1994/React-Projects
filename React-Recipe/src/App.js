import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./Recipe";

const APP_ID = "f63de94a";
const APP_KEY = "eaf446ea5ed1084856e189853ace029f";
// console.log("APP_ID : ", process.env.APP_ID);

const App = () => {
  const [recipes, setRecipes] = useState([]); // All the recipes will be set in State
  const [search, setSearch] = useState(""); // Searching the Recipe (search -> value in text area)
  const [query, setQuery] = useState("chicken"); // Initial query with chicken in search area

  useEffect(() => {
    getRecipes();
  }, [query]); // useEffect runs only when the query (text in search bar) changes

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // console.log(data); // All the recipes available in recipes State. Mapping thro' recipes to retrieve the label, cal, images
    setRecipes(data.hits);
  };

  const handleSearch = event => {
    setSearch(event.target.value);
    // console.log(search);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search); // search the recipe based on query
    setSearch(""); // Resetting search to null after searching the recipe in search area
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
