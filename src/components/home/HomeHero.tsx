import "./HomeHero.css";
import heroImage from "../../assets/home-hero-video.png";

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container-home">
        <div className="home-hero-content">
          <h3>Created by law students for future law students</h3>
          <h1>ADMISSIONS SUPPORT FROM T14 INSIDERS</h1>
          <p>
            Work with T14 admits, seasoned consultants, and former admissions
            officers. Your future starts here - make every detail count.
          </p>
          <button>Match me with a consultant</button>
        </div>
        <div className="home-hero-image">
          <img src={heroImage} alt="Students working together" />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
