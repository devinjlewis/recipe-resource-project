const checkName = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    } else {
        next();
    }
};

const checkIngredients = (req, res, next) => {
    const { ingredients } = req.body;
    if (!ingredients) {
        return res.status(400).json({ error: "Ingredients are required" });
    } else {
        next();
    }
};

const checkInstructions = (req, res, next) => {
    const { instructions } = req.body;
    if (!instructions) {
        return res.status(400).json({ error: "Instructions are required" });
    } else {
        next();
    }
};

const checkInteger = (field) => (req, res, next) => {
    const value = Number(req.body[field]);
    if (!value || !Number.isInteger(value)) {
        return res
            .status(400)
            .json({ error: `${field} must be a valid integer` });
    } else {
        return next();
    }
};

const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    console.log(is_favorite);
    if (
        typeof is_favorite !== "boolean" &&
        is_favorite !== "false" &&
        is_favorite !== "true"
    ) {
        return res
            .status(400)
            .json({ error: "is_favorite must be a boolean value" });
    } else {
        next();
    }
};

module.exports = {
    checkName,
    checkInteger,
    checkIngredients,
    checkInstructions,
    checkBoolean,
};
