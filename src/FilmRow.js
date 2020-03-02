import React, {Component} from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = () => {
        let film;
        console.log(`Fetching details for ${film}`)
    }
    
    render() {;
        let year = new Date(this.props.release_date).getFullYear();
        console.log(year)
        let films=this.props
        console.log(this.props.title)

        return (
            <div className="film-row" onClick={this.handleDetailsClick(films.title)}>
                <FilmPoster poster_path={films.poster_path} />
                <div className="film-summary">
                    <h1>{films.title}</h1>
                    <p>{year}</p>
                </div>
                <Fave />
            </div>
        )
    }
}

export default FilmRow;