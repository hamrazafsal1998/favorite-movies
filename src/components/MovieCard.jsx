import React from 'react';
import './MovieCard.css'; 

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-genre">Genre: {movie.genre}</p>
      <div className="love-section">
        <h4>Why I Love It:</h4>
        <p>{movie.love}</p>
      </div>
    </div>
  );
}

export default MovieCard;