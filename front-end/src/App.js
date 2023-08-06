import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import EditRecipe from "./components/EditRecipe/EditRecipe";
import Recipe from "./components/Recipe/Recipe";
import AllRecipes from "./components/AllRecipes/AllRecipes";
import Header from "./components/Header/Header";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/recipes/categories/:id"
                    element={<AllRecipes />}
                />
                <Route path="/recipes/new" element={<CreateRecipe />} />
                <Route path="/recipes/:id" element={<Recipe />} />
                <Route path="/recipes/:id/edit" element={<EditRecipe />} />
            </Routes>
        </Router>
    );
}

export default App;
