import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Logo from "../resources/logo.png";
import Search from "../Search/Search";

function Nav() {
  return (
    <header className="navbar navbar-expand-lg navbar-light">
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <img src={Logo} width="200" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="custom-search">
          <Search />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes/new">
                Create Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
