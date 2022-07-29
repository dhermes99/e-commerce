import React, { Component } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                E-COMMERCE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" class="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/produtos" class="nav-link">
                Produtos
              </Link>
            </li>

            <div className="car">
              <li className="nav-item">
                <Link to="/carrinho" class="nav-link">
                  Carrinho
                </Link>
              </li>
              <li id="login" className="nav-item">
                <Link to="/login" class="nav-link">
                  Entrar
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}
