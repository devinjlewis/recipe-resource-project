import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllRecipesWCategory } from "../Api/Api";
import "./Home.css";
import Categories from "../Categories/Categories";
import Sidebar from "../Sidebar/Sidebar";
function Home() {
  const [recipes, setRecipes] = useState([]);
  const fetchData = async () => {
    const recipe = await getAllRecipesWCategory();

    setRecipes(recipe.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!recipes.length) {
    return (
      <div className="loader-container">
        <div className="d-flex justify-content-center m-5 loader ">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-4 body">
        <div className="row ">
          <div className="col-md-1">
            <Sidebar />
          </div>
          <div className="col-md">
            <div className="col ps-md-3 pt-3">
              <div className="">
                <div className=" m-5 row  main">
                  {recipes &&
                    recipes.map((recipe) => (
                      <div className="col-md-3 mb-4 m-5" key={recipe.id}>
                        <div
                          className="card custom-card"
                          style={{ width: "18rem" }}
                        >
                          <div className="card-body">
                            <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                              <div className="blockquote-custom-icon bg-info shadow-sm"></div>
                              <h4 className="card-title">{recipe.name}</h4>
                              <p className="mb-0 mt-2 font-italic">
                                <span className="fw-bold">Category:</span>{" "}
                                {recipe.category_name}
                              </p>
                              <p className="mb-0 mt-2 font-italic">
                                <span className="fw-bold">Cook Time:</span>{" "}
                                {recipe.cook_time} minutes
                              </p>
                              <Link
                                to={`/recipes/${recipe.id}`}
                                className="btn btn-success d-flex justify-content-center"
                              >
                                View More
                              </Link>
                              <footer className="blockquote-footer pt-4 mt-4 border-top">
                                Prepare this in{" "}
                                <span className="fw-bold">
                                  {recipe.cook_time + recipe.prep_time} minutes
                                </span>{" "}
                                and enjoy a delightful meal!
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
