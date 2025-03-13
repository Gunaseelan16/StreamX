import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://x.com/?lang=en-in">Twitter</a>
                <a href="https://www.instagram.com/">Instagram</a>
            </div>
            <div className="rating">
                <span>IMDb Rating: 8.5/10</span>
            </div>
        </footer>
    );
};

export default Footer;