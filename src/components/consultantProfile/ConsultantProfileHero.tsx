import "./ConsultantProfileHero.css";
import cynthia from "../../assets/profile2.png";

const services = [
  "Interview preparation",
  "Financial aid",
  "Resume/CV editing",
  "Whole application support",
];

function ConsultantProfileHero() {
  return (
    <div className="consultant-profile-hero">
      <div className="consultant-profile-image">
        <img src={cynthia} alt="Cynthia" />
        <span>Pro</span>
      </div>

      <div className="consultant-profile-info">
        <div className="consultant-profile-name">
          <h1>Cynthia</h1>
          <div className="consultant-profile-rating">
            <span>★</span>
            <strong>5.0</strong>
            <small>(10)</small>
          </div>
        </div>

        <strong className="consultant-profile-price">$66/hour</strong>

        <div className="consultant-profile-background">
          <p>
            <i className="bi bi-mortarboard" aria-hidden="true"></i>
            Harvard
          </p>
          <p>
            <i className="bi bi-building" aria-hidden="true"></i>
            Sullivan Cromwell
          </p>
        </div>

        <div className="consultant-profile-services">
          <strong>Services I Offer:</strong>
          {services.map((service) => (
            <span key={service}>{service}</span>
          ))}
          <i className="bi bi-chevron-down" aria-hidden="true"></i>
        </div>
      </div>

      <div className="consultant-profile-actions">
        <button type="button" aria-label="Save Cynthia">
          <i className="bi bi-heart-fill" aria-hidden="true"></i>
        </button>
        <button type="button" aria-label="Copy profile link">
          <i className="bi bi-link-45deg" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default ConsultantProfileHero;
