import React from "react";
import "../components/Footer.css";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">PROJETO E-COMMERCE</h5>
          <p>
            Aqui é a descrição sobre o projeto Aqui é a descrição sobre o
            projeto Aqui é a descrição sobre o projeto
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />
        <br></br>
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Nossas redes</h5>
          <ul className="list-unstyled">
            <li>
              <a href="https://www.instagram.com/viniciushermes1/">
                Instagram Vinícius
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/vinicius-hermes-09a655232/">
                {" "}
                Linkedin Vinícius
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022
      <a> PROJETO E-COMMERCE</a>
      <br />
      <span>email para contato : viniciushermes99@gmail.com</span>
    </div>
  </footer>
);

export default Footer;
