import React from "react";
import { Carousel } from "react-bootstrap";
import "../components/BCarousel.css";

export default function BCarousel() {
  return (
    <div className="Carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 475 }}
            src="https://www.painemanwaring.com/wp-content/uploads/2017/08/placeholder-1240-500.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Primeiro slide</h3>
            <p> Algum texto do primeiro slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 475 }}
            src="https://www.painemanwaring.com/wp-content/uploads/2017/08/placeholder-1240-500.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Segundo slide</h3>
            <p>Algum texto do segundo slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 475 }}
            src="https://www.painemanwaring.com/wp-content/uploads/2017/08/placeholder-1240-500.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Terceiro slide</h3>
            <p>Algum texto do terceiro slide</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
