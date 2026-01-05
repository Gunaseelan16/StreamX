import "./GenreFilter.css";

const GenreFilter = () => {
  const genres = ["Action", "Comedy", "Drama", "Romance", "Sci-Fi", "Series"];

  const scrollToGenre = (genre) => {
    const section = document.getElementById(genre);
    if (!section) return;

    const yOffset = -80; // 👈 navbar height
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="genre-filter">
      {genres.map((genre) => (
        <button key={genre} onClick={() => scrollToGenre(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
