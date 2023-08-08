import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getAllCategories,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById,
} from "../Api/Api";
function EditRecipe() {
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
    const { id } = useParams();
    const [formData, setFormData] = useState(initialFormData);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    const deleteRecipe = async (event) => {
        try {
            const confirmed = window.confirm(
                "Are you sure you want to delete this recipe?"
            );
            if (confirmed) {
                const response = await deleteRecipeById(id);
                let data = response.data;
                alert(`The recipe named ${data.name} has been deleted`);
                navigate(`/recipes/categories/${data.category_id}`);
            }
        } catch (error) {
            console.error("Error deleting recipe:", error);
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await getRecipeById(id);
                setFormData(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        async function fetchCategories() {
            try {
                let res = await getAllCategories();
                setCategories(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
        fetchCategories();
    }, [id]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await updateRecipeById(id, formData);
            //console.log(formData);
            //setFormData(initialFormData);
            alert(`Recipe has been edited`);
            navigate(`/recipes/categories/${formData.category_id}`);
        } catch (e) {
            alert(e.response.data.error);
        }
    };
    return (
        <div className="container card my-5">
            <h1 className="m-5 d-flex justify-content-center align-items-center">
                Manage this recipe
            </h1>
            <form className="m-5" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <h4 className="form-h4">Name:</h4>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div className="mb-4">
                    <h4 className="form-h4">Ingredients:</h4>
                    <input
                        type="text"
                        name="ingredients"
                        className="form-control"
                        value={formData.ingredients}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div className="mb-4">
                    <h4 className="form-h4">Prep Time:</h4>
                    <input
                        type="text"
                        name="prep_time"
                        className="form-control"
                        value={formData.prep_time}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div className="mb-4">
                    <h4 className="form-h4">Cook Time:</h4>
                    <input
                        type="text"
                        name="cook_time"
                        className="form-control"
                        value={formData.cook_time}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div className="mb-4">
                    <h4 className="form-h4">Serving Size:</h4>
                    <input
                        type="text"
                        name="serving_size"
                        className="form-control"
                        value={formData.serving_size}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div className="mb-4">
                    <h4 className="form-h4"> Date: </h4>
                    <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={formData.date.slice(0, 10)}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div className="mb-4">
                    <h4 className="form-h4"> Instructions:</h4>
                    <textarea
                        cols="50"
                        rows="9"
                        type="text"
                        className="form-control"
                        value={formData.instructions}
                        name="instructions"
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    ></textarea>
                </div>
                <div className="mb-4">
                    <h4 className="form-h4"> Origin:</h4>
                    <input
                        type="text"
                        name="origin"
                        className="form-control"
                        value={formData.origin}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="mb-4">
                    <h4 className="form-h4">Category:</h4>
                    <div className="mb-4">
                        <select
                            name="category_id"
                            className="form-select form-control"
                            value={formData.category_id}
                            onChange={(e) =>
                                setFormData((prevFormData) => ({
                                    ...prevFormData,
                                    [e.target.name]: e.target.value,
                                }))
                            }
                        >
                            {categories.map((category) => {
                                return (
                                    <option
                                        value={category.id}
                                        key={category.id}
                                    >
                                        {category.category_name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <h4 className="form-h4 mx-2"> Favorite:</h4>

                    <input
                        type="checkbox"
                        name="is_favorite"
                        className="form-check-input"
                        checked={formData.is_favorite}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.checked,
                            }))
                        }
                    />
                </div>
                <div className="button-container d-flex justify-content-center m-3 mb-5">
                    <button type="submit" className="btn btn-primary mx-3">
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger mx-3"
                        onClick={() => deleteRecipe()}
                    >
                        Delete
                    </button>
                    <button
                        className="btn btn-success mx-3"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }}
                    >
                        Go Back
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditRecipe;
