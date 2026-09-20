import "./Events.css";
import { useState } from "react";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import EventsFilters from "../components/events/EventsFilters";
import EventsList from "../components/events/EventsList";
import EventsNoResults from "../components/events/EventsNoResults";
import Footer from "../components/layout/Footer";

function Events() {
  const [category, setCategory] = useState("");

  return (
    <>
      <EventsHeader />

      <div className="events-layout">
        <EventsSideBar />

        <main className="events-content">
          <EventsFilters category={category} onCategoryChange={setCategory} />

          {category === "interview-preparation" ? (
            <EventsNoResults />
          ) : (
            <EventsList />
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Events;
