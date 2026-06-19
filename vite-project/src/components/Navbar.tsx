import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

import Login from './Login';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedin') === 'true');
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));
  const loginField = isLoggedIn ? (currentUser ?? 'User') : 'Login';

  const handleLogout = () => {
    localStorage.setItem('loggedin', 'false');
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setCurrentUser(null);
    setIsAccountMenuOpen(false);
  };

  const handleLoginSuccess = (username: string) => {
    localStorage.setItem('loggedin', 'true');
    localStorage.setItem('currentUser', username);
    setIsLoggedIn(true);
    setCurrentUser(username);
    setIsLoginOpen(false);
  };

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
          {!isLoggedIn ? (
            <button
              type="button"
              className="navbar-account-button"
              onClick={() => setIsLoginOpen(true)}
            >
              {loginField}
            </button>
          ) : (
            <div
              className="navbar-account"
              onMouseEnter={() => setIsAccountMenuOpen(true)}
              onMouseLeave={() => setIsAccountMenuOpen(false)}
            >
              <button type="button" className="navbar-account-button">
                {loginField}
              </button>
              {isAccountMenuOpen && (
                <div className="navbar-account-menu">
                  <Link to="/account" onClick={() => setIsAccountMenuOpen(false)}>
                    Account
                  </Link>
                  <button type="button" className="navbar-account-menu-item" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </li>
      </ul>

      {!isLoggedIn && isLoginOpen && (
        <div className="login-modal">
          <div className="login-form">
            <button onClick={() => setIsLoginOpen(false)}>
              ✖
            </button>
            <Login onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;