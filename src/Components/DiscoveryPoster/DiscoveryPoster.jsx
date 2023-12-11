import React from 'react';
import playArrow from '../../Assests/play_arrow_black.png';
import addToWatchList from '../../Assests/addToWatchList.png';
import './banner.scss';

const DiscoveryPoster = () => {
  return (
    <div className="banner">
      <div className="banner-background"></div>
      <div className="details">
        <div className="category">Series</div>
        <div className="title-description">
          <p className="show-title">MS. Marvel</p>
          <p className="show-details">
            1 Season • 6 Episodes • Superhero • Marvel
          </p>
        </div>
        <div className="cta-section">
          <div className="watch-cta">
            <img className="play-icon" src={playArrow} />
            <p className="cta-label">Watch Thriller</p>
          </div>
          <div className="watchlist-cta">
            <img className="save-icon" src={addToWatchList} />
            <p className="watchlist-label">Add Watchlist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPoster;
