import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../resources/logo.png";

function Header() {
    return (
        <header className="d-flex align-items-center justify-content-center p-4 bg-success">
            <Link to="/">
                <img src={Logo} width="200" />
            </Link>
            - &nbsp;
            <Link to="/recipes/new">Create Recipe</Link>
        </header>
    );
}

export default Header;
