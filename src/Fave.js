import React, {Component} from 'react'

class Fave extends Component {

    handleClick = (e) => {
        e.stopPropagation();
        console.log('Handling Fave click!');
        this.props.onFaveToggle();
      }

    render() {

        const faveMessage = this.props.isFave ? 'remove_from_queue' : 'add_to_queue'

        return (
            <div className={`film-row-fave ${faveMessage}`} >
                <p className="material-icons" onClick={this.handleClick}>{faveMessage}</p>
            </div>
        )
    }
}

export default Fave;