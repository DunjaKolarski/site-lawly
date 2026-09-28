import "./MatchQuiz.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import MatchQuizSchools from "../components/matchQuiz/MatchQuizSchools";
import MatchQuizBackground from "../components/matchQuiz/MatchQuizBackground";
import MatchQuizPractices from "../components/matchQuiz/MatchQuizPractices";
import MatchQuizExperience from "../components/matchQuiz/MatchQuizExperience";
import MatchQuizServices from "../components/matchQuiz/MatchQuizServices";
import MatchQuizBudget from "../components/matchQuiz/MatchQuizBudget";
import MatchQuizPreparing from "../components/matchQuiz/MatchQuizPreparing";
import MatchQuizReady from "../components/matchQuiz/MatchQuizReady";

function MatchQuiz() {
  const [step, setStep] = useState(1);
  const [selectedSchools, setSelectedSchools] = useState<string[]>([
    "Stanford School of Law",
    "UVA Law",
    "Columbia Law",
  ]);
  const [selectedBackgrounds, setSelectedBackgrounds] = useState<string[]>([]);
  const [selectedPractices, setSelectedPractices] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [minBudget, setMinBudget] = useState(65);
  const [maxBudget, setMaxBudget] = useState(150);

  useEffect(() => {
    if (step !== 7) {
      return;
    }

    const timer = window.setTimeout(() => {
      setStep(8);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [step]);

  return (
    <>
      <Header />
      <main className="match-quiz">
        <div
          className={`match-quiz-panel${step === 2 || step === 5 ? " match-quiz-panel-long" : ""}${step === 8 ? " match-quiz-panel-ready" : ""}`}
        >
          {step === 7 ? (
            <MatchQuizPreparing />
          ) : step === 8 ? (
            <MatchQuizReady />
          ) : (
            <>
              <div className="match-quiz-heading">
                <h2>
                  Great! Let's get started matching you
                  <br />
                  with a consultant.
                </h2>
                <div
                  className="match-quiz-progress"
                  aria-label={`Step ${step} of 6`}
                >
                  {[1, 2, 3, 4, 5, 6].map((number) => (
                    <span
                      key={number}
                      className={
                        number <= step ? "match-quiz-progress-active" : ""
                      }
                    ></span>
                  ))}
                </div>
              </div>

              <div className="match-quiz-content">
                {step === 1 && (
                  <MatchQuizSchools
                    selectedSchools={selectedSchools}
                    onSchoolsChange={setSelectedSchools}
                  />
                )}
                {step === 2 && (
                  <MatchQuizBackground
                    selectedBackgrounds={selectedBackgrounds}
                    onBackgroundsChange={setSelectedBackgrounds}
                  />
                )}
                {step === 3 && (
                  <MatchQuizPractices
                    selectedPractices={selectedPractices}
                    onPracticesChange={setSelectedPractices}
                  />
                )}
                {step === 4 && (
                  <MatchQuizExperience
                    selectedExperience={selectedExperience}
                    onExperienceChange={setSelectedExperience}
                  />
                )}
                {step === 5 && (
                  <MatchQuizServices
                    selectedServices={selectedServices}
                    onServicesChange={setSelectedServices}
                  />
                )}
                {step === 6 && (
                  <MatchQuizBudget
                    minBudget={minBudget}
                    maxBudget={maxBudget}
                    onMinChange={setMinBudget}
                    onMaxChange={setMaxBudget}
                  />
                )}
              </div>

              <div className="match-quiz-actions">
                {step === 1 ? (
                  <Link to="/advisors" className="match-quiz-back">
                    Back
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="match-quiz-back"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default MatchQuiz;
