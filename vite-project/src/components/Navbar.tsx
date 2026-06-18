import { useState } from 'react';
import '../css/Navbar.css';

import Login from './Login';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-banner">
        <a href="/">
          <img src="/banner.png" alt="Joe Berg Banner" />
        </a>
      </div>
      <ul className="navbar-tabs">
        <li><a href="/JBS-Future-Vision">JBS Future Vision</a></li>
        <li><a href="#calendar">Seminar Calendar</a></li>
        <li><a href="#story">The Joe Berg Seminars Story</a></li>
        <li><a href="#guidelines">Guidelines for Participation</a></li>
        <li>
          <a href="#login" onClick={(e) => { e.preventDefault(); setIsLoginOpen(true); }}>Login</a>
        </li>
      </ul>

      {isLoginOpen && (
        <div className="login-modal">
          <div className="login-form">
            <button onClick={() => setIsLoginOpen(false)}>
              ✖
            </button>
            <Login />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;