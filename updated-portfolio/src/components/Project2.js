import React, { Component } from 'react'
import '../App.css'
import gif from './assets/react-inbox.gif'

class Project2 extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row spacerExtra">

          <div className="ui centered aligned grid eight wide column">
            <div className="giphy" >
              <img
                className="ui fluid image"
                src={gif}
                alt="react-inbox-project"
              />
            </div>
          </div>

          <div className="ui centered aligned grid eight wide column ">
            <div className="centered row">
              <h3 className="centered">ReactInbox</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React.js</p>
            <p>-JavaScript</p>

            <button
              className="ui button"
              onClick={() => this.props.modal2()}
            >
              Learn More...
            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default Project2