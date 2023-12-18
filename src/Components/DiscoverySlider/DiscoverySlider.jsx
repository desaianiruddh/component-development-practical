import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import series1 from '../../Assests/disFilm1.png';
import series2 from '../../Assests/disFilm2.png';

import DiscoveryVideoPlayer from '../DiscoveryVideoPlayer/DiscoveryVideoPlayer';
import './slider.scss';

const seriesArr = [series1, series2, series1, series2];

function SliderComponent(props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [playSlide, setPlaySlide] = useState(0);

  const sliderSetting = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    afterChange: (current) => setActiveSlide2(current),
    className: 'slider-item',
    adaptiveHeight: true,
  };

  return (
    <div className="carousel-container">
      <div className="carousel-items">
        <Slider {...sliderSetting}>
          {seriesArr.map((img, index) => (
            <div
              key={index}
              className={`carousel-image ${
                index === activeSlide ? 'active-slide' : ''
              }`}
            >
              <DiscoveryVideoPlayer
                img={img}
                slide={index}
                activeSlide={playSlide}
                onPlay={(val) => setPlaySlide(val)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderComponent;
