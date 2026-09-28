import "./MatchQuizBackground.css";

const backgrounds = [
  "URM",
  "Ethnically Diverse (non-URM)",
  "LLM",
  "Non-U.S. JD Applicant",
  "First-Generation Student",
  "Military",
  "LGBTQ+",
  "Low Income",
  "Prior Career",
  "Rural or Underrepresented Area",
  "Disability",
  "Overcoming Adversity",
  "Religion",
];

type MatchQuizBackgroundProps = {
  selectedBackgrounds: string[];
  onBackgroundsChange: (backgrounds: string[]) => void;
};

function MatchQuizBackground({
  selectedBackgrounds,
  onBackgroundsChange,
}: MatchQuizBackgroundProps) {
  function toggleBackground(background: string) {
    if (selectedBackgrounds.includes(background)) {
      onBackgroundsChange(
        selectedBackgrounds.filter((item) => item !== background),
      );
      return;
    }

    if (selectedBackgrounds.length < 4) {
      onBackgroundsChange([...selectedBackgrounds, background]);
    }
  }

  return (
    <div className="match-quiz-background">
      <p>
        Do you identify with a particular background?{" "}
        <span>Select up to 4.</span>
      </p>
      <div className="match-quiz-background-options">
        {backgrounds.map((background) => {
          const isSelected = selectedBackgrounds.includes(background);

          return (
            <button
              key={background}
              type="button"
              className={isSelected ? "match-quiz-background-selected" : ""}
              aria-pressed={isSelected}
              disabled={!isSelected && selectedBackgrounds.length >= 4}
              onClick={() => toggleBackground(background)}
            >
              {background}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MatchQuizBackground;
