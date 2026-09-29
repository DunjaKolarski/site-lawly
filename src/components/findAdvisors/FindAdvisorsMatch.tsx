import "./FindAdvisorsMatch.css";
import { Link } from "react-router-dom";

function FindAdvisorsMatch() {
  return (
    <section className="find-advisors-match">
      <p>Not sure who to choose? Let us match you with a 30 second quiz!</p>
      <Link to="/match-quiz" className="primary-button">
        Match me
      </Link>
    </section>
  );
}

export default FindAdvisorsMatch;
