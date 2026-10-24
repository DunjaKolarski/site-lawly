import "./ScheduleSession.css";
import { useRef, useState } from "react";
import { availableDays } from "../booking/bookingAvailability";
import type { SelectedSlot } from "../booking/BookingSession";
import { getSessionTimeRange } from "../booking/bookingTime";

function ScheduleSession() {
  const [sessionType, setSessionType] = useState<"strategy" | "hourly">(
    "strategy",
  );

  const [sessionDuration, setSessionDuration] = useState(15);

  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);

  const datesRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    moved: false,
    startY: 0,
    startScroll: 0,
  });

  return (
    <div className="schedule-session">
      <header className="schedule-session-header">
        <h2 id="schedule-session-title">Schedule Session</h2>

        <form method="dialog">
          <button type="submit" aria-label="Close scheduling">
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </form>
      </header>

      <div className="schedule-session-content">
        <div className="schedule-session-overview">
          <h3>Schedule a session with Cynthia</h3>
          <p>
            Time Balance <span>0h 0m</span>
          </p>

          <div className="schedule-session-type">
            <h4>Select session type</h4>

            <div className="schedule-session-type-options">
              <button
                type="button"
                className={sessionType === "strategy" ? "primary-button" : ""}
                aria-pressed={sessionType === "strategy"}
                onClick={() => {
                  setSessionType("strategy");
                  setSessionDuration(15);
                }}
              >
                15-Minute Strategy Session
              </button>

              <button
                type="button"
                className={sessionType === "hourly" ? "primary-button" : ""}
                aria-pressed={sessionType === "hourly"}
                onClick={() => {
                  setSessionType("hourly");
                  setSessionDuration(30);
                }}
              >
                Consulting Session
              </button>
            </div>
          </div>

          {selectedSlot && (
            <div className="schedule-session-summary">
              <div className="schedule-session-summary-day">
                {selectedSlot.dayLabel}
              </div>

              <div className="schedule-session-summary-info">
                <p>
                  {sessionDuration}-Minute{" "}
                  {sessionType === "strategy" ? "Strategy" : "Consulting"}{" "}
                  Session with Cynthia
                </p>
                <strong>
                  {getSessionTimeRange(selectedSlot.time, sessionDuration)}
                </strong>
              </div>
            </div>
          )}
          {sessionType === "strategy" && (
            <div className="schedule-session-message">
              <label htmlFor="schedule-session-message">
                Add a Message for Cynthia:
              </label>
              <textarea id="schedule-session-message" />
            </div>
          )}
        </div>

        <div className="schedule-session-calendar">
          <p>
            Cynthia's Calendar <span>• All times shown in EST</span>
          </p>

          <div className="schedule-session-duration">
            <h4>Session length</h4>

            <div className="schedule-session-duration-options">
              {[15, 30, 45, 60].map((duration) => (
                <button
                  key={duration}
                  type="button"
                  className={
                    sessionDuration === duration ? "primary-button" : ""
                  }
                  aria-pressed={sessionDuration === duration}
                  disabled={sessionType === "strategy" && duration !== 15}
                  onClick={() => setSessionDuration(duration)}
                >
                  {duration === 60 ? "1 hour" : `${duration} min`}
                </button>
              ))}
            </div>
          </div>

          <div
            ref={datesRef}
            className="schedule-session-dates"
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
                event.currentTarget.classList.add("schedule-session-dragging");
              }

              event.currentTarget.scrollTop =
                drag.current.startScroll - distance;
            }}
            onPointerUp={(event) => {
              drag.current.active = false;
              event.currentTarget.classList.remove("schedule-session-dragging");

              if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                event.currentTarget.releasePointerCapture(event.pointerId);
              }
            }}
            onPointerCancel={(event) => {
              drag.current.active = false;
              drag.current.moved = false;
              event.currentTarget.classList.remove("schedule-session-dragging");
            }}
            onLostPointerCapture={(event) => {
              drag.current.active = false;
              event.currentTarget.classList.remove("schedule-session-dragging");
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
              <div className="schedule-session-day" key={day.id}>
                <h4>{day.label}</h4>

                <div className="schedule-session-times">
                  {day.times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={
                        selectedSlot?.dayId === day.id &&
                        selectedSlot.time === time
                          ? "primary-button"
                          : ""
                      }
                      aria-label={`${day.label} at ${time}`}
                      aria-pressed={
                        selectedSlot?.dayId === day.id &&
                        selectedSlot.time === time
                      }
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="schedule-session-actions">
        <button
          type="button"
          className="primary-button"
          disabled={!selectedSlot}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ScheduleSession;
