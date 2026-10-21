import "./MessagesAdvisor.css";
import cynthia from "../../assets/profile2.png";

function MessagesAdvisor() {
  return (
    <aside className="messages-advisor">
      <div className="messages-advisor-profile">
        <img src={cynthia} alt="Cynthia L." />
        <h2>Cynthia L.</h2>
        <p>
          Time Balance <strong>3h 4m</strong>
        </p>
      </div>

      <div className="messages-advisor-time">
        <div className="messages-advisor-time-log">
          <div className="messages-advisor-time-heading">
            <h3>Time Log</h3>
            <i className="bi bi-chevron-up" aria-hidden="true"></i>
          </div>

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
        </div>

        <button
          type="button"
          className="primary-button messages-advisor-schedule"
        >
          <i className="bi bi-calendar3" aria-hidden="true"></i>
          Schedule session
        </button>
      </div>

      <div className="messages-advisor-section">
        <h3>Upcoming Sessions</h3>
        <button type="button" className="messages-advisor-past-sessions">
          View Past Sessions
        </button>

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
        </div>
      </div>

      <div className="messages-advisor-section">
        <div className="messages-advisor-section-heading">
          <h3>Files and Links</h3>
          <i className="bi bi-chevron-up" aria-hidden="true"></i>
        </div>

        <div className="messages-advisor-files">
          <button type="button">Essay1.pdf</button>
          <button type="button">Essaydraft.v2.docx</button>
          <button type="button">Essaydraft.v3.docx</button>
          <button type="button">Resume.pdf</button>
        </div>
      </div>

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
    </aside>
  );
}

export default MessagesAdvisor;
