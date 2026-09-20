import "./EventsNoResults.css";
import { Link } from "react-router-dom";

function EventsNoResults() {
  return (
    <section className="events-no-results">
      <h4>No events currently scheduled for interview prep</h4>
      <p>You can still get one-on-one consulting with an expert in this area</p>
      <Link className="primary-button" to="/find-consultant">
        Browse consultants
      </Link>
    </section>
  );
}

export default EventsNoResults;
