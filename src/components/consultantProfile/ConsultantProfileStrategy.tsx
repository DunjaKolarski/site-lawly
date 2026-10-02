import "./ConsultantProfileStrategy.css";
import logo from "../../assets/logo.png";

function ConsultantProfileStrategy() {
  return (
    <div className="consultant-profile-strategy">
      <div className="consultant-profile-powered">
        <span>Powered by</span>
        <img src={logo} alt="Lawly" />
      </div>

      <div className="consultant-profile-strategy-card">
        <span className="consultant-profile-strategy-label">
          Strategy Session
        </span>

        <div className="consultant-profile-strategy-content">
          <h2>Book 15-Min Strategy Session</h2>

          <p>
            Book a 15-minute strategy session for $X and we'll credit $X toward
            your first coaching hourly bundle or package. There's no risk, just
            results!
          </p>

          <p>
            <strong>$25</strong> for 15 minutes
          </p>

          <p className="consultant-profile-strategy-availability">
            Next available <span>12:00PM EST on 5/18</span>
          </p>

          <div className="consultant-profile-strategy-actions">
            <button
              type="button"
              className="consultant-profile-strategy-calendar"
              aria-label="Open strategy session calendar"
            >
              <i className="bi bi-calendar-week" aria-hidden="true"></i>
            </button>
            <button type="button" className="primary-button">
              See times
            </button>
          </div>

          <p className="consultant-profile-strategy-refund">
            <i className="bi bi-shield-check" aria-hidden="true"></i>
            Full Refund Guarantee
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConsultantProfileStrategy;
