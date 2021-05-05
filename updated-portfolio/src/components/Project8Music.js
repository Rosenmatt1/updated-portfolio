import React, { Component } from 'react'
import '../App.css'
import gif from './assets/music-player.gif'

class Project8Music extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row musicMargins">

          <div className="ui centered aligned grid eight wide column">

            <div className="centered row spacer">
              <h3 className="centered">Music Player App</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React.js</p>
            <p>-JavaScript</p>
            <p>-Python</p>
            <p>-Django</p>
            <p>-GraphQL</p>
            <p>-Apollo</p>
            <p>-Graphene</p>
            
            <button
              className="ui button"
              onClick={() => this.props.modal8()}
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

export default Project8Music