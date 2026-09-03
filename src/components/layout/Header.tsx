import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Lawly logo" />
        </Link>
        <div className="header-right">
          <nav className="navigation">
            <Link to="/gift-a-session">Gift a Session</Link>
            <Link to="/find-consultant">Find a Consultant</Link>
            <Link to="/become-consultant">Become a Consultant</Link>
            <Link to="/resources">Resources</Link>
          </nav>
          <div className="header-actions">
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
        <button
          className="header-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="header-mobile-menu">
          <nav className="header-mobile-navigation">
            <Link to="/gift-a-session" onClick={() => setMenuOpen(false)}>
              Gift a Session
            </Link>
            <Link to="/find-consultant" onClick={() => setMenuOpen(false)}>
              Find a Consultant
            </Link>
            <Link to="/become-consultant" onClick={() => setMenuOpen(false)}>
              Become a Consultant
            </Link>
            <Link to="/resources" onClick={() => setMenuOpen(false)}>
              Resources
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Log in
            </Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
