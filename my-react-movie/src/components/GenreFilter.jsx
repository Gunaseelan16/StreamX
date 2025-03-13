// GenreFilter.js
import React from 'react';
import './GenreFilter.css';

const GenreFilter = ({ onFilter }) => {
    const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];

    return (
        <div className="genre-filter">
            {genres.map(genre => (
                <button key={genre} onClick={() => onFilter(genre)}>
                    {genre}
                </button>
            ))}
        </div>
    );
};

export default GenreFilter;