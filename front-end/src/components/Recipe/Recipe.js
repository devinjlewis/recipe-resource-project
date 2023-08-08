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
      <h1 className=" text-center mb-5 m-5">{recipe.name}</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4" style={{ maxWidth: "900px" }}>
            <div className="card-body">
              <p className="card-text">
                <span className="fw-bold">Ingredients: </span>
                {recipe.ingredients}
              </p>
              <p className="card-text">
                <span className="fw-bold">Instructions:</span>{" "}
                {recipe.instructions}
              </p>
              <p className="card-text">
                <span className="fw-bold">Origin:</span> {recipe.origin}
              </p>
              <p className="card-text">
                <span className="fw-bold">Serving Size:</span>
                {recipe.serving_size}
              </p>
              <p className="card-text">
                <span className="fw-bold">Cook Time:</span> {recipe.cook_time}
                minutes
              </p>
              <p className="card-text">
                <span className="fw-bold">Prep Time:</span> {recipe.prep_time}
                minutes
              </p>
              <p className="card-text">
                <span className="fw-bold"> Total Time: </span>
                {recipe.prep_time + recipe.cook_time} minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
      </div>
    </div>
  );
}

export default Recipe;
