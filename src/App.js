import React, { Component } from "react";
// import logo from "./logo.svg";

// import Components
import FilmDetails from "./FilmDetails";
import FilmListing from "./FilmListing";

// import styling
import "./App.css";

// import list of films
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing TMDB={TMDB} />
          <FilmDetails TMDB={TMDB} />
        </div>
      </div>
    );
  }
}

export default App;

