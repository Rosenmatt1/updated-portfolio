import React, { Component } from 'react'
import '../App.css'
import image from './assets/auth.png'

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
              Mock Store App
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="chuck"
                  src={image}
                  alt="mock-store" />
              </div>
              <div className="description">
                <div className="ui header">Mock Store App</div>
                <p>This is a web app called <a
                  href="https://my-store-toolkit.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer">Mock Store
                </a> that fetches products and has full user authentication and validation.  Go ahead and make a user and login. </p>
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
                href="https://my-store-toolkit.firebaseapp.com/"
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