import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllRecipes } from "../Api/Api";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const fetchData = async () => {
        const recipe = await getAllRecipes();

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
        <div className="container mt-4">
            <h1 className="m-5">All Recipes</h1>
            <div className="row">
                {recipes &&
                    recipes.map((recipe) => (
                        <div className="col-md-4 mb-4" key={recipe.id}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {recipe.name}
                                    </h5>
                                    <p className="card-text">
                                        Category: {recipe.origin}
                                    </p>
                                    <p className="card-text">
                                        Cook Time: {recipe.cook_time} minutes
                                    </p>
                                    <Link
                                        to={`/recipes/${recipe.id}`}
                                        className="btn btn-success d-flex justify-content-center"
                                    >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Home;
