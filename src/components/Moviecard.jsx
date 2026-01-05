import "./MovieCard.css";

const MovieCard = ({ movie, theme }) => {
  return (
    <div className={`movie-card ${theme}`}>
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
