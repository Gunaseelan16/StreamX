import { useState } from "react";
import HeroBanner from "./components/HeroBanner";
import GenreFilter from "./components/GenreFilter";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { movies } from "./data/movies";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  // ✅ GENRE FILTER LOGIC
  const genreMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter(
          movie => movie.genre.toLowerCase() === selectedGenre.toLowerCase()
        );

  // ✅ SEARCH HAS PRIORITY
  const finalMovies =
    filteredMovies.length > 0 ? filteredMovies : genreMovies;

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <HeroBanner theme={theme} />

      <GenreFilter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <SearchBar
        movies={genreMovies}
        setFilteredMovies={setFilteredMovies}
      />

      <MovieGrid movies={finalMovies} theme={theme} />

      <Footer theme={theme} />
    </div>
  );
};

export default App;
