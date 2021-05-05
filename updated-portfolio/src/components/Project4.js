import React, { Component } from 'react'
import '../App.css'
import gif from './assets/mock-store.gif'

class Project4 extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row spacer">

          <div className="ui centered aligned grid eight wide column">

            <div className="centered row">
              <h3 className="centered">Mock Store</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React.js</p>
            <p>-JavaScript</p>
            <p>-Router</p>
            <p>-Sequelize</p>
            <p>-Express/Node.js</p>
            <p>-Redux/Hooks</p>
            <p>-Auth/Validation</p>
      
            <button
              className="ui button"
              onClick={() => this.props.modal4()}
            >
              Learn More...
            </button>
          </div>

          <div className="ui centered aligned grid eight wide column project-right spacer">
            <div className="giphy" >
              <img
                className="ui fluid image"
                src={gif}
                alt="mock-store" 
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Project4