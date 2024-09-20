import React from "react";
import "../styles.css";
import { useContext } from "react";
import MessageContext from "../context/MessageContext";

export default function MovieCard({ movie, toggleWishlist, isWishlist }) {
  const imageerrorHandler = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";
    if (rating >= 5 || rating < 8) return "return-ok";
    return "rating-bad";
  };

  const message = useContext(MessageContext);

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={imageerrorHandler}
      />
      <div key={movie.id} className="movie-card-info">
        <h3 className="movie-card-title">
          {movie.title} - {movie.id}
        </h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {" "}
            {movie.rating}{" "}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWishlist}
            onChange={() => toggleWishlist(movie.id)}></input>

          <span className="slider">
            <span className="slider-label">
              {isWishlist ? "Remove From Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
      {message.message}
    </div>
  );
}
