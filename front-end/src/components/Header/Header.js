import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../resources/logo.png";

function Header() {
    return (
        <header className="d-flex align-items-center justify-content-center p-4 bg-success">
            <img src={Logo} width="200" /> - &nbsp;
            <Link to="/recipe"> View Recipes</Link>&nbsp;-&nbsp;
            <Link to="/recipe/new">Create Recipe</Link>
        </header>
    );
}

export default Header;
