import React from "react";
import "./CreateRecipe.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories, createRecipe } from "../Api/Api";

function CreateRecipe() {
  const initialFormData = {
    name: "",
    ingredients: "",
    prep_time: "",
    cook_time: "",
    serving_size: "",
    date: "",
    instructions: "",
    category_id: "",
    origin: "",
    is_favorite: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  async function fetchCategories() {
    try {
      let res = await getAllCategories();
      setCategories(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  function categoriesDropdown() {
    return (
      <select
        name="category_id"
        onChange={(e) =>
          setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
          }))
        }
      >
        {categories.map((category) => {
          return (
            <option value={category.id} key={category.id}>
              {category.category_name}
            </option>
          );
        })}
      </select>
    );
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let newRecipe = await createRecipe(formData);
      if (newRecipe) {
        console.log(formData);
        setFormData(initialFormData);
        alert(`Recipe has been created`);
        navigate(`/recipes/categories/${formData.category_id}`);
      }
    } catch (e) {
      return alert(e.response.data.error);
    }
  };

  return (
    <div>
      <div className="container card my-5">
        <h1 className="m-5 d-flex justify-content-center">Create Recipe</h1>
        <form className="m-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <h4 className="form-h4">Name</h4>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-3">
            <h4 className="form-h4">Ingredients</h4>
            <input
              type="text"
              name="ingredients"
              className="form-control"
              required
              value={formData.ingredients}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-3">
            <h4 className="form-h4">Prep Time</h4>
            <input
              type="number"
              name="prep_time"
              className="form-control"
              required
              value={formData.prep_time}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-3">
            <h4 className="form-h4">Cook Time</h4>
            <input
              type="number"
              name="cook_time"
              className="form-control"
              required
              value={formData.cook_time}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-3">
            <h4 className="form-h4">Serving Size</h4>
            <input
              type="number"
              name="serving_size"
              className="form-control"
              required
              value={formData.serving_size}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-3">
            <h4 className="form-h4">Date</h4>
            <input
              type="date"
              name="date"
              className="form-control"
              required
              value={formData.date}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-3">
            <h4 className="form-h4">Instructions</h4>
            <textarea
              name="instructions"
              className="form-control"
              cols="20"
              rows="20"
              required
              value={formData.instructions}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-3">
            <h4 className="form-title">Category</h4>
            <div className="form-select"> {categoriesDropdown()}</div>
          </div>
          <div className="mb-3">
            <h4 className="form-title">Is Favorite</h4>
            <input
              type="checkbox"
              name="is_favorite"
              value={formData.is_favorite}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [e.target.name]: e.target.checked,
                }))
              }
            />
          </div>
          <div className="mb-3">
            <h4 className="form-control">Origin</h4>
            <input
              type="text"
              name="origin"
              className="form-control"
              required
              value={formData.origin}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center mb-5 ">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateRecipe;
