import "./BecomeConsultantBeYourOwnBoss.css";
import earnMore from "../../assets/earn-more.png";
import beYourOwnBoss from "../../assets/be-your-own-boss.png";
import inspireStudents from "../../assets/inspire-students.png";

function BecomeConsultantBeYourOwnBoss() {
  return (
    <section className="be-your-own-boss">
      <h2>Be your own boss and inspire others</h2>
      <div className="be-your-own-boss-container">
        <div className="be-your-own-boss-item">
          <div className="be-your-own-boss-image">
            <img src={earnMore} alt="Earnings overview" />
          </div>
          <h4>Earn more</h4>
          <p>
            Most companies pocket 75% and leave you with only 25%. On Lawly you
            keep 75%. And you keep even more as you work with more clients.
          </p>
        </div>
        <div className="be-your-own-boss-item">
          <div className="be-your-own-boss-image">
            <img src={beYourOwnBoss} alt="Weekly availability schedule" />
          </div>
          <h4>Be your own boss</h4>
          <p>
            On Lawly, you can be your own boss. You aren't assigned clients and
            given deadlines. You decide which clients to work with, and set your
            own availability and meeting times.
          </p>
        </div>
        <div className="be-your-own-boss-item">
          <div className="be-your-own-boss-image">
            <img
              src={inspireStudents}
              alt="Consultant helping a student online"
            />
          </div>
          <h4>Inspire students</h4>
          <p>
            We bring clients to the platform, take care of payments, and make
            scheduling a breeze so you can focus on helping students reach their
            full potential.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BecomeConsultantBeYourOwnBoss;
