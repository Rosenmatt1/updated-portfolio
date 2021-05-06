import React, { Component } from 'react'
import '../App.css'
import image from './assets/chuck-norris.png'

class ModalProject4 extends Component {

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
              Chuck Norris Random Joke Generator
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="chuck"
                  src={image}
                  alt="chuck-norri-random-joke-generator" />
              </div>
              <div className="description">
                <div className="ui header">Don't Mess With The Norris</div>
                <p>This is a web app called <a
                  href="https://chuck-norris-quote-generator.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer">Hello Chuck
                </a> that displays random chuck norris jokes pulled from an outside api using a HTTP Fetch requst.  Turn the volume up a bit for the sound effect.  Get ready to laugh!  </p>
                <p>Try it out...</p>
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
                href="https://chuck-norris-quote-generator.firebaseapp.com/"
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

export default ModalProject4