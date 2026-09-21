import "./EventsRegistration.css";
import eventImage from "../../assets/events.png";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";

function EventsRegistration() {
  return (
    <section className="events-registration">
      <img
        src={eventImage}
        alt="The Guide to Writing Law Essays: Structure, Tips, & Examples"
      />

      <div className="events-registration-content">
        <div className="events-registration-date">
          <i className="bi bi-calendar-event" aria-hidden="true"></i>
          <p>
            <span>April 17</span>
            <span className="events-registration-date-divider"> | </span>
            <span>4:00 PM EST - 4:45 PM EST</span>
          </p>
        </div>
        <div className="events-registration-bottom">
          <div className="events-registration-attendees">
            <p>40 people going</p>
            <div className="events-registration-avatars">
              <img src={profile1} alt="" />
              <img src={profile2} alt="" />
              <img src={profile3} alt="" />
              <img src={profile4} alt="" />
            </div>
          </div>
          <button className="primary-button" type="button">
            Register for the event
          </button>
        </div>
      </div>
    </section>
  );
}

export default EventsRegistration;
