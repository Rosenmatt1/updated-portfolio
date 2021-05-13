import React, { Component } from 'react'
import '../App.css'
import gif from './assets/poker.gif'

class Project10Poker extends Component {

  render() {
    return (
      <div className="ui stackable grid poker">
        <div className="row spacer">

          <div className="ui centered aligned grid eight wide column">

            <div className="centered row">
              <h3 className="centered">Poker App</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React.js</p>
            <p>-JavaScript</p>
            <p>-CSS3</p>

            <button
              className="ui button"
              onClick={() => this.props.modal10()}
            >
              Learn More...
            </button>
          </div>

          <div className="ui centered aligned grid eight wide column project-right spacer">
            <div className="giphy" >
              <img
                className="ui fluid image"
                src={gif}
                alt="poker app" 
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Project10Poker