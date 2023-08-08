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
    <div className="d-flex justify-content-center">
      <div className="row">
        {recipes &&
          recipes.map((recipe) => {
            return (
              <div key={recipe.id} className=" m-5 col-md-6 mb-2">
                <div className="card p-3 mb-5">
                  <div className=" card-body">
                    <blockquote className="blockquote blockquote-custom p-2 shadow rounded">
                      <h3 className="card-title mb-1">{recipe.name}</h3>
                      <p className="card-text small ">
                        <span className="fw-bold">Prep Time:</span>{" "}
                        {recipe.prep_time} minutes
                      </p>
                      {recipe.cook_time > 0 && (
                        <p className=" card-text small">
                          <span className="fw-bold">Cook Time: </span>
                          {recipe.cook_time} minutes
                        </p>
                      )}
                      {recipe.is_favorite && <p>Favorite: ⭐️</p>}
                    </blockquote>
                  </div>
                  <div className="button-container d-flex justify-content-center">
                    <button
                      className="btn btn-success mx-3"
                      onClick={() => navigate(`/recipes/${recipe.id}/edit`)}
                    >
                      Manage Recipe
                    </button>
                    <button
                      className="btn btn-success mx-3 "
                      onClick={() => navigate(-1)}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllRecipes;
