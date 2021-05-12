import React, { Component } from 'react'
import '../App.css'
import gif from './assets/ubervslyft1.gif'

class Project5Uber extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row spacer">

          <div className="ui centered aligned grid eight wide column ">

            <div className="centered row">
              <h3 className="centered">Uber vs Lyft</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React.js</p>
            <p>-JavaScript</p>
            <p>-OAuth</p>
            <p>-Lyft API</p>
            <p>-Uber API</p>
            <p>-Google Places API</p>
            <p>-Node.js/PostgreSQL/Express/Knex</p>

            <button
              className="ui button"
              onClick={() => this.props.modal5()}
            >
              Learn More...
            </button>
          </div>

          <div className="ui centered aligned grid eight wide column spacer drive">
            <div className="giphy" >
              <img
                className="ui fluid image"
                src={gif}
                alt="uber-vs-lyft-comparison"
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Project5Uber