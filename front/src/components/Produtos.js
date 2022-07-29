import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "../components/Produto.css";
import database from "../database";
import { Link } from "react-router-dom";

export default function Produtos() {
  const db = database();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const prods = db.getItems("produtos");

    setProdutos(prods);
  }, []);

  function adicionarCarrinho(produto) {
    db.saveItem("carrinho", produto);
    window.alert("Seu " + produto.title + " foi adicionado ao carrinho");
  }

  const renderCard = (card, index) => {
    return (
      <div className="col-sm-3">
        <Card>
          <Link to={`/especifico/${card.id}`}>
            <Card.Img className="w-100 h-100" variant="top" src={card.image} />
          </Link>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button onClick={() => adicionarCarrinho(card)} variant="primary">
              Adicionar ao carrinho
            </Button>
            <Link to={`/especifico/${card.id}`}>
              <Button>Ver mais</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <>
      <div className="row">{produtos.map(renderCard)}</div>
    </>
  );
}
