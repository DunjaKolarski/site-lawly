import "./AdvisorsHero.css";
import advisorsPicture from "../../assets/advisors-picture.png";

function AdvisorsHero() {
  return (
    <section className="advisors-hero">
      <div className="advisors-hero-container">
        <div className="advisors-hero-content">
          <h1>Find the right consultant for you.</h1>
          <p>We'll match you with a top-fit consultant right now.</p>
          <button type="button" className="primary-button">
            Take the 30-second quiz
          </button>
          <button type="button" className="advisors-hero-browse">
            Browse consultants on my own
          </button>
        </div>
        <div className="advisors-hero-image">
          <img
            src={advisorsPicture}
            alt="Consultant waving during a video call"
          />
        </div>
      </div>
    </section>
  );
}

export default AdvisorsHero;
