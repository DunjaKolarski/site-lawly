import "./EventsCard.css";
import { useState } from "react";
import EventsRsvp from "./EventsRsvp";
import { Link } from "react-router-dom";
import eventImage from "../../assets/events.png";
import hostImage from "../../assets/profile2.png";

function EventsCard() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  return (
    <div className="events-card">
      <Link className="events-card-image" to="/events/1">
        <img
          src={eventImage}
          alt="The Guide to Writing Law Essays: Structure, Tips, & Examples"
        />
      </Link>
      <div className="events-card-content">
        <h4>
          {" "}
          <Link to="/events/1">
            Drafting The Perfect Essay For Your Stanford Applications
          </Link>
        </h4>
        <div className="events-card-host">
          <p>Hosted by:</p>
          <img src={hostImage} alt="Cynthia L." />
          <span>Cynthia L.</span>

          <div className="events-card-rating">
            <i className="bi bi-star-fill"></i>
            <span>4.8</span>
            <small>(10)</small>
          </div>
        </div>
        <div className="events-card-bottom">
          <p>Apr. 17, 2026 | 12:30 PM EST</p>
          <button
            className="primary-button"
            type="button"
            onClick={() => setIsRsvpOpen(true)}
          >
            RSVP
          </button>
        </div>
      </div>
      {isRsvpOpen && <EventsRsvp onClose={() => setIsRsvpOpen(false)} />}
    </div>
  );
}

export default EventsCard;
