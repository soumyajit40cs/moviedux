import { useState } from "react";
import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
import {
  useParams,
  useLocation,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

export default function MoviesGrid({ movies, toggleWishlist, wishlist }) {
  const [searchtext, setSearchText] = useState([]);
  const [ratingfilter, setRatingfilter] = useState("All");
  const [genrefilter, setGenrefilter] = useState("All Genres");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [pageno, setPageno] = useState(1);

  const pageMove = (value) => {
    if (value == "next") {
      setPageno(pageno + 1);
    } else {
      setPageno(pageno - 1);
    }
  };

  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  console.log(queryParam.get("title"));
  console.log(queryParam.get("rating"));

  const searchTextHandler = (e) => {
    setSearchText(e.target.value);
    setSearchParams({ title: e.target.value });
  };

  const searchGenresHandler = (e) => {
    setGenrefilter(e.target.value);
  };

  const searchRatingHandler = (e) => {
    setRatingfilter(e.target.value);
    setSearchParams({ title: searchtext, rating: e.target.value });
  };

  const matchesSearchText = (movie, searchtext) => {
    return movie.title
      .toLowerCase()
      .includes(searchtext.toString().toLowerCase());
  };

  const matchesGenere = (movie, genrefilter) => {
    return (
      genrefilter === "All Genres" ||
      movie.genre.toLowerCase() === genrefilter.toLowerCase()
    );
  };

  const matchesRating = (movie, ratingfilter) => {
    switch (ratingfilter.toString()) {
      case "All":
        return movie.rating >= 0;

      case "Good":
        return movie.rating >= 8;

      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;

      case "Bad":
        return movie.rating < 5;

      default:
        return true;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenere(movie, genrefilter) &&
      matchesRating(movie, ratingfilter) &&
      matchesSearchText(movie, searchtext)
  );

  console.log(Math.ceil(filteredMovies.length / 3));

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchtext}
        onChange={searchTextHandler}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genrefilter}
            onChange={searchGenresHandler}>
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={ratingfilter}
            onChange={searchRatingHandler}>
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.slice(pageno * 4 - 4, pageno * 4).map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWishlist={toggleWishlist}
            isWishlist={wishlist.includes(movie.id)}></MovieCard>
        ))}
      </div>

      <div className="b-pagination-outer">
        <ul id="border-pagination">
          <li>
            <a
              className="active"
              onClick={(e) => pageMove("prev")}
              href="javascript:void(0);">
              «
            </a>
          </li>

          {[...Array(Math.ceil(filteredMovies.length / 4))].map((_, i) => {
            return (
              <li>
                <a
                  className={pageno === i + 1 ? "active" : ""}
                  href="javascript:void(0);"
                  key={i + 1}>
                  {i + 1}
                </a>
              </li>
            );
          })}
          <li>
            <a
              className="active"
              onClick={(e) => pageMove("next")}
              href="javascript:void(0);">
              »
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
