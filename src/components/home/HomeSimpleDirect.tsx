import "./HomeSimpleDirect.css";

function HomeSimpleDirect() {
  return (
    <section className="home-simple">
      <h2>Simple and Direct</h2>
      <p>
        Skip the middleman and connect directly with a consultant of your choice
      </p>
      <div className="container-home-app">
        <div className="home-simple-our-app appr">
          <h4>Our approach</h4>
          <div className="home-simple-flow">
            <i className="bi bi-person-fill first-person-app"></i>
            <h5>You</h5>

            <i className="bi bi-arrow-right arrow"></i>

            <i className="bi bi-person-check-fill pref-person-app"></i>
            <h5>Preferred consultant</h5>
          </div>
          <p>
            Connect directly with the perfect mentor for your needs, with no
            corporate overhead or middlemen.
          </p>
        </div>
        <div className="home-simple-trad-app appr">
          <h4>Traditional approach</h4>
          <div className="home-simple-flow">
            <i className="bi bi-person-fill first-person-app"></i>
            <h5>You</h5>

            <i className="bi bi-arrow-right arrow"></i>

            <i className="bi bi-building-fill building-app"></i>
            <h5>Company</h5>

            <i className="bi bi-arrow-right arrow"></i>

            <i className="bi bi-person-fill ran-person-app"></i>
            <h5>Random consultant</h5>
          </div>
          <p>
            Traditional companies take up to 80% commission, leading to higher
            costs and less qualified mentors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeSimpleDirect;
