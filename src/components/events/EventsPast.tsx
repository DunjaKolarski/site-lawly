import "./EventsPast.css";
import { Link } from "react-router-dom";
import eventImage from "../../assets/events.png";

function EventsPast() {
  return (
    <section className="events-past">
      <div className="events-past-card">
        <img
          src={eventImage}
          alt="The Guide to Writing Law Essays: Structure, Tips, & Examples"
        />
        <p>This event has passed</p>
      </div>

      <Link className="primary-button" to="/events">
        See upcoming events
      </Link>
    </section>
  );
}

export default EventsPast;
