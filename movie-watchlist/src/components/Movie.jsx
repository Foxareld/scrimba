import React, { useState } from "react";

export default function Movie({ movie, watchlist, toggleWatchlist }) {
  return (
    <div>
      <img src={movie.Poster} />
      <div>
        <span>{movie.Title}</span>
        <div>
          <span>{movie.Runtime}</span>
          <span>{movie.Genre}</span>
          <button onClick={() => toggleWatchlist(movie.imdbID)}>
            {watchlist.indexOf(movie.imdbID) > -1 ? "Remove from" : "Add to"}{" "}
            Watchlist
          </button>
        </div>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
}
