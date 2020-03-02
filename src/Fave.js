import React, {Component} from 'react'

class Fave extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFave: false
        }
    }

    

    handleClick = (e) => {
        this.setState({ 
            isFave: !this.state.isFave
        })
        console.log('fave clicked')
        e.stopPropagation()
    }

    render() {

        const faveMessage = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'

        return (
            <div className={`film-row-fave ${faveMessage}`} >
                <p className="material-icons" onClick={this.handleClick}>{faveMessage}</p>
            </div>
        )
    }
}

export default Fave;