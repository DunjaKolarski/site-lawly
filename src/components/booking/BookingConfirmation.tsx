import "./BookingConfirmation.css";
import { useState } from "react";

type BookingConfirmationProps = {
  selectedSlot: {
    dayLabel: string;
    time: string;
  };
  onViewProfile: () => void;
};

function BookingConfirmation({
  selectedSlot,
  onViewProfile,
}: BookingConfirmationProps) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [showReminder, setShowReminder] = useState(true);
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [reminderNotice, setReminderNotice] = useState("");
  const [messageNotice, setMessageNotice] = useState("");
  const [calendarNotice, setCalendarNotice] = useState("");

  return (
    <section className="booking-confirmation">
      <div className="booking-confirmation-details">
        <h1>Your session was scheduled</h1>

        <div className="booking-confirmation-session">
          <div className="booking-confirmation-session-day">
            <span>{selectedSlot.dayLabel}</span>
          </div>

          <div className="booking-confirmation-session-info">
            <p>15-Minute Consulting Session with Cynthia</p>
            <strong>{selectedSlot.time}</strong>
            <span>15 minutes</span>
          </div>
        </div>

        <div className="booking-confirmation-calendar">
          <button
            type="button"
            className="booking-confirmation-calendar-toggle"
            aria-expanded={calendarOpen}
            aria-controls="booking-calendar-options"
            onClick={() => setCalendarOpen(!calendarOpen)}
          >
            Add to calendar
            <i
              className={
                calendarOpen ? "bi bi-chevron-up" : "bi bi-chevron-down"
              }
              aria-hidden="true"
            ></i>
          </button>

          {calendarOpen && (
            <div
              id="booking-calendar-options"
              className="booking-confirmation-calendar-options"
            >
              <button
                type="button"
                onClick={() => {
                  setCalendarNotice(
                    "Calendar integration is not connected in this demo.",
                  );
                  setCalendarOpen(false);
                }}
              >
                <i className="bi bi-calendar-event" aria-hidden="true"></i>
                Add to Google Calendar
              </button>

              <button
                type="button"
                onClick={() => {
                  setCalendarNotice(
                    "Calendar integration is not connected in this demo.",
                  );
                  setCalendarOpen(false);
                }}
              >
                <i className="bi bi-calendar-week" aria-hidden="true"></i>
                Add to iCal/Outlook
              </button>
            </div>
          )}
        </div>

        <p className="booking-confirmation-notice" role="status">
          {calendarNotice}
        </p>

        {showReminder && (
          <div className="booking-confirmation-reminder">
            <h2>Get reminded about your sessions</h2>

            <p>
              Don't miss your consulting sessions! If you live in a supported
              country, we'll send you SMS reminders before they're about to
              start.
            </p>

            <form
              className="booking-confirmation-phone-form"
              onSubmit={(event) => {
                event.preventDefault();
                setReminderNotice(
                  "This is a demo. No verification code has been sent.",
                );
              }}
            >
              <label htmlFor="booking-phone">Add your phone number</label>

              <div className="booking-confirmation-phone-fields">
                <select
                  aria-label="Country calling code"
                  value={country}
                  onChange={(event) => {
                    setCountry(event.target.value);
                    setReminderNotice("");
                  }}
                  required
                >
                  <option value="">Country</option>
                  <option value="us">US (+1)</option>
                  <option value="ca">Canada (+1)</option>
                  <option value="gb">UK (+44)</option>
                  <option value="rs">Serbia (+381)</option>
                </select>

                <input
                  id="booking-phone"
                  type="tel"
                  autoComplete="tel-national"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    setReminderNotice("");
                  }}
                  required
                />
              </div>

              <small>
                We'll send you a text to confirm your number. Standard message
                and data rates apply.
              </small>

              <button type="submit" className="primary-button">
                Send a code
              </button>

              <p className="booking-confirmation-notice" role="status">
                {reminderNotice}
              </p>

              <button
                type="button"
                className="booking-confirmation-later"
                onClick={() => setShowReminder(false)}
              >
                I'll do this later
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="booking-confirmation-preparation">
        <h2>Make the most out of your strategy call with Cynthia</h2>

        <p>
          Use this 15-minute strategy session to decide whether Cynthia is a
          good fit for you. Here are a few tips to help you prepare for the
          call.
        </p>

        <ul className="booking-confirmation-tips">
          <li>
            <i className="bi bi-person-circle" aria-hidden="true"></i>
            <button type="button" onClick={onViewProfile}>
              Take a look at Cynthia's profile &amp; coaching offerings
            </button>
          </li>

          <li>
            <i className="bi bi-chat-dots" aria-hidden="true"></i>
            <span>Bring some questions</span>
          </li>

          <li>
            <i className="bi bi-star" aria-hidden="true"></i>
            <span>Come ready to share your goals and challenges</span>
          </li>
        </ul>

        <form
          className="booking-confirmation-message-form"
          onSubmit={(event) => {
            event.preventDefault();
            setMessageNotice("This is a demo. Your message has not been sent.");
          }}
        >
          <label htmlFor="booking-message">
            What would you like to discuss?
          </label>

          <textarea
            id="booking-message"
            placeholder="Write Cynthia a message."
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setMessageNotice("");
            }}
            required
          />

          <button
            type="submit"
            className="primary-button"
            disabled={!message.trim()}
          >
            Send
          </button>

          <p className="booking-confirmation-notice" role="status">
            {messageNotice}
          </p>
        </form>

        <div className="booking-confirmation-help">
          <h2>Looking for help right away?</h2>

          <p>
            15-minute strategy sessions aren't coaching sessions. If you have
            specific advice-oriented questions for Cynthia, book a coaching
            session instead.
          </p>

          <button
            type="button"
            className="primary-button"
            onClick={onViewProfile}
          >
            Book a consulting session
          </button>
        </div>
      </div>
    </section>
  );
}

export default BookingConfirmation;
