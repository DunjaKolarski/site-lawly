import "./MatchQuizExperience.css";

const experienceOptions = ["0-1", "1-3", "3-6", "6-9", "9-15", "15-25"];

type MatchQuizExperienceProps = {
  selectedExperience: string;
  onExperienceChange: (experience: string) => void;
};

function MatchQuizExperience({
  selectedExperience,
  onExperienceChange,
}: MatchQuizExperienceProps) {
  return (
    <div className="match-quiz-experience">
      <p>
        How many years of post-college work experience will you have when you
        submit your application?
      </p>
      <div className="match-quiz-experience-options">
        {experienceOptions.map((experience) => (
          <button
            key={experience}
            type="button"
            className={
              selectedExperience === experience
                ? "match-quiz-experience-selected"
                : ""
            }
            aria-pressed={selectedExperience === experience}
            onClick={() => onExperienceChange(experience)}
          >
            {experience}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MatchQuizExperience;
