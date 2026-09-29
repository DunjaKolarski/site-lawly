import "./FindAdvisors.css";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import FindAdvisorsHero from "../components/findAdvisors/FindAdvisorsHero";
import FindAdvisorsMatch from "../components/findAdvisors/FindAdvisorsMatch";
import FindAdvisorsFilters from "../components/findAdvisors/FindAdvisorsFilters";
import Footer from "../components/layout/Footer";

function FindAdvisors() {
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
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default FindAdvisors;
