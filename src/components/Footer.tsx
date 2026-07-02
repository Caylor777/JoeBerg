import '../css/Footer.css';

function Footer() {
    return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#contact">Contact</a>
        <a href="#alumni">For JB Alumni</a>
        <a href="#story">The Joe Berg Seminars Story</a>
        <a href="#historical">Joe Berg Historical Files</a>
        <a href="#contact-archive">240203 Contact (archive)</a>
        <a href="#spring-calendar">2025-1 Spring Seminar Calendar</a>
        <a href="#plan">The Berg Plan</a>
        <a href="#calendar-archive">Seminar Calendar - Archive 260124</a>
      </div>
      <p>&trade; {new Date().getFullYear()} The Joe Berg Seminars. All rights reserved.</p>
    </footer>
  );
}

export default Footer;