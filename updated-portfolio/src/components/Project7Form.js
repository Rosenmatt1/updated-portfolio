import React, { Component } from 'react'
import '../App.css'
import gif from './assets/Long-Form-Pro.gif'

class Project7Form extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row">

          <div className="ui centered aligned grid eight wide column">

            <div className="centered row spacer">
              <h3 className="centered">Long-Form-Pro</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React.js</p>
            <p>-JavaScript</p>
            <p>-CSS3</p>
            
            <button
              className="ui button"
              onClick={() => this.props.modal7()}
            >
              Learn More...
            </button>
          </div>

          <div className="ui centered aligned grid eight wide column spacer mr-2">
            <div className="" >
              <img
                className="ui fluid image"
                src={gif}
                alt="professional-long-form-settings"
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Project7Form