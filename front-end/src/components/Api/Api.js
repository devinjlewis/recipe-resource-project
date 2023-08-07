import Axios from "./Axios";

async function getAllRecipes() {
    try {
        let result = await Axios.get("/recipes");

        return result;
    } catch (e) {
        alert(e.response.data.error);
        return;
    }
}
async function getAllRecipesWCategory() {
    try {
        let result = await Axios.get("/recipes/wcategories");

        return result;
    } catch (e) {
        //alert(e.response.data.error);
        return;
    }
}

async function getRecipeById(id) {
    try {
        let result = await Axios.get(`/recipes/${id}`);

        return result;
    } catch (e) {
        alert(e.response.data.error);
        return;
    }
}

async function deleteRecipeById(id) {
    try {
        let result = await Axios.delete(`/recipes/${id}`);

        return result;
    } catch (e) {
        alert(e.response.data.error);
        return;
    }
}

async function updateRecipeById(id, updatedRecipe) {
    try {
        let result = await Axios.put(`/recipes/${id}`, updatedRecipe);

        return result;
    } catch (e) {
        alert(e.response.data.error);
        return;
    }
}

async function createRecipe(recipe) {
    try {
        let result = await Axios.post(`/recipes`, recipe);
        return result;
    } catch (e) {
        return alert(e.response.data.error);
    }
}

async function getAllCategories() {
    try {
        let result = await Axios.get("/recipes/categories");

        return result;
    } catch (e) {
        alert(e.response.data.error);
        return;
    }
}

async function getRecipeByCategoryId(id) {
    try {
        let result = await Axios.get(`/recipes/categories/${id}`);

        return result;
    } catch (e) {
        alert(e.response.data.error);
        return;
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
    getAllRecipesWCategory,
};
