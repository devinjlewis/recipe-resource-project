import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { deleteRecipe } from "../EditRecipe/EditRecipe";
import { getRecipeById } from "../Api/Api";
import "./Recipe.css";

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

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
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <header className="text-center pb-5 ">
                            <h1 className="h2 m-3">Recipe Details</h1>
                            <p>Unlock the flavors by following this recipe.</p>
                        </header>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-6 mx-auto ">
                        <blockquote className="shadow shadow-lg shadow-xl  blockquote blockquote-custom bg-white p-5 shadow rounded">
                            <div className="blockquote-custom-icon bg-info shadow-xl custom-shadow ">
                                <i className="fa fa-quote-left text-white"></i>
                            </div>
                            <p
                                className="mb-0 mt-2 font-italic"
                                style={{ whiteSpace: "pre-line" }}
                            >
                                <span className="fw-bold">Instructions:</span>{" "}
                                {recipe.instructions}
                            </p>
                            <p className="mb-0 mt-2 font-italic">
                                <span className="fw-bold">Origin:</span>{" "}
                                {recipe.origin}
                            </p>
                            <p className="mb-0 mt-2 font-italic">
                                <span className="fw-bold">Serving Size:</span>{" "}
                                {recipe.serving_size}
                            </p>
                            <p className="mb-0 mt-2 font-italic">
                                <span className="fw-bold">Cook Time:</span>{" "}
                                {recipe.cook_time} minutes
                            </p>
                            <p className="mb-0 mt-2 font-italic">
                                <span className="fw-bold">Prep Time:</span>{" "}
                                {recipe.prep_time} minutes
                            </p>
                            <p className="mb-0 mt-2 font-italic">
                                <span className="fw-bold">Total Time:</span>{" "}
                                {recipe.prep_time + recipe.cook_time} minutes
                            </p>
                            <footer className="blockquote-footer pt-4 mt-4 border-top">
                                {recipe.name} from{" "}
                                <cite title="Source Title">
                                    {recipe.origin}
                                </cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>
                <div className="button-container d-flex justify-content-center">
                    <button
                        className="btn btn-primary m-3 mx-2"
                        onClick={() => navigate(`/recipes/${recipe.id}/edit`)}
                    >
                        Edit
                    </button>
                    <button className="btn btn-danger m-3">Delete</button>
                </div>
            </div>
        </section>
    );
}

export default Recipe;
