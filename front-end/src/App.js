import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import EditRecipe from "./components/EditRecipe/EditRecipe";
import Recipe from "./components/Recipe/Recipe";
import AllRecipes from "./components/AllRecipes/AllRecipes";
import Nav from "./components/Nav/Nav";
import Categories from "./components/Categories/Categories";
import "./components/Loader/Loader.css";

function App() {
    return (
        <Router>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/recipes/new" element={<CreateRecipe />} />
                <Route path="/recipes/:id/edit" element={<EditRecipe />} />
                <Route path="/recipes/:id" element={<Recipe />} />
                <Route
                    path="/recipes/categories/:id"
                    element={<AllRecipes />}
                />
            </Routes>
        </Router>
    );
}

export default App;
