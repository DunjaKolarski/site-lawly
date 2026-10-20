import "./ConsultantProfileConsulting.css";

type ConsultantProfileConsultingProps = {
  onSeeTimes: () => void;
};

function ConsultantProfileConsulting({
  onSeeTimes,
}: ConsultantProfileConsultingProps) {
  return (
    <div className="consultant-profile-consulting">
      <span className="consultant-profile-consulting-label">
        Consulting Session
      </span>

      <div className="consultant-profile-consulting-content">
        <h2>Book Consulting Session</h2>
        <p>Ideal for applicants who just need targeted advice.</p>

        <ul>
          <li>Book as little as 1 hour</li>
          <li>Add hours later as needed</li>
          <li>Save with multi-hour packs</li>
          <li>Full refund for unused hours</li>
        </ul>

        <div className="consultant-profile-consulting-prices">
          <div>
            <div>
              <p>Hourly Consulting</p>
              <span>(1 or 2 Hours)</span>
            </div>
            <p>$66 / hour</p>
          </div>
          <div>
            <div>
              <p>Hourly Bundles</p>
              <span>(3+ Hours)</span>
            </div>
            <p>Discounted</p>
          </div>
        </div>

        <div className="consultant-profile-consulting-mobile-price">
          <div>
            <span>Hourly Consulting</span>
            <strong>$66 / hour</strong>
          </div>
          <span>(Discounts on 3+ hours)</span>
        </div>

        <p className="consultant-profile-consulting-availability">
          Next available <span>12:00PM EST on 5/18</span>
        </p>

        <div className="consultant-profile-consulting-actions">
          <button
            type="button"
            className="consultant-profile-consulting-calendar"
            aria-label="Open consulting session calendar"
            onClick={onSeeTimes}
          >
            <i className="bi bi-calendar-week" aria-hidden="true"></i>
          </button>

          <button type="button" className="primary-button" onClick={onSeeTimes}>
            See times
          </button>
        </div>

        <p className="consultant-profile-consulting-refund">
          <i className="bi bi-shield-check" aria-hidden="true"></i>
          Full Refund Guarantee
        </p>
      </div>
    </div>
  );
}

export default ConsultantProfileConsulting;
