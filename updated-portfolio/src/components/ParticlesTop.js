import React, { Component } from 'react'
import Particles from 'react-particles-js'
import '../App.css'

// const particleOpt = {
//   enable: false,
//   type: 'outside',
//   move: {
//     radius: 1
//   },
//   // url: 'path/to/svg.svg'
// }

const particleOpt = {
  "type": "outside",
  "particles": {
    "number": {
      "value": 25
    },
    "size": {
      "value": 3
    }
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

// const particleOpt = {
//   "particles": {
//       "number": {
//           "value": 60,
//           "density": {
//               "enable": true,
//               "value_area": 1500
//           }
//       },
//       "line_linked": {
//           "enable": true,
//           "opacity": 0.1
//       },
//       "move": {
//           "direction": "right",
//           "speed": 0.05
//       },
//       "size": {
//           "value": 1
//       },
//       "opacity": {
//           "anim": {
//               "enable": true,
//               "speed": 1,
//               "opacity_min": 0.05
//           }
//       }
//   },
//   "interactivity": {
//       "events": {
//           "onclick": {
//               "enable": true,
//               "mode": "push"
//           }
//       },
//       "modes": {
//           "push": {
//               "particles_nb": 1
//           }
//       }
//   },
//   "retina_detect": true
// }

class ParticlesTop extends Component {

  render() {
    return (
      
      <div className="ui-container">
        
        <div className="row particles">

        <Particles params={particleOpt} >
          

          <div className="title">
            <p className="border">Projects</p>
          </div>

          </Particles>

        </div>
        
      </div>
     
    )
  }
}

export default ParticlesTop
