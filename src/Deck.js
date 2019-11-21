import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null };
  }

  componentDidMount() {
    this.fetchAPIData();
  }

  async fetchAPIData() {
    // Fetch random card data from Deck;
    let deck = await axios.get(API_URL);
    this.setState({ deck: deck.data });
  }

  render() {
    return (
      <div className="Deck">
        <h1>Card Dealer</h1>
        <Card />
      </div>
    );
  }
}

export default Deck;
