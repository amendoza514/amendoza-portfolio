import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa' 
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
    let [click, setClick] = useState(false)
    let [button, setButton] = useState(true);

    let handleClick = () => setClick(!click);
    let closeMenu = () => setClick(false);

    let showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return (
      <>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
              <MdFingerprint className="navbar-icon" />
              WELCOME
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-links">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links">
                  Services
                </Link>
              </li>
              <li className="nav-button">
                {button ? (
                  <Link to="/signup" className="button-link">
                    <Button buttonStyle="button--outline">Sign Up</Button>
                  </Link>
                ) : (
                  <Link to="/signup" className="button-link">
                    <Button
                      buttonStyle="button--outline"
                      buttonSize="button--mobile"
                    >
                      Sign Up Mobile
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Navbar
