import React from 'react'
import '../App.css'

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// dark blue color #3e3e3e
// red color #b61924

const Header = () => {
  return (
    <div className="ui menu">

      <div className="right menu social-media">
        <a
          target="_blank"
          href="https://github.com/Rosenmatt1"
          rel="noopener noreferrer">
          <i class="big github icon socialMediaGit"></i>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/matthew-rosenberg1/"
          rel="noopener noreferrer">
          <i className="big linkedin icon socialMediaLinked"></i>
        </a>
      </div>

    </div>
  )
}

export default Header