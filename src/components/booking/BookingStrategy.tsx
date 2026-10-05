import "./BookingStrategy.css";
import { useRef, useState } from "react";
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

type SelectedSlot = {
  dayId: string;
  dayLabel: string;
  time: string;
};
type BookingStrategyProps = {
  onBack: () => void;
};

function BookingStrategy({ onBack }: BookingStrategyProps) {
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const datesRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    moved: false,
    startY: 0,
    startScroll: 0,
  });

  return (
    <section
      className="booking-strategy"
      aria-labelledby="booking-strategy-heading"
    >
      <button
        type="button"
        className="booking-strategy-back"
        aria-label="Back to offerings"
        onClick={onBack}
      >
        <i className="bi bi-chevron-left" aria-hidden="true"></i>
      </button>
      <div className="booking-strategy-body">
        <div className="booking-powered">
          <span>Powered by</span>
          <img src={logo} alt="Lawly" />
        </div>

        <div className="booking-strategy-heading">
          <h2 id="booking-strategy-heading">Book a 15-Min Strategy Session</h2>
          <p>
            Your Strategy Session price of $X will be credited to any future
            purchase from Cynthia.
          </p>
        </div>

        <div
          ref={datesRef}
          className="booking-strategy-dates"
          role="region"
          aria-label="Available strategy session times"
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
              event.currentTarget.classList.add("booking-strategy-dragging");
            }

            event.currentTarget.scrollTop = drag.current.startScroll - distance;
          }}
          onPointerUp={(event) => {
            drag.current.active = false;
            event.currentTarget.classList.remove("booking-strategy-dragging");

            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
          }}
          onPointerCancel={(event) => {
            drag.current.active = false;
            drag.current.moved = false;
            event.currentTarget.classList.remove("booking-strategy-dragging");
          }}
          onLostPointerCapture={(event) => {
            drag.current.active = false;
            event.currentTarget.classList.remove("booking-strategy-dragging");
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
            <div key={day.id} className="booking-strategy-day">
              <h3>{day.label}</h3>

              <div className="booking-strategy-times">
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
                          ? "booking-strategy-time booking-strategy-time-selected"
                          : "booking-strategy-time"
                      }
                      aria-label={`${day.label} at ${time}`}
                      aria-pressed={isSelected}
                      onClick={() =>
                        setSelectedSlot({
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
      <div className="booking-strategy-summary">
        <p>
          Your Strategy Session price of $X will be credited to any future
          purchase from Cynthia.
        </p>

        {selectedSlot && (
          <p className="booking-strategy-selection">
            {selectedSlot.dayLabel} at {selectedSlot.time}
          </p>
        )}

        <div className="booking-strategy-actions">
          <strong>$25 • 15 minutes</strong>

          <button
            type="button"
            className="primary-button"
            disabled={!selectedSlot}
          >
            Next
          </button>
        </div>
      </div>
      <button
        type="button"
        className="booking-strategy-scroll"
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

export default BookingStrategy;
