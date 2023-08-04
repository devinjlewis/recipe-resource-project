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

const deleteRecipe = async (id) => {
  try {
    const deletedRecipe = await db.any(
      `DELETE FROM Recipes WHERE id = $1 RETURNING *`,
      id
    );

    return deletedRecipe;
  } catch (e) {
    return e;
  }
};

// const updateRecipe = async (Recipe, id) => {
//   try {
//     const { name, artist, album, time, is_favorite } = Recipe;
//     const updateFields = {
//       name,
//       artist,
//       album,
//       time,
//       is_favorite,
//     };
//     console.log(updateFields);
//     let query = "UPDATE Recipes SET ";
//     let values = [];
//     let valueIndex = 1;

//     for (const field in updateFields) {
//       const value = updateFields[field];
//       if (value !== null && value !== undefined) {
//         query += `${field} = $${valueIndex}, `;
//         values.push(value);
//         valueIndex++;
//       }
//     }
//     query = query.slice(0, -2);

//     query += ` WHERE id = $${valueIndex++} RETURNING *`;

//     const updatedRecipe = await db.any(query, [...values, id]);
//     /*
//         const updatedRecipe = await db.any(
//             "UPDATE  Recipes SET name = '$1', artist = '$2' , album = '$3',time = '$4', is_favorite=$5 WHERE id=$6 RETURNING *",
//             [name, artist, album, time, is_favorite, id]
//         );*/

//     return updatedRecipe;
//   } catch (e) {
//     return e;
//   }
// };
// const getAllArtistsOnRecipe = async (id) => {
//   try {
//     const recipes = await db.any(
//       "SELECT a.* FROM collaborations c LEFT JOIN Recipes s ON c.recipe_id=s.id LEFT JOIN artist a ON c.artist_id=a.id WHERE c.Recipe_id=" +
//         id
//     );
//     return recipes;
//   } catch (error) {
//     return error;
//   }
// };

module.exports = {
  getAllRecipes,
  getSingleRecipe,
  createRecipe,
  deleteRecipe,
  // updateRecipe,
};
