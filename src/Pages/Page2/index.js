import React from 'react';
import illustrationImg from '../../Assests/Illustration.png';
import './page2.scss';

const Page2 = () => {
  return (
    <div className="page2-wrapper">
      <div className="payment-notification">
        <img className="payment-illustration" src={illustrationImg} />
        <div className="payment-details">
          <div className="payment-status">Your payment has completed!</div>
          <div className="payment-description">
            Ullamcorper imperdiet urna id non sed est sem. Rhoncus amet, enim
            purus gravida donec aliquet.
          </div>
        </div>
        <div className="watch-btn">Start Watching</div>
      </div>
    </div>
  );
};

export default Page2;
