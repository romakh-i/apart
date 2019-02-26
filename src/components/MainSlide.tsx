import React, { Component } from 'react'
import Header from './Header';

export default class MainSlide extends Component {
  render() {
    return (
      <div className="main-slide">
        <Header />
        <div className="main-title text-center align-middle">How to Book an Apartment</div>
        <div className="sub-title text-center">
          <div className="sub-title1">Easy book apartment in 4 steps</div>
          <div className="sub-title2">Simply booking with APARTOLINO</div>
        </div>
      </div>
    )
  }
}
