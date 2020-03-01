import React, { Component } from "react";

class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    let allFilms = this.props.TMDB.films;

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1>{allFilms[0].title}</h1>
      </div>
    );
  }
}
export default FilmListing;
