import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import database from "../database";
import "../pages/Especifico.css";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

export default function Especifico() {
  const db = database();
  const [produto, setProduto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const prod = db.getItem("produtos", parseInt(id));

    setProduto(prod);
  }, []);

  return (
    <>
      <Navbar />
      {produto && (
        <div class="container">
          <div class="cardsp">
            <div class="imgBx">
              <img src="https://via.placeholder.com/250" />
            </div>
            <div class="contentBx">
              <h2>{produto.title}</h2>
              <div class="size">
                <p>{produto.text}</p>
              </div>
              <div class="valor">
                <h3>Valor:</h3>
                <span>{produto.price}</span>
              </div>
              <button type="button" class="btn btn-success">
                Comprar agora
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
