import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    // transform: translate(10px, 20px) rotate(20deg);
    // Translate and rotate each card by a random amount, so that they
    // don't stack against each other
    let angle = Math.random() * 90 - 45;
    let xTranslate = Math.random() * 40 - 20;
    let yTranslate = Math.random() * 40 - 20;
    let transform = `translate(${xTranslate}, ${yTranslate}) rotate(${angle})`;

    return (
      <img className="Card" src={this.props.image} alt={this.props.name} />
    );
  }
}

export default Card;
