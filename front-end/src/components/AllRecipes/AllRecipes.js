import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeByCategoryId } from "../Api/Api";
function AllRecipes() {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchRecipes();
    }, []);
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

    return (
        <div>
            <ul>
                {recipes &&
                    recipes.map((recipe) => {
                        return (
                            <div key={recipe.id}>
                                <p>Name: {recipe.name}</p>
                                <p>Prep Time: {recipe.prep_time}</p>
                                {recipe.cook_time > 0 && (
                                    <p>Cook Time: {recipe.cook_time}</p>
                                )}
                                {recipe.is_favorite && <p>Favorite: ⭐️</p>}
                                <button
                                    onClick={() =>
                                        navigate(`/recipes/${recipe.id}/edit`)
                                    }
                                >
                                    Manage Recipe
                                </button>
                                <button onClick={() => navigate(-1)}>
                                    Go Back
                                </button>
                            </div>
                        );
                    })}
            </ul>
        </div>
    );
}

export default AllRecipes;
