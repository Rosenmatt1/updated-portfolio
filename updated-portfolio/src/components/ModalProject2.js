import React, { Component } from 'react'
import '../App.css'
import image from './assets/react-inbox.gif'

class ModalProject2 extends Component {

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
              React Email Inbox
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="react-inbox"
                  src={image}
                  alt="react-email-inbox-project" />
              </div>
              <div className="description">
                <div className="ui header">Checking your email just got cool.</div>
                <p>This project is a fully functional email inbox built with React.js, JavaScript, and Bootstrap called <a href="https://email-inbox-react.firebaseapp.com/" target="_blank" rel="noopener noreferrer">React Inbox.</a> The site is responsive, mobile friendly, and runs flawlessly. </p>
                <p>Try it out for yourself...</p>
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
                href="https://email-inbox-react.firebaseapp.com/" target="_blank"
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

export default ModalProject2