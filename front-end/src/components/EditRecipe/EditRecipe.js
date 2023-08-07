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
        prep_time: "",
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
    function categoriesDropdown(id) {
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
                        <option
                            value={category.id}
                            key={category.id}
                            selected={category.id === id}
                        >
                            {category.category_name}
                        </option>
                    );
                })}
            </select>
        );
    }
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
        fetchData();
        fetchCategories();
    }, []);
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
        <div>
            <h1>Edit</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Name:{" "}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div>
                    Ingredients:{" "}
                    <input
                        type="text"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div>
                    Prep Time:{" "}
                    <input
                        type="text"
                        name="prep_time"
                        value={formData.prep_time}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div>
                    Cook Time:{" "}
                    <input
                        type="text"
                        name="cook_time"
                        value={formData.cook_time}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div>
                    Serving Size:{" "}
                    <input
                        type="text"
                        name="serving_size"
                        value={formData.serving_size}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div>
                    Date:{" "}
                    <input
                        type="date"
                        name="date"
                        value={formData.date.slice(0, 10)}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>{" "}
                <div>
                    Instructions:{" "}
                    <textarea
                        cols="50"
                        rows="9"
                        type="text"
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
                <div>
                    Origin:{" "}
                    <input
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>
                <div>Category: {categoriesDropdown(formData.category_id)}</div>
                <div>
                    Favorite:{" "}
                    <input
                        type="checkbox"
                        name="is_favorite"
                        checked={formData.is_favorite}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.checked,
                            }))
                        }
                    />
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => deleteRecipe()}>
                    Delete
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}
                >
                    Go Back
                </button>
            </form>
        </div>
    );
}

export default EditRecipe;
