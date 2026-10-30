import logo from "../../assets/logo.png";
import profileImage from "../../assets/profile2.png";
import "./BookingHours.css";
import type { SelectedSlot } from "./BookingSession";
import { getSessionTimeRange } from "./bookingTime";
import { getConsultingPrice } from "./bookingPrice";

type BookingHoursProps = {
  selectedSlot: SelectedSlot;
  sessionDuration: number;
  selectedHours: number;
  onSelectHours: (hours: number) => void;
  onBack: () => void;
  onNext: () => void;
};

function BookingHours({
  selectedSlot,
  sessionDuration,
  selectedHours,
  onSelectHours,
  onBack,
  onNext,
}: BookingHoursProps) {
  return (
    <section className="booking-hours">
      <div className="booking-hours-overview">
        <div className="booking-hours-overview-content">
          <div className="booking-powered">
            <span>Powered by</span>
            <img src={logo} alt="Lawly" />
          </div>

          <h1>Hourly Consulting with</h1>

          <div className="booking-hours-photo">
            <img src={profileImage} alt="Cynthia" />
            <span>Pro</span>
          </div>

          <div className="booking-hours-consultant">
            <h2>Cynthia</h2>

            <div className="booking-hours-rating">
              <i className="bi bi-star-fill" aria-hidden="true"></i>
              <span>5.0</span>
              <small>(10)</small>
            </div>
          </div>

          <div className="booking-hours-session">
            <h2>Session Details</h2>

            <div className="booking-hours-session-card">
              <div className="booking-hours-session-day">
                <span>{selectedSlot.dayLabel.split(" ")[0]}</span>
                {selectedSlot.dayLabel.includes(" ") && (
                  <span>
                    {new Date(
                      2000,
                      Number(
                        selectedSlot.dayLabel.split(" ")[1].split("/")[0],
                      ) - 1,
                      Number(selectedSlot.dayLabel.split(" ")[1].split("/")[1]),
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                )}
              </div>

              <div className="booking-hours-session-info">
                <p>{sessionDuration}-Minute Consulting Session with Cynthia</p>
                <strong>
                  {getSessionTimeRange(selectedSlot.time, sessionDuration)}
                </strong>
              </div>
            </div>

            <p className="booking-hours-note">
              Session balances cover both live sessions and offline work
              performed by your consultant, including document edits and written
              feedback. Offline work time will be deducted from the remaining
              balance.
            </p>
          </div>
        </div>
      </div>

      <div className="booking-hours-selection">
        <button
          type="button"
          className="booking-hours-back"
          aria-label="Back to available times"
          onClick={onBack}
        >
          <i className="bi bi-chevron-left" aria-hidden="true"></i>
        </button>
        <div className="booking-hours-mobile-powered">
          <div className="booking-powered">
            <span>Powered by</span>
            <img src={logo} alt="Lawly" />
          </div>
        </div>
        <fieldset className="booking-hours-options">
          <legend>Select a quantity of consulting time</legend>
          <p className="booking-hours-mobile-description">
            Your Strategy Session price of $X will be credited to your purchase
            with Cynthia.
          </p>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((hours) => (
            <label key={hours} className="booking-hours-option">
              <input
                type="radio"
                name="consulting-hours"
                value={hours}
                checked={selectedHours === hours}
                onChange={() => onSelectHours(hours)}
              />

              <span className="booking-hours-option-label">
                {hours} {hours === 1 ? "hour" : "hours"}
              </span>

              {hours >= 3 && (
                <span className="booking-hours-saving">
                  Save ${hours * 66 - getConsultingPrice(hours)}
                </span>
              )}

              <span className="booking-hours-price">
                ${getConsultingPrice(hours)}
              </span>
            </label>
          ))}
        </fieldset>

        <button type="button" className="primary-button" onClick={onNext}>
          Next
        </button>
      </div>
    </section>
  );
}

export default BookingHours;
