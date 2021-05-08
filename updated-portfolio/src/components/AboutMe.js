import React from 'react'
import '../App.css'
import me from './assets/mateo.jpg'
import resume from './assets/Matthew-Rosenberg-Resume.pdf'

const AboutMe = () => {
  return (
    <div className="ui stackable grid aboutMe">

      <div className="middle aligned centered eight wide column">
        <img className="mateo" src={me} alt="Matthew Rosenberg aka Mateo" />
      </div>

      <div className="middle aligned centered eight wide column">
        <div className="ui four column centered grid">
          <h2 className="meetMateo centered eight wide row">Meet Mateo</h2>
        </div>

        <p className="spacing">I am a full stack web developer that takes pride in making clean user friendly websites and apps that are responsive, mobile friendly and run flawlessly.  I love finding efficient solutions to problems.  I am also a health enthusiast that enjoys nature, yoga, and dancing.</p>

        <div className="centered resume row">
          <div className="ui four column centered grid resume">
            <h3 >View Resume</h3>
            <a
              target="_blank"
              href={resume}
              rel="noopener noreferrer">
              <i className="fas fa-file-alt viewResume"></i>
            </a>
          </div>
        </div>
      </div>

    </div >
  )
}

export default AboutMe