import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  start: {
    text: (
      <p>Welcome, traveler! How would you like to get to your destination?</p>
    ),
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },
  onthetrain: {
    text: (
      <p>
        Welcome aboard the choo-choo train! Please make your way to your seat.
        What's the number?
        <div>
          <img
            width="400"
            src="https://i.redd.it/iy8pk1wlzvk21.gif"
            alt="train"
          />
        </div>
      </p>
    ),
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text:
      "Welcome aboard the woosh-woosh ship! Please make your way to your suite. What's the number?",
    leftLabel: "13F",
    rightLabel: "55B",
    leftPage: "death1",
    rightPage: "life1"
  },
  death: {
    text:
      "You went and sat on seat 12E without looking and the large pin on the seat impaled your butt and you died",
    leftLabel: "Restart",
    leftPage: "start"
  },
  death1: {
    text:
      "You went to suite 13F and fall out of the ship and got eaten by a shark, the room led to nowhere.",
    leftLabel: "Restart",
    leftPage: "start"
  },
  life: {
    text: "You sat at 97C, it was nice",
    leftLabel: "Restart",
    leftPage: "start"
  },
  life1: {
    text:
      "You went to suite 55B and it's a torture chamber where you get captured and get tortured for the rest of eternity, but hey you're alive",
    leftLabel: "Restart",
    leftPage: "start"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        <p>{pageData.text}</p>
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
