import React, { Component } from 'react'
import '../App.css'
import image from './assets/myweatherbuddy.gif'

class ModalProject6 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="ui centered ten wide column">
          <div className="ui active modal" >
            <i
              className="close icon"
              onClick={() => this.props.modalOff()}
            ></i>
            <div className="header">
              MyWeather Buddy App
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="gifImg"
                  src={image}
                  alt="react-native-denver-developer" />
              </div>
              <div className="description">
                <div className="ui header">MyWeather Buddy</div>
                <p>This is a mobile app called <a
                  href="https://www.youtube.com/watch?v=zD2TZHcZXT8"
                  target="_blank"
                  rel="noopener noreferrer">MyWeather Buddy
                </a> that allows users to set and receive text message weather alerts based on the criteria of their choosing. Built with React Native and JavaScript on the front end. On the back end is Node.js, Express, Knex, PostgreSQL, and KNEX. The app utilizes the Twilio API to send the weather alerts as text messages. Review the front-end code base here:<a href="https://github.com/Rosenmatt1/my-weather-buddy" target="_blank" rel="noopener noreferrer"> front end Github. </a> Review the back-end code base here:<a href="https://github.com/Rosenmatt1/back-end-weather-buddy" target="_blank" rel="noopener noreferrer"> back end Github. </a></p>
                <p>Check it out...</p>
              </div>
            </div>
            <div className="actions">
              <div
                className="ui black deny button"
                onClick={() => this.props.modalOff()}
              >
                Close
              </div>

              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=zD2TZHcZXT8"
                rel="noopener noreferrer"
                onClick={() => this.props.modalOff()}
              >
                <div className="ui red right labeled icon button">
                  Visit Site
                  <i className="angle up icon"></i>
                </div>
              </a>

            </div>
          </div >

        </div>
      </div>
    )
  }
}

export default ModalProject6