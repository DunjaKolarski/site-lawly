import "./EventsHost.css";
import hostImage from "../../assets/profile2.png";
import logoDetails1 from "../../assets/logo-det-1.png";
import logoDetails2 from "../../assets/logo-det-2.png";
import logoDetails3 from "../../assets/logo-det-3.png";
import logoDetails4 from "../../assets/logo-det-4.png";
import logoDetails5 from "../../assets/logo-det-5.png";
import logoDetails6 from "../../assets/logo-det-6.png";
import logoDetails7 from "../../assets/logo-det-7.png";

function EventsHost() {
  return (
    <section className="events-host">
      <h4>About the host</h4>
      <div className="events-host-profile">
        <div className="events-host-info">
          <img src={hostImage} alt="Cynthia L." />
          <span>Cynthia L.</span>
          <div className="events-host-rating">
            <i className="bi bi-star-fill"></i>
            <span>4.8</span>
            <small>(10)</small>
          </div>
        </div>
        <button className="primary-button" type="button">
          View profile
        </button>
      </div>
      <p className="events-host-biography">
        Hi, I'm Cynthia, a practicing lawyer and proud Harvard Law School
        graduate. My journey through law school and into the legal profession
        has been both challenging and incredibly rewarding. Over the years, I've
        developed a deep understanding of what it takes to succeed in the
        competitive world of law, from crafting compelling applications to
        navigating the rigors of law school itself.
      </p>
      <div className="events-host-tags">
        <p>My Background:</p>
        <span>LLM</span>
        <span>LGBTQ+</span>
      </div>
      <div className="events-host-tags">
        <p>Specialized Experience:</p>
        <span>Public Interest</span>
        <span>Environmental Law</span>
      </div>
      <div className="events-host-schools">
        <p>Advised X+ Law School Applicants</p>
        <span>Has helped clients get into these schools:</span>
        <div className="events-host-school-logos">
          <img src={logoDetails1} alt="Yale University" />
          <img src={logoDetails2} alt="Stanford University" />
          <img src={logoDetails3} alt="Harvard University" />
          <img src={logoDetails4} alt="Cornell University" />
          <img src={logoDetails5} alt="Duke University" />
          <img src={logoDetails6} alt="Northwestern University" />
          <img src={logoDetails7} alt="Columbia University" />
        </div>
      </div>
    </section>
  );
}

export default EventsHost;
