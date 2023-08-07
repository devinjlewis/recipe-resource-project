import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../Api/Api";
import "./Recipe.css";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeData = await getRecipeById(id);
        setRecipe(recipeData.data);
        console.log("Recipe Data:", recipeData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div className="loader-container">
        <div className="d-flex justify-content-center m-5 loader ">
          Loading...
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-4">
      <h1 className="m-5">Recipe Details</h1>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <p className="card-text">Category: {recipe.origin}</p>
          <p className="card-text">Cook Time: {recipe.cook_time} minutes</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
