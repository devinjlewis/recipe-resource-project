import React, { useEffect, useState } from "react";
import axios from "axios"; // Assuming you have installed axios, if not, run "npm install axios" first.

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the data from the URL on component mount
    axios.get("http://localhost:3001/recipes").then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="m-5">All Recipes</h1>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div className="card" style={{ width: "18rem" }}>
              {/* <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
              /> */}
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">Category: {recipe.origin}</p>
                <p className="card-text">
                  Cook Time: {recipe.cook_time} minutes
                </p>
                <a
                  href="#"
                  className="btn btn-success d-flex justify-content-center"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
