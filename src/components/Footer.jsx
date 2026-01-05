import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://x.com/?lang=en-in" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i> Instagram
                </a>
            </div>
            <div className="rating">IMDb Rating: 8.5/10</div>
            <p className="footer-note">© 2026 StreamX. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
