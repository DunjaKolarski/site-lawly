import "./FindAdvisors.css";
import { useEffect, useState } from "react";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import FindAdvisorsHero from "../components/findAdvisors/FindAdvisorsHero";
import FindAdvisorsMatch from "../components/findAdvisors/FindAdvisorsMatch";
import FindAdvisorsFilters from "../components/findAdvisors/FindAdvisorsFilters";
import FindAdvisorsSearch from "../components/findAdvisors/FindAdvisorsSearch";
import FindAdvisorsSort from "../components/findAdvisors/FindAdvisorsSort";
import FindAdvisorsList from "../components/findAdvisors/FindAdvisorsList";
import FindAdvisorsPagination from "../components/findAdvisors/FindAdvisorsPagination";
import FindAdvisorsSaved from "../components/findAdvisors/FindAdvisorsSaved";
import { initialSavedConsultants } from "../components/findAdvisors/savedConsultants";
import Footer from "../components/layout/Footer";

function FindAdvisors() {
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [savedConsultants, setSavedConsultants] = useState(
    initialSavedConsultants,
  );
  const [savedVisible, setSavedVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    function handleChange(event: MediaQueryListEvent) {
      setIsMobile(event.matches);
      setPage(1);
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const consultantsPerPage = isMobile ? 8 : 16;
  const totalPages = 10;
  function removeSavedConsultant(id: number) {
    setSavedConsultants((previous) =>
      previous.filter((consultant) => consultant.id !== id),
    );
  }
  return (
    <>
      <EventsHeader />
      <div className="find-advisors-layout">
        <EventsSideBar />
        <main className="find-advisors-content">
          <FindAdvisorsHero />
          <FindAdvisorsMatch />
          {savedVisible && savedConsultants.length > 0 && (
            <FindAdvisorsSaved
              consultants={savedConsultants}
              onRemove={removeSavedConsultant}
              onClose={() => setSavedVisible(false)}
            />
          )}
          <div
            className={`find-advisors-listing${filtersOpen ? " find-advisors-filters-open" : ""}`}
          >
            <button
              type="button"
              className="find-advisors-filters-toggle"
              aria-expanded={filtersOpen}
              aria-controls="find-advisors-filters"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <i className="bi bi-funnel" aria-hidden="true"></i>
              Filters
            </button>

            <FindAdvisorsFilters isMobile={isMobile} />

            <div className="find-advisors-results">
              <FindAdvisorsSearch />
              <FindAdvisorsSort />
              <FindAdvisorsList
                page={page}
                consultantsPerPage={consultantsPerPage}
              />
              <FindAdvisorsPagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default FindAdvisors;
