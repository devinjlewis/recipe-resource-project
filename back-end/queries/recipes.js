const db = require("../db/dbConfig");

//GET ALL
const getAllRecipes = async () => {
    try {
        const allRecipes = await db.any("SELECT * FROM recipes");
        return allRecipes;
    } catch (error) {
        return error;
    }
};

//GET ONE BY :ID
const getSingleRecipe = async (id) => {
    try {
        const SingleRecipe = await db.any(
            "SELECT * FROM recipes WHERE id = $1",
            id
        );
        return SingleRecipe;
    } catch (error) {
        return error;
    }
};

//CREATE
const createRecipe = async (recipe) => {
    try {
        const {
            name,
            ingredients,
            prep_time,
            cook_time,
            serving_size,
            date,
            instructions,
            category_id,
            is_favorite,
            origin,
        } = recipe;

        const create = await db.any(
            "INSERT INTO recipes (name, ingredients, prep_time, cook_time, serving_size, date, instructions, category_id, is_favorite, origin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [
                name,
                ingredients,
                prep_time,
                cook_time,
                serving_size,
                date,
                instructions,
                category_id,
                is_favorite,
                origin,
            ]
        );
        return create[0];
    } catch (error) {
        return error;
    }
};

//DELETE BY :ID
const deleteRecipe = async (id) => {
    try {
        const deletedRecipe = await db.any(
            `DELETE FROM recipes WHERE id = $1 RETURNING *`,
            id
        );

        return deletedRecipe;
    } catch (e) {
        return e;
    }
};

//UPDATE BY ID
const updateRecipe = async (Recipe, id) => {
    try {
        const {
            name,
            ingredients,
            prep_time,
            cook_time,
            serving_size,
            date,
            instructions,
            category_id,
            is_favorite,
            origin,
        } = Recipe;

        const updateFields = {
            name,
            ingredients,
            prep_time,
            cook_time,
            serving_size,
            date,
            instructions,
            category_id,
            is_favorite,
            origin,
        };
        console.log(updateFields);
        let query = "UPDATE recipes SET ";
        let values = [];
        let valueIndex = 1;

        for (const field in updateFields) {
            const value = updateFields[field];

            if (value !== null && value !== undefined) {
                query += `${field} = $${valueIndex}, `;
                values.push(value);
                valueIndex++;
            }
        }
        query = query.slice(0, -2);

        query += ` WHERE id = $${valueIndex++} RETURNING *`;

        const updatedRecipe = await db.any(query, [...values, id]);

        return updatedRecipe;
    } catch (e) {
        return e;
    }
};

//GET ALL CATEGORIES
const getAllCategories = async () => {
    try {
        const allCategories = await db.any("SELECT * FROM categories");
        return allCategories;
    } catch (error) {
        return error;
    }
};

//GET CATEGORY BY ID
const getRecipesByCategoryId = async (categoryId) => {
    try {
        const recipesByCategory = await db.any(
            "SELECT r.* FROM recipes r JOIN categories c ON r.category_id = c.id WHERE c.id = $1",
            categoryId
        );
        return recipesByCategory;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllRecipes,
    getSingleRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe,
    getAllCategories,
    getRecipesByCategoryId,
};
