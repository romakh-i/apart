import React, { Component } from 'react';
import MainSlide from './MainSlide';
import SecondSlide from './SecondSlide';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <MainSlide />
        <SecondSlide />
      </div>
    )
  }
}
