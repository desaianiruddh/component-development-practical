import React from 'react';
import playArrow from '../../Assests/play_arrow_black.png';
import pauseIcon from '../../Assests/pauseIcon.png';
import audioIcon from '../../Assests/audioIco.png';

import './player.scss';
import { Slider } from 'antd';

const DiscoveryVideoPlayer = ({ slide, activeSlide, img, onPlay }) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="film-card">
      {activeSlide === slide ? (
        <div className="overlay">
          <div className="video-container">
            <div className="title-year-container">
              <div className="movie-title">The Batman</div>
              <div className="release-year">2022</div>
            </div>
            <div className="slider-container">
              <div className="pause-icon">
                <img src={pauseIcon} />
              </div>
              <div className="duration">1 : 05</div>
              <Slider defaultValue={30} disabled={false} />
              <div className="time">02 : 23 : 45</div>
              <img className="audio-icon" src={audioIcon} />
            </div>
          </div>
        </div>
      ) : (
        <div className="non-play-overlay">
          <div onClick={() => onPlay(slide)} className="play-btn">
            <img src={playArrow} alt="play" />
          </div>
          <div className="movie-title">Moon Knight</div>
          <div className="release-year">2022</div>
        </div>
      )}
    </div>
  );
};

export default DiscoveryVideoPlayer;
