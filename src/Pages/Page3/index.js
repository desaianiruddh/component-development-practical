import React from 'react';
import './page3.scss';
import SubscriptionCard from '../../Components/SubscriptionCard/SubscriptionCard';

const subscriptionCards = [
  {
    type: 'Free Trial',
    price: '$0',
    duration: '/Month',
    features: [
      { text: 'Streaming in high quality', enable: true },
      { text: 'With the best audio quality', enable: true },
      { text: 'Stream on multiple devices', enable: false },
      { text: 'Ad-free viewing experience', enable: false },
      { text: 'Download to watch later', enable: false },
    ],
  },
  {
    type: 'Monthly Subscription',
    price: '$4.99',
    duration: '/Month',
    features: [
      { text: 'Streaming in high quality', enable: true },
      { text: 'With the best audio quality', enable: true },
      { text: 'Stream on multiple devices', enable: true },
      { text: 'Ad-free viewing experience', enable: true },
      { text: 'Download to watch later', enable: true },
    ],
  },
  {
    type: 'Yearly Subscription',
    price: '$49.99',
    duration: '/Year',
    features: [
      { text: 'Streaming in high quality', enable: true },
      { text: 'With the best audio quality', enable: true },
      { text: 'Stream on multiple devices', enable: true },
      { text: 'Ad-free viewing experience', enable: true },
      { text: 'Download to watch later', enable: true },
    ],
  },
];

const Page3 = () => {
  return (
    <div className="page3-wrapper">
      <div className="premium-access-section">
        <div className="access-frame">Access Premium</div>
        <div className="app-name">It’s easy to get started</div>
        <div className="choose-plan-description">
          Choose the best plan to enjoy the best movies and series
        </div>
      </div>
      <div className="plan-wrapper">
        {subscriptionCards.map((plan, idx) => {
          return <SubscriptionCard plan={plan} isMonthly={idx === 1} />;
        })}
      </div>
    </div>
  );
};

export default Page3;
