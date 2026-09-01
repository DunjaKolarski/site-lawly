import "./Footer.css";
import { Link } from "react-router-dom";
import logoFooter from "../../assets/logo-footer.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="logo-footer">
          <img src={logoFooter} alt="Lawly logo" />
        </Link>
        <div className="footer-links-copy">
          <div className="footer-links">
            <div>
              <Link to="/faq">FAQ</Link>
              <Link to="/support">Support</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div>
              <Link to="/gift-a-session">Gift a Session</Link>
              <Link to="/articles">Free Articles</Link>
              <Link to="/events">Free Events</Link>
              <Link to="/forum">Lawly Forum</Link>
            </div>
          </div>
          <div className="footer-copyright">
            <p>Copyright T14 Advisors LLC © 2025. All rights reserved.</p>
          </div>
        </div>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
