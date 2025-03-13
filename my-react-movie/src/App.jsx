import React from 'react';
import HeroBanner from './components/HeroBanner';
import MovieGrid from './components/MovieGrid';
import GenreFilter from './components/GenreFilter';
// import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <HeroBanner />
            <GenreFilter />
            {/* <SearchBar /> */}
            <MovieGrid />

            <Footer />
        </div>
    );
};

export default App;