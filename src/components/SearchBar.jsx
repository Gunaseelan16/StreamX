import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ movies }) => {
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Suggestions */}
      {query && (
        <div className="search-results">
          {filteredMovies.length ? (
            filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="search-result-item"
                onClick={() => {
                  setSelectedMovie(movie);
                  setQuery("");
                }}
              >
                <img src={movie.image} alt={movie.title} />
                <div>
                  <p className="movie-title">{movie.title}</p>
                  <span className="movie-genre">{movie.genre}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="search-result-item">No results found</div>
          )}
        </div>
      )}

      {/* Trailer */}
      {selectedMovie && (
        <div className="trailer-container">
          <button
            className="close-trailer"
            onClick={() => setSelectedMovie(null)}
          >
            ✕
          </button>

          <h3>{selectedMovie.title} Trailer</h3>

          <div className="trailer-wrapper">
            <iframe
              src={selectedMovie.trailer}
              title={selectedMovie.title}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
