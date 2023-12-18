import React from 'react';
import { Input } from 'antd';

import eyeSlash from '../../Assests/eye-slash.png';
import './page4.scss';

const Page4 = () => {
  return (
    <div className="page4-wrapper">
      <div className="password-reset-container">
        <div className="title-description-container">
          <div className="create-password-heading">Create New Password</div>
          <div className="password-instruction">Enter your new password</div>
        </div>
        <div className="password-input-container">
          <p className="password-label">Password</p>
          <div className="password-frame">
            <Input
              type="password"
              className="password-instruction-small"
              placeholder="Enter your password"
              suffix={<img className="password-eye-icon" src={eyeSlash} />}
            />
          </div>
        </div>
        <div className="password-input-container">
          <p className="password-label">New Password</p>
          <div className="password-frame">
            <Input
              type="password"
              className="password-instruction-small"
              placeholder="Enter your password"
              suffix={<img className="password-eye-icon" src={eyeSlash} />}
            />
          </div>
        </div>
        <div className="register-label">Register</div>
      </div>
    </div>
  );
};

export default Page4;
