import "./BookingSession.css";
import { useRef } from "react";
import logo from "../../assets/logo.png";

const times = [
  "12:00 PM EST",
  "12:30 PM EST",
  "1:30 PM EST",
  "2:30 PM EST",
  "3:00 PM EST",
  "3:20 PM EST",
  "3:45 PM EST",
  "5:30 PM EST",
  "5:50 PM EST",
  "6:20 PM EST",
  "6:45 PM EST",
  "8:30 PM EST",
];

const availableDays = [
  { id: "today", label: "Today", times: times.slice(0, 8) },
  { id: "tomorrow", label: "Tomorrow", times: times.slice(0, 8) },
  { id: "may-26", label: "Monday 5/26", times },
  { id: "may-27", label: "Tuesday 5/27", times: times.slice(0, 4) },
  {
    id: "may-29",
    label: "Thursday 5/29",
    times: [...times.slice(0, 4), ...times.slice(8)],
  },
  { id: "june-4", label: "Monday 6/4", times },
  { id: "june-5", label: "Tuesday 6/5", times },
];

export type SelectedSlot = {
  dayId: string;
  dayLabel: string;
  time: string;
};

type BookingSessionProps = {
  bookingType: "strategy" | "hourly";
  sessionDuration: number;
  onDurationChange: (duration: number) => void;
  selectedSlot: SelectedSlot | null;
  onSelectSlot: (slot: SelectedSlot) => void;
  onBack: () => void;
  onNext: () => void;
};

function BookingSession({
  bookingType,
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
      className="booking-session"
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
            {bookingType === "strategy"
              ? "Book a 15-Min Strategy Session"
              : "Book Your First Consulting Session"}
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
        {bookingType === "hourly" && (
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

        {selectedSlot && (
          <p className="booking-session-selection">
            {selectedSlot.dayLabel} at {selectedSlot.time}
          </p>
        )}

        <div className="booking-session-actions">
          <strong>
            {bookingType === "strategy"
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
