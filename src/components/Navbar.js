import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa' 
import { Button } from './Button'
import './Navbar.css'
import { IconContext} from 'react-icons/lib'

function Navbar() {
    let [click, setClick] = useState(false)
    let [button, setButton] = useState(true);

    let handleClick = () => setClick(!click);

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
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <div className="navbar-container container">
              <Link
                to="/"
                className="navbar-logo"
                onClick={() => setClick(false)}
              >
                <MdFingerprint className="navbar-icon" />
                ALEX MENDOZA
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-links"
                    onClick={() => setClick(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/projects"
                    className="nav-links"
                    onClick={() => setClick(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-links"
                    onClick={() => setClick(false)}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-button">
                  {button ? (
                    <Link to="/signup" className="button-link">
                      <Button buttonStyle="button--outline">Contact Me</Button>
                    </Link>
                  ) : (
                    <Link to="/signup" className="button-link">
                      <Button
                        buttonStyle="button--outline"
                        buttonSize="button--mobile"
                      >
                        Contact Me Mobile
                      </Button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </IconContext.Provider>
      </>
    );
}

export default Navbar
