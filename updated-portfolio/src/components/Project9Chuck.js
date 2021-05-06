import React, { Component } from 'react'
import '../App.css'
import gif from './assets/chuck-norris.gif'

class Project4 extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row spacer">

          <div className="ui centered aligned grid eight wide column">

            <div className="centered row">
              <h3 className="centered">Chuck Norris Joke Generator</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React.js</p>
            <p>-JavaScript</p>
            <p>-HTTP Fetch</p>

            <button
              className="ui button"
              onClick={() => this.props.modal9()}
            >
              Learn More...
            </button>
          </div>

          <div className="ui centered aligned grid eight wide column project-right spacer">
            <div className="giphy" >
              <img
                className="ui fluid image"
                src={gif}
                alt="chuck-norris-joke-generator" 
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Project4