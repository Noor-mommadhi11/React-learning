import React from "react";
import "../styles/movieList.css";

function ListRendering() {
  const movies = [
    { id: 1, title: "Leo", rating: "8.5/10" },
    { id: 2, title: "Jailer", rating: "8.8/10" },
    { id: 3, title: "Vikram", rating: "9.0/10" },
    { id: 4, title: "Master", rating: "8.2/10" },
    { id: 5, title: "Beast", rating: "7.5/10" },
    { id: 6, title: "Don", rating: "8.0/10" }
  ];

  return (
    <div className="movie-container">
      <h2 className="movie-title">Movie List</h2>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListRendering;