const express = require("express");
const router = express.Router();

const {
  getAllRecipes,
  getSingleRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
  getAllCategories,
  getRecipesByCategoryId,
} = require("../queries/recipes");

const {
  checkName,
  checkIngredients,
  checkInteger,
  checkInstructions,
  checkBoolean,
} = require("../validations/validations");

//GET-All
router.get("/", async (req, res) => {
  const allRecipes = await getAllRecipes();
  res.json(allRecipes);
});

//GET-ONE
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const Recipe = await getSingleRecipe(id);

  if (Recipe.length) {
    res.json(Recipe[0]);
  } else {
    res.status(404).json({
      status: false,
      message: "Recipe does not exist",
    });
  }
});

//CREATE
router.post(
  "/",
  checkName,
  checkIngredients,
  checkInteger("prep_time"),
  checkInteger("cook_time"),
  checkInteger("serving_size"),
  checkInstructions,
  checkBoolean,
  async (req, res) => {
    const newRecipe = req.body;
    const insertRecipe = await createRecipe(newRecipe);
    if (insertRecipe.length === 0) {
      res.status(422).json({
        status: false,
        message: "You cannot create an empty recipe",
      });
    } else {
      res.json(insertRecipe);
    }
  }
);

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedRecipe = await deleteRecipe(id);

  if (deletedRecipe.length === 0) {
    res.status(404).json({ message: "No data found!", error: true });
  } else {
    res.json(deletedRecipe[0]);
  }
});

router.put("/:id", async (req, res) => {
  const updatedRecipe = await updateRecipe(req.body, req.params.id);
  console.log(updatedRecipe);
  if (updatedRecipe.length === 0) {
    res.status(404).json({ message: "No data found!", error: true });
  } else {
    res.json(updatedRecipe[0]);
  }
});

router.get("/categories", async (req, res) => {
  const allCategories = await getAllCategories();
  res.json(allCategories);
});

router.get("/categories/:id", async (req, res) => {
  const categoryId = req.params.id;
  const recipesByCategory = await getRecipesByCategoryId(categoryId);
  res.json(recipesByCategory);
});

module.exports = router;
