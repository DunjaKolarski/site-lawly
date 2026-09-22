import "./EventsRsvp.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type EventsRsvpProps = {
  onClose: () => void;
};

function EventsRsvp({ onClose }: EventsRsvpProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      className="events-rsvp"
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="events-rsvp-title"
    >
      <button
        className="events-rsvp-close"
        type="button"
        aria-label="Close"
        onClick={() => dialogRef.current?.close()}
      >
        <i className="bi bi-x-lg"></i>
      </button>
      <div className="events-rsvp-content">
        <h4 id="events-rsvp-title">Add your info to RSVP</h4>
        <form
          className="events-rsvp-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            aria-label="First name"
            autoComplete="given-name"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            aria-label="Last name"
            autoComplete="family-name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            autoComplete="email"
          />
          <p>
            Or <Link to="/login">Log in</Link>
          </p>
          <button className="primary-button" type="button">
            RSVP
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default EventsRsvp;
