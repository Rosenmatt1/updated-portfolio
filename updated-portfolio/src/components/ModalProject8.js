import React, { Component } from 'react'
import '../App.css'
import gif from './assets/music-player.png'

class ModalProject8 extends Component {

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
              Music Player App
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="react-inbox"
                  src={gif}
                  alt="music-player-app-matthew-rosenberg"/>
              </div>
              <div className="description">
                <div className="ui header">Music Player App</div>
                <p> A fully functional music playing web app called <a href="https://music-player-app-c715c.web.app/" target="_blank" rel="noopener noreferrer">Music Player App. </a> The front end was built using React.js, JavaScript, Material-UI, and GraphQL.  The backend with Python, Django, and Graphene.  Create a new user or log in as user Mateo with password mateo.  Click the + button on the bottom right and test out the adding track functionality.  Review the front-end code base <a href="https://github.com/Rosenmatt1/frontend-react-graphql" target="_blank" rel="noopener noreferrer"> here. </a>  Review the back-end code base <a href="https://github.com/Rosenmatt1/python-graphQL" target="_blank" rel="noopener noreferrer"> here. </a>  </p>
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
                href="https://music-player-app-c715c.web.app/" target="_blank"
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

export default ModalProject8