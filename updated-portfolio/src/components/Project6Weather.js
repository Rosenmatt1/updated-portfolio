import React, { Component } from 'react'
import '../App.css'
import gif from './assets/myweatherbuddy.gif'

class Project6Weather extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row">

          <div className="ui centered aligned grid eight wide column">

            <div className="centered row spacer">
              <h3 className="centered">MyWeather Buddy</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React Native</p>
            <p>-JavaScript</p>
            <p>-Twilio API</p>
            <p>-OpenWeather API</p>
            <p>-GoeCoordinates API</p>
            <p>-Node.js/PostgreSQL/Express/Knex</p>

            <button
              className="ui button"
              onClick={() => this.props.modal6()}
            >
              Learn More...
            </button>
          </div>

          <div className="ui centered aligned grid eight wide column  spacer">
            <div className="giphyWeather" >
              <img
                className="gifImg ui fluid image"
                src={gif}
                alt="myweatherbuddy-react-native"
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Project6Weather