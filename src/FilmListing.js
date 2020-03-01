import React, { Component } from "react";
import FilmRow from './FilmRow'

class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filter: 'all'
    };
  }

  render() {
    console.log(this.props)
    let allFilms = this.props.TMDB.films.map((film, index) => {
        return (
            <div key={film.id}>{film.title}</div>
        )
    })
    
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1 key="allFilms.film.id"><FilmRow allFilms={allFilms} /></h1>
      </div>
    );
  }
}
export default FilmListing;
