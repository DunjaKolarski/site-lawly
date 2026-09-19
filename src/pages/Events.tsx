import "./Events.css";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import EventsFilters from "../components/events/EventsFilters";
import EventsList from "../components/events/EventsList";
import Footer from "../components/layout/Footer";

function Events() {
  return (
    <>
      <EventsHeader />

      <div className="events-layout">
        <EventsSideBar />

        <main className="events-content">
          <EventsFilters />
          <EventsList />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Events;
