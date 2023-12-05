import React from 'react';
import discoveryIco from '../../Assests/discover.png';
import topRatedIco from '../../Assests/topRated.png';
import commingSoonIco from '../../Assests/commingSoon.png';
import recentPlayedIco from '../../Assests/recentPlayed.png';
import downloadIco from '../../Assests/download.png';
import darkModeIco from '../../Assests/darkMode.png';
import settingIco from '../../Assests/setting.png';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-menu-content">
        <div className="menu-title">MENU</div>
        <div className="menu-item">
          <div className="indicator active"></div>
          <div className="menu-img-and-text">
            <img className="menu-img" src={discoveryIco} />
            <div className="menu-text active">Discovery</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="indicator"></div>
          <div className="menu-img-and-text">
            <img className="menu-img" src={topRatedIco} />
            <div className="menu-text">Top Rated</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="indicator"></div>
          <div className="menu-img-and-text">
            <img className="menu-img" src={commingSoonIco} />
            <div className="menu-text">Coming Soon</div>
          </div>
        </div>
        <div className="menu-title library">LIBRARY</div>
        <div className="menu-item">
          <div className="indicator"></div>
          <div className="menu-img-and-text">
            <img className="menu-img" src={recentPlayedIco} />
            <div className="menu-text">Recent Played</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="indicator"></div>
          <div className="menu-img-and-text">
            <img className="menu-img" src={downloadIco} />
            <div className="menu-text">Download</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="indicator"></div>
          <div className="menu-img-and-text">
            <img className="menu-img" src={darkModeIco} />
            <div className="menu-text">Dark Mode</div>
            <div className="toggle-dark">
              <div className="switch"></div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="indicator"></div>
          <div className="menu-img-and-text">
            <img className="menu-img" src={settingIco} />
            <div className="menu-text">Setting</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
