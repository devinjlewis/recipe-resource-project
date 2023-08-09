import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCategories } from "../Api/Api";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories();
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  if (!categories.length) {
    return (
      <div className="loader-container">
        <div className="d-flex justify-content-center m-5 loader ">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="nav-item ">
      <div className="m-5 list-group-item">
        <Link to={`/`} className="list-group-item ">
          All Recipes
        </Link>
      </div>
      {categories &&
        categories.map((category) => (
          <div className="m-5 list-group-item">
            <Link
              key={category.id}
              to={`/recipes/categories/${category.id}`}
              className="list-group-item "
            >
              {category.category_name}
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Categories;
