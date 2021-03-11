import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

import image9 from "../../images/img-9.jpg";
import image8 from "../../images/img-8.jpg";
import image4 from "../../images/img-4.jpg";
import image2 from "../../images/img-2.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out these EPIC Destinations !!! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src={image9}
              path="/services"
              label="Adventure"
              text="Beautiful Waterfall in the AMAZON Jungle"
            />
            <CardItem
              src={image8}
              path="/services"
              label="Travel"
              text="Incredible Thar Desert"
            />
          </ul>
          <ul className="cards__item">
            <CardItem
              src={image4}
              path="/products"
              label="Product"
              text="Enjoy the Football match on top of the Himalayas"
            />
            <CardItem
              src={image2}
              path="/services"
              label="Luxury"
              text="Walking through the islands of Bali"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
