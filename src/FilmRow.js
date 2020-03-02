import React, {Component} from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = () => {
        console.log(`Fetching details for ${this.props.film}`)
    }
    
    render() {;
        let year = new Date(this.props.release_date).getFullYear();
        console.log(year)
        let films=this.props
        console.log(this.props.film)

        return (
            <div className="film-row" onClick={this.handleDetailsClick(films.film)}>
                <FilmPoster poster_path={films.poster_path} />
                <div className="film-summary">
                    <h1>{films.film}</h1>
                    <p>{year}</p>
                </div>
                <Fave 
                    onFaveToggle={this.props.onFaveToggle} 
                    isFave = {this.props.isFave} 
                />
            </div>
        )
    }
}

export default FilmRow;