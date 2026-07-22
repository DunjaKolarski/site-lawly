import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
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
      </div>
    </header>
  );
}

export default Header;
