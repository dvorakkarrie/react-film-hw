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
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div><FilmListing TMDB={TMDB} /></div>
          </div>
          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <FilmDetails TMDB={TMDB} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

