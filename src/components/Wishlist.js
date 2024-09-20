import React, {useEffect} from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Wishlist({ movies, toggleWishlist, wishlist }) {
  useEffect(() => {
    document.title = "- Wishlist";
  }, []);
  return (
    <div className="movies-grid">
      {wishlist.length === 0 && <p>No items found.</p>}
      {wishlist.map((id) => {
        const movie = movies.find((movie) => movie.id === id);
        return (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWishlist={toggleWishlist}
            isWishlist={wishlist.includes(movie.id)}></MovieCard>
        );
      })}
    </div>
  );
}
