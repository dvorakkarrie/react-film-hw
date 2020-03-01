import React, {Component} from 'react'

class FilmRow extends Component {
    render() {;
        let year = new Date(this.props.release_date).getFullYear();
        console.log(year)
        let films=this.props
        console.log(this.props.title)

        return (
            <div className="film-row">
                <img src={`https://image.tmdb.org/t/p/w780${films.poster_path}`} alt={films.title} />  
                <div className="film-summary">
                    <h1>{films.title}</h1>
                    <p>{year}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow;