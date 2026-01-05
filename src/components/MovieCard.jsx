import "./MovieCard.css";

const MovieCard = ({ movie, theme, onClick }) => {
  return (
    <div
      className={`movie-card ${theme}`}
      onClick={() => onClick(movie.trailer)}
    >
      {/* Poster */}
      <img src={movie.image} alt={movie.title} />

      {/* Hover Overlay */}
      <div className="movie-hover">
        <p className="desc">{movie.description}</p>
        <span className="rating">⭐ {movie.rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;
