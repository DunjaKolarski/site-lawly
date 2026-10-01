import "./SavedAdvisors.css";
import { useEffect, useState } from "react";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import FindAdvisorsMatch from "../components/findAdvisors/FindAdvisorsMatch";
import FindAdvisorsFilters from "../components/findAdvisors/FindAdvisorsFilters";
import FindAdvisorsSearch from "../components/findAdvisors/FindAdvisorsSearch";
import FindAdvisorsSort from "../components/findAdvisors/FindAdvisorsSort";
import SavedAdvisorsList from "../components/savedAdvisors/SavedAdvisorsList";
import Footer from "../components/layout/Footer";

function SavedAdvisors() {
  const [filtersOpen, setFiltersOpen] = useState(false);
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

  return (
    <>
      <EventsHeader />
      <div className="saved-advisors-layout">
        <EventsSideBar />
        <main className="saved-advisors-content">
          <div className="saved-advisors-heading">
            <h1>Saved Consultants</h1>
          </div>

          <div
            className={`saved-advisors-listing${filtersOpen ? " find-advisors-filters-open" : ""}`}
          >
            <button
              type="button"
              className="saved-advisors-filters-toggle"
              aria-expanded={filtersOpen}
              aria-controls="find-advisors-filters"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <i className="bi bi-funnel" aria-hidden="true"></i>
              Filters
            </button>

            <FindAdvisorsFilters isMobile={isMobile} initiallyOpen={false} />

            <div className="saved-advisors-results">
              <FindAdvisorsSearch />
              <FindAdvisorsSort />
              <SavedAdvisorsList />
            </div>
          </div>

          <FindAdvisorsMatch />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SavedAdvisors;
