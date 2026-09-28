import "./MatchQuizPractices.css";

const practices = [
  "Public Interest",
  "Corporate Law",
  "Litigation",
  "Criminal Law",
  "Intellectual Privacy Law",
  "International Law",
  "Environmental Law",
];

type MatchQuizPracticesProps = {
  selectedPractices: string[];
  onPracticesChange: (practices: string[]) => void;
};

function MatchQuizPractices({
  selectedPractices,
  onPracticesChange,
}: MatchQuizPracticesProps) {
  function togglePractice(practice: string) {
    if (selectedPractices.includes(practice)) {
      onPracticesChange(selectedPractices.filter((item) => item !== practice));
      return;
    }

    if (selectedPractices.length < 3) {
      onPracticesChange([...selectedPractices, practice]);
    }
  }

  return (
    <div className="match-quiz-practices">
      <p>
        Which practices are you interested in? <span>Select up to 3.</span>
      </p>
      <div className="match-quiz-practices-options">
        {practices.map((practice) => {
          const isSelected = selectedPractices.includes(practice);

          return (
            <button
              key={practice}
              type="button"
              className={isSelected ? "match-quiz-practices-selected" : ""}
              aria-pressed={isSelected}
              disabled={!isSelected && selectedPractices.length >= 3}
              onClick={() => togglePractice(practice)}
            >
              {practice}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MatchQuizPractices;
