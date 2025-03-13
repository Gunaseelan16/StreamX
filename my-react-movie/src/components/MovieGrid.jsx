import React, { useState } from 'react';
import './MovieGrid.css'; // Import the CSS file for styling

const MovieGrid = () => {
    const [selectedTrailer, setSelectedTrailer] = useState(null); // State to manage the selected trailer
    const [searchTerm, setSearchTerm] = useState(''); // State for the search query

    const movies = [
        {
            id: 1,
            title: '50 Shades of Grey',
            image: 'https://th.bing.com/th/id/OIP.HXiNAp9FcqMSH7Ieqjgl5gHaK-?rs=1&pid=ImgDetMain',
            rating: '8.7/10',
            description: 'Fifty Shades of Grey is a romantic drama about the intense and complicated relationship between a college student, Anastasia Steele, and a wealthy businessman, Christian Grey, who introduces her to his unconventional desires.',
            trailer: 'https://www.youtube.com/embed/SfZWFDs0LxA',
        },
        {
            id: 2,
            title: 'Breaking Bad',
            image: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            rating: '9.5/10',
            description: 'A high school chemistry teacher turned meth maker partners with a former student to secure his family\'s future.',
            trailer: 'https://www.youtube.com/embed/HhesaQXLuRY',
        },
        {
            id: 3,
            title: 'The Witcher',
            image: 'https://files.ekmcdn.com/allwallpapers/images/the-witcher-poster-61cm-x-91.5cm-24-x-36-36346-p.jpg?v=2552022-214855',
            rating: '8.2/10',
            description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
            trailer: 'https://www.youtube.com/embed/ndl1W4ltcmg',
        },
        {
            id: 4,
            title: 'Money Heist',
            image: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
            rating: '8.3/10',
            description: 'A criminal mastermind recruits eight skilled thieves to carry out an ambitious plan to print billions of euros in the Royal Mint of Spain.',
            trailer: 'https://www.youtube.com/embed/_InqQJRqGW4',
        },
        {
            id: 5,
            title: 'Squid Game',
            image: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            rating: '8.0/10',
            description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games for a tempting prize, but the stakes are deadly.',
            trailer: 'https://www.youtube.com/embed/oqxAJKy0ii4',
        },
   
        
{
  id: 6,
  title: 'Avatar',
  image: 'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
  rating: '7.8/10',
  description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
  trailer: 'https://www.youtube.com/embed/5PSNL1qE6VY', // Official Avatar Trailer
},
{
  id: 7,
  title: 'Deadpool and Wolverine',
  image: 'https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg',
  rating: '8.5/10',
  description: 'The mercenary Deadpool teams up with Wolverine to take down a common enemy in this action-packed, irreverent superhero film.',
  trailer: 'https://www.youtube.com/embed/otnh9yKQcqY', // Deadpool & Wolverine Teaser
},
{
  id: 8,
  title: 'The Amazing Spider-Man',
  image: 'https://wallpapercave.com/wp/wp5379772.jpg',
  rating: '7.0/10',
  description: 'Peter Parker, a high school outcast, gains spider-like abilities and must use them to stop a monstrous threat to New York City.',
  trailer: 'https://www.youtube.com/embed/upwf8RsyNqQ', // Amazing Spider-Man Trailer
},
{
  id: 9,
  title: 'Dune',
  image: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
  rating: '8.0/10',
  description: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions of a dark future.',
  trailer: 'https://www.youtube.com/embed/8g18jFHCLXk', // Dune Trailer
},
{
  id: 10,
  title: 'Game of Thrones',
  image: 'https://th.bing.com/th/id/OIP.AVOCqlUXqJP_L_1s51VWJQHaMR?w=1280&h=2120&rs=1&pid=ImgDetMain',
  rating: '9.3/10',
  description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
  trailer: 'https://www.youtube.com/embed/gcTkNV5Vg1E', // Game of Thrones Trailer
},


{
  id: 11,
  title: 'The Lord of the Rings',
  image: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
  rating: '8.9/10',
  description: 'A young hobbit, Frodo, is tasked with destroying an ancient ring that holds the power to enslave all of Middle-earth.',
  trailer: 'https://www.youtube.com/embed/V75dMMIW2B4', // LOTR Trailer
},
{
  id: 12,
  title: 'Spider-Man: No Way Home',
  image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  rating: '8.4/10',
  description: 'With Spider-Man\'s identity now revealed, Peter Parker asks Doctor Strange for help, leading to a dangerous multiversal rift.',
  trailer: 'https://www.youtube.com/embed/JfVOs4VSpmA', // Spider-Man: No Way Home Trailer
},
{
  id: 13,
  title: 'Avengers: Endgame',
  image: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  rating: '8.4/10',
  description: 'The Avengers assemble once more to reverse Thanos\' snap and restore balance to the universe in this epic conclusion to the Infinity Saga.',
  trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c', // Avengers: Endgame Trailer
},
{
  id: 14,
  title: 'Joker',
  image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
  rating: '8.4/10',
  description: 'A failed stand-up comedian descends into madness and becomes the infamous Joker, a criminal mastermind in Gotham City.',
  trailer: 'https://www.youtube.com/embed/zAGVQLHvwOY', // Joker Trailer
},
{
  id: 15,
  title: 'Fight Club',
  image: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
  rating: '8.8/10',
  description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
  trailer: 'https://www.youtube.com/embed/BdJKm16Co6M', // Fight Club Trailer
}

    ];

    // Function to handle the "Watch Now" button click
    const handleWatchNow = (trailer) => {
        setSelectedTrailer(trailer);
    };

    // Function to close the trailer modal
    const closeModal = () => {
        setSelectedTrailer(null);
    };

    // Function to handle search input changes
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter movies based on the search term
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="movie-grid-container">
            {/* Search Input */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>

            {/* Movie Grid */}
            <div className="movie-grid">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                        <div key={movie.id} className="movie-item">
                            <img src={movie.image} alt={movie.title} className="movie-image" />
                            <div className="movie-details">
                                <h2>{movie.title}</h2>
                                <p className="movie-rating">⭐ {movie.rating}</p>
                                <p className="movie-description">{movie.description}</p>
                                <button
                                    className="watch-now-button"
                                    onClick={() => handleWatchNow(movie.trailer)}
                                >
                                    Watch Now
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No movies found!</p>
                )}
            </div>

            {/* Modal for displaying the trailer */}
            {selectedTrailer && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            width="100%"
                            height="400"
                            src={selectedTrailer}
                            title="Movie Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button className="close-button" onClick={closeModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieGrid;
