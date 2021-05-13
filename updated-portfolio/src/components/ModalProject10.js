import React, { Component } from 'react'
import '../App.css'
import image from './assets/poker.png'

class ModalProject10 extends Component {

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
              Poker App
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="chuck"
                  src={image}
                  alt="chuck-norri-random-joke-generator" />
              </div>
              <div className="description">
                <div className="ui header">Poker App</div>
                <p>This is a web&nbsp;
                  <a
                  href="https://poker-game-app.web.app/"
                  target="_blank"
                  rel="noopener noreferrer">Poker App
                </a> 
                &nbsp;game that deals cards. The user wins if one of the last two cards is an Ace.</p>
                <p>Try it out&nbsp;
                <a
                  href="https://poker-game-app.web.app/"
                  target="_blank"
                  rel="noopener noreferrer">here.
                </a> 
                </p>
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
                href="https://poker-game-app.web.app/"
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

export default ModalProject10