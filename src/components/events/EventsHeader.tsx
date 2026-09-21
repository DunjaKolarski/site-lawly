import "./EventsHeader.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile-picture.png";

function EventsHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="events-header">
      <div className="events-header-container">
        <button
          className="events-header-menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
        <Link to="/" className="events-header-logo">
          <img src={logo} alt="Lawly logo" />
        </Link>
        <div className="events-header-right">
          <nav className="events-header-navigation">
            <Link to="/find-consultant">Find a Consultant</Link>
            <Link to="/forum">Lawly Forum</Link>
            <Link to="/resources">Resources</Link>
          </nav>
          <div className="events-header-actions">
            <button
              className="events-header-messages"
              type="button"
              aria-label="Messages"
            >
              <i className="bi bi-chat-dots"></i>
            </button>
            <button
              className="events-header-notifications"
              type="button"
              aria-label="Notifications"
            >
              <i className="bi bi-bell"></i>
              <span></span>
            </button>
            <button
              className="events-header-profile"
              type="button"
              aria-label="My profile"
            >
              <img src={profile} alt="" />
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <nav className="events-header-mobile-navigation">
          <Link to="/find-consultant" onClick={() => setMenuOpen(false)}>
            Find a Consultant
          </Link>
          <Link to="/forum" onClick={() => setMenuOpen(false)}>
            Lawly Forum
          </Link>
          <Link to="/resources" onClick={() => setMenuOpen(false)}>
            Resources
          </Link>
        </nav>
      )}
    </header>
  );
}

export default EventsHeader;
