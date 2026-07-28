import "./HomeStrategySession.css";
import homeBookPicture from "../../assets/home-book-picture.png";

function HomeStrategySession() {
  return (
    <section className="home-strategy-session">
      <div className="container-home">
        <div className="home-strategy-session-content">
          <h4>Not sure where to start?</h4>
          <h2>Book a 15-Minute Strategy Session</h2>
          <p>
            Meet with [Consultant Namme] to get personalized feedback and a
            roadmap tailored to your law school goals. Ask questions. Get
            expertt insight. Walk away with clear next step.
          </p>
          <h5>Ideal for:</h5>
          <ul>
            <li>Deciding which schools to target</li>
            <li>Quick questions about LSAT, timing, or addenda</li>
            <li>Assessing your strengths and gaps</li>
            <li>Getting know the coach before booking a full package</li>
          </ul>
          <button className="primary-button">
            See consultants available today
          </button>
        </div>
        <div className="home-strategy-session-image">
          <img src={homeBookPicture} alt="home book image" />
        </div>
      </div>
    </section>
  );
}

export default HomeStrategySession;
