import "./EventsRsvpConfirmation.css";
import EventsRelated from "./EventsRelated";

function EventsRsvpConfirmation() {
  return (
    <div className="events-rsvp-confirmation">
      <div className="events-rsvp-confirmation-heading">
        <h4 id="events-rsvp-title">
          You've registered for: <strong>Drafting The Perfect Essay</strong>
        </h4>
        <div className="events-rsvp-confirmation-date">
          <p>April 17 | 4:00 PM EST - 4:45 PM EST</p>
          <details className="events-rsvp-calendar">
            <summary>
              Add to calendar
              <i className="bi bi-chevron-down" aria-hidden="true"></i>
            </summary>
            <div className="events-rsvp-calendar-options">
              <button type="button">
                <i className="bi bi-google" aria-hidden="true"></i>
                Add to Google Calendar
              </button>
              <button type="button">
                <i className="bi bi-calendar-event" aria-hidden="true"></i>
                Add to iCal/Outlook
              </button>
            </div>
          </details>
        </div>
      </div>
      <EventsRelated />
    </div>
  );
}

export default EventsRsvpConfirmation;
