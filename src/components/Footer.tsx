import React, { Component } from 'react'
import logo from '../assets/images/white_logo.png'

export default class Footer extends Component {
  componentDidMount() {
    const lang = $('#language .dropdown-item.active')[0].innerText;
    $('#lang-btn')[0].innerText = lang;

    $('#language .dropdown-item').click(function (e) {
      e.preventDefault()
      if ($(this).hasClass('active')) {
        e.preventDefault()
      } else {
        $('#language .dropdown-item').removeClass('active');
        $($(this)).addClass('active');

        const lang = $('#language .dropdown-item.active')[0].innerText;
        $('#lang-btn')[0].innerText = lang;
      }
    })
  }
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
            <div className="footer-block">
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
              <div className="footer-items">
                <div className="footer-item-title">
                  TENANTS
                </div>
                <ul>
                  <li><a href="http://">How to book</a></li>
                  <li><a href="http://">FAQ</a></li>
                </ul>
              </div>
              <div className="footer-items">
                <div className="footer-item-title">
                  PROVIDERS
                </div>
                <ul>
                  <li><a href="http://">How it works</a></li>
                  <li><a href="http://">Publish your property</a></li>
                </ul>
              </div>
              <div className="footer-items">
                <div className="footer-item-title">
                  HElp
                </div>
                <ul>
                  <li><a href="http://">Customer support</a></li>
                  <li><a href="http://">suppport@apartolino.ch</a></li>
                  <li>
                    <div className="footer-icons">
                      <i className="fab fa-twitter"></i>
                      <i className="fab fa-facebook-f"></i>
                      <i className="fab fa-instagram"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-end">
            <div>
              All rights reserved. 2018
            </div>
            <div>
              <b>Language</b>

              <div id="language" className="btn-group dropup">
                <button id="lang-btn" type="button" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item active" href="">English</a>
                  <a className="dropdown-item" href="">Czech</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
