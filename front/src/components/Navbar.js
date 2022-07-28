import React, { Component } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                E-COMMERCE
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Inicio
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Produtos
              </a>
            </li>
            <li class="nav-item">
              <Link to="carrinho" class="nav-link">
                Carrinho
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
