import React, { useState, useEffect } from 'react';
import './HeroBanner.css';

const HeroBanner = ({ theme }) => {

  const movies = [
    {
      id: 1,
      title: 'Stranger Things',
      image: 'https://th.bing.com/th/id/R.b3e100db8c52ea8adf857f361a6ac7f4?rik=Z3CG0unTDypRgw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f40700000%2fStranger-Things-Season-2-Banner-stranger-things-40779224-3043-1082.jpg&ehk=z2GoVVKPyFM3g8wD7zQTz3YGkzHWGWsc6a5cgDIR3bw%3d&risl=&pid=ImgRaw&r=0',
      description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces to get him back.',
      trailer: 'https://www.youtube.com/embed/qSEeQXzFspk',
    },
    {
      id: 2,
      title: 'Squid Game',
      image: 'https://wallpaperboat.com/wp-content/uploads/2021/10/18/79418/squid-game-11.jpg',
      description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games for a tempting prize, but the stakes are deadly.',
      trailer: 'https://www.youtube.com/embed/Ed1sGgHUo88',
    },
    {
      id: 3,
      title: 'Inception',
      image: 'https://th.bing.com/th/id/R.c763d49a169e7808bb4cec730edbca89?rik=PLRJcCgS5uXBqQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffWnWpHj.jpg&ehk=29FDFCL%2bWfstN40cq0jG8y0kvFBE%2fU%2fHFvn24Iy0HIo%3d&risl=&pid=ImgRaw&r=0',
      description: 'Inception is a sci-fi thriller about a skilled thief who enters people\'s dreams to steal secrets.',
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      id: 4,
      title: 'Wednesday',
      image: 'https://images.hdqwalls.com/download/wednesday-4k-nb-1920x1080.jpg',
      description: 'Wednesday Addams investigates a supernatural mystery at her new school.',
      trailer: 'https://www.youtube.com/embed/Di310WS8zLk',
    },
    {
      id: 5,
      title: 'Peaky Blinders',
      image: 'https://wallpaperaccess.com/full/2242613.jpg',
      description: 'A British crime family rises to power in post-WWI Birmingham.',
      trailer: 'https://www.youtube.com/embed/oVzVdvGIC7U',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const handlePlayClick = (trailer) => {
    setCurrentTrailer(trailer);
    setIsModalOpen(true);
  };

  return (
   <div className={`hero-banner ${theme}`}>

      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${movie.image})` }}
        >
          {/* ✅ NEW OVERLAY */}
          <div className="hero-overlay" />

          <div className="hero-content">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>

            <div className="hero-buttons">
              <button onClick={() => handlePlayClick(movie.trailer)}>▶ Play</button>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ DOT INDICATORS */}
      <div className="hero-dots">
        {movies.map((_, i) => (
          <span
            key={i}
            className={i === currentSlide ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>

      {/* 🎬 MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={currentTrailer}
              allowFullScreen
              title="Trailer"
            />
            <button className="close-button" onClick={() => setIsModalOpen(false)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
