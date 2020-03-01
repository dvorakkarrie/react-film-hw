import React, {Component} from 'react'

class FilmRow extends Component {
    render() {
        return (
            <div>
                {this.props.allFilms}
            </div>
        )
    }
}

export default FilmRow;