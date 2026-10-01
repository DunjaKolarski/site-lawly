import "./SavedAdvisors.css";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import FindAdvisorsMatch from "../components/findAdvisors/FindAdvisorsMatch";
import FindAdvisorsFilters from "../components/findAdvisors/FindAdvisorsFilters";
import FindAdvisorsSearch from "../components/findAdvisors/FindAdvisorsSearch";
import FindAdvisorsSort from "../components/findAdvisors/FindAdvisorsSort";
import SavedAdvisorsList from "../components/savedAdvisors/SavedAdvisorsList";
import Footer from "../components/layout/Footer";

function SavedAdvisors() {
  return (
    <>
      <EventsHeader />
      <div className="saved-advisors-layout">
        <EventsSideBar />
        <main className="saved-advisors-content">
          <div className="saved-advisors-heading">
            <h1>Saved Consultants</h1>
          </div>

          <div className="saved-advisors-listing">
            <FindAdvisorsFilters isMobile={false} initiallyOpen={false} />

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
