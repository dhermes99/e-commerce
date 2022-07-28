import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import { produtos } from "./database/initialProdutos";
import Especifico from "./pages/Especifico";
import "./Index.css";

localStorage.setItem("produtos", JSON.stringify(produtos));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="carrinho" element={<Carrinho />} />
      <Route path="especifico/:id" element={<Especifico />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
