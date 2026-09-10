import "./BecomeConsultantFeatures.css";
import useEmblaCarousel from "embla-carousel-react";
import automatedReminders from "../../assets/automated-reminders.png";
import customizedOfferings from "../../assets/customized-offerings.png";
import automaticPayouts from "../../assets/automatic-payouts.png";
import freeMarketing from "../../assets/free-marketing.png";
import easyScheduling from "../../assets/easy-scheduling.png";
import reviews from "../../assets/reviews.png";

function BecomeConsultantFeatures() {
  const [emblaRef] = useEmblaCarousel({
    active: false,
    align: "start",
    dragFree: true,
    breakpoints: {
      "(max-width: 767px)": {
        active: true,
      },
    },
  });
  return (
    <section className="become-consultant-features">
      <h2>Features that make your life easier</h2>
      <div className="become-consultant-features-scroll" ref={emblaRef}>
        <div className="become-consultant-features-container">
          <div className="become-consultant-feature">
            <img src={automatedReminders} alt="Automated calendar reminder" />
            <h4>Automated reminders</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="become-consultant-feature">
            <img src={customizedOfferings} alt="Custom session offering" />
            <h4>Customized offerings</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="become-consultant-feature">
            <img src={automaticPayouts} alt="Automatic payment notification" />
            <h4>Automatic payouts</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="become-consultant-feature">
            <img src={freeMarketing} alt="Featured consultant profiles" />
            <h4>Free Marketing</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="become-consultant-feature">
            <img src={easyScheduling} alt="Consultant availability schedule" />
            <h4>Easy Scheduling</h4>
            <p>mention automated reminders in the subtext</p>
          </div>
          <div className="become-consultant-feature">
            <img src={reviews} alt="Student review of a consultant" />
            <h4>Reviews</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecomeConsultantFeatures;
