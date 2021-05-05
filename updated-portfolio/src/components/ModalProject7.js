import React, { Component } from 'react'
import '../App.css'
import gif from './assets/Long-Form-Pro.gif'

class ModalProject7Form extends Component {

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
              Long Form Pro
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="react-inbox"
                  src={gif}
                  alt="long-form-pro-matthew-rosenberg" />
              </div>
              <div className="description">
                <div className="ui header">Long Form Pro</div>
                <p> An elegant mock fully functional long form settings page called <a href="https://long-form-pro.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Long Form Pro. </a> The site was built from sratch utilizing React.js, JavaScript, and CSS3.  Click around and test out the functionality.  Add a new user by clicking the "choose file" link twice in the Search Ads Accounts sections.  Also put in some password inputs to test out the password functionality.  Review the code base here on <a href="https://github.com/Rosenmatt1/MockUp/tree/master/shard-mock-up" target="_blank" rel="noopener noreferrer"> Github. </a> </p>
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
                href="https://long-form-pro.firebaseapp.com/" target="_blank"
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

export default ModalProject7Form