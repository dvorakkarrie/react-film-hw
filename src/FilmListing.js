import React, { Component } from "react";
import FilmRow from './FilmRow'

class FilmListing extends Component {

  handleFilterClick = () => {
    let filter;
    console.log(`Setting filter to ${filter}`)

  }

  render() {
    let allFilms = this.props.TMDB.films.map((film, index) => {
        return (
            <FilmRow 
                key={film.id} 
                title={film.title} 
                poster_path={film.poster_path}
                release_date={film.release_date} />
       )
    })
    console.log(this.props.TMDB.films)
    console.log(allFilms)
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className="film-list-filter">
            ALL
            <span className="section-count">{this.props.TMDB.films.length}</span>
          </div>
          <div className="film-list-filter" onClick={this.handleFilterClick}>
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        {allFilms}
      </div>
    );
  }
}
export default FilmListing;
