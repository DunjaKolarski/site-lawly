import "./HomePreLaw.css";
import preLaw from "../../assets/pre-law.png";

function HomePreLaw() {
  return (
    <section className="home-pre-law">
      <div className="container-home">
        <div className="home-pre-law-content">
          <div className="home-pre-law-title">
            <h4>Not applying yet? That's the perfect time to start!</h4>
            <h2>Pre-Law Consulting</h2>
          </div>
          <div className="home-pre-law-paragraphs">
            <p>
              Meet with a Consultant to get a roadmap tailored to your law
              school goals.
            </p>
            <p>
              Ask questions. Get expert insight. Walk away with a clear next
              step.
            </p>
          </div>
          <div className="home-pre-law-topics">
            <h5>Common topics we help with:</h5>
            <p>- Should I go to law school?</p>
            <p>- Choosing pre-law courses and majors</p>
            <p>- Building a strong law-school-ready resume</p>
            <p>- Planning LSAT prep</p>
            <p>- Gap year jobs and internships</p>
            <p>- Understanding joint programs (JD-MBA, JD-PhD, etc.)</p>
          </div>

          <button className="primary-button">Learn more</button>
        </div>
        <div className="home-pre-law-image">
          <img src={preLaw} alt="Pre-law student" />
        </div>
      </div>
    </section>
  );
}

export default HomePreLaw;
