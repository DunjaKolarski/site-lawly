import "./EventsList.css";
import { useEffect, useState } from "react";
import EventsCard from "./EventsCard";

const events = Array.from({ length: 120 }, (_, index) => ({
  id: index + 1,
}));

function EventsList() {
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    function handleChange(event: MediaQueryListEvent) {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  const eventsPerPage = 12;
  const startIndex = (page - 1) * eventsPerPage;
  const currentEvents = isMobile
    ? events
    : events.slice(startIndex, startIndex + eventsPerPage);

  return (
    <section className="events-list">
      <div className="events-list-container">
        {currentEvents.map((event) => (
          <EventsCard key={event.id} />
        ))}
      </div>

      <div className="events-pagination">
        {page > 1 && (
          <button
            type="button"
            aria-label="Previous page"
            onClick={() => setPage(page - 1)}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
        )}

        {page > 5 && (
          <>
            <button type="button" onClick={() => setPage(1)}>
              1
            </button>
            <button
              type="button"
              aria-label="Show pages 1 to 5"
              onClick={() => setPage(5)}
            >
              ...
            </button>
          </>
        )}

        {(page <= 5 ? [1, 2, 3, 4, 5] : [6, 7, 8, 9, 10]).map((number) => (
          <button
            key={number}
            type="button"
            className={page === number ? "events-page-active" : ""}
            aria-current={page === number ? "page" : undefined}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}

        {page <= 5 && (
          <>
            <button
              type="button"
              aria-label="Show pages 6 to 10"
              onClick={() => setPage(6)}
            >
              ...
            </button>
            <button type="button" onClick={() => setPage(10)}>
              10
            </button>
          </>
        )}

        {page < 10 && (
          <button
            type="button"
            aria-label="Next page"
            onClick={() => setPage(page + 1)}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        )}
      </div>
    </section>
  );
}

export default EventsList;
