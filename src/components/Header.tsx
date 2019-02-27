import React, { Component } from 'react';
import logo from '../assets/images/white_logo.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-light bg-header'>
        <div className="container">
          <Link to="/" className="navbar-brand logo-img">
            <img src={logo} alt="" />
          </Link>

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Help</Link>
              </li>

              <li className="nav-item">
                <Link to="/login" className="nav-link">Sign In</Link>
              </li>

              <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/offer" className="nav-link">Offer Apartment</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
