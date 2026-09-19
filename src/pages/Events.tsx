import "./Events.css";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import Footer from "../components/layout/Footer";

function Events() {
  return (
    <>
      <EventsHeader />

      <div className="events-layout">
        <EventsSideBar />

        <main className="events-content"></main>
      </div>

      <Footer />
    </>
  );
}

export default Events;
