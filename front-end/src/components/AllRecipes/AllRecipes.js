import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeByCategoryId } from "../Api/Api";
function AllRecipes() {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                //const response = await axios.get(url + "/bookmarks/" + id);
                const response = await getRecipeByCategoryId(id);
                const data = response.data;
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching bookmarks:", error);
            }
        };
        fetchRecipes();
    }, [id]);
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
            {recipes &&
                recipes.map((recipe) => (
                    <div className="col-md-3 m-5" key={recipe.id}>
                        <div
                            className="card custom-card"
                            style={{ width: "18rem" }}
                        >
                            <div className="card-body">
                                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                                    <div className="blockquote-custom-icon bg-info shadow-sm"></div>
                                    <h4 className="card-title">
                                        {recipe.name}
                                    </h4>
                                    <p className="mb-0 mt-2 font-italic">
                                        <span className="fw-bold">
                                            Category:
                                        </span>{" "}
                                        {recipe.category_name}
                                    </p>
                                    <p className="mb-0 mt-2 font-italic">
                                        <span className="fw-bold">
                                            Cook Time:
                                        </span>{" "}
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
                                            {recipe.cook_time +
                                                recipe.prep_time}{" "}
                                            minutes
                                        </span>{" "}
                                        and enjoy a delightful meal!
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default AllRecipes;
