import "./ConsultantProfileEvents.css";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import EventsRsvp from "../events/EventsRsvp";
import eventImage from "../../assets/events.png";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";

const attendees = [profile1, profile2, profile3, profile4];

function ConsultantProfileEvents() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [emblaRef] = useEmblaCarousel({
    active: false,
    align: "start",
    breakpoints: {
      "(max-width: 767px)": {
        active: true,
      },
    },
  });

  return (
    <div className="consultant-profile-events">
      <h3>
        <span className="consultant-profile-events-desktop-title">
          Upcoming events
        </span>
        <span className="consultant-profile-events-mobile-title">Events</span>
      </h3>
      <div className="consultant-profile-events-viewport" ref={emblaRef}>
        <div className="consultant-profile-events-list">
          {[1, 2].map((id) => (
            <div className="consultant-profile-event" key={id}>
              <Link to="/events/1" className="consultant-profile-event-image">
                <img src={eventImage} alt="The Guide to Writing Law Essays" />
              </Link>

              <div className="consultant-profile-event-content">
                <h4>
                  <Link to="/events/1">
                    The Guide to Writing Law Essays: Structure, Tips & Examples
                  </Link>
                </h4>
                <p>April 17, 2025 | 4:00PM EST - 4:45PM EST</p>

                <div className="consultant-profile-event-attendees">
                  <span>40 people going</span>
                  <div className="consultant-profile-event-avatars">
                    {attendees.map((image) => (
                      <img key={image} src={image} alt="" />
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="primary-button"
                onClick={() => setIsRsvpOpen(true)}
              >
                RSVP
              </button>
            </div>
          ))}
        </div>
      </div>

      {isRsvpOpen && <EventsRsvp onClose={() => setIsRsvpOpen(false)} />}
    </div>
  );
}

export default ConsultantProfileEvents;
