import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCategories } from "../Api/Api";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      //const response = await axios.get(url + "/bookmarks/" + id);
      const response = await getAllCategories();
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div>
      <ul>
        {categories &&
          categories.map((category) => {
            return (
              <li key={category.id}>
                {category.category_name} -{" "}
                <Link to={`/recipes/categories/${category.id}`}>
                  see category
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Categories;
