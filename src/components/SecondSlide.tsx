import React, { Component } from 'react'
import StepItem from './StepItem';

export default class SecondSlide extends Component {
  render() {
    return (
      <div className="second-slide">
        <div className="container">
          <StepItem number={1} />
          <StepItem number={2} />
          <StepItem number={3} />
          <StepItem number={4} />
          <StepItem number={5} />
        </div>
      </div>
    )
  }
}