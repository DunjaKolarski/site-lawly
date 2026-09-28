import "./MatchQuizPreparing.css";
import leftProfile from "../../assets/profile1.png";
import centerProfile from "../../assets/profile2.png";
import rightProfile from "../../assets/profile4.png";

function MatchQuizPreparing() {
  return (
    <div className="match-quiz-preparing" role="status">
      <h2>Preparing your matches</h2>
      <div className="match-quiz-preparing-images" aria-hidden="true">
        <img className="match-quiz-preparing-left" src={leftProfile} alt="" />
        <img
          className="match-quiz-preparing-center"
          src={centerProfile}
          alt=""
        />
        <img className="match-quiz-preparing-right" src={rightProfile} alt="" />
      </div>
    </div>
  );
}

export default MatchQuizPreparing;
