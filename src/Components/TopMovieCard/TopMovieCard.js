import React from 'react';
import topMovieStart from '../../Assests/topMovieStart.png';
import topMovieRil from '../../Assests/topMovieRil.png';
import './movieCard.scss';

const TopMovieCard = ({ img, name }) => {
  return (
    <div className="top-movie-list">
      <img className="movie-image" src={img} />
      <div className="movie-content">
        <div className="content-frame">PG-13</div>
        <div className="movie-title">{name}</div>
        <div className="movie-genre">
          <img className="genre-icon" src={topMovieRil} />
          <div className="genre-text">Drama</div>
        </div>
        <div className="movie-rating">
          <img className="star-icon" src={topMovieStart} />
          <div className="rating-text">9.2</div>
        </div>
      </div>
    </div>
  );
};

export default TopMovieCard;
