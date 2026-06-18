import '../css/Navbar.css';

function Navbar() {
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
        <li><a href="#more">more..</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;