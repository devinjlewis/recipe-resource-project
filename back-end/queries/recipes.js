const db = require("../db/dbConfig");

const getAllRecipes = async () => {
  try {
    const allRecipes = await db.any("SELECT * FROM recipes");
    return allRecipes;
  } catch (error) {
    return error;
  }
};

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
      category,
      is_favorite,
      origin,
    } = recipe;

    const create = await db.one(
      "INSERT INTO recipes (name, ingredients, prep_time, cook_time, serving_size, date, instructions, category, is_favorite, origin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        name,
        ingredients,
        prep_time,
        cook_time,
        serving_size,
        date,
        instructions,
        category,
        is_favorite,
        origin,
      ]
    );
    return create[0];
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllRecipes,
  getSingleRecipe,
};
