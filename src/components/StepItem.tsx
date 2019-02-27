import React, { Component } from 'react';

interface IProps {
  number: number;
}

class AdvantageItem extends Component<IProps> {
  render() {
    return (
      <div className="step">
        <div className="step-footer">
          <div className="step-number">{this.props.number}</div>
          <div className="step-text">
            <div className="step-title">Look for apartments & book directly with the supplier</div>
            <div className="step-subtitle">Find with us the best seviced apartment in the city of your choice.
          You can already search on the home-page for date, price and location...</div>
          </div>
        </div>
        <div className="step-photo">
          <div className="step-img">
            <img className="img" src={require(`../assets/svg/step_${this.props.number}.svg`)} alt="" />
          </div>
          <div className="arrows-container">
            <div className="arrows" />
            <div className="arrows" />
          </div>
        </div>
      </div>
    )
  }
}

export default AdvantageItem;