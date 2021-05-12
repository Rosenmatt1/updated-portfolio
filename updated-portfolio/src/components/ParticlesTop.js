import React, { Component } from 'react'
import Particles from 'react-particles-js'
import '../App.css'

const particleOpt = {
  enable: true,
  type: 'outside',
  "particles": {
    "number": {
      "value": 50
    },
    "size": {
      "value": 1
    }
  },
  move: {
    radius: 1
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}


class ParticlesTop extends Component {
  render() {
    return (
      <div className="particles">
        <Particles params={particleOpt} />

        <div className="title projects">
          <p className="border">Projects</p>
        </div>

      </div >
    )
  }
}

export default ParticlesTop
