import React, { useEffect, useState } from "react";
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

    return (
        <div className="container mt-4">
            <h1 className="m-5">All Recipes</h1>
            <div className="row">
                {recipes &&
                    recipes.map((recipe) => (
                        <div className="col-md-4 mb-4" key={recipe.id}>
                            <div className="card" style={{ width: "18rem" }}>
                                {/* <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
              /> */}
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
