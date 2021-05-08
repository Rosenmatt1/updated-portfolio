import React from 'react'
import '../../App.css'
import react from './react.png'
import css from './css3.png'
import html from './html5.png'
import javascript from './javascript.png'
import sass from './sass.png'
import sql from './sql.png'
import nodejs from './nodejs.png'
// import bootstrap from './bootstrap.png'
import postgresql from './postgresql.png'
import knex from './knex.png'
// import express from './express.png'

const ReactCards = () => {
  return (
    <div className="ui stackable centered grid skin card-margins">
      <div className="centered row card-margins">

            <div className="skill">
              <img className="shrinker" src={react} alt="react" />
              <p>React</p>
            </div>
            <div className="skill">
              <img className="shrinker" src={css} alt="css3" />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <img className="shrinker" src={html} alt="html5" />
              <p>HTML5</p>
            </div>
            <div className="skill">
              <img className="shrinker" src={javascript} alt="javascript" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img className="shrinker" src={sass} alt="sass" />
              <p>Sass</p>
            </div>
          {/* </div> */}
       
            <div className="skill">
              <img className="shrinker" src={sql} alt="sql" />
              <p>SQL</p>
            </div>
            <div className="skill">
              <img className="shrinker" src={nodejs} alt="nodejs" />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img className="shrinker" src={knex} alt="knex" />
              <p>Knex</p>
            </div>
            {/* <div className="skill">
              <img className="shrinker" src={express} alt="expressjs" />
              <p>Express</p>
            </div> */}
            <div className="skill">
              <img className="shrinker" src={postgresql} alt="postgreSQL" />
              <p>PostgreSQL</p>
            </div>

      </div>
    </div>
  )
}

export default ReactCards








