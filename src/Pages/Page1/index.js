import React from 'react';
import disCategory1 from '../../Assests/disCategory1.png';
import disCategory2 from '../../Assests/disCategory2.png';
import disCategory3 from '../../Assests/disCategory3.png';
import disCategory4 from '../../Assests/disCategory4.png';
import topMovie1 from '../../Assests/topMovie1.png';
import topMovie2 from '../../Assests/topMovie2.png';
import topMovie3 from '../../Assests/topMovie3.png';
import DiscoveryPoster from '../../Components/DiscoveryPoster/DiscoveryPoster';
import SliderComponent from '../../Components/DiscoverySlider/DiscoverySlider';
import TopMovieCard from '../../Components/TopMovieCard/TopMovieCard';
import './page1.scss';

const imgArr = [disCategory1, disCategory2, disCategory3, disCategory4];

const Page1 = () => {
  return (
    <div className="discovery-page-wrapper">
      <div className="main-content">
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
      <div className="right-side-bar">
        <div className="top-movies-text">Top Movies</div>
        <div className="top-movies-list">
          <TopMovieCard
            img={topMovie1}
            name="The Shawshank Redemption (1994)"
          />
          <TopMovieCard img={topMovie2} name="The Godfather" />
          <TopMovieCard img={topMovie3} name="The Dark Knight (2008)" />
        </div>
        <div className="see-all-btn">See All</div>
        <div className="top-movies-text">Favorites Genres</div>
        <div className="chips-group">
          <div className="chips">Action</div>
          <div className="chips">Fantasy</div>
          <div className="chips">Comedy</div>
          <div className="chips">Sci-Fi</div>
          <div className="chips">Drama</div>
          <div className="chips">Romance</div>
          <div className="chips">Mystery</div>
          <div className="chips">Horror</div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
