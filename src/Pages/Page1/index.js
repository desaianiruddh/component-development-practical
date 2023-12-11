import React from 'react';
import disCategory1 from '../../Assests/disCategory1.png';
import disCategory2 from '../../Assests/disCategory2.png';
import disCategory3 from '../../Assests/disCategory3.png';
import disCategory4 from '../../Assests/disCategory4.png';
import DiscoveryPoster from '../../Components/DiscoveryPoster/DiscoveryPoster';
import DiscoveryVideoPlayer from '../../Components/DiscoveryVideoPlayer/DiscoveryVideoPlayer';
import './page1.scss';
import SliderComponent from '../../Components/DiscoverySlider/DiscoverySlider';

const imgArr = [disCategory1, disCategory2, disCategory3, disCategory4];

const Page1 = () => {
  return (
    <div className="discovery-page-wrapper">
      <DiscoveryPoster />
      <div className="discovery-category-wrapper">
        {imgArr.map((val) => {
          return (
            <div className="category-card">
              <img src={val} alt={'category'} className="dis-category-img" />
            </div>
          );
        })}
      </div>
      <div className="series-player-wrapper">
        <SliderComponent />
      </div>
    </div>
  );
};

export default Page1;
