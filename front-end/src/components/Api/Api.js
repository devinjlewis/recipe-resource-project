import Axios from "./Axios";

async function getAllRecipes() {
    try {
        let result = await Axios.get("/recipes");

        return result;
    } catch (e) {
        return e;
    }
}

async function getRecipeById(id) {
    try {
        let result = await Axios.get(`/recipes/${id}`);

        return result;
    } catch (e) {
        return e;
    }
}

async function deleteRecipeById(id) {
    try {
        let result = await Axios.delete(`/recipes/${id}`);

        return result;
    } catch (e) {
        return e;
    }
}

async function updateRecipeById(id, updatedRecipe) {
    try {
        let result = await Axios.put(`/recipes/${id}`, updatedRecipe);

        return result;
    } catch (e) {
        return e;
    }
}

async function createRecipe(recipe) {
    try {
        let result = await Axios.post(`/recipes`, recipe);

        return result;
    } catch (e) {
        return e;
    }
}

async function getAllCategories() {
    try {
        let result = await Axios.get("/recipes/categories");

        return result;
    } catch (e) {
        return e;
    }
}
async function getRecipeByCategoryId(id) {
    try {
        let result = await Axios.get(`/recipes/categories/${id}`);

        return result;
    } catch (e) {
        return e;
    }
}
export {
    getAllRecipes,
    getRecipeById,
    deleteRecipeById,
    updateRecipeById,
    createRecipe,
    getAllCategories,
    getRecipeByCategoryId,
};
