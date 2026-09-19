import "./EventsCard.css";
import eventImage from "../../assets/events.png";
import hostImage from "../../assets/profile2.png";

function EventsCard() {
  return (
    <div className="events-card">
      <img
        src={eventImage}
        alt="The Guide to Writing Law Essays: Structure, Tips, & Examples"
      />
      <div className="events-card-content">
        <h4>Drafting The Perfect Essay For Your Stanford Applications</h4>
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
          <button className="primary-button" type="button">
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
