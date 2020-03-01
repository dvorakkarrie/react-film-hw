import React, { Component } from "react";

class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    let allFilms = this.props.TMDB.films.map( 
        (film, index) => ( this.props.TMDB.films[index].title ))

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1>{allFilms}</h1>
      </div>
    );
  }
}
export default FilmListing;
