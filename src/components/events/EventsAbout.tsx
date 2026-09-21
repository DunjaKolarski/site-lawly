import "./EventsAbout.css";
import hostImage from "../../assets/profile2.png";

function EventsAbout() {
  return (
    <section className="events-about">
      <h1>Drafting The Perfect Essay</h1>
      <div className="events-about-host">
        <p>Hosted by:</p>
        <img src={hostImage} alt="Cynthia L." />
        <span>Cynthia L.</span>
      </div>
      <div className="events-about-description">
        <h4>About this event</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}

export default EventsAbout;
