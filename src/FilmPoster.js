import React, {Component} from 'react'

class FilmPoster extends Component {
    render() {
        console.log(this.props)
        
        return (
            <img src={`https://image.tmdb.org/t/p/w780${this.props.poster_path}`} alt={this.props.title} />
        )
    }
}

export default FilmPoster;