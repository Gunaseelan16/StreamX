import React, { useState, useEffect, useRef } from "react";
import "./MovieGrid.css";
import MovieCard from "./MovieCard.jsx";


const MovieGrid = ({  theme = "dark" }) => {
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const genres = ["Action", "Comedy", "Drama", "Romance", "Sci-Fi", "Series"];
  const rowRefs = useRef({});

  // 🔁 AUTO SCROLL ROWS (unchanged)
  useEffect(() => {
    const intervals = [];

    const timeout = setTimeout(() => {
      genres.forEach((genre) => {
        const row = rowRefs.current[genre];
        if (!row) return;

        let direction = 1;

        const interval = setInterval(() => {
          if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 5) {
            direction = -1;
          }
          if (row.scrollLeft <= 0) {
            direction = 1;
          }
          row.scrollLeft += direction * 2;
        }, 30);

        intervals.push(interval);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  

  const movies = [
    // ================= ACTION =================
    { id: 1, title: "Avengers: Endgame", genre: "Action", image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", rating: "8.4/10", description: "Avengers assemble to undo Thanos’ snap.", trailer: "https://www.youtube.com/embed/TcMBFSGVi1c" },
    { id: 2, title: "The Dark Knight", genre: "Action", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: "9.0/10", description: "Batman faces Joker.", trailer: "https://www.youtube.com/embed/EXeTwQWrcwY" },
    { id: 3, title: "Mad Max: Fury Road", genre: "Action", image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", rating: "8.1/10", description: "Post-apocalyptic chase.", trailer: "https://www.youtube.com/embed/hEJnMQG9ev8" },
    { id: 4, title: "John Wick", genre: "Action", image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", rating: "7.9/10", description: "Hitman revenge story.", trailer: "https://www.youtube.com/embed/C0BMx-qxsP4" },
    {id: 5,title: "Gladiator",genre: "Action",image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", rating: "8.5/10", description: "Roman general turned gladiator.", trailer: "https://www.youtube.com/embed/owK1qxDselE" },
    { id: 6, title: "Die Hard", genre: "Action", image: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg", rating: "8.2/10", description: "Christmas hostage thriller.", trailer: "https://www.youtube.com/embed/jaJuwKCmJbY" },
    { id: 7, title: "Mission Impossible", genre: "Action", image: "https://image.tmdb.org/t/p/w500/l5uxY5m5OInWpcExIpKG6AR3rgL.jpg", rating: "7.8/10", description: "Espionage action thriller.", trailer: "https://www.youtube.com/embed/avz06PDqDbM" },
    { id: 8, title: "Top Gun: Maverick", genre: "Action", image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", rating: "8.3/10", description: "Elite fighter pilots.", trailer: "https://www.youtube.com/embed/giXco2jaZ_4" },
    { id: 9, title: "Black Panther", genre: "Action", image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", rating: "7.3/10", description: "King of Wakanda.", trailer: "https://www.youtube.com/embed/xjDjIWPwcPU" },
    { id: 10, title: "Iron Man", genre: "Action", image: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", rating: "7.9/10", description: "Birth of Iron Man.", trailer: "https://www.youtube.com/embed/8ugaeA-nMTc" },

    // ================= COMEDY =================
    { id: 11, title: "Deadpool", genre: "Comedy", image: "https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg", rating: "8.0/10", description: "R-rated superhero comedy.", trailer: "https://www.youtube.com/embed/Xithigfg7dA" },
    { id: 12, title: "The Mask", genre: "Comedy", image:  "https://m.media-amazon.com/images/M/MV5BZmY1ZGY4ODctN2Y5Zi00ZTY2LTk4ODItNDY0OTllZTY4ZTE3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg", rating: "7.9/10", description: "Magical chaos comedy.", trailer: "https://www.youtube.com/embed/hOqVRwGVUkA" },
    { id: 13, title: "Hangover", genre: "Comedy", image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg", rating: "7.7/10", description: "Vegas bachelor party gone wrong.", trailer: "https://www.youtube.com/embed/tcdUhdOlz9M" },
    { id: 14, title: "Superbad", genre: "Comedy", image: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", rating: "7.6/10", description: "Teen friendship comedy.", trailer: "https://www.youtube.com/embed/4eaZ_48ZYog" },
    { id: 15, title: "Step Brothers", genre: "Comedy", image: "https://image.tmdb.org/t/p/w500/2GQjRZ7P8K5rP6FzO7a5vWbVYcD.jpg", rating: "6.9/10", description: "Man-children siblings.", trailer: "https://www.youtube.com/embed/CewglxElBK0" },
    { id: 16, title: "Home Alone", genre: "Comedy", image: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg", rating: "7.7/10", description: "Kid vs burglars.", trailer: "https://www.youtube.com/embed/jEDaVHmw7r4" },
    { id: 17, title: "Mr Bean", genre: "Comedy", image: "https://image.tmdb.org/t/p/w500/6oKxJcJpZVx8G8p3lVJzXj8zZ9F.jpg", rating: "8.5/10", description: "Physical comedy classic.", trailer: "https://www.youtube.com/embed/1s6oELqW2t8" },
    { id: 18, title: "Yes Man", genre: "Comedy", image:  "https://image.tmdb.org/t/p/w500/4w8Q4wA7W5R5qCwK0K9mJwH4LwG.jpg", rating: "6.8/10", description: "Say yes to life.", trailer: "https://www.youtube.com/embed/dDh1l3qVNoY" },
    { id: 19, title: "Free Guy", genre: "Comedy", image: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg", rating: "7.1/10", description: "NPC becomes hero.", trailer: "https://www.youtube.com/embed/X2m-08cOAbc" },
    { id: 20, title: "Ted", genre: "Comedy", image: "https://image.tmdb.org/t/p/w500/yLdP2vDa1ZL3cOWV0iQidw1Zq9.jpg", rating: "6.9/10", description: "Talking teddy bear.", trailer: "https://www.youtube.com/embed/9fbo_pQvU7M" },

   
    // ================= DRAMA =================
{ id: 21, title: "The Shawshank Redemption", genre: "Drama", image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", rating: "9.3/10", description: "Hope inside prison walls.", trailer: "https://www.youtube.com/embed/6hB3S9bIaco" },
{ id: 22, title: "Forrest Gump", genre: "Drama", image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", rating: "8.8/10", description: "Life is like a box of chocolates.", trailer: "https://www.youtube.com/embed/bLvqoHBptjg" },
{ id: 23, title: "Fight Club", genre: "Drama", image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", rating: "8.8/10", description: "An underground fight society.", trailer: "https://www.youtube.com/embed/SUXWAEX2jlg" },
{ id: 24, title: "Joker", genre: "Drama", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", rating: "8.4/10", description: "Origin of chaos.", trailer: "https://www.youtube.com/embed/zAGVQLHvwOY" },
{ id: 25, title: "The Godfather", genre: "Drama", image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", rating: "9.2/10", description: "Mafia family power.", trailer: "https://www.youtube.com/embed/sY1S34973zA" },
{ id: 26, title: "Parasite", genre: "Drama", image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", rating: "8.6/10", description: "Class divide thriller.", trailer: "https://www.youtube.com/embed/5xH0HfJHsaY" },
{ id: 27, title: "The Pianist", genre: "Drama", image: "https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg", rating: "8.5/10", description: "Survival in war.", trailer: "https://www.youtube.com/embed/BFwGqLa_oAo" },
{ id: 28, title: "Whiplash", genre: "Drama", image: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg", rating: "8.5/10", description: "Music and obsession.", trailer: "https://www.youtube.com/embed/7d_jQycdQGo" },
{ id: 29, title: "12 Years a Slave", genre: "Drama", image: "https://image.tmdb.org/t/p/w500/kb3X943WMIJYVg4SOAyK0pmWL5D.jpg", rating: "8.1/10", description: "True story of freedom.", trailer: "https://www.youtube.com/embed/z02Ie8wKKRg" },
{ id: 30, title: "A Beautiful Mind", genre: "Drama", image: "https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg", rating: "8.2/10", description: "Genius and schizophrenia.", trailer: "https://www.youtube.com/embed/WFJgUm7iOKw" },

   // ================= ROMANCE =================
{ id: 31, title: "Titanic", genre: "Romance", image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", rating: "7.9/10", description: "Epic love story.", trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ" },
{ id: 32, title: "The Notebook", genre: "Romance", image: "https://image.tmdb.org/t/p/w500/rz2FhC0QkZP6v7RPQ1GzZqGz9Zp.jpg", rating: "7.8/10", description: "Love never fades.", trailer: "https://www.youtube.com/embed/FC6biTjEyZw" },
{ id: 33, title: "La La Land", genre: "Romance", image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", rating: "8.0/10", description: "Dreamers in love.", trailer: "https://www.youtube.com/embed/0pdqf4P9MB8" },
{ id: 34, title: "Pride & Prejudice", genre: "Romance", image: "https://image.tmdb.org/t/p/w500/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg", rating: "7.8/10", description: "Classic romance.", trailer: "https://www.youtube.com/embed/1dYv5u6v55Y" },
{ id: 35, title: "Before Sunrise", genre: "Romance", image:  "https://image.tmdb.org/t/p/w500/8e9zj7N1aXq3xgBMD6EoKcNOyjs.jpg", rating: "8.1/10", description: "One night love.", trailer: "https://www.youtube.com/embed/6MUcuqbGTxc" },
{ id: 36, title: "Her", genre: "Romance", image:  "https://image.tmdb.org/t/p/w500/fsoTLnUXEUTNuVCBxAJMY0HPPd.jpg", rating: "8.0/10", description: "Love with AI.", trailer: "https://www.youtube.com/embed/dJTU48_yghs" },
{ id: 37, title: "A Walk to Remember", genre: "Romance", image: "https://image.tmdb.org/t/p/w500/8lUYMv6KkqxxUo0zYqXgMrfFjZ2.jpg", rating: "7.4/10", description: "Teen love drama.", trailer: "https://www.youtube.com/embed/2nRjO5F_4mE" },
{ id: 38, title: "Me Before You", genre: "Romance", image: "https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg", rating: "7.4/10", description: "Love and loss.", trailer: "https://www.youtube.com/embed/Eh993__rOxA" },
{ id: 39, title: "Blue Valentine", genre: "Romance", image: "https://image.tmdb.org/t/p/w500/jvC1tH1KcQ7yM6LzZ4P0aE0Hg83.jpg", rating: "7.3/10", description: "Realistic love.", trailer: "https://www.youtube.com/embed/aILx69WrRhQ" },
{ id: 40, title: "500 Days of Summer", genre: "Romance", image: "https://image.tmdb.org/t/p/w500/f9mbM0YMLpYemcWx6o2WeiYp84n.jpg", rating: "7.7/10", description: "Nonlinear romance.", trailer: "https://www.youtube.com/embed/PsD0NpFSADM" },

    // ================= SCI-FI =================
{ id: 41, title: "Inception", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", rating: "8.8/10", description: "Dream within dream.", trailer: "https://www.youtube.com/embed/YoHD9XEInc0" },
{ id: 42, title: "Interstellar", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", rating: "8.7/10", description: "Space and time.", trailer: "https://www.youtube.com/embed/zSWdZVtXT7E" },
{ id: 43, title: "The Matrix", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", rating: "8.7/10", description: "Reality is illusion.", trailer: "https://www.youtube.com/embed/vKQi3bBA1y8" },
{ id: 44, title: "Blade Runner 2049", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg", rating: "8.0/10", description: "Future humanity.", trailer: "https://www.youtube.com/embed/gCcx85zbxz4" },
{ id: 45, title: "Avatar", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", rating: "7.8/10", description: "Pandora world.", trailer: "https://www.youtube.com/embed/5PSNL1qE6VY" },
{ id: 46, title: "Dune", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", rating: "8.1/10", description: "Desert power.", trailer: "https://www.youtube.com/embed/n9xhJrPXop4" },
{ id: 47, title: "Arrival", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", rating: "7.9/10", description: "Alien language.", trailer: "https://www.youtube.com/embed/tFMo3UJ4B4g" },
{ id: 48, title: "Edge of Tomorrow", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg", rating: "7.9/10", description: "Time loop war.", trailer: "https://www.youtube.com/embed/vw61gCe2oqI" },
{ id: 49, title: "The Matrix", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", rating: "8.7/10", description: "A hacker discovers reality is a simulation.", trailer: "https://www.youtube.com/embed/vKQi3bBA1y8" },
{ id: 50, title: "Blade Runner 2049", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", rating: "8.0/10", description: "A replicant blade runner uncovers a secret.", trailer: "https://www.youtube.com/embed/gCcx85zbxz4" },
  
  // ================= SERIES =================
    { id: 51, title: "Stranger Things", genre: "Series", image: "/images/ST.jpg", rating: "8.7/10", description: "Kids battle supernatural forces.", trailer: "https://www.youtube.com/embed/b9EkMc79ZSU" },
    { id: 52, title: "Breaking Bad", genre: "Series", image: "/images/breaking-bad.jpg", rating: "9.5/10", description: "Chem teacher becomes meth kingpin.", trailer: "https://www.youtube.com/embed/HhesaQXLuRY" },
    { id: 53, title: "The Witcher", genre: "Series", image: "https://upload.wikimedia.org/wikipedia/en/1/1b/The_Witcher_title_card.png", rating: "8.2/10", description: "Monster hunter adventures.", trailer: "https://www.youtube.com/embed/ndl1W4ltcmg" },
    { id: 54, title: "The Mandalorian", genre: "Series", image: "https://upload.wikimedia.org/wikipedia/en/4/46/The_Mandalorian_title_card.png", rating: "8.8/10", description: "Space bounty hunter.", trailer: "https://www.youtube.com/embed/aOC8E8z_ifw" },
    { id: 55, title: "Game of Thrones", genre: "Series", image: "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg", rating: "9.3/10", description: "Seven kingdoms fight for throne.", trailer: "https://www.youtube.com/embed/BpJYNVhGf1s" },
    { id: 56, title: "The Boys", genre: "Series", image: "https://upload.wikimedia.org/wikipedia/en/f/fc/The_Boys_title_card.png", rating: "8.7/10", description: "Superheroes are corrupt.", trailer: "https://www.youtube.com/embed/06v_5u8n0Dc" },
    { id: 57, title: "Westworld", genre: "Series", image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Westworld_title_card.png", rating: "8.6/10", description: "Theme park AI drama.", trailer: "https://www.youtube.com/embed/Bo9qf9wC_2E" },
    { id: 58, title: "Dark", genre: "Series", image: "https://upload.wikimedia.org/wikipedia/en/0/03/Dark_Title_Card.png", rating: "8.8/10", description: "Time travel mystery.", trailer: "https://www.youtube.com/embed/rrwycJ08PSA" },
    { id: 59, title: "Money Heist", genre: "Series", image: "https://upload.wikimedia.org/wikipedia/en/4/45/Money_Heist_title_card.png", rating: "8.3/10", description: "Heist mastermind plan.", trailer: "https://www.youtube.com/embed/5K0fA7NL0xI" },
    { id: 60, title: "Sherlock", genre: "Series", image: "https://upload.wikimedia.org/wikipedia/en/5/5a/Sherlock_title_card.png", rating: "9.1/10", description: "Detective solving mysteries.", trailer: "https://www.youtube.com/embed/xK7S9mrFWL4" }
  ];



  return (
    <div className="movie-grid-container">
      {genres.map((genre) => (
        /* ✅ THIS ID IS WHAT GENREFILTER SCROLLS TO */
        <section key={genre} id={genre} className="genre-section">
          <h2 className="genre-title">{genre}</h2>

          <div
            className="movie-row"
            ref={(el) => (rowRefs.current[genre] = el)}
          >
            {movies
              .filter((movie) => movie.genre === genre)
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  theme={theme}
                  onClick={() => setSelectedTrailer(movie.trailer)}
                />
              ))}
          </div>
        </section>
      ))}

      {/* 🎬 TRAILER MODAL */}
      {selectedTrailer && (
        <div className="modal-overlay" onClick={() => setSelectedTrailer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedTrailer(null)}>
              ✕
            </button>
            <iframe src={selectedTrailer} allowFullScreen />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;

