import "./HomeHowItWorks.css";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import restart from "../../assets/home-restart.png";
import profile1 from "../../assets/profile1.png";
import profile1Logo from "../../assets/profile1-logo.png";
import profile2 from "../../assets/profile2.png";
import profile2Logo from "../../assets/profile2-logo.png";
import profile3 from "../../assets/profile3.png";
import profile3Logo from "../../assets/profile3-logo.png";
import profile4 from "../../assets/profile4.png";
import profile4Logo from "../../assets/profile4-logo.png";
import profile5 from "../../assets/profile5.png";
import profile5Logo from "../../assets/profile5-logo.png";
import profile6 from "../../assets/profile6.png";
import profile6Logo from "../../assets/profile6-logo.png";
import profile7 from "../../assets/profile7.png";
import profile7Logo from "../../assets/profile7-logo.png";
import profile8 from "../../assets/profile8.png";
import profile8Logo from "../../assets/profile8-logo.png";

function HomeHowItWorks() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [imagesEmblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: false,
  });

  return (
    <section className="home-how-does-it-work">
      <h2>How Does it Work?</h2>
      <div className="home-how-work-arr">
        <div className="arr-section">
          <div>1</div>
          <p>
            <span className="desktop-step-text">Find a Coach</span>
            <span className="mobile-step-text">Match with a Coach</span>
          </p>
        </div>
        <div className="home-step-arrow">
          <i className="bi bi-arrow-right"></i>
        </div>
        <div className="arr-section">
          <div>2</div>
          <p>Book Your Session</p>
        </div>
        <div className="home-step-arrow">
          <i className="bi bi-arrow-right"></i>
        </div>
        <div className="arr-section">
          <div>3</div>
          <p>Get Personalized Application Strategy</p>
        </div>
      </div>
      <img src={restart} alt="Restart image" />
      <p className="home-refund">
        <span>Full refund</span> if you're not satisfied with your first session
      </p>
      <div
        className="home-how-work-images-viewport"
        ref={isMobile ? imagesEmblaRef : undefined}
      >
        <div className="home-how-work-all-images">
          <div className="home-how-work-images">
            <img
              src={profile1}
              alt="1 profile image"
              className="home-how-work-images-first"
            />
            <img
              src={profile1Logo}
              alt="1 profile uni logo image"
              className="home-how-work-images-second"
            />
          </div>
          <div className="home-how-work-images">
            <img
              src={profile2}
              alt="2 profile image"
              className="home-how-work-images-first"
            />
            <img
              src={profile2Logo}
              alt="2 profile uni logo image"
              className="home-how-work-images-second"
            />
          </div>
          <div className="home-how-work-images">
            <img
              src={profile3}
              alt="3 profile image"
              className="home-how-work-images-first"
            />
            <img
              src={profile3Logo}
              alt="3 profile uni logo image"
              className="home-how-work-images-second"
            />
          </div>
          <div className="home-how-work-images">
            <img
              src={profile4}
              alt="4 profile image"
              className="home-how-work-images-first"
            />
            <img
              src={profile4Logo}
              alt="4 profile uni logo image"
              className="home-how-work-images-second"
            />
          </div>
          <div className="home-how-work-images">
            <img
              src={profile5}
              alt="5 profile image"
              className="home-how-work-images-first"
            />
            <img
              src={profile5Logo}
              alt="5 profile uni logo image"
              className="home-how-work-images-second"
            />
          </div>
          <div className="home-how-work-images">
            <img
              src={profile6}
              alt="6 profile image"
              className="home-how-work-images-first"
            />
            <img
              src={profile6Logo}
              alt="6 profile uni logo image"
              className="home-how-work-images-second"
            />
          </div>
          <div className="home-how-work-images">
            <img
              src={profile7}
              alt="7 profile image"
              className="home-how-work-images-first"
            />
            <img
              src={profile7Logo}
              alt="7 profile uni logo image"
              className="home-how-work-images-second"
            />
          </div>
          <div className="home-how-work-images">
            <img
              src={profile8}
              alt="8 profile image"
              className="home-how-work-images-first"
            />
            <img
              src={profile8Logo}
              alt="8 profile uni logo image"
              className="home-how-work-images-second"
            />
          </div>
        </div>
      </div>
      <button className="primary-button">Browse Consultants</button>
    </section>
  );
}

export default HomeHowItWorks;
