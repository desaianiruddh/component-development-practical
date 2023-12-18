import React from 'react';
import notificationIco from '../../Assests/notification.png';
import arrowDownIco from '../../Assests/Arrow---Down-2.png';
import navUserIco from '../../Assests/NavUserImage.png';
import searchIco from '../../Assests/Search.png';
import './Navabar.scss';

const Navbar = ({ movieList }) => {
  return movieList ? (
    <div className="navbar-wrapper">
      <div className="cinemax">CineMax</div>
      <div className="menu">
        <div className="menu-item">Movies</div>
        <div className="menu-item">Series</div>
        <div className="menu-item">Animation</div>
        <div className="menu-item">Genres</div>
      </div>
      <img className="search" src={searchIco} />
      <div className="subscribe-text">Subscribe</div>
      <div className="notification">
        <img className="notification-img" src={notificationIco} />
        <div className="notification-figure">3</div>
      </div>
      <div className="account">
        <div className="account-image">
          <img src={navUserIco} />
        </div>
        <img className="arrow-down" src={arrowDownIco} />
      </div>
    </div>
  ) : (
    <div className="navbar-wrapper show-only-cinemax">
      <div className="cinemax">CineMax</div>
    </div>
  );
};

export default Navbar;
