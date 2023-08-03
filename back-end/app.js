const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const recipeController = require("./controllers/recipeController");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/recipe", recipeController);

app.get("/", (req, res) => {
    res.send("Welcome to our recipe project");
});

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;
