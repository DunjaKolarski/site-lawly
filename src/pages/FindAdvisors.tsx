import "./FindAdvisors.css";
import { useState } from "react";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import FindAdvisorsHero from "../components/findAdvisors/FindAdvisorsHero";
import FindAdvisorsMatch from "../components/findAdvisors/FindAdvisorsMatch";
import FindAdvisorsFilters from "../components/findAdvisors/FindAdvisorsFilters";
import FindAdvisorsSearch from "../components/findAdvisors/FindAdvisorsSearch";
import FindAdvisorsSort from "../components/findAdvisors/FindAdvisorsSort";
import FindAdvisorsList from "../components/findAdvisors/FindAdvisorsList";
import FindAdvisorsPagination from "../components/findAdvisors/FindAdvisorsPagination";
import Footer from "../components/layout/Footer";

function FindAdvisors() {
  const [page, setPage] = useState(1);
  return (
    <>
      <EventsHeader />
      <div className="find-advisors-layout">
        <EventsSideBar />
        <main className="find-advisors-content">
          <FindAdvisorsHero />
          <FindAdvisorsMatch />
          <div className="find-advisors-listing">
            <FindAdvisorsFilters />
            <div className="find-advisors-results">
              <FindAdvisorsSearch />
              <FindAdvisorsSort />
              <FindAdvisorsList page={page} />
              <FindAdvisorsPagination page={page} setPage={setPage} />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default FindAdvisors;
