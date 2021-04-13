import React from 'react'
import './Navbar.css'

import logo from '../Assets/Images/Group 143.png'
import signinIcon from '../Assets/Images/sign in icon.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo__container">
                <img src={logo} className="logo" />
            </div>

            <div className="nav__content">
                <span className="nav__link">Track my order</span>
                <span className="nav__link">Experts</span>
                <span className="nav__link">Work for us</span>
                <span className="nav__link">Verifiers</span>
                <span className="nav__link">Support us</span>
                <span className="nav__link"><img src={signinIcon} className="signin__icon" />Sign in</span>
                <button>Create Account</button>
            </div>
        </div>
    )
}

export default Navbar
