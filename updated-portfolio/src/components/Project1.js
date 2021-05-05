import React, { Component } from 'react'
import '../App.css'
import gif from './assets/jsflashcards.gif'

class Project1 extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row spacer">

          <div className="ui centered aligned grid eight wide column ">
            <div className="centered row">
              <h3 className="centered">JS Flashcards</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React.js</p>
            <p>-JavaScript</p>
            <p>-Node.js/Express</p>
            <p>-PostgreSQL/Knex</p>

            <button
              className="ui button"
              onClick={() => this.props.modal1()}
            >
              Learn More...
            </button>
          </div>

          <div className="ui centered aligned grid eight wide column spacer">
            <div className="giphy" >
              <img
                className="ui fluid image"
                src={gif}
                alt="jsflashcards-project"
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Project1