import "./HomeBecomeConsultant.css";
import becomeConsultant from "../../assets/become-consultant.png";

function HomeBecomeConsultant() {
  return (
    <section className="home-become-consultant">
      <div className="container-home">
        <div className="home-become-consultant-image">
          <img src={becomeConsultant} alt="Consultant" />
        </div>
        <div className="home-become-consultant-content">
          <h2>Become a Consultant</h2>
          <div className="home-consultant-paragraphs">
            <p>Earn money sharing your expert knowledge with applicants.</p>
            <p>Sign up to start consulting online with Lawly.</p>
          </div>
          <div className="home-consultant-about">
            <div className="home-consultant-about-item">
              <i className="bi bi-currency-dollar"></i>
              <p>Set your pricing</p>
            </div>
            <div className="home-consultant-about-item">
              <i className="bi bi-clock"></i>
              <p>Customize your availability</p>
            </div>
            <div className="home-consultant-about-item">
              <i className="bi bi-check-lg"></i>
              <p>Help others achieve their dreams</p>
            </div>
          </div>
          <button className="primary-button">Learn more</button>
        </div>
      </div>
    </section>
  );
}

export default HomeBecomeConsultant;
