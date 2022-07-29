import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BCarousel from "./components/BCarousel";
import Produtos from "./components/Produtos";

function App() {
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
