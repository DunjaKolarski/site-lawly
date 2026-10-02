import "./ConsultantProfileBooking.css";

function ConsultantProfileBooking() {
  return (
    <div className="consultant-profile-booking">
      <div className="consultant-profile-availability">
        <div>
          <strong>Next available Wednesday at 12:00PM EST</strong>
          <p>Usually responds within 24 hours</p>
        </div>
        <span
          className="consultant-profile-availability-dot"
          aria-hidden="true"
        ></span>
      </div>

      <div className="consultant-profile-booking-actions">
        <button type="button" className="primary-button">
          Book a session
        </button>
        <button type="button" className="consultant-profile-message">
          Message Cynthia
        </button>
      </div>
    </div>
  );
}

export default ConsultantProfileBooking;
