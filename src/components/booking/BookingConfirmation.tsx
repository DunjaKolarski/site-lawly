import "./BookingConfirmation.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getSessionTimeRange } from "./bookingTime";

type BookingConfirmationProps = {
  bookingType?: "strategy" | "hourly" | "package";
  sessionDuration?: number;
  selectedSlot: {
    dayLabel: string;
    time: string;
  };
  onViewProfile: () => void;
  scheduleMode?: boolean;
};

function BookingConfirmation({
  bookingType = "strategy",
  sessionDuration = 15,
  selectedSlot,
  onViewProfile,
  scheduleMode = false,
}: BookingConfirmationProps) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [showReminder, setShowReminder] = useState(true);
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [reminderNotice, setReminderNotice] = useState("");
  const isConsultingBooking = bookingType !== "strategy" || scheduleMode;
  const [messageNotice, setMessageNotice] = useState("");

  const verificationDialogRef = useRef<HTMLDialogElement>(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [verificationNotice, setVerificationNotice] = useState("");

  const countryCallingCodes: Record<string, string> = {
    us: "+1",
    ca: "+1",
    gb: "+44",
    rs: "+381",
  };

  const fullPhoneNumber = `${countryCallingCodes[country] ?? ""} ${phone.trim()}`;

  const [showVerificationSuccess, setShowVerificationSuccess] = useState(false);

  const reminderContent = showReminder && (
    <div className="booking-confirmation-reminder">
      <h2>Get reminded about your sessions</h2>

      <p>
        Don't miss your consulting sessions! If you live in a supported country,
        we'll send you SMS reminders before they're about to start.
      </p>

      <form
        className="booking-confirmation-phone-form"
        onSubmit={(event) => {
          event.preventDefault();

          if (!phone.trim()) {
            setReminderNotice("Please enter your phone number.");
            return;
          }

          setReminderNotice("");
          setVerificationCode("");
          setVerificationError("");
          setVerificationNotice("");
          setShowVerificationSuccess(false);
          verificationDialogRef.current?.showModal();
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
          We'll send you a text to confirm your number. Standard message and
          data rates apply. <Link to="/privacy">Privacy Policy</Link>
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
  );
  const messageContent = (
    <form
      className="booking-confirmation-message-form"
      onSubmit={(event) => {
        event.preventDefault();
        setMessageNotice("This is a demo. Your message has not been sent.");
      }}
    >
      <label htmlFor="booking-message">
        {scheduleMode ? (
          "Let Cynthia know what you plan to discuss."
        ) : bookingType === "package" ? (
          <>
            <span className="booking-confirmation-message-label-desktop">
              What would you like to discuss?
            </span>
            <span className="booking-confirmation-message-label-mobile">
              Send a message to Cynthia
            </span>
          </>
        ) : (
          "What would you like to discuss?"
        )}
      </label>

      <textarea
        id="booking-message"
        placeholder={
          scheduleMode
            ? "Hi Cynthia, I'm looking forward to our discussion."
            : "Write Cynthia a message."
        }
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
  );
  return (
    <section
      className={
        isConsultingBooking
          ? "booking-confirmation booking-confirmation-hourly"
          : "booking-confirmation"
      }
    >
      {isConsultingBooking && (
        <div className="booking-confirmation-heading">
          <h1>
            <span className="booking-confirmation-title-desktop">
              Your Session with Cynthia was Scheduled!
            </span>
            <span className="booking-confirmation-title-mobile">
              Your session was scheduled
            </span>
          </h1>
          <button
            type="button"
            className="booking-confirmation-close"
            aria-label="Close confirmation and return to profile"
            onClick={onViewProfile}
          >
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </div>
      )}
      <button
        type="button"
        className="booking-confirmation-back"
        aria-label="Back to consultant profile"
        onClick={onViewProfile}
      >
        <i className="bi bi-chevron-left" aria-hidden="true"></i>
      </button>

      <div className="booking-confirmation-details">
        {!isConsultingBooking && <h1>Your session was scheduled</h1>}
        {bookingType === "hourly" && (
          <h2 className="booking-confirmation-session-label">
            Session Details
          </h2>
        )}
        <div className="booking-confirmation-session">
          <div className="booking-confirmation-session-day">
            <span>{selectedSlot.dayLabel.split(" ")[0]}</span>
            {selectedSlot.dayLabel.includes(" ") && (
              <span>
                {new Date(
                  2000,
                  Number(selectedSlot.dayLabel.split(" ")[1].split("/")[0]) - 1,
                  Number(selectedSlot.dayLabel.split(" ")[1].split("/")[1]),
                ).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            )}
          </div>

          <div className="booking-confirmation-session-info">
            <p>
              {sessionDuration}-Minute{" "}
              {bookingType === "strategy" ? "Strategy" : "Consulting"} Session
              with Cynthia
            </p>
            <strong>
              {getSessionTimeRange(selectedSlot.time, sessionDuration)}
            </strong>
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
                  setCalendarOpen(false);
                }}
              >
                <i className="bi bi-calendar-event" aria-hidden="true"></i>
                Add to Google Calendar
              </button>

              <button
                type="button"
                onClick={() => {
                  setCalendarOpen(false);
                }}
              >
                <i className="bi bi-calendar-week" aria-hidden="true"></i>
                Add to iCal/Outlook
              </button>
            </div>
          )}
        </div>

        {!isConsultingBooking && reminderContent}
        {isConsultingBooking && messageContent}
      </div>

      <div className="booking-confirmation-preparation">
        {isConsultingBooking && reminderContent}

        {!isConsultingBooking && (
          <>
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
          </>
        )}

        {!isConsultingBooking && messageContent}

        {!isConsultingBooking && (
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
        )}
      </div>

      <dialog
        ref={verificationDialogRef}
        className="booking-verification-dialog"
        aria-labelledby="booking-verification-title"
      >
        <form method="dialog">
          <button
            type="submit"
            className="booking-verification-close"
            aria-label="Close phone verification"
          >
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </form>

        <h2 id="booking-verification-title">Confirm your phone number</h2>

        <p>Enter the 6-digit code Lawly just sent to {fullPhoneNumber}</p>

        <form
          className="booking-verification-form"
          onSubmit={(event) => {
            event.preventDefault();

            if (verificationCode !== "123456") {
              setVerificationError("Incorrect code. Use 123456 for this demo.");
              return;
            }

            verificationDialogRef.current?.close();
            setShowVerificationSuccess(true);
          }}
        >
          <input
            id="booking-verification-code"
            aria-label="Verification code"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            pattern="[0-9]{6}"
            value={verificationCode}
            onChange={(event) => {
              setVerificationCode(event.target.value);
              setVerificationError("");
            }}
            aria-describedby="booking-verification-error"
            aria-invalid={Boolean(verificationError)}
            required
          />

          <p id="booking-verification-error" role="alert">
            {verificationError}
          </p>
          <div className="booking-verification-help">
            <span>Didn't get a text?</span>

            <button
              type="button"
              className="booking-verification-resend"
              onClick={() => {
                setVerificationCode("");
                setVerificationError("");
                setVerificationNotice(
                  "No SMS is sent in this preview. Use code 123456.",
                );
              }}
            >
              Send again
            </button>

            <span>or</span>

            <button
              type="button"
              className="booking-verification-change"
              onClick={() => {
                verificationDialogRef.current?.close();
                document.getElementById("booking-phone")?.focus();
              }}
            >
              change number
            </button>
          </div>

          <p role="status">{verificationNotice}</p>
          <button type="submit" className="primary-button">
            Verify
          </button>
        </form>
      </dialog>

      {showVerificationSuccess && (
        <div
          className="booking-verification-success-overlay"
          onClick={() => setShowVerificationSuccess(false)}
        >
          <button
            type="button"
            className="booking-verification-success-dismiss"
            aria-label="Dismiss confirmation"
          />

          <div className="booking-verification-success" role="status">
            <span
              className="booking-verification-success-icon"
              aria-hidden="true"
            >
              <i className="bi bi-check"></i>
            </span>

            <span>Your phone number has been successfully added</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default BookingConfirmation;
