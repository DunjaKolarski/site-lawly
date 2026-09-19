import "./EventsHeader.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile-picture.png";

function EventsHeader() {
  return (
    <header className="events-header">
      <div className="events-header-container">
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
    </header>
  );
}

export default EventsHeader;
