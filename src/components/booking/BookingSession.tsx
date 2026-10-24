import "./BookingSession.css";
import { useRef } from "react";
import logo from "../../assets/logo.png";
import type { BookingPackage } from "./bookingPackage";
import { availableDays } from "./bookingAvailability";

export type SelectedSlot = {
  dayId: string;
  dayLabel: string;
  time: string;
};

type BookingSessionProps = {
  bookingType: "strategy" | "hourly" | "package";
  selectedPackage: BookingPackage;
  sessionDuration: number;
  onDurationChange: (duration: number) => void;
  selectedSlot: SelectedSlot | null;
  onSelectSlot: (slot: SelectedSlot) => void;
  onBack: () => void;
  onNext: () => void;
};

function BookingSession({
  bookingType,
  selectedPackage,
  sessionDuration,
  onDurationChange,
  selectedSlot,
  onSelectSlot,
  onBack,
  onNext,
}: BookingSessionProps) {
  const datesRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    moved: false,
    startY: 0,
    startScroll: 0,
  });

  return (
    <section
      className={
        bookingType === "package"
          ? "booking-session booking-session-package"
          : bookingType === "hourly"
            ? "booking-session booking-session-hourly"
            : "booking-session"
      }
      aria-labelledby="booking-session-heading"
    >
      <button
        type="button"
        className="booking-session-back"
        aria-label="Back to offerings"
        onClick={onBack}
      >
        <i className="bi bi-chevron-left" aria-hidden="true"></i>
      </button>
      <div className="booking-session-body">
        <div className="booking-powered">
          <span>Powered by</span>
          <img src={logo} alt="Lawly" />
        </div>

        <div className="booking-session-heading">
          <h2 id="booking-session-heading">
            {bookingType === "package" ? (
              <>
                <span className="booking-session-package-title-desktop">
                  ad
                </span>
                <span className="booking-session-package-title-mobile">
                  Book Your First Consulting Session
                </span>
              </>
            ) : bookingType === "strategy" ? (
              "Book a 15-Min Strategy Session"
            ) : (
              "Book Your First Consulting Session"
            )}
          </h2>
          <p
            className={
              bookingType === "hourly"
                ? "booking-session-hourly-description"
                : ""
            }
          >
            Your Strategy Session price of $X will be credited to any future
            purchase from Cynthia.
          </p>
        </div>
        {bookingType !== "strategy" && (
          <div className="booking-session-duration">
            <h3>Session length</h3>

            <div className="booking-session-duration-options">
              {[15, 30, 45, 60].map((duration) => (
                <button
                  key={duration}
                  type="button"
                  className={
                    sessionDuration === duration
                      ? "booking-session-duration-active"
                      : ""
                  }
                  aria-pressed={sessionDuration === duration}
                  onClick={() => onDurationChange(duration)}
                >
                  {duration === 60 ? "1 hour" : `${duration} min`}
                </button>
              ))}
            </div>
          </div>
        )}
        <div
          ref={datesRef}
          className="booking-session-dates"
          role="region"
          aria-label="Available session times"
          tabIndex={0}
          onPointerDown={(event) => {
            if (
              event.pointerType !== "mouse" ||
              event.button !== 0 ||
              window.matchMedia("(max-width: 767px)").matches
            ) {
              return;
            }

            drag.current = {
              active: true,
              moved: false,
              startY: event.clientY,
              startScroll: event.currentTarget.scrollTop,
            };
          }}
          onPointerMove={(event) => {
            if (!drag.current.active) return;

            const distance = event.clientY - drag.current.startY;

            if (!drag.current.moved && Math.abs(distance) < 5) return;

            if (!drag.current.moved) {
              drag.current.moved = true;
              event.currentTarget.setPointerCapture(event.pointerId);
              event.currentTarget.classList.add("booking-session-dragging");
            }

            event.currentTarget.scrollTop = drag.current.startScroll - distance;
          }}
          onPointerUp={(event) => {
            drag.current.active = false;
            event.currentTarget.classList.remove("booking-session-dragging");

            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
          }}
          onPointerCancel={(event) => {
            drag.current.active = false;
            drag.current.moved = false;
            event.currentTarget.classList.remove("booking-session-dragging");
          }}
          onLostPointerCapture={(event) => {
            drag.current.active = false;
            event.currentTarget.classList.remove("booking-session-dragging");
          }}
          onPointerLeave={() => {
            if (!drag.current.moved) {
              drag.current.active = false;
            }
          }}
          onClickCapture={(event) => {
            if (drag.current.moved && event.detail > 0) {
              event.preventDefault();
              event.stopPropagation();
              drag.current.moved = false;
            }
          }}
        >
          {availableDays.map((day) => (
            <div key={day.id} className="booking-session-day">
              <h3>{day.label}</h3>

              <div className="booking-session-times">
                {day.times.map((time) => {
                  const isSelected =
                    selectedSlot?.dayId === day.id &&
                    selectedSlot.time === time;

                  return (
                    <button
                      key={time}
                      type="button"
                      className={
                        isSelected
                          ? "booking-session-time booking-session-time-selected"
                          : "booking-session-time"
                      }
                      aria-label={`${day.label} at ${time}`}
                      aria-pressed={isSelected}
                      onClick={() =>
                        onSelectSlot({
                          dayId: day.id,
                          dayLabel: day.label,
                          time,
                        })
                      }
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="booking-session-summary">
        <p>
          Your Strategy Session price of $X will be credited to any future
          purchase from Cynthia.
        </p>
        {bookingType !== "strategy" && (
          <div className="booking-session-contact">
            <p>Looking for a time not listed?</p>
            <button type="button">Send a message to Cynthia</button>
          </div>
        )}
        {selectedSlot && (
          <p className="booking-session-selection">
            {selectedSlot.dayLabel} at {selectedSlot.time}
          </p>
        )}
        {bookingType === "package" && (
          <p className="booking-session-package-name">{selectedPackage.name}</p>
        )}
        <div className="booking-session-actions">
          <strong>
            {bookingType === "package"
              ? `$${selectedPackage.price}`
              : bookingType === "strategy"
                ? "$25 • 15 minutes"
                : `$66 / hour • ${
                    sessionDuration === 60
                      ? "1 hour"
                      : `${sessionDuration} minutes`
                  }`}
          </strong>

          <button
            type="button"
            className="primary-button"
            disabled={!selectedSlot}
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
      <button
        type="button"
        className="booking-session-scroll"
        onClick={() =>
          datesRef.current?.scrollBy({
            top: 200,
            behavior: "smooth",
          })
        }
      >
        Scroll to see more
        <i className="bi bi-chevron-down" aria-hidden="true"></i>
      </button>
    </section>
  );
}

export default BookingSession;
