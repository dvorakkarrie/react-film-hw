import React, { Component } from "react";
import FilmRow from './FilmRow'

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick = (e) => {
    let filter;
    this.setState({filter: e})
    console.log(`Setting filter to ${filter}`)

  }

  render() {
    const allFilms = this.props.TMDB.films.map((film, index) => {
        return (
            <FilmRow 
                key={film.id} 
                film={film.title}
                poster_path={film.poster_path}
                release_date={film.release_date}
                isFave={this.props.faves.includes(film)}
                onFaveToggle={() => this.props.onFaveToggle(film)} 
            />
       )
    })
    console.log(this.props.TMDB.films)
    console.log(allFilms)
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter${this.state.filter === 'all' ? 'is active' : ''}`} onClick={this.handleFilterClick}>
            ALL
            <span className="section-count">{this.props.TMDB.films.length}</span>
          </div>
          <div className={`film-list-filter${this.state.filter === 'all' ? 'is active' : ''}`} onClick={this.handleFilterClick}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        {allFilms}
      </div>
    );
  }
}
export default FilmListing;
