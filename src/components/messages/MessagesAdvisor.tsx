import "./MessagesAdvisor.css";
import cynthia from "../../assets/profile2.png";
import { useState } from "react";

type AdvisorStatus = "new" | "in-progress" | "completed";

type MessagesAdvisorProps = {
  onBack: () => void;
  status: AdvisorStatus;
  showRecommendation?: boolean;
};

function MessagesAdvisor({
  onBack,
  status,
  showRecommendation = false,
}: MessagesAdvisorProps) {
  const [filesOpen, setFilesOpen] = useState(status === "in-progress");
  const [timeLogOpen, setTimeLogOpen] = useState(status === "in-progress");

  return (
    <aside className={`messages-advisor messages-advisor-${status}`}>
      <button
        type="button"
        className="messages-advisor-back"
        aria-label="Back to conversation"
        onClick={onBack}
      >
        <i className="bi bi-chevron-left" aria-hidden="true"></i>
      </button>
      <div className="messages-advisor-profile">
        <img src={cynthia} alt="Cynthia L." />
        <h2>Cynthia L.</h2>
        <p>
          Time Balance{" "}
          <strong>{status === "in-progress" ? "3h 4m" : "0h 0m"}</strong>
        </p>

        {status === "new" && (
          <p className="messages-advisor-empty-time">
            You don't have any time ordered with this consultant. Schedule a
            session to get started.
          </p>
        )}
      </div>

      <div className="messages-advisor-time">
        {status !== "new" && (
          <div className="messages-advisor-time-log">
            <div className="messages-advisor-time-heading">
              <h3>Time Log</h3>
              <button
                type="button"
                aria-label={timeLogOpen ? "Hide time log" : "Show time log"}
                aria-expanded={timeLogOpen}
                onClick={() => setTimeLogOpen(!timeLogOpen)}
              >
                <i
                  className={
                    timeLogOpen ? "bi bi-chevron-up" : "bi bi-chevron-down"
                  }
                  aria-hidden="true"
                ></i>
              </button>
            </div>
            {timeLogOpen && (
              <>
                <p className="messages-advisor-time-used">
                  <span>Total Time Used</span>
                  <span>2h 56m</span>
                </p>

                <div className="messages-advisor-time-entry">
                  <div>
                    <p>Draft 2 review</p>
                    <span>Offline</span>
                  </div>
                  <div>
                    <p>1h 20m</p>
                    <span>03/21/25</span>
                  </div>
                </div>

                <div className="messages-advisor-time-entry">
                  <div>
                    <p>Draft 1 review</p>
                    <span>Offline</span>
                  </div>
                  <div>
                    <p>36m</p>
                    <span>03/20/25</span>
                  </div>
                </div>

                <div className="messages-advisor-time-entry">
                  <div>
                    <p>Brainstormed essay ideas</p>
                  </div>
                  <div>
                    <p>1h</p>
                    <span>03/20/25</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {status !== "completed" && (
          <button
            type="button"
            className="primary-button messages-advisor-schedule"
          >
            <i className="bi bi-calendar3" aria-hidden="true"></i>
            Schedule session
          </button>
        )}
      </div>
      {status === "new" && showRecommendation && (
        <div className="messages-advisor-recommendation">
          <h3>Cynthia's recommendation</h3>

          <div className="messages-advisor-offering">
            <h4>Natasha's Interview Prep</h4>
            <p>6 hours of coaching</p>
            <p>
              $560 · <span>Save $55</span>
            </p>

            <div className="messages-advisor-offering-bottom">
              <button type="button" className="primary-button">
                Buy now
              </button>
              <span>Expires in 4 days</span>
            </div>
          </div>
        </div>
      )}

      {status !== "new" && (
        <div className="messages-advisor-section">
          <h3>Upcoming Sessions</h3>
          <button type="button" className="messages-advisor-past-sessions">
            View Past Sessions
          </button>

          {status === "in-progress" ? (
            <>
              <div className="messages-advisor-session">
                <button
                  type="button"
                  className="messages-advisor-session-options"
                  aria-label="Options for today's session"
                >
                  <i className="bi bi-three-dots" aria-hidden="true"></i>
                </button>

                <div>
                  <strong>Today</strong>
                  <p>2:00 - 3:00 PM</p>
                </div>

                <button type="button" className="messages-advisor-join-button">
                  Join Now
                </button>
              </div>

              <div className="messages-advisor-session">
                <button
                  type="button"
                  className="messages-advisor-session-options"
                  aria-label="Options for Friday's session"
                >
                  <i className="bi bi-three-dots" aria-hidden="true"></i>
                </button>

                <div>
                  <strong>Friday, Jan. 28</strong>
                  <p>3:15 - 4:15 PM</p>
                </div>

                <div className="messages-advisor-session-menu">
                  <button type="button">
                    <i className="bi bi-pencil" aria-hidden="true"></i>
                    Reschedule
                  </button>
                  <button type="button">
                    <i className="bi bi-x" aria-hidden="true"></i>
                    Cancel
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="messages-advisor-empty">
              You don't have any upcoming sessions scheduled with Cynthia.
            </p>
          )}
        </div>
      )}

      <div className="messages-advisor-section">
        <div className="messages-advisor-section-heading">
          <h3>Files and Links</h3>

          {status !== "new" && (
            <button
              type="button"
              aria-label={
                filesOpen ? "Hide files and links" : "Show files and links"
              }
              aria-expanded={filesOpen}
              onClick={() => setFilesOpen(!filesOpen)}
            >
              <i
                className={
                  filesOpen ? "bi bi-chevron-up" : "bi bi-chevron-down"
                }
                aria-hidden="true"
              ></i>
            </button>
          )}
        </div>

        {status === "new" ? (
          <p className="messages-advisor-empty">
            You don't have any uploaded materials.
          </p>
        ) : (
          filesOpen && (
            <div className="messages-advisor-files">
              <button type="button">Essay1.pdf</button>
              <button type="button">Essaydraft.v2.docx</button>
              <button type="button">Essaydraft.v3.docx</button>
              <button type="button">Resume.pdf</button>
            </div>
          )
        )}
      </div>

      {status !== "new" && (
        <div className="messages-advisor-actions">
          <button type="button">
            <i className="bi bi-credit-card" aria-hidden="true"></i>
            <span>
              Buy more consulting
              <small>Add more time to your balance</small>
            </span>
          </button>

          <button type="button">
            <i className="bi bi-clock-history" aria-hidden="true"></i>
            <span>View order details</span>
          </button>

          <button type="button">
            <i className="bi bi-star" aria-hidden="true"></i>
            <span>
              Leave a review
              <small>Rate your experience with Cynthia</small>
            </span>
          </button>
        </div>
      )}
    </aside>
  );
}

export default MessagesAdvisor;
