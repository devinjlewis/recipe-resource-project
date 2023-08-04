const express = require("express");
const router = express.Router();
const { getAllRecipes, getSingleRecipe } = require("../queries/recipes");

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

module.exports = router;
