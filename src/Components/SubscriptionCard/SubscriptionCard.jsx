import React from 'react';
import checkEnabled from '../../Assests/check-enabled.png';
import checkDisabled from '../../Assests/check-disabled.png';

import './card.scss';

const SubscriptionCard = ({ plan, isMonthly }) => {
  const { type, price, duration, features } = plan;
  return (
    <div className={`plan-card ${isMonthly ? 'monthly-card' : ''}`}>
      <div className="trial-section">
        <div className="plan-details">
          <div className="trial-type">{type}</div>
          <div className="monthly-price">
            <span className="price-value">{price}</span>
            <span className="price-unit">{duration}</span>
          </div>
        </div>
        <div className={`divider ${isMonthly ? 'monthly' : ''}`}></div>
        <div className="features">
          {features.map((feature) => {
            const { text, enable } = feature;
            return enable ? (
              <div className="feature-group">
                <div className="feature">
                  <img
                    className={`check-mark-enabled ${
                      isMonthly ? 'monthly' : ''
                    }`}
                    src={isMonthly ? checkDisabled : checkEnabled}
                  />
                  <div className="feature-description-enabled">{text}</div>
                </div>
              </div>
            ) : (
              <div className="feature-disabled">
                <img
                  className="check-mark"
                  src={isMonthly ? checkDisabled : checkEnabled}
                />
                <div className="feature-description">{text}</div>
              </div>
            );
          })}
        </div>
        <div className={`get-started-button ${isMonthly ? 'monthly' : ''} `}>
          Get Started
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
