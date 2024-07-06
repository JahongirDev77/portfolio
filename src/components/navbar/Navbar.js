import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div className="navbar">
          <div className="nav1">
            <img src="./Vector.png" alt="" />
          </div>
          <div className="nav2">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Blog</p>
            <p>Book a call</p>
            <p>–›</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar
