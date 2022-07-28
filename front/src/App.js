import React from "react";
import Produtos from "./components/Produtos";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BCarousel from "./components/BCarousel";
import { Container } from "react-bootstrap";
import Especifico from "./pages/Especifico";

function App() {
  // const notify = () => toast("Seu produto foi adicionado no carrinho!");
  return (
    <div className="App">
      <Navbar />
      <Container>
        <BCarousel />
        <Produtos />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
