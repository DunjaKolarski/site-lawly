import "./ConsultantProfileHero.css";
import { useState } from "react";
import cynthia from "../../assets/profile2.png";

const services = [
  "Interview preparation",
  "Financial aid",
  "Resume/CV editing",
  "Whole application support",
];

function ConsultantProfileHero() {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  return (
    <div className="consultant-profile-hero">
      <div className="consultant-profile-image">
        <img src={cynthia} alt="Cynthia" />
        <span>Pro</span>
      </div>

      <div className="consultant-profile-info">
        <div className="consultant-profile-name">
          <h1>Cynthia</h1>
          <button
            type="button"
            className="consultant-profile-link"
            aria-label="Copy profile link"
          >
            <i className="bi bi-link-45deg" aria-hidden="true"></i>
          </button>
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
        <div
          className={
            servicesExpanded
              ? "consultant-profile-services consultant-profile-services-expanded"
              : "consultant-profile-services"
          }
        >
          <strong>Services I Offer:</strong>

          {services.map((service) => (
            <span key={service}>{service}</span>
          ))}

          <button
            type="button"
            className="consultant-profile-services-toggle"
            aria-label={
              servicesExpanded ? "Show fewer services" : "Show all services"
            }
            aria-expanded={servicesExpanded}
            onClick={() => setServicesExpanded(!servicesExpanded)}
          >
            <i
              className={
                servicesExpanded ? "bi bi-chevron-up" : "bi bi-chevron-down"
              }
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>

      <div className="consultant-profile-actions">
        <button type="button" aria-label="Save Cynthia">
          <i
            className="bi bi-heart-fill consultant-profile-heart-desktop"
            aria-hidden="true"
          ></i>
          <i
            className="bi bi-heart consultant-profile-heart-mobile"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  );
}

export default ConsultantProfileHero;
