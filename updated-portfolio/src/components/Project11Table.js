import React, { Component } from 'react'
import '../App.css'
import gif from './assets/table-pro.gif'

class Project11Table extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row spacer">

          <div className="ui centered aligned grid eight wide column ">
            <div className="centered row">
              <h3 className="centered">Table Pro</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React.js</p>
            <p>-JavaScript</p>
            <p>-CSS</p>
            <p>-</p>

            <button
              className="ui button"
              onClick={() => this.props.modal11()}
            >
              Learn More...
            </button>
          </div>

          <div className="ui centered aligned grid eight wide column spacer">
            <div className="giphy" >
              <img
                className="ui fluid image"
                src={gif}
                alt="table-pro-project"
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Project11Table