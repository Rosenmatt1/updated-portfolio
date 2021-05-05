import React, { Component } from 'react'
import '../App.css'
import image from './assets/jsflashcards.gif'

class ModalProject1 extends Component {

  render() {
    return (
      <div className="ui middle aligned grid">
        <div className="ui centered ten wide column">
          <div className="ui active modal" >
            <i
              className="close icon"
              onClick={() => this.props.modalOff()}
            ></i>
            <div className="header">
              JS Flashcards
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="jsFlashcards"
                  src={image}
                  alt="js flashcards" />
              </div>
              <div className="description">
                <div className="ui header">Learning JavaScript just got Easy</div>
                <p>This is a fully functional crud app called <a href="https://js-flash-cards.firebaseapp.com/" target="_blank" rel="noopener noreferrer">JS FlashCards</a> that allows the user to study JavaScript by creating, editing, and deleting flashcards.  The site is responsive, mobile friendly, and runs flawlessly.  Review the front-end code base here on<a href="https://github.com/Rosenmatt1/js-flash-cards" target="_blank" rel="noopener noreferrer"> front end Github. </a>
                  Review the back-end code base here on<a href="https://github.com/Rosenmatt1/back-end-js-flash-cards" target="_blank" rel="noopener noreferrer"> back end Github. </a></p>
                <p>Try it for yourself...</p>
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
                onClick={() => this.props.modalOff()}
                href="https://js-flash-cards.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer">
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

export default ModalProject1