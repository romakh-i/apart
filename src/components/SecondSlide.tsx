import React, { Component } from 'react'
import StepItem from './StepItem';

export default class SecondSlide extends Component {
  // let arr = []
  // for (let i = 1; i < 6; i++) {
  //   arr.push(<StepItem key={i} number={i} />);
  // }

  render() {
    return (
      <div className="second-slide">
        <div className="container">
          {
            new Array(5).fill(0).map((item, i) => (
              <StepItem key={i} number={i + 1} />
            )
            )}
        </div>
      </div>
    )
  }
}
