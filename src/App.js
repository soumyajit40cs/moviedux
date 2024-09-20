import "./App.css";
import "./styles.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Wishlist from "./components/Wishlist";
import Notfound from "./components/Notfound";
import PrivateRoute from "./components/PrivateRoute";
import Moviedetails from "./components/Moviedetails";
import Privatepage from "./components/Privatepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWishlist = (movieId) => {
    console.log("test");
    setWishlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  useEffect(() => {
    fetch(movies.json)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/" title="HOME">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/private">Private Page</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              title="HOME PAGE Movie List"
              element={
                <MoviesGrid
                  movies={movies}
                  toggleWishlist={toggleWishlist}
                  wishlist={wishlist}
                />
              }></Route>
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  movies={movies}
                  toggleWishlist={toggleWishlist}
                  wishlist={wishlist}
                />
              }></Route>
            <Route path="/movies" element={<Navigate to="/" />}></Route>
            <Route path="/details/:mId" element={<Moviedetails />}></Route>
            <Route
              path="/private"
              element={
                <PrivateRoute
                  Component={<Privatepage></Privatepage>}></PrivateRoute>
              }></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
