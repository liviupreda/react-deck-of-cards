import React, { Component } from "react";
import Card from "./Card";

class Deck extends Component {
  render() {
    return (
      <div className="Deck">
        <h1>Deck of Cards</h1>
        <Card />
      </div>
    );
  }
}

export default Deck;
