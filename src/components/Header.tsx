import React, { Component } from 'react';
import logo from '../assets/images/white_logo.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  componentDidMount() {
    $('.close').click(function (e) {
      e.preventDefault();
      $('.navbar-toggler-icon').click();
    })
    $('.navbar-toggler-icon').click(function (e) {
      e.preventDefault();
      console.log("toggle");
      if ($('#navbarNavDropdown').hasClass('show-navbar')) {
        $('#navbarNavDropdown').removeClass('show-navbar');
        $('#navbarNavDropdown').addClass('hide-navbar');
      }
      else {
        $('#navbarNavDropdown').removeClass('hide-navbar');
        $('#navbarNavDropdown').addClass('show-navbar');
      }
    })
  }
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-header'>
        <div className="container">
          <Link to="/" className="navbar-brand logo-img">
            <img src={logo} alt="" />
          </Link>

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/file-input" className="nav-link">File input</Link>
              </li>
              <li className="nav-item">
                <Link to="/dropdrag" className="nav-link">Drag & Drop</Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
              </li>
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
