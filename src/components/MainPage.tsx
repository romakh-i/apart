import React, { Component } from 'react';
import MainSlide from './MainSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import Footer from './Footer';
import InputFile from './Dashboard';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <MainSlide />
        <SecondSlide />
        <ThirdSlide />
        <Footer />
      </div>
    )
  }
}
