import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="social-icons">
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="copyright">© Fit Life 2024 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;