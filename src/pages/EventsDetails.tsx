import "./EventsDetails.css";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import EventsAbout from "../components/events/EventsAbout";
import EventsHost from "../components/events/EventsHost";
import EventsRegistration from "../components/events/EventsRegistration";
import Footer from "../components/layout/Footer";

function EventsDetails() {
  return (
    <>
      <EventsHeader />

      <div className="events-details-layout">
        <EventsSideBar />

        <main className="events-details-content">
          <div className="events-details-container">
            <div className="events-details-left">
              <EventsAbout />
              <EventsHost />
            </div>
            <EventsRegistration />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default EventsDetails;
