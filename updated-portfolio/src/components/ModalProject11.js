import React, { Component } from 'react'
import '../App.css'
import image from './assets/table-pro.png'

class ModalProject11 extends Component {

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
              Table Pro
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="jsFlashcards"
                  src={image}
                  alt="table pro" />
              </div>
              <div className="description">
                <div className="ui header">Searching for your Favorite Restaurant just got Easy!</div>
                <p>This is a fully functional table <a href="https://table-pro.web.app/" target="_blank" rel="noopener noreferrer">Table Pro</a> that allows the user to search based on multiple filters.  Review the code base here on<a href="https://github.com/Rosenmatt1/charter-spectrum/tree/master/charter-spectrum" target="_blank" rel="noopener noreferrer"> on Github. </a></p>
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

export default ModalProject11