import "./MatchQuizReady.css";
import { Link } from "react-router-dom";

function MatchQuizReady() {
  return (
    <div className="match-quiz-ready">
      <h2>All set! Ready to meet them?</h2>
      <Link to="/find-consultant" className="primary-button">
        View my matches
      </Link>
    </div>
  );
}

export default MatchQuizReady;
