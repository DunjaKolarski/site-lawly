import "./MessagesSession.css";
import { useState } from "react";

function MessagesSession() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionStatus, setSessionStatus] = useState("pending");
  const [calendarOpen, setCalendarOpen] = useState(false);

  if (sessionStatus === "canceled") {
    return null;
  }

  return (
    <section className="messages-session">
      <button
        type="button"
        className={
          isOpen
            ? "messages-session-toggle messages-session-toggle-open"
            : "messages-session-toggle"
        }
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Cynthia scheduled one session with you</span>
        <i
          className={isOpen ? "bi bi-chevron-up" : "bi bi-chevron-down"}
          aria-hidden="true"
        ></i>
      </button>

      {isOpen && (
        <div className="messages-session-details">
          <p>
            Please chat with Cynthia to coordinate any reschedules or
            cancellations.
          </p>

          <div className="messages-session-card">
            {sessionStatus === "canceling" && (
              <p className="messages-session-notice">
                Are you sure you want to cancel this session?
              </p>
            )}
            {sessionStatus === "confirmed" && (
              <p className="messages-session-notice">
                Your session with Cynthia has been confirmed.
              </p>
            )}

            <div className="messages-session-date-row">
              <div className="messages-session-date">
                <p>Monday, 5/26</p>
                <p>1:30PM - 2:45PM EST</p>
              </div>

              {sessionStatus === "canceling" && (
                <div className="messages-session-cancel-actions">
                  <button
                    type="button"
                    className="messages-session-secondary"
                    onClick={() => setSessionStatus("canceled")}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => setSessionStatus("pending")}
                  >
                    Go back
                  </button>
                </div>
              )}

              {sessionStatus === "confirmed" && (
                <div className="messages-session-calendar">
                  <button
                    type="button"
                    className="messages-session-calendar-toggle"
                    aria-expanded={calendarOpen}
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
                    <div className="messages-session-calendar-options">
                      <button type="button">
                        <i className="bi bi-google" aria-hidden="true"></i>
                        Add to Google Calendar
                      </button>
                      <button type="button">
                        <i className="bi bi-calendar3" aria-hidden="true"></i>
                        Add to iCal/Outlook
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {sessionStatus === "pending" && (
              <>
                <p className="messages-session-previous">
                  Previously scheduled for Tuesday, 5/27 from 10:30AM - 11:45AM
                  EST
                </p>

                <div className="messages-session-actions">
                  <button type="button" className="messages-session-secondary">
                    Reschedule
                  </button>
                  <button
                    type="button"
                    className="messages-session-secondary"
                    onClick={() => setSessionStatus("canceling")}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => setSessionStatus("confirmed")}
                  >
                    Confirm
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default MessagesSession;
