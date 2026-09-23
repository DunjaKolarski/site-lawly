import "./EventsReviewConfirmation.css";
import hostImage from "../../assets/profile2.png";

function EventsReviewConfirmation() {
  return (
    <div className="events-review-confirmation">
      <h4 role="status">Thanks! Your review's been submitted.</h4>
      <div className="events-review-confirmation-links">
        <button type="button">
          <i className="bi bi-calendar-event" aria-hidden="true"></i>
          <span>View more upcoming events with Cynthia</span>
        </button>
        <button type="button">
          <img src={hostImage} alt="" />
          <span>Schedule a session with Cynthia</span>
        </button>
      </div>
    </div>
  );
}

export default EventsReviewConfirmation;
