import "./EventsSideBar.css";

function EventsSideBar() {
  return (
    <aside className="events-sidebar">
      <nav
        className="events-sidebar-navigation"
        aria-label="Account navigation"
      >
        <button type="button" aria-label="Overview">
          <i className="bi bi-check-circle"></i>
        </button>
        <button type="button" aria-label="Messages">
          <i className="bi bi-chat-dots"></i>
        </button>
        <button type="button" aria-label="Calendar">
          <i className="bi bi-calendar"></i>
        </button>
        <button type="button" aria-label="History">
          <i className="bi bi-clock-history"></i>
        </button>
        <button type="button" aria-label="Payments">
          <i className="bi bi-credit-card"></i>
        </button>
        <button type="button" aria-label="Profile">
          <i className="bi bi-person"></i>
        </button>
        <button
          className="events-sidebar-active"
          type="button"
          aria-label="Events"
        >
          <i className="bi bi-people"></i>
        </button>
      </nav>
    </aside>
  );
}

export default EventsSideBar;
