import { useState } from 'react';
import '../css/Navbar.css';
import Login from './Login';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-banner">
        <a href="/home">
          <img src="/banner.png" alt="Joe Berg Banner" />
        </a>
      </div>
      <ul className="navbar-tabs">
        <li><a href="#future-vision">JBS Future Vision</a></li>
        <li><a href="#calendar">Seminar Calendar</a></li>
        <li><a href="#story">The Joe Berg Seminars Story</a></li>
        <li><a href="#guidelines">Guidelines for Participation</a></li>
        <li>
          <a href="#login" onClick={(e) => { e.preventDefault(); setIsLoginOpen(true); }}>Login</a>
        </li>
        <li><a href="#more">more..</a></li>
      </ul>

      {isLoginOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', position: 'relative', minWidth: '300px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', color: 'black' }}>
            <button onClick={() => setIsLoginOpen(false)} style={{ position: 'absolute', top: '15px', right: '15px', cursor: 'pointer', background: 'none', border: 'none', fontSize: '18px' }}>
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