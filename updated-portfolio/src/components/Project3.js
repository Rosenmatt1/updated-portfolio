import React, { Component } from 'react'
import '../App.css'
import gif from './assets/boulevard-diner.gif'

class Project3 extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row spacer">

          <div className="ui centered aligned grid eight wide column spacer">
            <div className="giphy" >
              <img
                className="ui fluid image"
                src={gif}
                alt="boulevard diner website"
              />
            </div>
          </div>

          <div className="ui centered aligned grid eight wide column ">
            <div className="centered row">
              <h3 className="centered">Boulevard Diner</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React.js</p>
            <p>HTML5/CSS3</p>
            <p>-JavaScript</p>
            <p>-Bootstrap</p>
            <p>-DOM Manipulation</p>
            <p>-Responsive Web Design</p>

            <button
              className="ui button"
              onClick={() => this.props.modal3()}
            >
              Learn More...
            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default Project3