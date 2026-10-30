import "./ScheduleSession.css";
import { useRef, useState } from "react";
import { availableDays } from "../booking/bookingAvailability";
import type { SelectedSlot } from "../booking/BookingSession";
import { getSessionTimeRange } from "../booking/bookingTime";
import BookingCheckout from "../booking/BookingCheckout";
import { bookingPackage } from "../booking/bookingPackage";
import BookingConfirmation from "../booking/BookingConfirmation";
import ScheduleSelection from "./ScheduleSelection";
import EventsHeader from "../events/EventsHeader";
import logo from "../../assets/logo.png";

type ScheduleSessionProps = {
  onClose: () => void;
};

function ScheduleSession({ onClose }: ScheduleSessionProps) {
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

  const [selectedHours, setSelectedHours] = useState(2);

  const [step, setStep] = useState<
    "times" | "selection" | "checkout" | "confirmation"
  >("times");

  const [purchaseType, setPurchaseType] = useState<"hourly" | "package">(
    "hourly",
  );
  const [selectedPackage, setSelectedPackage] = useState(bookingPackage);

  const checkoutType = sessionType === "strategy" ? "strategy" : purchaseType;

  return (
    <div className="schedule-session">
      <div className="schedule-session-mobile-header">
        <EventsHeader />
      </div>
      <header className="schedule-session-header">
        <button
          type="button"
          className="schedule-session-mobile-back"
          aria-label="Go back"
          onClick={() => {
            if (step === "times" || step === "confirmation") {
              onClose();
            } else if (step === "selection") {
              setStep("times");
            } else {
              setStep(sessionType === "strategy" ? "times" : "selection");
            }
          }}
        >
          <i className="bi bi-chevron-left" aria-hidden="true"></i>
        </button>
        <h2 id="schedule-session-title">Schedule Session</h2>

        <form method="dialog">
          <button type="submit" aria-label="Close scheduling">
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </form>
      </header>
      {step === "times" && (
        <>
          <div className="schedule-session-content">
            <div className="schedule-session-overview">
              <div className="schedule-session-powered">
                <span>Powered by</span>
                <img src={logo} alt="Lawly" />
              </div>
              <h3>Schedule a session with Cynthia</h3>
              <p>
                Time Balance <span>0h 0m</span>
              </p>

              <div className="schedule-session-type">
                <h4>Select session type</h4>

                <div className="schedule-session-type-options">
                  <button
                    type="button"
                    className={
                      sessionType === "strategy" ? "primary-button" : ""
                    }
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
                    <span>{selectedSlot.dayLabel.split(" ")[0]}</span>
                    {selectedSlot.dayLabel.includes(" ") && (
                      <span>
                        {new Date(
                          2000,
                          Number(
                            selectedSlot.dayLabel.split(" ")[1].split("/")[0],
                          ) - 1,
                          Number(
                            selectedSlot.dayLabel.split(" ")[1].split("/")[1],
                          ),
                        ).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    )}
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
                    event.currentTarget.classList.add(
                      "schedule-session-dragging",
                    );
                  }

                  event.currentTarget.scrollTop =
                    drag.current.startScroll - distance;
                }}
                onPointerUp={(event) => {
                  drag.current.active = false;
                  event.currentTarget.classList.remove(
                    "schedule-session-dragging",
                  );

                  if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                    event.currentTarget.releasePointerCapture(event.pointerId);
                  }
                }}
                onPointerCancel={(event) => {
                  drag.current.active = false;
                  drag.current.moved = false;
                  event.currentTarget.classList.remove(
                    "schedule-session-dragging",
                  );
                }}
                onLostPointerCapture={(event) => {
                  drag.current.active = false;
                  event.currentTarget.classList.remove(
                    "schedule-session-dragging",
                  );
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
              onClick={() => {
                if (sessionType === "strategy") {
                  setStep("checkout");
                } else {
                  if (selectedHours * 60 < sessionDuration) {
                    setSelectedHours(1);
                  }
                  setStep("selection");
                }
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
      {step === "selection" && selectedSlot && (
        <ScheduleSelection
          selectedSlot={selectedSlot}
          sessionDuration={sessionDuration}
          selectedHours={selectedHours}
          onSelectHours={setSelectedHours}
          onBack={() => setStep("times")}
          onNext={() => setStep("checkout")}
          purchaseType={purchaseType}
          onPurchaseTypeChange={setPurchaseType}
          selectedPackage={selectedPackage}
          onSelectPackage={setSelectedPackage}
        />
      )}

      {step === "checkout" && selectedSlot && (
        <BookingCheckout
          bookingType={checkoutType}
          selectedPackage={selectedPackage}
          sessionDuration={sessionDuration}
          selectedSlot={selectedSlot}
          onBack={() =>
            setStep(sessionType === "strategy" ? "times" : "selection")
          }
          submitLabel="Confirm payment and schedule"
          showFooter
          onBook={() => setStep("confirmation")}
          selectedHours={selectedHours}
        />
      )}
      {step === "confirmation" && selectedSlot && (
        <BookingConfirmation
          bookingType={checkoutType}
          sessionDuration={sessionDuration}
          selectedSlot={selectedSlot}
          scheduleMode
          onViewProfile={onClose}
        />
      )}
    </div>
  );
}

export default ScheduleSession;
