import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    // transform: translate(10px, 20px) rotate(20deg);
    // Translate and rotate each card by a random amount, so that they
    // don't stack against each other
    let angle = Math.random() * 90 - 45;
    let xTranslate = Math.random() * 40 - 20;
    let yTranslate = Math.random() * 40 - 20;
    this._transform = `translate(${xTranslate}px, ${yTranslate}px) rotate(${angle}deg)`;
  }

  render() {
    return (
      <img
        style={{ transform: this._transform }}
        className="Card"
        src={this.props.image}
        alt={this.props.name}
      />
    );
  }
}

export default Card;
