import React from 'react'
import '../App.css'

// dark blue color #3e3e3e
// red color #b61924

const Footer = () => {
  return (
    <div>
      <div className="footerBuffer"></div>
      <div className="footer ui one column stackable center aligned page grid">
        {/* <i className="download icon"></i> */}
        <div className="footAlign bottom aligned content centered column twelve wide">
          <h5>Phone:&nbsp;617-719-3300 &nbsp;&nbsp;  Email:&nbsp; <a href="mailto:Rosenmatt1@gmail.com.com">Rosenmatt1@gmail.com</a> </h5>
        </div>
      </div>
    </div>
  )
}

export default Footer
