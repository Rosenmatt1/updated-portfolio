import React, { Component } from 'react'
import '../App.css'
import image from './assets/boulevard.png'

class ModalProject3 extends Component {

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
              Boulevard Diner
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="boulevard"
                  src={image}
                  alt="Boulevard-Diner" />
              </div>
              <div className="description">
                <div className="ui header">Mock Restuarant Website and Menu</div>
                <p> I'm proud to call 
                <a 
                href="http://boulevard-diner.surge.sh/" 
                target="_blank"
                rel="noopener noreferrer"
                > Boulevard Diner
                </a> 
                my first website fully built from sratch using vanilla JavaScript, DOM Manipulation, and Boostrap. The menu is fully functional and populates the menu items from an outside api.  The API that populates the menu is no longer accessible. </p>
                <p>Go ahead and place an order...</p>
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
                target="_blank" 
                href="http://boulevard-diner.surge.sh/"
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

export default ModalProject3