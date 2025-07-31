import React from 'react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-title">📰 News App</div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '🌞 Light'}
      </button>
    </nav>
  );
}