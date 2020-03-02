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
  constructor(props) {
    super(props)
    this.state ={
      films: 'TMDB.films',
      faves: [],
      current: ''
    }
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice(film)
    console.log(faves)
    const filmIndex = faves.indexOf(film)
    console.log(filmIndex)
    filmIndex === -1 ? faves.push(film) : faves.splice(filmIndex)
    this.setState({faves})
    console.log(faves)

  }

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div>
              <FilmListing 
                TMDB={TMDB} 
                faves={this.state.faves}
                onFaveToggle={this.handleFaveToggle}
              /></div>
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

