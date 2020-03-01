import React, {Component} from 'react'
import FilmPoster from './FilmPoster'

class FilmRow extends Component {
    render() {;
        let year = new Date(this.props.release_date).getFullYear();
        console.log(year)
        let films=this.props
        console.log(this.props.title)

        return (
            <div className="film-row">
                <FilmPoster poster_path={films.poster_path} />
                <div className="film-summary">
                    <h1>{films.title}</h1>
                    <p>{year}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow;