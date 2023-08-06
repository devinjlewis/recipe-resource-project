const express = require("express");
const router = express.Router();

const {
    getAllCategories,
    getRecipesByCategoryId,
} = require("../queries/recipes");

router.get("/", async (req, res) => {
    const allCategories = await getAllCategories();
    res.json(allCategories);
});

router.get("/:id", async (req, res) => {
    const categoryId = req.params.id;
    const recipesByCategory = await getRecipesByCategoryId(categoryId);
    res.json(recipesByCategory);
});

module.exports = router;
