import React, { Component } from "react";
import FilmRow from './FilmRow'
// import FilmDetails from "./FilmDetails";

class FilmListing extends Component {

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
            {allFilms} 
      </div>
    );
  }
}
export default FilmListing;
