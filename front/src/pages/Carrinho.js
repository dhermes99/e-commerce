import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/Carrinho.css";
import database from "../database";

export default function Carrinho() {
  const db = database();
  const [produtos, setProdutos] = useState([]);

  const [alreadyLoad, setAlreadyLoad] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      setProdutos(db.getItems("carrinho"));
      setAlreadyLoad(true);
    }
    if (!alreadyLoad) {
      loadProducts();
    }
  }, [produtos, alreadyLoad]);
  return (
    <>
      <Navbar />

      {produtos.map((produto) => (
        <div class="wrapper">
          <div class="clash-card barbarian">
            <div class="clash-card__image clash-card__image--barbarian">
              {<img src="https://via.placeholder.com/250" alt="barbarian" />}
            </div>

            <div class="clash-card__unit-name">{produto.title}</div>
            <div class="clash-card__unit-description">{produto.text}</div>
            <div class="clash-card__level clash-card__level--barbarian">
              {produto.price}
              <br></br>
              <button type="buttonf" class="btn">
                Finalizar
              </button>
              <button
                onClick={() => {
                  db.removeItem("carrinho", produto.id);
                  setAlreadyLoad(false);
                  window.alert("Seu produto foi removido");
                }}
                type="button"
                class="btn"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        className="btnfi"
        onClick={() => {
          db.removeItems("carrinho");
          setAlreadyLoad(false);
        }}
      >
        Remover tudo
      </button>

      <Footer />
    </>
  );
}
