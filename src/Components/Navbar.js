import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


import logo from '../Assets/Images/Group 143.png'
import signinIcon from '../Assets/Images/sign in icon.png'

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">
                <div className="logo__container">
                    <img src={logo} className="logo" />
                </div>
            </NavLink>

            <div className="nav__content">
                <NavLink to="/" className="nav__link"><span>Track my order</span></NavLink>
                <NavLink to="/experts" className="nav__link"><span>Experts</span></NavLink>
                <NavLink to="/" className="nav__link"><span>Work for us</span></NavLink>
                <NavLink to="/verifiers" className="nav__link"><span>Verifiers</span></NavLink>
                <NavLink to="/" className="nav__link"><span>Support us</span></NavLink>
                <span className="nav__link"><img src={signinIcon} className="signin__icon" />Sign in</span>
                <button>Create Account</button>
            </div>
        </div>
    )
}

export default Navbar
