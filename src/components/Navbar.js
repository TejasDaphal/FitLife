import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Navbar.css';

const Navbar = () => {
  const { userInfo, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <span className="logo-royal">Fit</span> <span className="logo-fitness">Life</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/review" className="nav-link">Review</Link>
        </nav>
        {userInfo ? (
          <div className="user-menu">
            <span className="user-name">Hi, {userInfo.fullName.split(' ')[0]}</span>
            <button onClick={handleLogout} className="btn logout-btn">Logout</button>
          </div>
        ) : (
          <Link to="/join" className="btn join-btn">Join Us</Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;