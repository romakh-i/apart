import React, { Component } from 'react'
import first from '../assets/svg/verify.svg';
import second from '../assets/svg/deposit.svg';
import third from '../assets/svg/step_5.svg';
import forth from '../assets/svg/search.svg';
import fifth from '../assets/svg/favourites.svg';
import sixth from '../assets/svg/dolars.svg';

export default class ThirdSlide extends Component {
  render() {
    return (
      <div className="third-slide">
        <div className="third-title text-center">Why book with APARTOLINO?</div>
        <div className="grid">
          <div className="grid-item">
            <img className="grid-photo" src={first} alt="" />

            <div className="grid-body">
              <div className="grid-title">Verified providers</div>
              <div className="grid-text">All providers are verified</div>
            </div>
          </div>
          <div className="grid-item">
            <img className="grid-photo" src={second} alt="" />

            <div className="grid-body">
              <div className="grid-title">Book with deposit</div>
              <div className="grid-text">Book longer stays</div>
            </div>
          </div>
          <div className="grid-item">
            <img className="grid-photo" src={third} alt="" />

            <div className="grid-body">
              <div className="grid-title">Monthly payment</div>
              <div className="grid-text">Easily pay monthly bills</div>
            </div>
          </div>
          <div className="grid-item">
            <img className="grid-photo" src={forth} alt="" />

            <div className="grid-body">
              <div className="grid-title">Fast Search</div>
              <div className="grid-text">Intelligent search algorithm</div>
            </div>
          </div>
          <div className="grid-item">
            <img className="grid-photo" src={fifth} alt="" />

            <div className="grid-body">
              <div className="grid-title">Capture favorites</div>
              <div className="grid-text">Interesting for HR managers</div>
            </div>
          </div>
          <div className="grid-item">
            <img className="grid-photo" src={sixth} alt="" />

            <div className="grid-body">
              <div className="grid-title">No fees</div>
              <div className="grid-text">As a renter pay booking fees</div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
