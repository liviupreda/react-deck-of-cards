import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawnCards: [] };
    this.getCard = this.getCard.bind(this);
  }

  componentDidMount() {
    this.fetchAPIData();
  }

  async fetchAPIData() {
    // Fetch random card data from Deck;
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/?deck_count=1`);
    this.setState({ deck: deck.data });
  }

  async getCard() {
    let deckID = this.state.deck.deck_id;
    try {
      // Get card from Deck by ID
      let cardResponse = await axios.get(`${API_BASE_URL}/${deckID}/draw/`);
      let card = cardResponse.data.cards[0];
      // If cardResponse.data.remaining is 0, throw an error
      if (cardResponse.data.remaining === 0) {
        throw new Error("No cards left!");
      }

      this.setState(st => ({
        drawnCards: [
          ...st.drawnCards,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }));
    } catch (err) {
      alert(err);
    }
  }

  render() {
    return (
      <div className="Deck">
        <h1>Card Dealer</h1>
        <button onClick={this.getCard}>Get Card!</button>
        <Card />
      </div>
    );
  }
}

export default Deck;
