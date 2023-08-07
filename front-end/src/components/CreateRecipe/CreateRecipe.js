import React from "react";
import "./CreateRecipe.css";

function CreateRecipe() {
  return (
    <div className="container">
      <h1 className="m-5">Create Recipe</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Prep Time</label>
          <input
            type="number"
            name="prep_time"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cook Time</label>
          <input
            type="number"
            name="cook_time"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Serving Size</label>
          <input
            type="number"
            name="serving_size"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" name="date" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea name="instructions" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Category ID</label>
          <input
            type="number"
            name="category_id"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Is Favorite</label>
          <input type="checkbox" name="is_favorite" />
        </div>
        <div className="mb-3">
          <label className="form-label">Origin</label>
          <input type="text" name="origin" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateRecipe;
