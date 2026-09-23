import "./EventsDetails.css";
import { useSearchParams } from "react-router-dom";
import EventsReview from "../components/events/EventsReview";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import EventsAbout from "../components/events/EventsAbout";
import EventsHost from "../components/events/EventsHost";
import EventsRegistration from "../components/events/EventsRegistration";
import EventsPast from "../components/events/EventsPast";
import Footer from "../components/layout/Footer";

type EventsDetailsProps = {
  isPast?: boolean;
};
function EventsDetails({ isPast = false }: EventsDetailsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const showReview = searchParams.get("review") === "true";

  function closeReview() {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("review");
    setSearchParams(nextParams, { replace: true });
  }
  return (
    <>
      <EventsHeader />

      <div className="events-details-layout">
        <EventsSideBar />

        <main className="events-details-content">
          <div className="events-details-container">
            <div className="events-details-left">
              <EventsAbout isPast={isPast} />
              <EventsHost />
            </div>
            {isPast ? <EventsPast /> : <EventsRegistration />}
          </div>
        </main>
      </div>

      <Footer />
      {showReview && <EventsReview onClose={closeReview} />}
    </>
  );
}

export default EventsDetails;
