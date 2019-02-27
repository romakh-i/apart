import React, { Component } from 'react'
import logo from '../assets/images/white_logo.png'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-head">
            <div className="footer-title">
              <div className="footer-logo">
                <img className="img" src={logo} alt="" />
              </div>
              <div className="footer-text">
                Apartolino one of the largest sites for placement of serviced
                <br /> <br />
                Book easily a stay in Swizerland.
              </div>
            </div>
            <div className="footer-items">
              <div className="footer-item-title">
                APARTOLINO
              </div>
              <ul>
                <li><a href="http://">About us</a></li>
                <li><a href="http://">Blog</a></li>
                <li><a href="http://">Imprint</a></li>
                <li><a href="http://">Terms and conditions</a></li>
                <li><a href="http://">Privacy policy</a></li>
                <li><a href="http://">Cookies policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-end">
            All rights reserved. 2018
          </div>
        </div>
      </div>
    )
  }
}
