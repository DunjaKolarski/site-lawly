import "./EventsCard.css";
import "./EventsRelated.css";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import eventImage from "../../assets/events.png";
import hostImage from "../../assets/profile2.png";

function EventsRelated() {
  const [selectedEvents, setSelectedEvents] = useState<number[]>([1, 3]);
  const [emblaRef] = useEmblaCarousel({
    active: false,
    align: "start",
    dragFree: true,
    breakpoints: {
      "(max-width: 767px)": {
        active: true,
      },
    },
  });

  function toggleEvent(id: number) {
    setSelectedEvents((previous) =>
      previous.includes(id)
        ? previous.filter((eventId) => eventId !== id)
        : [...previous, id],
    );
  }

  return (
    <section className="events-related">
      <h4>Quick register for related events</h4>
      <div className="events-related-scroll" ref={emblaRef}>
        <div className="events-related-cards">
          {[1, 2, 3].map((id) => (
            <div className="events-card" key={id}>
              <div className="events-card-image">
                <img
                  src={eventImage}
                  alt="The Guide to Writing Law Essays: Structure, Tips, & Examples"
                />
              </div>
              <div className="events-card-content">
                <h4>
                  Drafting The Perfect Essay For Your Stanford Applications
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
                  <input
                    type="checkbox"
                    aria-label={`Select related event ${id}`}
                    checked={selectedEvents.includes(id)}
                    onChange={() => toggleEvent(id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="primary-button"
        type="button"
        disabled={selectedEvents.length === 0}
      >
        Register for {selectedEvents.length}{" "}
        {selectedEvents.length === 1 ? "event" : "events"}
      </button>
    </section>
  );
}

export default EventsRelated;
